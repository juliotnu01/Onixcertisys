<template>
    <v-app>
    	<v-row>
    		<v-col cols="12" xs="12" sm="12" md="6" lg="6">
        		<magnitudes/>
    		</v-col >
    		<v-col cols="12" xs="12" sm="12" md="6" lg="6">
    			<acreditaciones/>
    		</v-col>
    	</v-row>
    </v-app>
</template>
<script>
import magnitudesComponent from './magnitudes/magnitudesComponent.vue'
import acreditacionesComponent from './acreditaciones/indexAcreditacionesComponent.vue'
	export default{
		components:{
			'magnitudes': magnitudesComponent,
			'acreditaciones': acreditacionesComponent
		},
		data(){
			return {
				
			}
		}
	};
</script>
