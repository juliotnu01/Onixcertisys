import store from "../plugins/store.js";
export default class partidaServices {
    async getlistpartidas() {
        try {
            let { data } = await axios("/api/get-partidas")
            store.commit("setPartidas", data)
             var model_notificacion = {mensaje: 'Partidas cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
             var model_notificacion = {mensaje: `!Ha ocurrido un error en las partidas --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async getlistpartidasParaCalibrar() {
        try {
            let { data } = await axios("/api/get-partidas-para-calibrar")
            store.commit("setPartidasParaCalibrar", data)
             var model_notificacion = {mensaje: 'Partidas cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
             var model_notificacion = {mensaje: `!Ha ocurrido un error en las Partidas --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
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

    async actualizarPartida(model) {
        try {
            let { data } = await axios.put("/api/edit-partida", model);
            // store.commit("setDialogEditAcreditacion", false);
        } catch (e) {
            console.log(e);
        }
    }
    async actualizarObservacionPartida(model) {
        try {
            let { data } = await axios.put("/api/edit-observacion-partida", model);
            var model_notificacion = {mensaje: 'Observacion actualizada con exito', status: true, color: 'warning'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
             var model_notificacion = {mensaje: `!Ha ocurrido un error al momento de actualizar la observacion de la partida --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async actualizarLugarDeServicioPartida(model) {
        try {
            let { data } = await axios.put("/api/edit-lugar-servicio-partida", model);
            var model_notificacion = {mensaje: 'Lugar de Servicio actualizada con exito', status: true, color: 'warning'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
             var model_notificacion = {mensaje: `!Ha ocurrido un error al momento de actualizar la observacion de la partida --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

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
