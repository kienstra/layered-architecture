import CheckboxRepository from './Checkbox/CheckboxRepository'
import CheckboxPresenter from './Checkbox/CheckboxPresenter'
import HttpGateway from './Checkbox/HttpGateway';

export function getRoot() {
  return {
    checkboxPresenter: new CheckboxPresenter(
      new CheckboxRepository(
        new HttpGateway()
      ),
    ),
  };
}
