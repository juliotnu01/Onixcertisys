import userServices from './services/userServices'
import rolServices from './services/rolServices.js'
import permisosServices from './services/permisosServices.js'
export default {
    userServices: new userServices(),
    rolServices: new rolServices(),
    permisosServices: new permisosServices()
}