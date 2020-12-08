import store from "../plugins/store.js";
export default class reciboServices {
    async getlistRecibos() {
        try {
            let { data } = await axios("/api/get-recibos");
            store.commit("setRecibos", data);
            var model_notificacion = {mensaje: 'Ordenes de servicio cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las O.D.S. --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async getlistRecibosClientes(cli) {
        try {
            let { data } = await axios(`/api/get-recibos/${cli.id}/cliente`);
                store.commit("setRecibosCliente", data);
        } catch (e) {
            console.log(e);
        }
    }
    async agregarRecibo(model) {
        try {
            let { data } = await axios.post("/api/add-recibo", model);
            store.commit("setDialogViewCotizacion", false);
            var model_notificacion = {mensaje: 'Ordenes de servicio agregada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las O.D.S. --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async imprimirRecibo(model) {
        try {
            let { data } = await axios.post("/api/imprimir-recibo", model);
            store.commit('setReciboPrint', data)
            store.commit('setdialogPDfRecibos', true)
        } catch (e) {
            console.log(e);
        }
    }
    async imprimirReciboUser(model, user) {
        try {
            let { data } = await axios.post(`/api/imprimir-recibo-asignado/${user.id}`, model);
            store.commit('setReciboPrint', data)
            store.commit('setdialogPDfRecibos', true)
        } catch (e) {
            console.log(e);
        }
    }
    
}
