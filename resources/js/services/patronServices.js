import store from '../plugins/store.js'
export default class patronServices{

	async getlistPatrones(){
		try	{
			let {data} = await axios('/api/get-patrones')
			store.commit('setPatrones', data)
		}catch(e){
			console.log(e)
		}
	}
	async agregarPatrones(model){
		try{
			let {data} = await axios.post('/api/add-patron', model)
			store.commit('setDialogAddPatron', data)

		}catch(e){
			console.log(e)
		}
	}

	async actualizarPatron(model){
		try{
			let {data} = await axios.put('/api/edit-patron', model)
			store.commit('setDialogEditPatron', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarPatron(model){
		try{
			let {data} = await axios.delete(`/api/delete-patron/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}