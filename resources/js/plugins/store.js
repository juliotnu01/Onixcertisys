import Vuex from "vuex";
import Vue from "vue";
import services from "../services.js";
import moment from "moment";
import momentTz from "moment-timezone";
import { findLastKey } from "lodash";
import router from  './routes'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        services,
        listUser: [],
        user: {},
        leer: 0,
        dialog_user_register: false,
        dialog_rol_register: false,
        dialog_asignar_rol: false,
        listRoles: [],
        rol_selected: {},
        user_selected_rol_premision: {},
        dialog_user_rol_permission: false,
        dialog_editar_usuario: false,
        dialog_editar_rol: false,
        edit_rol: {},
        empresa: {
            nombre_empresa: "",
            actividad_comercial: "",
            rfc: "",
            correo_electronico: "",
            telefono: "",
            iva: "",
            utilidad: "",
            direccion: "",
            ciudad: "",
            estado: "",
            codigo_postal: "",
            pais: ""
        },
        magnitudes: [],
        dialog_add_magnitudes: false,
        dialog_edit_magnitudes: false,
        magnitud_edit: {},
        dialog_add_acreditacion: false,
        acreditaciones: [],
        dialog_edit_acreditacion: false,
        acreditacion: {},
        listCondicionDePago: [],
        dialog_add_condicion_de_pago: false,
        edit_condicion_de_pago: {},
        dialog_edit_condicion_de_pago: false,
        list_metodo_de_pago: [],
        dialog_add_metodo_de_pago: false,
        dialog_edit_metodo_de_pago: false,
        metodo_de_pago: {},
        tiempos_de_entrega: [],
        dialog_tiempo_de_entrega: false,
        dialog_edit_tiempo_de_entrega: false,
        tiempo_de_entrega: {},
        ciudades_estados_paises: [],
        dialog_add_ciudad_estado_pais: false,
        ciudad_estado_pais: {},
        dialog_edit_ciudad_estad_pais: false,
        dialog_add_moneda: false,
        monedas: [],
        dialog_edit_moneda: false,
        moneda: {},
        empleados: [],
        dialog_add_empleado: false,
        dialog_edit_empleado: false,
        empleado: {},
        clientes: [],
        dialog_add_clientes: false,
        dialog_edit_cliente: false,
        cliente: {},
        instrumentos: [],
        dialog_add_instrumento: false,
        dialog_edit_instrumento: false,
        instrumento: {},
        procedimientos: [],
        dialog_add_procedimiento: false,
        procedimiento: {},
        dialog_edit_procedimiento: false,
        patrones: [],
        dialog_add_patron: false,
        dialog_edit_patron: false,
        patron: {},
        cotizaciones: [],
        dialog_add_cotizacion: false,
        dialog_edit_cotizacion: false,
        cotizacion: {},
        dialog_view_cotizacion: false,
        cotizacion_view: {},
        informe_id_db: null,
        recibos: [],
        dialog_asignar_tecnico: false,
        partida_tecnico: {},
        error_handle_login: false,
        dialog_view_pdf_cotizacion: false,
        cotizacion_print: false,
        dialog_cargar_partidas_masivamente: false,
        masivPartidas: [],
        dialog_pdf_recibos: false, 
        recibo_print: {},
        partidas: [],
        dialog_calibracion: false,
        partida: {},
        partidas_para_calibrar: [],
        recibos_cliente: [],
        dialog_add_factura: false,
        factura: {},
        dialog_pdf_factura: false, 
        ruta_pdf_factura: '',
        dialog_duplicate_cotizacion: false,
        cotizacion_para_duplicar: {},
        magnitudes_para_reporte: [],
        facturas: [],
        facturas_estadistica: [],
        cotizaciones_estadisticas: [],
        dialog_realizacion_calibracion: false,
        partida_para_calibrar:{},
        snackbar: {mensaje: '', status: false, color: ''},
        routes_vue: router.options.routes,
        dialog_nota_de_seguimiento: false,
        NotdasDeSeguimiento: [],
        unidades: [],
        dialog_add_unidad: false,
        unidad: {},
        dialog_edit_unidad: false,
        clavesSat: [],
        dialog_add_clave_sat: false, 
        claveSat: {},
        dialog_edit_clave_sat: false,
    },
    getters: {
        services: state => state.services,
        listUser: state => state.listUser,
        user: state => state.user,
        leer: state => state.leer,
        dialog_user_register: state => state.dialog_user_register,
        dialog_rol_register: state => state.dialog_rol_register,
        listRoles: state => state.listRoles,
        dialog_asignar_rol: state => state.dialog_asignar_rol,
        rol_selected: state => state.rol_selected,
        user_selected_rol_premision: state => state.user_selected_rol_premision,
        dialog_user_rol_permission: state => state.dialog_user_rol_permission,
        list_route: state => state.list_route,
        dialog_editar_usuario: state => state.dialog_editar_usuario,
        dialog_editar_rol: state => state.dialog_editar_rol,
        edit_rol: state => state.edit_rol,
        empresa: state => state.empresa,
        magnitudes: state => state.magnitudes,
        dialog_add_magnitudes: state => state.dialog_add_magnitudes,
        dialog_edit_magnitudes: state => state.dialog_edit_magnitudes,
        magnitud_edit: state => state.magnitud_edit,
        dialog_add_acreditacion: state => state.dialog_add_acreditacion,
        acreditaciones: state => state.acreditaciones,
        dialog_edit_acreditacion: state => state.dialog_edit_acreditacion,
        acreditacion: state => state.acreditacion,
        listCondicionDePago: state => state.listCondicionDePago,
        dialog_add_condicion_de_pago: state =>
            state.dialog_add_condicion_de_pago,
        edit_condicion_de_pago: state => state.edit_condicion_de_pago,
        dialog_edit_condicion_de_pago: state =>
            state.dialog_edit_condicion_de_pago,
        list_metodo_de_pago: state => state.list_metodo_de_pago,
        dialog_add_metodo_de_pago: state => state.dialog_add_metodo_de_pago,
        dialog_edit_metodo_de_pago: state => state.dialog_edit_metodo_de_pago,
        metodo_de_pago: state => state.metodo_de_pago,
        tiempos_de_entrega: state => state.tiempos_de_entrega,
        dialog_tiempo_de_entrega: state => state.dialog_tiempo_de_entrega,
        dialog_edit_tiempo_de_entrega: state =>
            state.dialog_edit_tiempo_de_entrega,
        tiempo_de_entrega: state => state.tiempo_de_entrega,
        ciudades_estados_paises: state => state.ciudades_estados_paises,
        dialog_add_ciudad_estado_pais: state =>
            state.dialog_add_ciudad_estado_pais,
        ciudad_estado_pais: state => state.ciudad_estado_pais,
        dialog_edit_ciudad_estad_pais: state =>
            state.dialog_edit_ciudad_estad_pais,
        dialog_add_moneda: state => state.dialog_add_moneda,
        monedas: state => state.monedas,
        dialog_edit_moneda: state => state.dialog_edit_moneda,
        moneda: state => state.moneda,
        empleados: state => state.empleados,
        dialog_add_empleados: state => state.dialog_add_empleado,
        dialog_edit_empleado: state => state.dialog_edit_empleado,
        empleado: state => state.empleado,
        clientes: state => state.clientes,
        dialog_add_clientes: state => state.dialog_add_clientes,
        dialog_edit_cliente: state => state.dialog_edit_cliente,
        cliente: state => state.cliente,
        instrumentos: state => state.instrumentos,
        dialog_add_instrumento: state => state.dialog_add_instrumento,
        dialog_edit_instrumento: state => state.dialog_edit_instrumento,
        instrumento: state => state.instrumento,
        procedimientos: state => state.procedimientos,
        dialog_add_procedimiento: state => state.dialog_add_procedimiento,
        procedimiento: state => state.procedimiento,
        dialog_edit_procedimiento: state => state.dialog_edit_procedimiento,
        patrones: state => state.patrones,
        dialog_add_patron: state => state.dialog_add_patron,
        dialog_edit_patron: state => state.dialog_edit_patron,
        patron: state => state.patron,
        cotizaciones: state => state.cotizaciones,
        dialog_add_cotizacion: state => state.dialog_add_cotizacion,
        dialog_edit_cotizacion: state => state.dialog_edit_cotizacion,
        cotizacion: state => state.cotizacion,
        dialog_view_cotizacion: state => state.dialog_view_cotizacion,
        cotizacion_view: state => state.cotizacion_view,
        informe_id_db: state => state.informe_id_db,
        recibos: state => state.recibos,
        dialog_asignar_tecnico: state => state.dialog_asignar_tecnico,
        partida_tecnico: state => state.partida_tecnico,
        error_handle_login: state => state.error_handle_login,
        dialog_view_pdf_cotizacion: state => state.dialog_view_pdf_cotizacion,
        cotizacion_print: state => state.cotizacion_print,
        dialog_cargar_partidas_masivamente: state => state.dialog_cargar_partidas_masivamente,
        masivPartidas: state => state.masivPartidas,
        dialog_pdf_recibos: state => state.dialog_pdf_recibos,
        recibo_print: state => state.recibo_print,
        partidas: state => state.partidas,
        dialog_calibracion: state => state.dialog_calibracion,
        partida: state => state.partida, 
        partidas_para_calibrar: state => state.partidas_para_calibrar,
        recibos_cliente: state => state.recibos_cliente,
        dialog_add_factura: state  => state.dialog_add_factura,
        factura: state => state.factura,
        dialog_pdf_factura: state => state.dialog_pdf_factura,
        ruta_pdf_factura: state => state.ruta_pdf_factura,
        dialog_duplicate_cotizacion: state => state.dialog_duplicate_cotizacion,
        cotizacion_para_duplicar: state => state.cotizacion_para_duplicar,
        magnitudes_para_reporte: state => state.magnitudes_para_reporte,
        facturas: state => state.facturas,
        facturas_estadistica: state =>  state.facturas_estadistica,
        cotizaciones_estadisticas: state => state.cotizaciones_estadisticas,
        dialog_realizacion_calibracion: state => state.dialog_realizacion_calibracion,
        partida_para_calibrar: state =>  state.partida_para_calibrar,
        snackbar: state => state.snackbar,
        routes_vue: state => state.routes_vue,
        dialog_nota_de_seguimiento: state => state.dialog_nota_de_seguimiento,
        NotdasDeSeguimiento: state => state.NotdasDeSeguimiento,
        unidades: state => state.unidades,
        dialog_add_unidad: state => state.dialog_add_unidad,
        unidad: state => state.unidad,
        dialog_edit_unidad: state => state.dialog_edit_unidad,
        clavesSat: state => state.clavesSat,
        dialog_add_clave_sat: state => state.dialog_add_clave_sat,
        claveSat: state => state.claveSat,
        dialog_edit_clave_sat: state => state.dialog_edit_clave_sat,
        
    },
    mutations: {
        setListUser(state, data) {
            state.listUser = data;
        },
        setUser(state, data) {
            state.user = data;
        },
        setLeer(state, data) {
            state.leer = data;
        },
        setUserRegisterModal(state, data) {
            state.dialog_user_register = data;
        },
        setRolRegisterModal(state, data) {
            state.dialog_rol_register = data;
        },
        setAsignarRolModal(state, data) {
            state.dialog_asignar_rol = data;
        },
        setRoles(state, data) {
            state.listRoles = data;
        },
        setRolSelected(state, data) {
            state.rol_selected = data;
        },
        setUserSelectedRolPermission(state, data) {
            state.user_selected_rol_premision = data;
        },
        setDialogUserRolPermission(state, data) {
            state.dialog_user_rol_permission = data;
        },
        setDialogEditarUsuario(state, data) {
            state.dialog_editar_usuario = data;
        },
        setDialogEditRol(state, data) {
            state.dialog_editar_rol = data;
        },
        setEditRol(state, data) {
            state.edit_rol = data;
        },
        setEmpresa(state, data) {
            if (data) {
                state.empresa = data;
            } else {
                state.empresa = {
                    nombre_empresa: "",
                    actividad_comercial: "",
                    rfc: "",
                    correo_electronico: "",
                    telefono: "",
                    iva: "",
                    utilidad: "",
                    direccion: "",
                    ciudad: "",
                    estado: "",
                    codigo_postal: "",
                    pais: ""
                };
            }
        },
        setMagnitudes(state, data) {
            state.magnitudes = data;
        },
        setDialogAddMagnitudes(state, data) {
            state.dialog_add_magnitudes = data;
        },
        setDialogEditMagnitudes(state, data) {
            state.dialog_edit_magnitudes = data;
        },
        setEditMagnitud(state, data) {
            state.magnitud_edit = data;
        },
        setdialogAddAcreditacion(state, data) {
            state.dialog_add_acreditacion = data;
        },
        setAcreditaciones(state, data) {
            state.acreditaciones = data;
        },
        setDialogEditAcreditacion(state, data) {
            state.dialog_edit_acreditacion = data;
        },
        setAcreditacion(state, data) {
            state.acreditacion = data;
        },
        setListCondicionDePago(state, data) {
            state.listCondicionDePago = data;
        },
        setDialogAddCondicionDePago(state, data) {
            state.dialog_add_condicion_de_pago = data;
        },
        setEditCondicionDePago(state, data) {
            state.edit_condicion_de_pago = data;
        },
        setDialogEditCondicionDePago(state, data) {
            state.dialog_edit_condicion_de_pago = data;
        },
        setListMetodoDePago(state, data) {
            state.list_metodo_de_pago = data;
        },
        setDialogAddMetodoDePago(state, data) {
            state.dialog_add_metodo_de_pago = data;
        },
        setDialogEditMetodoDePago(state, data) {
            state.dialog_edit_metodo_de_pago = data;
        },
        setMetodoDePago(state, data) {
            state.metodo_de_pago = data;
        },
        setTiemposDeEntrega(state, data) {
            state.tiempos_de_entrega = data;
        },
        setDialogTiempoDeEntrega(state, data) {
            state.dialog_tiempo_de_entrega = data;
        },
        setDialogEditTiempoDeEntrega(state, data) {
            state.dialog_edit_tiempo_de_entrega = data;
        },
        setTiempoDeEntrega(state, data) {
            state.tiempo_de_entrega = data;
        },
        setCiudadesEstadosPaises(state, data) {
            state.ciudades_estados_paises = data;
        },
        setDialogAddCiudadEstadoPais(state, data) {
            state.dialog_add_ciudad_estado_pais = data;
        },
        setCiudadEstadoPais(state, data) {
            state.ciudad_estado_pais = data;
        },
        setDialogEditCiudadEstadoPais(state, data) {
            state.dialog_edit_ciudad_estad_pais = data;
        },
        setDialogAddMoneda(state, data) {
            state.dialog_add_moneda = data;
        },
        setMonedas(state, data) {
            state.monedas = data;
        },
        setDialogEditMoneda(state, data) {
            state.dialog_edit_moneda = data;
        },
        setMoneda(state, data) {
            state.moneda = data;
        },
        setEmpleados(state, data) {
            state.empleados = data;
        },
        setDialogAddEmpleado(state, data) {
            state.dialog_add_empleado = data;
        },
        setDialogEditEmpleado(state, data) {
            state.dialog_edit_empleado = data;
        },
        setEmpleado(state, data) {
            if (data) {
                var status = [
                    { name: "Activo", value: 1 },
                    { name: "Bloquedo", value: 0 }
                ];
                var status_selected = status.find(
                    item => item.value === data.status
                );

                state.empleado = data;

                state.empleado.status = status_selected;
            } else {
                state.empleado = {
                    fecha_de_alta: momentTz
                        .tz("America/Bogota")
                        .format()
                        .substr(0, 10),
                    fecha_de_baja: momentTz
                        .tz("America/Bogota")
                        .format()
                        .substr(0, 10),
                    status: "",
                    nombre_completo: "",
                    rfc: "",
                    direccion: "",
                    ciudad: "",
                    codigo_postal: "",
                    telefono: "",
                    correo_factura: "",
                    departamento: "",
                    observaciones: ""
                };
            }
        },
        setClientes(state, data) {
            state.clientes = data;
        },
        SetDialogAddCliente(state, data) {
            state.dialog_add_clientes = data;
        },
        setDialogEditCliente(state, data) {
            state.dialog_edit_cliente = data;
        },
        setCliente(state, data) {
            state.cliente = data;
            var vend = state.empleados.find(
                item => item.nombre_completo === data.vendedor
            );
            state.cliente.vendedor = vend;
        },
        setInstrumentos(state, data) {
            state.instrumentos = data;
        },
        setDialogAddInstrumento(state, data) {
            state.dialog_add_instrumento = data;
        },
        setDialogEditInstrumento(state, data) {
            state.dialog_edit_instrumento = data;
        },
        setInstrumento(state, data) {
            state.instrumento = data;
           
        },
        setProcedimientos(state, data) {
            state.procedimientos = data;
        },
        setDialogAddProcedimiento(state, data) {
            state.dialog_add_procedimiento = data;
        },
        setProcedimiento(state, data) {
            state.procedimiento = data;
        },
        setDialogEditProcedimiento(state, data) {
            state.dialog_edit_procedimiento = data;
        },
        setPatrones(state, data) {
            state.patrones = data;
        },
        setDialogAddPatron(state, data) {
            state.dialog_add_patron = data;
        },
        setDialogEditPatron(state, data) {
            state.dialog_edit_patron = data;
        },
        setPatron(state, data) {
            state.patron = data;
        },
        setCotizaciones(state, data) {
            state.cotizaciones = data;
        },
        setDialogAddCotizacion(state, data) {
            state.dialog_add_cotizacion = data;
        },
        setDialogEditCotizacion(state, data) {
            state.dialog_edit_cotizacion = data;
        },
        setCotizacion(state, data) {
            state.cotizacion = data;
            let tipo_de_servicio = [
                    {
                        name: "normal",
                        value: 1
                    },
                    {
                        name: "urgente",
                        value: 2
                    },
                    {
                        name: "programado",
                        value: 3
                    }
                ],
                estado_de_la_cotizacion = [
                    {
                        name: "pendiente",
                        value: 1
                    },
                    {
                        name: "En recibo",
                        value: 2
                    },
                    {
                        name: "Rechazada",
                        value: 3
                    }
                ];
                var tds = tipo_de_servicio.find(item => item.name === data.tipo_de_servicio)
                var edlc = estado_de_la_cotizacion.find(item => item.name === data.estado_de_la_cotizacion)
                state.cotizacion.tipo_de_servicio = tds
                state.cotizacion.estado_de_la_cotizacion = edlc
            state.cotizacion.has_partidas.forEach(item => {
                item.EditCaliente = false;
            });
        },
        setDialogViewCotizacion(state, data) {
            state.dialog_view_cotizacion = data;
        },
        setCotizacionView(state, data) {
            state.cotizacion_view = data;
            let tipo_de_servicio = [
                {
                    name: "normal",
                    value: 1
                },
                {
                    name: "urgente",
                    value: 2
                },
                {
                    name: "programado",
                    value: 3
                }
            ],
            estado_de_la_cotizacion = [
                {
                    name: "pendiente",
                    value: 1
                },
                {
                    name: "En recibo",
                    value: 2
                },
                {
                    name: "Rechazada",
                    value: 3
                }
            ];
            var tds = tipo_de_servicio.find(item => item.name === data.tipo_de_servicio)
            var edlc = estado_de_la_cotizacion.find(item => item.name === data.estado_de_la_cotizacion)
            state.cotizacion_view.tipo_de_servicio = tds
            state.cotizacion_view.estado_de_la_cotizacion = edlc
            
        },
        setInformeID(state, data) {
            state.informe_id_db = data;
            var stateInfo = state.cotizacion_view.has_partidas.find(
                item => item.id === data[0].partida_id
            );
            stateInfo.informe_id = data[1];
        },
        setRecibos(state, data) {
            state.recibos = data;
            for (const a of state.recibos) {
                a.userSelected = {}
            }
        },
        setDialogAsignarTecnico(state, data) {
            state.dialog_asignar_tecnico = data;
        },
        setPartidaTecnico(state, data) {
            state.partida_tecnico = data;
        },
        setErrorHandleLogin(state, data) {
            state.error_handle_login = data;
        },
        setDialogViewPdfCotizacion(state, data){
            state.dialog_view_pdf_cotizacion = data
        },
        setCotizacionPrint(state, data){
            state.cotizacion_print = data
        },
        setDialogCargarPartidaMasivamente(state, data){
            state.dialog_cargar_partidas_masivamente = data
        },
        setMasivPartidas(state, data){
            state.masivPartidas = data
            for (const a of state.masivPartidas) {
                a.acreditacion = {}
                a.magnitud = {}
                a.cantidad = 0
                a.servicio = {}
                a.unidad = {}
                a.importe = 0
            }
        },
        setdialogPDfRecibos(state, data){
            state.dialog_pdf_recibos = data
        },
        setReciboPrint(state, data){
            state.recibo_print = data
        },
        setPartidas(state, data){
            state.partidas = data
        },
        setDialogCalibracion(state, data){
            state.dialog_calibracion = data
        },
        setPartida(state, data){
            state.partida = data
        },
        setPartidasParaCalibrar(state, data){
            state.partidas_para_calibrar = data
        },
        setRecibosCliente(state, data){
            state.recibos_cliente = data
        },
        setDialogAddFactura(state, data){
            state.dialog_add_factura = data
        },
        setDialogFactura(state, data){
            state.factura = data
        },
        setDialogPdfFactura(state, data){
            state.dialog_pdf_factura = data
        },
        setRutaPdfFactura(state, data){
            state.ruta_pdf_factura = data
            
        },
        setDialogDuplicateCotizacion(state, data){
            state.dialog_duplicate_cotizacion = data
        },
        setCotizacionParaDuplicar(state, data){
            state.cotizacion_para_duplicar = data
        },
        setMagnitudesParaReporte(state, data){
            state.magnitudes_para_reporte = data
        },
        setFacturas(state, data){
            state.facturas = data
        },
        setFacturasEstadistica(state, data){
            state.facturas_estadistica = data
        },
        setCotizacionesEstadistica(state, data){
            state.cotizaciones_estadisticas = data
        },
        setDialogRealizacionCalibracion(state, data){
            state.dialog_realizacion_calibracion = data
        },
        setPartidaParaCalibrar(state, data){
            state.partida_para_calibrar = data
        },
        setNotificacion(state, data){
            state.snackbar = data
        },
        setDialogNotaDeSeguimiento(state, data){
            state.dialog_nota_de_seguimiento = data
        },
        setNotasDeSeguimiento(state, data){
            state.NotdasDeSeguimiento = data
        },
        setUnidades(state, data){
            state.unidades = data
        },
        setDialogAddUnidad(state, data){
            state.dialog_add_unidad = data
        },
        setUnidad(state, data){
            state.unidad = data
        },
        setDialogEditUnidad(state, data){
            state.dialog_edit_unidad = data
        },
        setClavesSat(state, data){
            state.clavesSat = data
        },
        setDialogAddClaveSat(state, data){
            state.dialog_add_clave_sat = data
        },
        setClaveSat(state, data){
            state.claveSat = data
        },
        setDialogEditClaveSat(state, data){
            state.dialog_edit_clave_sat = data
        }
    },
    actions: {
        chargeRolSelected({ commit }, data) {
            commit("setRolSelected", data);
            commit("setAsignarRolModal", true);
        },
        chargeUserSelectedRolPermission({ commit }, data) {
            commit("setUserSelectedRolPermission", data);
            commit("setDialogUserRolPermission", true);
        },
        chargeUserEditar({ commit }, data) {
            commit("setDialogEditarUsuario", true);
            commit("setUser", data);
        },
        chargeRol({ commit }, data) {
            commit("setEditRol", data);
            commit("setDialogEditRol", true);
        }
    }
});
