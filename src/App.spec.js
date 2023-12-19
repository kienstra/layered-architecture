import initialState from './Store/initialState';
import { makeReducers } from './Store/reducer';
import { describe, expect, it, vi } from 'vitest';
import StubHttpGateway from './Checkbox/StubHttpGateway';
import { checkedAndUnchecked, neverChecked } from './Store/selector';
import HttpGateway from './Checkbox/HttpGateway';

describe('Checkbox App', () => {
  it('is initially unchecked', async () => {
    expect(
      makeReducers(new StubHttpGateway())(
        initialState,
        {}
      ).isChecked
    ).toEqual( false );
  });

  it('makes an external request when checked', () => {
    const httpGateway = new StubHttpGateway();
    httpGateway.post = vi.fn().mockImplementation(() => {
      return Promise.resolve({});
    });

    expect(
      makeReducers(httpGateway)(
        initialState,
        {type: 'SET_IS_CHECKED', payload: true}
      ).isChecked
    ).toEqual(true);

    expect(httpGateway.post).toHaveBeenCalledWith('is-checked', {
      checked: true,
    });
  })

  it('does not make an external request when unchecked', () => {
    const httpGateway = new StubHttpGateway();
    httpGateway.post = vi.fn().mockImplementation(() => {
      return Promise.resolve({});
    });

    expect(
      makeReducers(httpGateway)(
        initialState,
        {type: 'SET_IS_CHECKED', payload: false}
      ).isChecked
    ).toEqual(false);

    expect(httpGateway.post).not.toHaveBeenCalledWith('is-checked', {
      checked: false,
    });
  })

  it('derived state: checked and unchecked', () => {
    expect(
      checkedAndUnchecked(
        makeReducers(new StubHttpGateway())(initialState, {type: 'SET_IS_CHECKED', payload: false})
      )
    ).toEqual(true);
  })

  it('derived state: was never checked', () => {
    expect(
      neverChecked(
        initialState
      )
    ).toEqual(true);

    expect(
      neverChecked(
        makeReducers(new HttpGateway())(initialState, {type: 'SET_IS_CHECKED', payload: true})
      )
    ).toEqual(false);
  })
})
