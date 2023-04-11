import React from 'react'
import { observer } from 'mobx-react'
import { useInjection } from '../Common/Providers/Injection'
import CheckboxPresenter from './CheckboxPresenter'

/** observer() forces this React component to rerender when certain MobX observables change in CheckboxPresenter */
export default observer(() => {
  const { checkboxPresenter } = useInjection(CheckboxPresenter)

  return (
    <>
      <label htmlFor="example-checkbox">Check and uncheck this</label>
      <input
        type="checkbox"
        id="example-checkbox"
        name="foo"
        onChange={(event) => {
          checkboxPresenter.setIsChecked(event.target.checked)
        }}
        checked={checkboxPresenter.isChecked}
      />
    </>
  )
})
