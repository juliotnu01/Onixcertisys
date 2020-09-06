import store from '../plugins/store.js'
export default class rolServices{
	async getListRoles() {
		try{
			let {data} = await axios('/api/list-roles');
			store.commit('setRoles', data);
		}catch(e){
			console.log(e)
		}
	}
	async addRol(model){
		try{
			let {data} = axios.post('/api/add-rol', model)
			store.commit('setRolRegisterModal', false)
		}catch(e){
			console.log(e)
		}
	}

	async asignarRol(model) {
		try{
			let {data} = await axios.put('/api/asignar-rol', model)
			store.commit('setAsignarRolModal', false)
		}catch(e){
			console.log(e)
		}
	}
	async editRol(rol){
		try{
			let {data} = await axios.put('/api/editar-rol', rol)
		}catch(e){
			console.log(e)
		}
	}
	async deleteRol(rol){
		try{
			let {data} = await axios.delete(`/api/eliminar-rol/${rol.id}`)
		}catch(e){
			console.log(e)
		}
	}
}