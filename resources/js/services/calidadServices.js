import store from "../plugins/store.js";
export default class calidadServices {
   
    async getListCalidades() {
        try {
            let { data } = await axios("/api/get-calidades");
            store.commit("setCalidades", data);
        } catch (e) {
            console.log(e);
        }
    }

    async editCalidad(model) {
        try {
            let { data } = await axios.put("/api/actualizar-calidad", model);
            store.commit("setDialogEditCalidad", false);
            var model_notificacion = {mensaje: 'Guardado con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
        }
    }
}
