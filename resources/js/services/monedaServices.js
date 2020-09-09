import store from '../plugins/store.js'
export default class monedaServices{

	async getlistMonedas(){
		try	{
			let {data} = await axios('/api/get-monedas')
			store.commit('setMonedas', data)
		}catch(e){
			console.log(e)
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


}