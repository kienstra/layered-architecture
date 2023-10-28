import React from 'react'
import { observer } from 'mobx-react'
import { useInjection } from '../Common/Providers/Injection'
import CheckboxPresenter from './CheckboxPresenter'

export default observer(() => {
  const { checkboxPresenter } = useInjection({ checkboxPresenter: CheckboxPresenter })

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
