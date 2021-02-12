import store from "../plugins/store.js";
export default class claveSatServices {
    async getclavesSat() {
        try {
            let { data } = await axios("/api/get-claves-sat");
            store.commit("setClavesSat", data);
            var model_notificacion = {mensaje: 'clave sat cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
             var model_notificacion = {mensaje: `!Ha ocurrido un error en las acreditaciones --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async agregarClaveSat(model) {
        try {
            let { data } = await axios.post("/api/add-clave-sat", model);
            store.commit("setDialogAddClaveSat", false);
            var model_notificacion = {mensaje: 'Clave sat Agregada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las clave sat --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async actualizarClaveSat(model) {
        try {
            let { data } = await axios.put("/api/actualizar-clave-sat", model);
            store.commit("setDialogEditClaveSat", false);
            var model_notificacion = {mensaje: 'Clave sat Actualizado con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las clave sat --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async eliminarClaveSat(model) {
        try {
            let { data } = await axios.delete(
                `/api/eliminar-clave-sat/${model.id}`
            );
            var model_notificacion = {mensaje: 'clave sat Eliminada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las clave sat --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
}
