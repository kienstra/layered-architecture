import React, { useContext } from 'react'
import { AppContext } from '../App';

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
    </>
  )
}
