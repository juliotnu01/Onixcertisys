import store from '../plugins/store.js'
export default class NotaDeSeguimientoServices{

	async getlisNotasDeSeguimiento(){
		try	{
			let {data} = await axios('/api/get-nota-de-seguimiento')
			store.commit('setNotasDeSeguimiento', data)
		}catch(e){
			console.log(e)
			var model_notificacion = {mensaje: `!Ha ocurrido un error en las Notas de seguimiento --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
		}
	}
	// async agregarMoneda(model){
	// 	try{
	// 		let {data} = await axios.post('/api/add-moneda', model)
	// 		store.commit('setDialogAddMoneda', false)
	// 	}catch(e){
	// 		console.log(e)
	// 	}
	// }

	// async actualizarMoneda(model){
	// 	try{
	// 		let {data} = await axios.put('/api/edit-moneda', model)
	// 		store.commit('setDialogEditMoneda', false)
	// 	}catch(e){
	// 		console.log(e)
	// 	}
	// }

	// async EliminarAcreditaciones(model){
	// 	try{
	// 		let {data} = await axios.delete(`/api/delete-moneda/${model.id}`)
	// 	}catch(e){
	// 		console.log(e)
	// 	}
	// }


}