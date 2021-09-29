import userServices from './services/userServices'
import rolServices from './services/rolServices.js'
import permisosServices from './services/permisosServices.js'
import empresaServices from './services/empresaServices.js'
import magnitudesServices from './services/magnitudesServices.js'
import acreditacionesServices from './services/acreditacionesServices.js'
import condicionDePagoServices from './services/condicionDePagoServices.js'
import metodoDePagoServices from './services/metodoDePagoServices.js'
import tiempoDeEntregaServices from './services/tiempoDeEntregaServices.js'
import ciudadEstadoPaisServices from './services/ciudadEstadoPaisServices.js'
import monedaServices from './services/monedaServices.js'
import empleadoServices from './services/empleadoServices.js'
import clienteServices from './services/clienteServices.js'
import instrumentoServices from './services/instrumentoServices.js'
import procedimientoServices from './services/procedimientoService.js'
import patronServices from './services/patronServices.js'
import cotizacionServices from './services/cotizacionesServices.js'
import partidaServices from './services/partidaServices.js'
import identificadorInformeServices from './services/IdenficadorInformeServices.js'
import reciboServices from './services/reciboServices.js'
import calibracionServices from './services/calibracionServices.js'
import facturaServices from './services/facturaServices.js'
import NotasDeSeguimientoServices from './services/NotaDeSeguimientoServices.js'
import unidadServices from './services/UnidadServices.js'
import claveSatServices from './services/claveSatServices.js'
import documentoServices from './services/documentoServices.js'
import cfdiServices from './services/cfdiServices.js'
import calidadServices from './services/calidadServices.js'

export default {
    userServices: new userServices(),
    rolServices: new rolServices(),
    permisosServices: new permisosServices(),
    empresaServices: new empresaServices(),
    magnitudesServices: new magnitudesServices(),
    acreditacionesServices: new acreditacionesServices(),
    condicionDePagoServices: new condicionDePagoServices(),
    metodoDePagoServices: new metodoDePagoServices(),
    tiempoDeEntregaServices: new tiempoDeEntregaServices(),
    ciudadEstadoPaisServices: new ciudadEstadoPaisServices(),
    monedaServices: new monedaServices(),
    empleadoServices: new empleadoServices(),
    clienteServices: new clienteServices(),
    instrumentoServices: new instrumentoServices(),
    procedimientoServices: new procedimientoServices(),
    patronServices: new patronServices(),
    cotizacionServices: new cotizacionServices(),
    partidaServices: new partidaServices(),
    identificadorInformeServices: new identificadorInformeServices(),
    reciboServices: new reciboServices(),
    calibracionServices: new calibracionServices(),
    facturaServices: new facturaServices(),
    NotdasDeSeguimientoServices: new NotasDeSeguimientoServices(),
    unidadServices: new unidadServices(),
    claveSatServices: new claveSatServices(),
    documentoServices: new documentoServices(),
    cfdiServices: new cfdiServices(),
    calidadServices: new calidadServices(),
}