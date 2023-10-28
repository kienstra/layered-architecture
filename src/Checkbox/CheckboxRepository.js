import { makeAutoObservable } from 'mobx'

export default class CheckboxRepository {
  isChecked = false

  constructor(httpGateway) {
    this.httpGateway = httpGateway;
    makeAutoObservable(this)
  }

  setIsChecked(newIsChecked) {
    this.isChecked = newIsChecked
    this.httpGateway.post('is-checked', {
      checked: newIsChecked
    })
  }
}
