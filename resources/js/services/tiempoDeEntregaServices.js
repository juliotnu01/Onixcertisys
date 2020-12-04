import store from '../plugins/store.js'
export default class tiempoDeEntregaServices{

	async getlistTiempoDeEntrega(){
		try	{
			let {data} = await axios('/api/get-tiempos-de-entrega')
			store.commit('setTiemposDeEntrega', data)
			var model_notificacion = {mensaje: 'Tiempos de entrega cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);

		}catch(e){
			console.log(e)
			var model_notificacion = {mensaje: `!Ha ocurrido un error en los T.D.E. --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
		}
	}
	async agregartiempoDeEntrega(model){
		try{
			let {data} = await axios.post('/api/add-tiempo-de-entrega', model)
			store.commit('setDialogTiempoDeEntrega', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarTiempoDeEntrega(model){
		try{
			let {data} = await axios.put('/api/edit-tiempo-de-entrega', model)
			store.commit('setDialogEditTiempoDeEntrega', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarTiempoDeEntrega(model){
		try{
			let {data} = await axios.delete(`/api/delete-tiempo-de-entrega/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}
