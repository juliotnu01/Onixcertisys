import store from '../plugins/store.js'
export default class cfdiServices{
    async getCFDIs(){
        try {
            let {data} = await axios('/api/get-cfdis')
            store.commit('setCFDIS', data)
        } catch (error) {
            console.log(error)
        }
    }
    async addCFDI(model){
        try {
            let {data} = await axios.post('/api/add-cfdi', model)
            store.commit('setDialogAddCFDI', false)
        } catch (error) {
            console.log(error)
        }
    }
    async updateCFDI(model){
        try {
            let {data} = await axios.put('/api/actualizar-cfdi', model)
            store.commit('setDialogEditCfdi', false)
        } catch (error) {
            console.log(error)
        }
    }
    async deleteCFDI(model){
        try {
            let {data} = await axios.delete(`/api/eliminar-cfdi/${model.id}`)
        } catch (error) {
            console.log(error)
        }
    }
}