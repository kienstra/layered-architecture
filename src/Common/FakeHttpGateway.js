import { decorate, injectable } from 'inversify'

/** Stub class for tests. */
@injectable()
class FakeHttpGateway {
  get = async () => {}

  post = async () => {}

  delete = async () => {}
}

export default FakeHttpGateway
