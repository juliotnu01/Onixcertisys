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
                  <v-autocomplete
                    v-model="model.servicio_solicitado"
                    :items="items_servicios_solicitados"
                    outlined
                    chips
                    label="Sercicios"
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
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title> PERSONA DE CONTACTO: </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Nombre del Contacto"
                    outlined
                    v-model="model.persona_de_contacto.nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Celular del Contacto"
                    outlined
                    v-model="model.persona_de_contacto.celular"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. / Ext. del Contacto"
                    outlined
                    v-model="model.persona_de_contacto.tel_ext"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Email del Contacto"
                    outlined
                    v-model="model.persona_de_contacto.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Puesto del Contacto"
                    outlined
                    v-model="model.persona_de_contacto.puesto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title> CONTACTO ADICIONALES: </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Compras"
                    outlined
                    v-model="model.contacto_adicionales.compras"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Correo Compras"
                    outlined
                    v-model="model.contacto_adicionales.correo_compras"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. Compras"
                    outlined
                    v-model="model.contacto_adicionales.telf_compras"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Pagos"
                    outlined
                    v-model="model.contacto_adicionales.pagos"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Correo Pagos"
                    outlined
                    v-model="model.contacto_adicionales.correo_pagos"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. Pagos"
                    outlined
                    v-model="model.contacto_adicionales.telf_pagos"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Almacen"
                    outlined
                    v-model="model.contacto_adicionales.almacen"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Correo Almacen"
                    outlined
                    v-model="model.contacto_adicionales.correo_almacen"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Tel. Almacen"
                    outlined
                    v-model="model.contacto_adicionales.telf_almacen"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title>
              DATOS FISCALES Y REQUERIMIENTOS DE FACTURACION</v-card-title
            >
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="10" lg="10">
                  <v-text-field
                    label="Razon Social"
                    outlined
                    v-model="model.datosFisicosYRequerimientosDeFactuacion.razon_social"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                  <v-text-field
                    label="R.F.C"
                    outlined
                    v-model="model.datosFisicosYRequerimientosDeFactuacion.rfc"
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
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="4" lg="4">
                  <v-text-field
                    label="Esado"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.estado
                    "
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
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="CFDI"
                    outlined
                    v-model="
                      model.datosFisicosYRequerimientosDeFactuacion
                        .domicilioFiscalParaFacturacion.cfdi
                    "
                  ></v-text-field>
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
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="elevation-1">
            <v-card-title primary-title>REVISION DE FACTURA Y PAGOS</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                  <v-text-field
                    label="descripcion para la revision de la facturas y pagos"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.descripcionRevisionFactura"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Dias de revision de factura"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.diasRevisionFactura"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Horario"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.horaDiasRevisionFactura"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Dias de confirmacion de pago"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.diasDeConfirmacionDePago"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Horario"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.horaDiasDeConfirmacionDePago"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Dias de pago"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.diasDePago"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Horario"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.horaDiasDePago"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Link del portal"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.linkPortal"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Usuario y contraseña"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.usuarioContrasena"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Indicaciones para alta de factura del portal"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.indicacionesAltaFacturaPortal"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Correo Soporte Tecnico portal"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.correoSoporteTecnicoPortal"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Banco Ordenante"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.bancoOrdenante"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Cuenta Bancaria"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.cuentaDePago"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Complemento de pago se envia a e-mail"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.complementoDePagoSeEnviaPorEmail"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                  <v-text-field
                    label="Informacion adicional a incluir en el complemento  de pago"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.informacionAdicionalComplementoDePago"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="10" lg="10">
                  <v-text-field
                    label="Listar requerimientos de acceso a la planta"
                    outlined
                    v-model="model.revisionDeFacturasYpagos.listaRequerimientoDeAccesoAlaPlata"
                  ></v-text-field>
                </v-col>
                 <v-col cols="12" xs="12" sm="12" md="2" lg="2">
                   <v-text-field
                    label="I.V.A. %"
                    outlined
                    v-model="model.iva"
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
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue" @click="addCliente"> Agregar </v-btn>
          <v-btn text color="red" @click="openDialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
      <notificacion/>
    </v-dialog>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import NotificacionComponent from '../../../../notificacion/indexComponentNotificacion.vue'
export default {
  components:{
      'notificacion': NotificacionComponent
  },
  data() {
    return {
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
        { name: "credito de 30 dias", value: 1 },
        { name: "credito de 15 dias", value: 2 },
        { name: "contado", value: 3 },
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
        sucursales:[]
      },
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
    await this.services.metodoDePagoServices.getlistMetodoDePago();
    await this.services.condicionDePagoServices.getlistCondicionDePago();
    await this.services.monedaServices.getlistMonedas();
  },
  methods: {
    async addCliente() {
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
        iva: 0,
      };
        var model_notificacion = {mensaje: 'la sucursal ya esta registrada', status: true, color: 'warning'};
        this.$store.commit("setNotificacion", model_notificacion);
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
