import store from '../plugins/store.js'
export default class procedimientoServices{

	async getlistProcedimientos(){
		try	{
			let {data} = await axios('/api/get-procedimientos')
			store.commit('setProcedimientos', data)

		}catch(e){
			console.log(e)
		}
	}
	async agregarProcedimiento(model){
		try{
			let {data} = await axios.post('/api/add-procedimiento', model)
			store.commit('setDialogAddProcedimiento', false)

		}catch(e){
			console.log(e)
		}
	}

	async actualizarProcedimiento(model){
		try{
			let {data} = await axios.put('/api/edit-procedimiento', model)
			store.commit('setDialogEditProcedimiento', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarProcedimiento(model){
		try{
			let {data} = await axios.delete(`/api/delete-procedimiento/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}