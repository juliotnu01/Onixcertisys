import store from '../plugins/store.js'
export default class procedimientoServices{

	async getlistProcedimientos(){
		try	{
			let {data} = await axios('/api/get-procedimientos')
			store.commit('setProcedimientos', data)
				 var model_notificacion = {mensaje: 'Procedimientos cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);

		}catch(e){
			console.log(e)
			 var model_notificacion = {mensaje: `!Ha ocurrido un error en los Procedimientos --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
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