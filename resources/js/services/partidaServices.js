import store from "../plugins/store.js";
export default class partidaServices {
    async getlistpartidas() {
        try {
            let { data } = await axios("/api/get-partidas");
            store.commit("setPartidas", data);
        } catch (e) {
            console.log(e);
        }
    }
    // async agregarAcreditaciones(model) {
    //     try {
    //         let { data } = await axios.post("/api/add-acreditaciones", model);
    //         store.commit("setdialogAddAcreditacion", false);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // async actualizarAcreditaciones(model) {
    //     try {
    //         let { data } = await axios.put("/api/edit-acreditacion", model);
    //         store.commit("setDialogEditAcreditacion", false);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    async EliminarPartida(model) {
        try {
            let { data } = await axios.delete(
                `/api/delete-partida/${model.id}`
            );
        } catch (e) {
            console.log(e);
        }
    }
}
