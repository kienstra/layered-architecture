import 'reflect-metadata';
import Types from '../Common/Types'
import BaseIOC from '../BaseIoc'
import FakeHttpGateway from '../Common/FakeHttpGateway'
import CheckboxPresenter from '../Checkbox/CheckboxPresenter'

export class AppTestHarness {
  container
  dataGateway
  checkboxPresenter

  init() {
    this.container = new BaseIOC().buildBaseTemplate()

    // Via dependency injection, bind the test stub FakeHttpGateway, which is a wrapper from fetch() calls.
    // Then, we can assert that the stub was called, instead of there being an error from an unresolved fetch() call.
    this.container.bind(Types.IDataGateway).to(FakeHttpGateway).inSingletonScope()

    this.dataGateway = this.container.get(Types.IDataGateway)
    this.checkboxPresenter = this.container.get(CheckboxPresenter)
  }
}
