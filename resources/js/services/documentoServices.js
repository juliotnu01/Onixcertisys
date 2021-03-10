import axios from "axios";
import store from "../plugins/store.js";
export default class documentoServices {
    async getlistDocumento(){
        try {
            let {data} = await axios('/api/get-documentos');
            store.commit('setdocumentos',data);
        } catch (error) {
            console.log(error)
        }
    }
    async addDocumentConfig(model){
        try {
            let data = await axios.post('/api/add-document-config', model, { headers: { "Content-Type": "multipart/form-data" } })
            store.commit("setDialogAddDocumento", false);
        } catch (error) {
            console.log(error)
        }
    }
}
