import store from "../plugins/store.js";
export default class unidadServices {
    async getUnidades() {
        try {
            let { data } = await axios("/api/get-unidades");
            store.commit("setUnidades", data);
            var model_notificacion = {mensaje: 'Unidades cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
             var model_notificacion = {mensaje: `!Ha ocurrido un error en las acreditaciones --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
    async agregarUnidad(model) {
        try {
            let { data } = await axios.post("/api/add-unidad", model);
            store.commit("setDialogAddUnidad", false);
            var model_notificacion = {mensaje: 'Unidad Agregada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las unidades --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async actualizarUnidad(model) {
        try {
            let { data } = await axios.put("/api/actualizar-unidad", model);
            store.commit("setDialogEditUnidad", false);
            var model_notificacion = {mensaje: 'Unidad Actualizado con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las unidades --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async EliminarUnidad(model) {
        try {
            let { data } = await axios.delete(
                `/api/eliminar-unidad/${model.id}`
            );
            var model_notificacion = {mensaje: 'Unidad Eliminada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: `!Ha ocurrido un error en las unidades --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
}
