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
        } catch (e) {
            console.log(e);
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
