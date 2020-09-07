import store from '../plugins/store.js'
export default class empresaServices{

	async agregarEmpresa(model){
		try{
			let {data} = await axios.post('/api/add-empresa', model)
			
		}catch(e){
			console.log(e)
		}
	}
	async getEmpresa(){
		let {data} = await axios('/api/get-empresa')
		store.commit('setEmpresa', data)
	}

}