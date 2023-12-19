import { initialState } from './Store/initial';
import { makeReducers } from './Store/reducer';
import { describe, expect, it, vi } from 'vitest';
import StubHttpGateway from './Checkbox/StubHttpGateway';
import { checkedAndUnchecked } from './Store/selector';

describe('Checkbox App', () => {
  it('is initially unchecked', async () => {
    expect(
      {isChecked: false},
      makeReducers(new StubHttpGateway())(initialState, {})
    );
  });

  it('makes an external request when checked', () => {
    const httpGateway = new StubHttpGateway();
    httpGateway.post = vi.fn().mockImplementation(() => {
      return Promise.resolve({});
    });

    expect(
      {isChecked: true},
      makeReducers(httpGateway)(initialState, {type: 'SET_IS_CHECKED', payload: true})
    );
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
      {isChecked: true},
      makeReducers(httpGateway)(initialState, {type: 'SET_IS_CHECKED', payload: false})
    );
    expect(httpGateway.post).not.toHaveBeenCalledWith('is-checked', {
      checked: false,
    });
  })

  it('derived state: checked and unchecked', () => {
    expect(
      checkedAndUnchecked(
        makeReducers(new StubHttpGateway())(initialState, {type: 'SET_IS_CHECKED', payload: false})
      )
    );
  })
})
