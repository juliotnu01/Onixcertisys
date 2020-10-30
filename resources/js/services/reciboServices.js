import store from "../plugins/store.js";
export default class reciboServices {
    async getlistRecibos() {
        try {
            let { data } = await axios("/api/get-recibos");
            store.commit("setRecibos", data);
        } catch (e) {
            console.log(e);
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
        } catch (e) {
            console.log(e);
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
