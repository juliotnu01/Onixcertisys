import store from '../plugins/store.js'
export default class ciudadEstadoPaisServices{

	async getlistCiudadEstadoPais(){
		try	{
			let {data} = await axios('/api/get-ciudades-estados-paises')
			store.commit('setCiudadesEstadosPaises', data)
		}catch(e){
			console.log(e)
		}
	}
	async agregarCiudadEstadoPais(model){
		try{
			let {data} = await axios.post('/api/add-ciudad-estado-pais', model)
			store.commit('setDialogAddCiudadEstadoPais', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarCiudadEstadoPais(model){
		try{
			let {data} = await axios.put('/api/edit-ciudad-estado-pais', model)
			store.commit('setDialogEditCiudadEstadoPais', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarAcreditaciones(model){
		try{
			let {data} = await axios.delete(`/api/delete-ciudad-estado-pais/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}