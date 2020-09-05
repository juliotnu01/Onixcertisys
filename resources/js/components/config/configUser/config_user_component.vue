<template>
	<v-app>
		<v-container>
			 	<v-text-field label="Buscar usuario" v-model="search_user" outlined>
			 		
			 	</v-text-field>
			 <v-data-table :headers="headers_user" :items="listUser" :search="search_user" class="elevation-3">
			 </v-data-table>
		</v-container>
	</v-app>
</template>
<script >
import {mapGetters} from 'vuex'
	export default{
		data(){
			return {
				search_user: '',
				headers_user: [
					{text: ' nombre del usuario',align: 'start',sortable: false, value:'name'},
					{text: ' Correo del usuario',align: 'start',sortable: false, value:'email'},
					{text: ' Rol del usuario',align: 'start',sortable: false, value:'rol_user'}
				],
			}
		},
		async mounted(){
			await this.services.userServices.getListUser();
		},
		computed: {
			...mapGetters(['listUser', 'services']),
		}

	};
</script>