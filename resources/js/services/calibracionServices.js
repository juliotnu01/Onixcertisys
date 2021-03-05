import store from "../plugins/store.js";
export default class calibracionServices {
   
    async agregarCalibracion(model) {
        try {
            let { data } = await axios.post("/api/add-calibracion", model);
            store.commit("setDialogCalibracion", false);
        } catch (e) {
            console.log(e);
        }
    }

    async terminarCalibracion(model) {
        try {
            let { data } = await axios.post("/api/terminar-calibracion", model);
            store.commit("setDialogCalibracion", false);
        } catch (e) {
            console.log(e);
        }
    }
}
