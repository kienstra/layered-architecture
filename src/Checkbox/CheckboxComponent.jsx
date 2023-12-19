import React, { useContext } from 'react'
import { AppContext } from '../App';
import { checkedAndUnchecked, neverChecked } from '../Store/selector';

export default function CheckboxComponent() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <label htmlFor="example-checkbox">Check and uncheck this</label>
      <input
        type="checkbox"
        id="example-checkbox"
        name="foo"
        onChange={(event) => {
          dispatch(
            {type: 'SET_IS_CHECKED', payload: event.target.checked}
          );
        }}
        checked={state.isChecked}
      />
      { checkedAndUnchecked(state)
        ? <p>This was checked and then unchecked</p>
        : null
      }
      { neverChecked(state)
        ? <p>This was never checked</p>
        : null
      }
    </>
  )
}
