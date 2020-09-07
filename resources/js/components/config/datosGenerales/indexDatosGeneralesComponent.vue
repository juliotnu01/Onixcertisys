<template>
    <v-app>
    	<v-row  >
    		<v-col  cols="12" xs="12" sm="12" md="6" lg="6">
        		<magnitudes/>
    		</v-col >
    		<v-col  cols="12" xs="12" sm="12" md="6" lg="6">
    			<acreditaciones/>
    		</v-col>
    		<v-col  cols="12" xs="12" sm="12" md="6" lg="6">
    			<condicion-de-pago/>
    		</v-col>
            <v-col  cols="12" xs="12" sm="12" md="6" lg="6">
                <metodo-de-pago/>
            </v-col>
    	</v-row>
    </v-app>
</template>
<script>
import magnitudesComponent from './magnitudes/magnitudesComponent.vue'
import acreditacionesComponent from './acreditaciones/indexAcreditacionesComponent.vue'
import condicionDePagoComponent from './condicionesDePago/indexCondicionesDePagoComponent.vue'
import MetodoDePagoComponent from './metodoDePago/indexMetodoDePagoComponent.vue'
	export default{
		components:{
			'magnitudes': magnitudesComponent,
			'acreditaciones': acreditacionesComponent,
			'condicion-de-pago': condicionDePagoComponent,
            'metodo-de-pago': MetodoDePagoComponent
		},
	};
</script>
