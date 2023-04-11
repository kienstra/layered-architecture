import { decorate, injectable } from 'inversify'

/** Stub class for tests. */
class FakeHttpGateway {
  get = async () => {}

  post = async () => {}

  delete = async () => {}
}

decorate(injectable(), FakeHttpGateway)
export default FakeHttpGateway
