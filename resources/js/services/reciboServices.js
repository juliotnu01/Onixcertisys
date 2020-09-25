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
    async agregarRecibo(model) {
        try {
            let { data } = await axios.post("/api/add-recibo", model);
            store.commit("setDialogViewCotizacion", false);
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
