import {store} from '../plugins/store.js'
export default class userServices{
    async getListUser(){
        try {
            let {data} = await axios('/api/list-user')
            store.commit('setListUser', data)
        } catch (error) {
            
        }
    }
    async addUser(model){
        try {
            let data = await axios.post('register', model)
            location.href = 'home'
        } catch (error) {
            console.log(error)
        }
    }
    async loginUsr(model){
        try {
            let data = await axios.post('login', model)
            location.href = 'home'
        } catch (error) {
            console.log(error)
        }
    }
    async logoutUsr(){
        try {
            let data = await axios.post('/logout')
            location.href = '/login'
        }catch(e){
            console.log(e)
        }
    }
    async itExistUsr(usr){
        try{
            let {data} = await axios(`/api/find-user/${usr.id}`)
            store.commit('setUSer', data)
        }catch(e){
            console.log(e)
        }
    }
}