import { Container } from 'inversify'
import CheckboxRepository from './Checkbox/CheckboxRepository'
import CheckboxPresenter from './Checkbox/CheckboxPresenter'

/** Main dependency injection class, for classes that are the same in production and unit tests. */
export default class BaseIOC {
  container

  constructor() {
    this.container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Transient'
    })
  }

  buildBaseTemplate() {
    this.container.bind(CheckboxRepository).to(CheckboxRepository).inSingletonScope()
    this.container.bind(CheckboxPresenter).to(CheckboxPresenter).inSingletonScope()

    return this.container
  }
}
