import store from '../plugins/store.js'
export default class monedaServices{

	async getlistMonedas(){
		try	{
			let {data} = await axios('/api/get-monedas')
			store.commit('setMonedas', data)
			var model_notificacion = {mensaje: 'Monedas cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
		}catch(e){
			console.log(e)
			var model_notificacion = {mensaje: `!Ha ocurrido un error en las monedas --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
		}
	}
	async agregarMoneda(model){
		try{
			let {data} = await axios.post('/api/add-moneda', model)
			store.commit('setDialogAddMoneda', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarMoneda(model){
		try{
			let {data} = await axios.put('/api/edit-moneda', model)
			store.commit('setDialogEditMoneda', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarAcreditaciones(model){
		try{
			let {data} = await axios.delete(`/api/delete-moneda/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}
	async agregarMonedaMasivamente(file = null){
		try {
			var datafile = new FormData();
			datafile.append("document_moneda", file);
			let { data } = await axios.post(`/api/add-moneda-masiv`, datafile,{ headers: {"content-type": "multipart/form-data"}});
			var model_notificacion = {
				mensaje: "Monedas cargadas con exito",
				status: true,
				color: "success"
			};
			store.commit("setNotificacion", model_notificacion);
		} catch (e) {
			console.log(e);
			var model_notificacion = {
				mensaje: `!Ha ocurrido un error en Monedas --> ${e}¡`,
				status: true,
				color: "error"
			};
			store.commit("setNotificacion", model_notificacion);
		}
	}


}