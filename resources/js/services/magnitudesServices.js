import store from '../plugins/store.js'
export default class magnitudesServices{

	async getListMagnitudes(model){
		try{
			let {data} = await axios('/api/get-magnitudes')
			store.commit('setMagnitudes', data)
			
		}catch(e){
			console.log(e)
		}
	}
	async getListMagnitudesParaReporte(model){
		try{
			let {data} = await axios('/api/get-magnitud-espesifica')
			store.commit('setMagnitudesParaReporte', data)
			
		}catch(e){
			console.log(e)
		}
	}

	async addMagnitud(model){
		try{
			let {data} = await axios.post('/api/add-magnitudes',model)
			store.commit('setDialogAddMagnitudes', false)
		}catch(e){
			console.log(e)
		}
	}
	async editarMagnitud(model){
		try{
			let {data} = await axios.put('/api/edit-magnitud', model)
			store.commit('setDialogEditMagnitudes', false)
		}catch(e){
			console.log(e)
		}
	}
	async eliminarMagnitud(model){
		try{
			let {data} = await axios.delete(`/api/delete-magnitud/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}
}