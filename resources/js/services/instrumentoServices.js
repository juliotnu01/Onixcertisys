import store from '../plugins/store.js'
export default class instrumentoServices{

	async getlistInstrumentos(){
		try	{
			let {data} = await axios('/api/get-instrumentos')
			store.commit('setInstrumentos', data)
		}catch(e){
			console.log(e)
		}
	}
	async agregarInstrumento(model){
		try{
			let {data} = await axios.post('/api/add-instrumento', model)
			store.commit('setDialogAddInstrumento', data)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarInstrumento(model){
		try{
			let {data} = await axios.put('/api/edit-instrumento', model)
			store.commit('setDialogEditInstrumento', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarInstrumento(model){
		try{
			let {data} = await axios.delete(`/api/delete-instrumento/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}