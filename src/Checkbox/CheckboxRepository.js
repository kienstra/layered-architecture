import { inject, injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'
import Types from '../Common/Types'

@injectable()
class CheckboxRepository {
  // Dependency injection: inject HttpGateway as the property httpGateway.
  // Allows injecting FakeHttpGateway to stub tests.
  @inject(Types.IDataGateway)
  httpGateway

  isChecked = false

  constructor() {
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
