import store from "../plugins/store.js";
export default class identificadorInformeServices {
    
    async agregarIdentificador(model) {
        try {
            let { data } = await axios.post("/api/add-identificador", model);
            store.commit('setInformeID', data)
        } catch (e) {
            console.log(e);
        }
    }
}
