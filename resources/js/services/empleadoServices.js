import store from '../plugins/store.js'
export default class empleadoServices{

	async getlistEmpleados(){
		try	{
			let {data} = await axios('/api/get-empleados')
			store.commit('setEmpleados', data)
		}catch(e){
			console.log(e)
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

	async AsignarTecnico(model){
		try {
			let {data} = await axios.put(`/api/asignar-tecnico-partida`, model)
			store.commit('setDialogAsignarTecnico', false)
		} catch (e) {
			console.log(e)	
		}
	}


}