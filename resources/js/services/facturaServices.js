import store from "../plugins/store.js";
export default class facturaServices {
    // async getlistAcreditaciones() {
    //     try {
    //         let { data } = await axios("/api/get-acreditaciones");
    //         store.commit("setAcreditaciones", data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    async agregarFactura(model) {
        try {
            let { data } = await axios.post("/api/add-factura", model);
            // store.commit("setdialogAddAcreditacion", false);
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
