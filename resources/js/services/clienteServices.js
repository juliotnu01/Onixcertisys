import store from '../plugins/store.js'
export default class clienteServices{

	async getlistclientes(){
		try	{
			let {data} = await axios('/api/get-clientes')
			store.commit('setClientes',data)
		}catch(e){
			console.log(e)
		}
	}
	async agregarCliente(model){
		try{
			let {data} = await axios.post('/api/add-cliente', model)
			store.commit('SetDialogAddCliente', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarCliente(model){
		try{
			let {data} = await axios.put('/api/edit-cliente', model)
			store.commit('setDialogEditCliente', false)
			store.commit('', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarCliente(model){
		try{
			let {data} = await axios.delete(`/api/delete-cliente/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}