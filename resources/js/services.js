import userServices from './services/userServices'
import rolServices from './services/rolServices.js'
import permisosServices from './services/permisosServices.js'
import empresaServices from './services/empresaServices.js'
import magnitudesServices from './services/magnitudesServices.js'
import acreditacionesServices from './services/acreditacionesServices.js'
export default {
    userServices: new userServices(),
    rolServices: new rolServices(),
    permisosServices: new permisosServices(),
    empresaServices: new empresaServices(),
    magnitudesServices: new magnitudesServices(),
    acreditacionesServices: new acreditacionesServices()
}