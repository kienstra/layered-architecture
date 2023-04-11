import { inject, injectable } from 'inversify'
import { makeAutoObservable } from 'mobx'
import CheckboxRepository from './CheckboxRepository'

@injectable()
class CheckboxPresenter {

  @inject(CheckboxRepository)
  checkboxRepository

  viewModel = null

  constructor() {
    makeAutoObservable(this)
  }

  get isChecked() {
    return this.checkboxRepository.isChecked
  }

  setIsChecked(newIsChecked) {
    this.checkboxRepository.setIsChecked(!!newIsChecked)
  }
}

export default CheckboxPresenter
