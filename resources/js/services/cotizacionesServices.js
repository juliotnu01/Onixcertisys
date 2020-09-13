import store from '../plugins/store.js'
export default class cotizacionServices{

	async getlistCotizaciones(){
		try	{
			let {data} = await axios('/api/get-cotizaciones')
			store.commit('setCotizaciones',data)
		}catch(e){
			console.log(e)
		}
	}
	async agregarCotizacion(cot){
		try{
			var model = {
				cliente_id: cot.cliente_selected.id,
				moneda_id: cot.moneda_selected.id,
				empleado_id: cot.empleado_selected.id,
				tiempo_de_entrega_id: cot.tde_selected.id,
				tipo_de_servicio: cot.tipo_de_servicio_selected.name,
				nota_para_la_cotizacion: cot.nota_cotizacion,
				estado_de_la_cotizacion: cot.estado_cotizacion_selected.name,
				contacto: cot.contacto,
				contacto_telefono: cot.telefono,
				contacto_correo: cot.correo,
				condicion: cot.condiciones,
				nota_de_seguimiento: cot.nota_seguimiento
			}
			let {data} = await axios.post('/api/add-cotizacion', model)
			store.commit('setDialogAddCotizacion', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarAcreditaciones(model){
		try{
			let {data} = await axios.put('/api/edit-acreditacion', model)
			store.commit('setDialogEditAcreditacion', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarAcreditaciones(model){
		try{
			let {data} = await axios.delete(`/api/edit-acreditacion/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}