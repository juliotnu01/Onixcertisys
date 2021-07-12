<template>
  <v-app>
    <v-dialog v-model="openDialog">
     <v-toolbar dark color="primary">
        <v-btn icon dark @click="openDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
         <v-card-title>Agregar cliente</v-card-title>
        <v-spacer></v-spacer>
        <v-btn text dark @click.prevent="addCliente" tile>
          Agregar
          <v-icon>mdi-content-save</v-icon> 
        </v-btn>
      </v-toolbar>
      <v-card>
       
        <v-card-text>
          <v-card class="elevation-1">
            <v-card-title primary-title> SERVICIO SOLICITADO: </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-form ref="form_SS" >
                    <v-autocomplete
                      v-model="model.servicio_solicitado"
                      :items="items_servicios_solicitados"
                      outlined
                      chips
                      label="Servicios"
                      item-text="name"
                      item-value="value"
                      multiple
                      return-object
                    >
                      <template v-slot:selection="data">
                        <v-chip v-bind="data.attrs" :input-value="data.selected" close>
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="data">
                        {{ data.item.name }}
                      </template>
                    </v-autocomplete>
                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title> PERSONA DE CONTACTO: </v-card-title>
            <v-card-text>
                <v-form ref="form_PDC" >
                  <v-row>
                      <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                        <v-text-field
                          label="Nombre del Contacto"
                          outlined
                          v-model="model.persona_de_contacto.nombre"
                          :rules="rules.text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                        <v-text-field
                          label="Celular del Contacto"
                          outlined
                          v-model="model.persona_de_contacto.celular"
                          :rules="rules.text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                        <v-text-field
                          label="Tel. / Ext. del Contacto"
                          outlined
                          v-model="model.persona_de_contacto.tel_ext"
                          :rules="rules.text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                        <v-text-field
                          label="Email del Contacto"
                          outlined
                          v-model="model.persona_de_contacto.email"
                          :rules="rules.text"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                        <v-text-field
                          label="Puesto del Contacto"
                          outlined
                          v-model="model.persona_de_contacto.puesto"
                          :rules="rules.text"
                        ></v-text-field>
                      </v-col>
                  </v-row>
                </v-form>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title> CONTACTO ADICIONALES: </v-card-title>
            <v-card-text>
            <v-form ref="form_CA" >
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Compras"
                    outlined
                    v-model="model.contacto_adicionales.compras"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Correo Compras"
                    outlined
                    v-model="model.contacto_adicionales.correo_compras"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. Compras"
                    outlined
                    v-model="model.contacto_adicionales.telf_compras"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Pagos"
                    outlined
                    v-model="model.contacto_adicionales.pagos"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Correo Pagos"
                    outlined
                    v-model="model.contacto_adicionales.correo_pagos"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. Pagos"
                    outlined
                    v-model="model.contacto_adicionales.telf_pagos"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Almacen"
                    outlined
                    v-model="model.contacto_adicionales.almacen"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Correo Almacen"
                    outlined
                    v-model="model.contacto_adicionales.correo_almacen"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. Almacen"
                    outlined
                    v-model="model.contacto_adicionales.telf_almacen"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
              </v-row>
              </v-form>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title>
              DATOS FISCALES Y REQUERIMIENTOS DE FACTURACION</v-card-title
            >
            <v-card-text>
            <v-form ref="form_DFRF">
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="10" lg="10">
                  <v-text-field
                    label="Razon Social"
                    outlined
                    v-model="model.datosFisicosYRequerimientosDeFactuacion.razon_social"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                  <v-text-field
                    label="R.F.C"
                    outlined
                    v-model="model.datosFisicosYRequerimientosDeFactuacion.rfc"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Calle "
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.calle
                    "
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Numero"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.numero
                    "
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Colonia"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.colonia
                    "
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Ciudad"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.ciudad
                    "
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Estado"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.estado
                    "
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="C.P."
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.cp
                    "
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-select
                    :items="listCondicionDePago"
                    label="Formas de pago"
                    outlined
                    item-text="nombre"
                    return-object
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.formaDePago
                    "
                    :rules="rules.select_fdp"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Correo para el envio de factura"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.emailEnvioFactura
                    "
                    :rules="rules.emailRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-select
                    :items="monedas"
                    label="Moneda de Factura"
                    outlined
                    item-text="nombre_moneda"
                    return-object
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.monedaFactura
                    "
                    :rules="rules.select_m"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-autocomplete
                    v-model="model.datosFisicosYRequerimientosDeFactuacion.domicilioFiscalParaFacturacion.cfdi"
                    :items="cfdis"
                    outlined
                    label="Seleccionar C.F.D.I."
                    return-object
                    item-text="codigo_cfdi"
                    item-value="codigo_cfdi"
                    :rules="rules.select_cfdi"
                  >
                  <template v-slot:selection="{item}">
                    {{item.codigo_cfdi}} - {{item.descripcion_cfdi}}
                  </template>
                  <template v-slot:item="{item}">
                     {{item.codigo_cfdi}} - {{item.descripcion_cfdi}}
                  </template>
                </v-autocomplete>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                   <v-select
                    :items="list_metodo_de_pago"
                    label="Metodo de pago"
                    outlined
                    item-text="nombre"
                    return-object
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.metodoDePago
                    "
                    :rules="rules.select_mdp"
                  />
                </v-col>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                   <v-select
                    :items="items_terminos_de_pago"
                    label="terminos de pago"
                    outlined
                    item-text="name"
                    return-object
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.terminosDePago
                    "
                    :rules="rules.select_tdp"
                  />
                </v-col>
              </v-row>
              </v-form>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title>REVISION DE FACTURA Y PAGOS</v-card-title>
            <v-card-text>
            <v-form ref="form_RFP" >
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-text-field
                    label="descripcion para la revision de la facturas y pagos"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.descripcionRevisionFactura"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Dias de revision de factura"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.diasRevisionFactura"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Horario"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.horaDiasRevisionFactura"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Dias de confirmacion de pago"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.diasDeConfirmacionDePago"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Horario"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.horaDiasDeConfirmacionDePago"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Dias de pago"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.diasDePago"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Horario"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.horaDiasDePago"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Link del portal"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.linkPortal"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Usuario y contraseña"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.usuarioContrasena"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Indicaciones para alta de factura del portal"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.indicacionesAltaFacturaPortal"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Correo Soporte Tecnico portal"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.correoSoporteTecnicoPortal"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Banco Ordenante"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.bancoOrdenante"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Cuenta Bancaria"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.cuentaDePago"
                     :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Complemento de pago se envia a e-mail"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.complementoDePagoSeEnviaPorEmail"
                    :rules="rules.emailRules"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Informacion adicional a incluir en el complemento  de pago"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.informacionAdicionalComplementoDePago"
                     :rules="rules.text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="10" lg="10">
                  <v-text-field
                    label="Listar requerimientos de acceso a la planta"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.listaRequerimientoDeAccesoAlaPlata"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                 <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                   <v-text-field
                    label="I.V.A. %"
                    outlined
                    v-model="model.iva"
                    :rules="rules.text"
                  ></v-text-field>
                </v-col>
                 <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-data-table
                    :headers="headers_sucursal"
                    :items="model.sucursales"
                    :items-per-page="5"
                    class="elevation-1"
                  >
                  <template v-slot:body.prepend>
                      <tr>
                        <td>
                            <v-text-field
                              label=""
                              dense
                              class="mt-5"
                              outlined
                              v-model="sucursal.nombre"
                            ></v-text-field>
                        </td>
                        <td>
                            <v-text-field
                              label=""
                              dense
                              class="mt-5"
                              outlined
                              v-model="sucursal.direccion"
                            ></v-text-field>
                        </td>
                        <td>
                            <v-text-field
                              label=""
                              dense
                              class="mt-5"
                              outlined
                              v-model="sucursal.contacto"
                            ></v-text-field>
                        </td>
                        <td>
                            <v-text-field
                              label=""
                              dense
                              class="mt-5"
                              outlined
                              v-model="sucursal.correo"
                            ></v-text-field>
                        </td>
                        <td>
                            <v-text-field
                              label=""
                              dense
                              class="mt-5"
                              outlined
                              v-model="sucursal.telefono"
                              @keyup.enter="AgregarSucursal"
                            ></v-text-field>
                        </td>
                        <td>
                           <v-btn color="success" @click="AgregarSucursal"  > <v-icon>mdi-company</v-icon> Agregar Sucursal</v-btn>
                        </td>
                      </tr>
                  </template>
                  </v-data-table>
                </v-col>
              </v-row>
                </v-form>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue" @click="addCliente"> Agregar </v-btn>
          <v-btn text color="red" @click="openDialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
      <notificacion/>
       <overlay/>
    </v-dialog>
    <v-snackbar  v-model="snackbar"  top fixed color="#0095d9" dark>
       <h5 class=" text--error font-weight-bold">  Faltan campos por llenar, ¿Desea guardar y dejar los campos en vacios?</h5>  
      <template v-slot:action="{ attrs }">
        <v-btn
          color="error"
          v-bind="attrs"
          @click="snackbar = false"
          class="mr-2"
        >
          Cerrar
        </v-btn>
        <v-btn
          color="#003177"
          v-bind="attrs"
          @click="addCliente(g = true)"
          
        >
        <v-icon>mdi-save</v-icon>
          Guardar
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import NotificacionComponent from '../../../../notificacion/indexComponentNotificacion.vue'
import overlayComponent from '../../../../overlayComponent.vue'
export default {
  components:{
      'notificacion': NotificacionComponent,
       "overlay" : overlayComponent
  },
  data() {
    return {
      snackbar:false,
      headers_sucursal:[
        {text: 'Nombre sucursal', align:'center', value:'nombre'},
        {text: 'Direccion sucursal', align:'center', value:'direccion'},
        {text: 'Contacto sucursal', align:'center', value:'contacto'},
        {text: 'Correo contacto', align:'center', value:'correo'},
        {text: 'Telefono contacto', align:'center', value:'telefono'},
      ],
      items_sucursales:[],
      items_servicios_solicitados: [
        { name: "Calibracion", value: 1 },
        { name: "Venta", value: 2 },
        { name: "Mantenimiento", value: 3 },
        { name: "Capacitación", value: 4 },
      ],

      items_forma_de_pago: [
        { name: "transferencia electronica", value: 1 },
        { name: "deposito en efectivo", value: 2 },
        { name: "cheque", value: 3 },
      ],
      items_terminos_de_pago: [
        { name: "CREDITO DE 30 DIAS", value: 1 },
        { name: "CREDITO DE 15 DIAS", value: 2 },
        { name: "CONTADO", value: 3 },
      ],

      sucursal: {
        nombre: "",
        direccion: "",
        contacto: "",
        correo: "",
        telefono: "",
      },
      model: {
        servicio_solicitado: [],
        persona_de_contacto: {
          nombre: "",
          celular: "",
          tel_ext: "",
          email: "",
          puesto: "",
        },
        contacto_adicionales: {
          compras: "",
          correo_compras: "",
          telf_compras: "",
          pagos: "",
          correo_pagos: "",
          telf_pagos: "",
          almacen: "",
          correo_almacen: "",
          telf_almacen: "",
        },
        datosFisicosYRequerimientosDeFactuacion: {
          razon_social: "",
          rfc: "",
          domicilioFiscalParaFacturacion: {
            calle: "",
            numero: "",
            colonia: "",
            ciudad: "",
            estado: "",
            cp: "",
            formaDePago: [],
            monedaFactura: [],
            emailEnvioFactura: "",
            cfdi: "",
            metodoDePago: [],
            terminosDePago: [],
          },
        },
        revisionDeFacturasYpagos:{
          descripcionRevisionFactura: '',
          diasRevisionFactura: '',
          horaDiasRevisionFactura: '',
          diasDeConfirmacionDePago: '',
          horaDiasDeConfirmacionDePago: '',
          diasDePago: '',
          horaDiasDePago: '',
          linkPortal:'',
          usuarioContrasena:"",
          indicacionesAltaFacturaPortal:"",
          correoSoporteTecnicoPortal:'',
          bancoOrdenante:'',
          cuentaDePago:'',
          complementoDePagoSeEnviaPorEmail:'',
          informacionAdicionalComplementoDePago:'',
        },
        listaRequerimientoDeAccesoAlaPlata:'',
        sucursales:[]
      },
      rules: {
        select_ss: [(v) =>  v.length > 0 || "Es necesario que selecciones al menos un servicio"],
        select_fdp: [(v) =>  !!v || "Es necesario que selecciones una forma de pago"],
        select_m: [(v) =>  !!v || "Es necesario que selecciones una moneda"],
        select_cfdi: [(v) =>  !!v || "Es necesario que selecciones un CFDI"],
        select_mdp: [(v) =>  !!v || "Es necesario que selecciones un metodo de pago"],
        select_tdp: [(v) =>  !!v || "Es necesario que selecciones un termino de pago"],
        text: [(v) => !!v || 'Es necesario este campo'],
        emailRules: [  v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Correo invalido']
      }
    };
  },
  computed: {
    ...mapGetters([
      "services",
      "dialog_add_clientes",
      "empleados",
      "ciudades_estados_paises",
      "list_metodo_de_pago",
      "listCondicionDePago",
      "monedas",
      "cfdis",
    ]),
    openDialog: {
      get() {
        return this.dialog_add_clientes;
      },
      set(val) {
        this.$store.commit("SetDialogAddCliente", val);
      },
    },
  },
  async mounted() {
    this.$store.commit('setOverley', true)
    Promise.all([
      this.services.metodoDePagoServices.getlistMetodoDePago(),
      this.services.condicionDePagoServices.getlistCondicionDePago(),
      this.services.monedaServices.getlistMonedas(),
      this.services.cfdiServices.getCFDIs()])
      .then(  () => {
        this.$store.commit('setOverley', false)
      })
      .catch((reason) => {
         this.$store.commit('setOverley', false)
      });
  },
  methods: {
    async addCliente(g = false) {
                  if(this.$refs.form_SS.validate() && 
                    this.$refs.form_PDC.validate() && 
                    this.$refs.form_CA.validate() && 
                    this.$refs.form_DFRF.validate() &&
                    this.$refs.form_RFP.validate() || g == true ){
                    
      await this.services.clienteServices.agregarCliente(this.model);
      await this.services.clienteServices.getlistclientes();
      this.model = {
        servicio_solicitado: [],
        persona_de_contacto: {
          nombre: "",
          celular: "",
          tel_ext: "",
          email: "",
          puesto: "",
        },
        contacto_adicionales: {
          compras: "",
          correo_compras: "",
          telf_compras: "",
          pagos: "",
          correo_pagos: "",
          telf_pagos: "",
          almacen: "",
          correo_almacen: "",
          telf_almacen: "",
        },
        datosFisicosYRequerimientosDeFactuacion: {
          razon_social: "",
          rfc: "",
          domicilioFiscalParaFacturacion: {
            calle: "",
            numero: "",
            colonia: "",
            ciudad: "",
            estado: "",
            cp: "",
            formaDePago: [],
            monedaFactura: [],
            emailEnvioFactura: "",
            cfdi: "",
            metodoDePago: [],
            terminosDePago: [],
          },
        },
        revisionDeFacturasYpagos:{
          descripcionRevisionFactura: '',
          diasRevisionFactura: '',
          horaDiasRevisionFactura: '',
          diasDeConfirmacionDePago: '',
          horaDiasDeConfirmacionDePago: '',
          diasDePago: '',
          horaDiasDePago: '',
          linkPortal:'',
          usuarioContrasena:[],
          indicacionesAltaFacturaPortal:[],
          correoSoporteTecnicoPortal:'',
          bancoOrdenante:'',
          cuentaDePago:'',
          complementoDePagoSeEnviaPorEmail:'',
          informacionAdicionalComplementoDePago:'',
        },
        listaRequerimientoDeAccesoAlaPlata:{
        },
        sucursales:[],
        iva: 16,
      };
        var model_notificacion = {mensaje: 'la sucursal ya esta registrada', status: true, color: 'warning'};
        this.$store.commit("setNotificacion", model_notificacion);
      }else{
        this.snackbar  = true;
      }
    },
    AgregarSucursal() {
      var index = this.model.sucursales.find(item => item.nombre === this.sucursal.nombre);
      if (!index) {
        this.model.sucursales.push(this.sucursal);
      }else{
             var model_notificacion = {mensaje: 'la sucursal ya esta registrada', status: true, color: 'warning'}
             this.$store.commit("setNotificacion", model_notificacion);
      }
      this.sucursal = {
         nombre: "",
        direccion: "",
        contacto: "",
        correo: "",
        telefono: "",
      };
    },
    eliminarSucursal(suc) {
      var index = this.model.sucursales.indexOf(suc);
      this.model.sucursales.splice(index, 1);
    },
  },
};
</script>
