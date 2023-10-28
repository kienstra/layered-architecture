import CheckboxRepository from '../Checkbox/CheckboxRepository';
import CheckboxPresenter from '../Checkbox/CheckboxPresenter'
import HttpGateway from '../Checkbox/HttpGateway';
import FakeHttpGateway from '../Common/FakeHttpGateway';

export function getRoot() {
  const httpGateway = new FakeHttpGateway();

  return {
    httpGateway,
    checkboxPresenter: new CheckboxPresenter(
      new CheckboxRepository(
        httpGateway
      ),
    ),
  };
}