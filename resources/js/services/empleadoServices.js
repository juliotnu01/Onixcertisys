import store from '../plugins/store.js'
export default class empleadoServices{

	async getlistEmpleados(){
		try	{
			let {data} = await axios('/api/get-empleados')
			store.commit('setEmpleados', data)
			var model_notificacion = {mensaje: 'Empleados cargadas con exito', status: true, color: 'success'}
            store.commit("setNotificacion", model_notificacion);
		}catch(e){
			console.log(e)
			var model_notificacion = {mensaje: `!Ha ocurrido un error en los empleados --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
		}
	}
	async agregarEmpleado(model){
		try{
			let {data} = await axios.post('/api/add-empleado', model)
			store.commit('setDialogAddEmpleado', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarEmpleado(model){
		try{
			let {data} = await axios.put('/api/edit-empleado', model)
			store.commit('setDialogEditEmpleado', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarAcreditaciones(model){
		try{
			let {data} = await axios.delete(`/api/delete-empleado/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}

	async AsignarTecnico(model, file){
		try {
				let {data} = await axios.post(`/api/asignar-tecnico-partida`,{model, file})
				store.commit('setDialogAsignarTecnico', false)
				var model_notificacion = {mensaje: 'Tecnico Asigado con exito', status: true, color: 'success'}
            	store.commit("setNotificacion", model_notificacion);
			
		} catch (e) {
			console.log(e)	
			var model_notificacion = {mensaje: `!Ha ocurrido un error al momento de asignar una partida a un tecnico --> ${e}¡`, status: true, color: 'error'}
            store.commit("setNotificacion", model_notificacion);
		}
	}


}