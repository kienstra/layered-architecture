import { makeAutoObservable } from 'mobx'

class CheckboxRepository {
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

export default CheckboxRepository
