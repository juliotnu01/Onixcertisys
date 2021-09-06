import store from "../plugins/store.js";
export default class calibracionServices {
   
    async agregarCalibracion(model) {
        try {
            let { data } = await axios.post("/api/add-calibracion", model);
            store.commit("setDialogCalibracion", false);
            var model_notificacion = {mensaje: 'Calibracion iniciada con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: '¡Ha ocurrido un error al momento de  iniciar la calibración!', status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }

    async terminarCalibracion(model) {
        try {
            var formData = new FormData();
            formData.append("certificado", model.file_certificado);
            formData.append("partida", JSON.stringify(model.partida));
            formData.append("id_calibracion", JSON.stringify(model.id_calibracion));
            store.commit("setLoadingFinalizarCalibracion", true);
            let { data } = await axios.post("/api/terminar-calibracion", formData, { headers: { "Content-Type": "multipart/form-data"}});
            store.commit("setLoadingFinalizarCalibracion", false);
            store.commit("setDialogCalibracion", false);
            var model_notificacion = {mensaje: 'CERTIFICADO GENERADO CON EXITO..', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
        } catch (e) {
            console.log(e);
            var model_notificacion = {mensaje: 'ERROR AL MOMENTO DE GENERAR EL CERTIFICADO...', status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
        }
    }
}
