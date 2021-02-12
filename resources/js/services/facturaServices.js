import store from "../plugins/store.js";
export default class facturaServices {
    // async getlistFacturas() {
    //     try {
    //         let { data } = await axios("/api/get-facturas-para-estadistica");
    //         store.commit("setFacturasEstadistica", data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    async getlistFacturasEstadistica() {
        try {
            let { data } = await axios("/api/get-facturas-para-estadistica");
            store.commit("setFacturasEstadistica", data);
            var model_notificacion = {mensaje: 'Facturas cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las facturas --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async agregarFactura(model) {
        try {
            let { data } = await axios.post("/api/add-factura", model);
            store.commit("setDialogAddFactura", false);
            store.commit("setRutaPdfFactura", data);
            store.commit("setDialogPdfFactura", true);
        } catch (e) {
            console.log(e);
        }
    }
    async agregarFacturaNueva(model) {
        try {
            let { data } = await axios.post("/api/add-factura-nueva", model);
            store.commit("setRutaPdfFactura", data);
        } catch (e) {
            console.log(e);
        }
    }

    // async actualizarAcreditaciones(model) {
    //     try {
    //         let { data } = await axios.put("/api/edit-acreditacion", model);
    //         store.commit("setDialogEditAcreditacion", false);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // async EliminarAcreditaciones(model) {
    //     try {
    //         let { data } = await axios.delete(
    //             `/api/edit-acreditacion/${model.id}`
    //         );
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
}
