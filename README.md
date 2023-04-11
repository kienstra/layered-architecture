# Model-view-presenter UI Architecture Demo

Minimal demo of a [model-view-presenter](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter) architecture that's easy to test, as an alternative to React hooks.

`src/Checkbox/` has the files of this architecture:

1. Gateway: This outermost layer interacts with the browser API or external services, like a REST API.
2. Repository: Stores the main application data, and makes calls to the Gateway.
3. Presenter: Often converts the repository data into flatter data for the Component to consume. In this example, it simply passes through the data.
4. (React) Component: This innermost layer consumes the data from the Presenter, and sometimes calls Presenter functions to update the data.

This is extreme over-abstraction for a simple app like this.

The idea is to show how a 4-layer architecture can work. Here's a more [complete example](https://codesandbox.io/s/1-black-box-instantiation-start-forked-oyrvkm).

## Why so much abstraction? This looks like too much!

### 1. This makes an app much easier to test

This app doesn't show it, because this would also be easy to test with [React Testing Library](https://github.com/testing-library/react-testing-library).

But for a larger app, tests are:

1. Easier to write
2. Much more resilient to change

You only test the Presenters and Gateways, so the markup can change without breaking tests.

For example, if you tested clicking a 'Save' button, you could assert:

1. It made an HTTP request to save
2. It updated the UI with the new name
3. A success message appeared in a snackbar (by testing a `SnackbarPresenter` or `MessagePresenter`).

But if you tested the markup, like with React Testing Library, this could break:

1. When changing the text of the 'Save' button
2. If the 'Save' button moves, like to a new tab in the navigation
3. If the label of the `<input>` with the name changes

The result is either a lack of testing, or tests that fail too often to be useful.

### 2. This makes the app data very easy to find

If there's a bug with the data, there's a single source of truth to check:

`RepositoryPresenter.isChecked`

The Presenter gets that value from the repository, and the presenter can only use Repository methods to change its values.

So if there's an app data problem, it's probably in the Repository.

This Codesandbox doesn't illustrate that, because the data in the Repository and Presenter are basically the same.

But sometimes you'll need a computed version of the main app data.

For example, there can be `themes`, and `currentTheme`, which is the selected theme inside `themes`.

The Repository can compute the `currentTheme`, and expose it to the Presenter.

React hooks also have a single source of truth.

But I think it's easier to find if it's simply a property of a Repository, instead of a constant in a hook.

Where is the `isChecked` value?

Easy: `CheckboxRepository.isChecked`

## Why have a Repository? Do we really need 2 layers to store data?

Most of the time, we don't need a Repository. Just a Presenter.

For example, there can be a `NavigationPresenter` that keeps track of where you are in the navigation.

That doesn't need a Repository or Gateway. It simply stores the navigation state in its own properties.

But when it makes sense, a Repository can store the main application data.

For example, in FSE Studio, the Repository has a `themes` property, which has all of the FSE themes.

It then computes the `currentTheme` from that, so the presenter can use it.

The presenter doesn't need to know about `themes`.

But in this Codesandbox, a repository isn't needed.

It just shows the 4-layer architecture.

## Why have a Gateway? Why not just make the `fetch()` calls inside the Repository?

A Gateway is easy to stub in tests, like with `src/Common/FakeHttpGateway.js`.

But it's almost as easy to stub `fetch()` in each test file, without a Gateway:

```js
const fetchSpy = vi.fn()
global.fetch = fetchSpy

beforeEach(() => {
  fetchSpy.mockImplementation(() => {
```

## Why not React hooks?

I've used hooks for every React app I've written, and they're great for smaller apps.

But they break Separation of Concerns, by putting everything in the presentation layer (the components).

Hooks have to run in components, or they throw an error.

Though there are workarounds to test hooks, which I [can't make work](https://github.com/studiopress/fse-studio/pull/145).

It's also hard to see the flow of data.

Hooks mix in HTTP requests, storing data, and computing it.

Of course, this 4-layer architecture might be too abstract.

## Where is this from?

A [course](https://logicroom.co/) I took on UI Architecture.

But non-React apps also often use a multi-layer approach.
