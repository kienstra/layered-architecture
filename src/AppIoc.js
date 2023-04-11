import BaseIOC from './BaseIoc'
import Types from './Common/Types'
import HttpGateway from './Checkbox/HttpGateway'

const container = new BaseIOC().buildBaseTemplate()

// Bind a depenency injection dependency that's only used in the app, so we use another one for tests.
container.bind(Types.IDataGateway).to(HttpGateway).inSingletonScope()

export default container
