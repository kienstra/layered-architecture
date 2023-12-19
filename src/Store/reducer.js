import HttpGateway from '../Checkbox/HttpGateway';

function makeSetIsChecked(httpGateway) {
  return (state, action) => {
    if (action.type !== 'SET_IS_CHECKED') {
      return state;
    }

    if (action.payload === true) {
      httpGateway.post('is-checked', {
        checked: action.payload
      });
    }

    return {
      isChecked: action.payload,
      wasChecked: ! action.payload ? true : state?.wasChecked,
    };
  }
}

export function makeReducers(httpGateway) {
  return (state, action) => {
    return [
      makeSetIsChecked(httpGateway)
    ].reduce(
      (s, red) => {
        return red(s, action);
      },
      state
    );
  }
}

export const reducer = makeReducers(new HttpGateway());
