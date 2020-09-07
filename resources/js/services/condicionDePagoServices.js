import store from '../plugins/store.js'
export default class condicionDePagoServices{

	async getlistCondicionDePago(){
		try	{
			let {data} = await axios('/api/get-condiciones-de-pago')
			store.commit('setListCondicionDePago', data)

		}catch(e){
			console.log(e)
		}
	}
	async agregarCondicionDePago(model){
		try{
			let {data} = await axios.post('/api/add-condicion-de-pago', model)
			store.commit('setDialogAddCondicionDePago', false)
		}catch(e){
			console.log(e)
		}
	}

	async actualizarCondicionDePago(model){
		try{
			let {data} = await axios.put('/api/edit-condicion-de-pago', model)
			store.commit('setDialogEditCondicionDePago', false)
		}catch(e){
			console.log(e)
		}
	}

	async EliminarCondicionDepago(model){
		try{
			let {data} = await axios.delete(`/api/delete-condicion-de-pago/${model.id}`)
		}catch(e){
			console.log(e)
		}
	}


}