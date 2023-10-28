import { makeAutoObservable } from 'mobx'

export default class CheckboxPresenter {
  viewModel = null

  constructor(checkboxRepository) {
    this.checkboxRepository = checkboxRepository;
    makeAutoObservable(this)
  }

  get isChecked() {
    return this.checkboxRepository.isChecked
  }

  setIsChecked(newIsChecked) {
    this.checkboxRepository.setIsChecked(!!newIsChecked)
  }
}
