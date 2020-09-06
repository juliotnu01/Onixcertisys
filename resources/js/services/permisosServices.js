import store from '../plugins/store.js'
export default class permisosServices{

	async update(model){
		try{
			let {data} = await axios.put('/api/asignar-permiso', model)
			store.commit('setDialogUserRolPermission', false)
		}catch(e){
			console.log(e)
		}
	}

}