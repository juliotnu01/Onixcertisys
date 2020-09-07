import store from '../plugins/store.js'
export default class metodoDePagoServices{

	async getlistMetodoDePago(){
		try	{
			let {data} = await axios('/api/get-metodos-de-pago')
			store.commit('setListMetodoDePago', data)

		}catch(e){
			console.log(e)
		}
	}
	async agregarMetodoDePago(model){
		try{
			let {data} = await axios.post('/api/add-metodo-de-pago', model)
			store.commit('setDialogAddMetodoDePago', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarMetodoDePago(model){
		try{
			let {data} = await axios.put('/api/edit-metodo-de-pago', model)
			store.commit('setDialogEditMetodoDePago', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarMetodoDepago(model){
		try{
			let {data} = await axios.delete(`/api/delete-metodo-de-pago/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}