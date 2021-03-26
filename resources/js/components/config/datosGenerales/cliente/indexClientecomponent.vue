<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title color="primary">Cliente</v-card-title>
      <v-app-bar absolute color="primary" dark>
        <v-toolbar-title>Cliente</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          label="Buscar Cliente"
          placeholder=""
          v-model="search_cli"
          outlined
          dense
          class="mt-5 mr-5"
        ></v-text-field>

        <v-file-input
          label="Seleccionar documento (.xls | .xlsx)"
          outlined
          v-model="file_cliente"
          @change="handleFile"
          dense
          class="mt-5"
        />
        <v-btn
          icon
          dark
          color="info"
          @click="agregarFileCliente"
          :loading="load_cliente_file"
          large
        >
          <v-icon dark large>mdi-file-upload</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn fab dark color="info" @click="$store.commit('SetDialogAddCliente', true)">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>
      <v-data-table
        :headers="headers_cli"
        :items="clientes"
        :search="search_cli"
        class="elevation-3"
      >
        <template v-slot:item.accion="{ item }">
          <td class="text-center">
            <v-btn icon color="red" small @click="EliminarCliente(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon color="warning" small @click="EditarCliente(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </td>
        </template>
        <template v-slot:item.created_at="{ item }">
          <td class="text-center">
            {{ item.created_at.substr(0, 10) }}
          </td>
        </template>
        <template v-slot:item.direccion_fiscal="{ item }">
          <td class="text-left">
            {{ item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle }} -
            {{ item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero }} -
            {{ item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia }} -
            {{ item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad }} -
            {{ item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado }} -
            {{ item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp }}
          </td>
        </template>
        <template v-slot:item.telefonos="{ item }">
          <td class="text-left">
            Telf.: Compra: {{ item.contacto_adicionales_compra_telf }} <br />
            Telf.: Pagos: {{ item.contacto_adicionales_pagos_telf }} <br />
            Telf.: Almacen: {{ item.contacto_adicionales_pagos_telf }} <br />
          </td>
        </template>
        <template v-slot:item.contacto="{ item }">
          <td class="text-left">
            Contact.: Compra: {{ item.contacto_adicionales_compra }} <br />
            Contact.: Pagos: {{ item.contacto_adicionales_pagos }} <br />
            Contact.: Almacen: {{ item.contacto_adicionales_almacen }} <br />
          </td>
        </template>
      </v-data-table>
    </v-card>
    <modal-add />
    <modal-edit />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import modalAddCliente from "./modals/modalAddClienteComponent.vue";
import modalEditCliente from "./modals/modalEditClienteComponent.vue";
import xlsx from "xlsx";

export default {
  components: {
    "modal-add": modalAddCliente,
    "modal-edit": modalEditCliente,
  },
  data() {
    return {
      headers_cli: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          sortable: true,
          value: "id",
        },
        {
          text: "Nombre / Razon social",
          align: "start",
          sortable: false,
          sortable: true,
          value: "datos_fisicos_requeremientos_facturacion_razon_social",
        },
        {
          text: "Direccion",
          align: "start",
          sortable: false,
          sortable: true,
          value: "direccion_fiscal",
        },
        {
          text: "R.F.C.",
          align: "start",
          sortable: false,
          sortable: true,
          value: "datos_fisicos_requeremientos_facturacion_rfc",
        },
        {
          text: "Telefonos",
          align: "start",
          sortable: false,
          sortable: true,
          value: "telefonos",
        },
        {
          text: "Correo Electronico para el envio de la factura",
          align: "start",
          sortable: false,
          sortable: true,
          value: "correo_envio_factura",
        },
        {
          text: "Nombres contactos",
          align: "start",
          sortable: false,
          sortable: true,
          value: "contacto",
        },
        {
          text: "Accion",
          align: "start",
          sortable: false,
          sortable: true,
          value: "accion",
        },
      ],
      search_cli: "",
      file_cliente: {},
      load_cliente_file: false,
      cliente: {},
    };
  },
  computed: {
    ...mapGetters(["services", "clientes"]),
  },
  mounted() {
    this.services.clienteServices.getlistclientes();
  },
  methods: {
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
    },
    async EditarCliente(cli) {
      var data = {};

      data = {
        id: cli.id,
        servicio_solicitado: JSON.parse(cli.servicio_solicitado),
        persona_de_contacto: {
          nombre: cli.persona_de_contacto_nombre,
          celular: cli.persona_de_contacto_celular,
          tel_ext: cli.persona_de_contacto_te_ext,
          email: cli.persona_de_contacto_email,
          puesto: cli.persona_de_contacto_puesto,
        },
        contacto_adicionales: {
          compras: cli.contacto_adicionales_compra,
          correo_compras: cli.contacto_adicionales_compra_correo,
          telf_compras: cli.contacto_adicionales_compra_telf,
          pagos: cli.contacto_adicionales_pagos,
          correo_pagos: cli.contacto_adicionales_pagos_correo,
          telf_pagos: cli.contacto_adicionales_pagos_telf,
          almacen: cli.contacto_adicionales_almacen,
          correo_almacen: cli.contacto_adicionales_correo,
          telf_almacen: cli.contacto_adicionales_telf,
        },
        datosFisicosYRequerimientosDeFactuacion: {
          razon_social: cli.datos_fisicos_requeremientos_facturacion_razon_social,
          rfc: cli.datos_fisicos_requeremientos_facturacion_rfc,
          domicilioFiscalParaFacturacion: {
            calle: cli.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle,
            numero: cli.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero,
            colonia: cli.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia,
            ciudad: cli.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad,
            estado: cli.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado,
            cp: cli.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp,
            formaDePago: cli.forma_de_pago,
            monedaFactura: cli.moneda_factura,
            emailEnvioFactura: cli.correo_envio_factura,
            cfdi: cli.cdfi,
            metodoDePago: cli.metodo_de_pago,
            terminosDePago: cli.termino_de_pago,
          },
        },
        revisionDeFacturasYpagos: {
          descripcionRevisionFactura:
            cli.revision_de_factura_pagos_descripcion_revision_factura,
          diasRevisionFactura: cli.revision_de_factura_pagos_dias_revision_factura,
          horaDiasRevisionFactura: cli.revision_de_factura_pagos_hora_revision_factura,
          diasDeConfirmacionDePago: cli.revision_de_factura_pagos_dias_confirmacion_pagos,
          horaDiasDeConfirmacionDePago:
            cli.revision_de_factura_pagos_hora_confirmacion_pagos,
          diasDePago: cli.revision_de_factura_pagos_dias_pagos,
          horaDiasDePago: cli.revision_de_factura_pagos_hora_pagos,
          linkPortal: cli.link_portal,
          usuarioContrasena: cli.usuario_contraseña,
          indicacionesAltaFacturaPortal: cli.indiciones_alta_factura,
          correoSoporteTecnicoPortal: cli.correo_soporte_tecnico_portal,
          bancoOrdenante: cli.banco_ordenante,
          cuentaDePago: cli.cuenta_de_pago,
          complementoDePagoSeEnviaPorEmail: cli.complemento_de_pago_se_envia_por_email,
          informacionAdicionalComplementoDePago:
            cli.informacion_adicional_complemento_de_pago,
          listaRequerimientoDeAccesoAlaPlata: cli.lista_requerimiento_acceso_planta,
        },
        iva: cli.iva,
        sucursales: cli.has_sucursal,
      };
      this.$store.commit("setCliente", data);
      this.$store.commit("setDialogEditCliente", true);
    },
    async EliminarCliente(cli) {
      this.services.clienteServices.EliminarCliente(cli);
      this.services.clienteServices.getlistclientes();
    },
    async handleFile(e) {
      var files = this.file_cliente,
        f = files;
      var reader = new FileReader();
      var self = this;
      reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = xlsx.read(data, {
          type: "array",
          bookType: "xlsm",
          bookVBA: true,
          cellStyles: true,
          cellNF: true,
        });

        var cli = {
          serviciosSolicitados: {
            calibracion: workbook.Sheets.cliente.I8.v ? workbook.Sheets.cliente.I8.v : "",
            venta: workbook.Sheets.cliente.O8.v ? workbook.Sheets.cliente.O8.v : "",
            mantenimiento: workbook.Sheets.cliente.T8.v
              ? workbook.Sheets.cliente.T8.v
              : "",
            capacitación: workbook.Sheets.cliente.Z8.v
              ? workbook.Sheets.cliente.Z8.v
              : "",
          },
          personaDeContacto: {
            nombre: workbook.Sheets.cliente.H11.v ? workbook.Sheets.cliente.H11.v : "",
            celular: workbook.Sheets.cliente.Y11.v ? workbook.Sheets.cliente.Y11.v : "",
            TelExt: workbook.Sheets.cliente.AJ11.v ? workbook.Sheets.cliente.AJ11.v : "",
            email: workbook.Sheets.cliente.H12.v ? workbook.Sheets.cliente.H12.v : "",
            puesto: workbook.Sheets.cliente.Y12.v ? workbook.Sheets.cliente.Y12.v : "",
          },
          ContactoAdicionales: {
            compras: {
              compras: workbook.Sheets.cliente.H15.v ? workbook.Sheets.cliente.H15.v : "",
              email: workbook.Sheets.cliente.U15.v ? workbook.Sheets.cliente.U15.v : "",
              telf: workbook.Sheets.cliente.AJ15.v ? workbook.Sheets.cliente.AJ15.v : "",
            },
            pagos: {
              compras: workbook.Sheets.cliente.H16.v ? workbook.Sheets.cliente.H16.v : "",
              email: workbook.Sheets.cliente.U16.v ? workbook.Sheets.cliente.U16.v : "",
              telf: workbook.Sheets.cliente.AJ16.v ? workbook.Sheets.cliente.AJ16.v : "",
            },
            almacen: {
              compras: workbook.Sheets.cliente.H17.v ? workbook.Sheets.cliente.H17.v : "",
              email: workbook.Sheets.cliente.U17.v ? workbook.Sheets.cliente.U17.v : "",
              telf: workbook.Sheets.cliente.AJ17.v ? workbook.Sheets.cliente.AJ17.v : "",
            },
          },
          DatosFiscalesYRequerimientosParaFacturacion: {
            razonSocial: workbook.Sheets.cliente.H20.v
              ? workbook.Sheets.cliente.H20.v
              : "",
            rfc: workbook.Sheets.cliente.AJ20.v ? workbook.Sheets.cliente.AJ20.v : "",
            domicilioFiscalParaFacturacion: {
              calle: workbook.Sheets.cliente.H22.v ? workbook.Sheets.cliente.H22.v : "",
              numero: workbook.Sheets.cliente.Y22.v ? workbook.Sheets.cliente.Y22.v : "",
              colonia: workbook.Sheets.cliente.AJ22.v
                ? workbook.Sheets.cliente.AJ22.v
                : "",
              ciudad: workbook.Sheets.cliente.H23.v ? workbook.Sheets.cliente.H23.v : "",
              estado: workbook.Sheets.cliente.Y23.v ? workbook.Sheets.cliente.Y23.v : "",
              cp: workbook.Sheets.cliente.AJ23.v ? workbook.Sheets.cliente.AJ23.v : "",
              formaDePago: {
                transferenciaElectronica: workbook.Sheets.cliente.H24.v
                  ? workbook.Sheets.cliente.H24.v
                  : "",
                depositoEnEfectivo: workbook.Sheets.cliente.P24.v
                  ? workbook.Sheets.cliente.P24.v
                  : "",
                cheque: workbook.Sheets.cliente.U24.v
                  ? workbook.Sheets.cliente.U24.v
                  : "",
              },
              emailParaEnvioFactura: workbook.Sheets.cliente.AF24.v
                ? workbook.Sheets.cliente.AF24.v
                : "",
              monedaFactura: {
                pesosMexicano: workbook.Sheets.cliente.H25.v
                  ? workbook.Sheets.cliente.H25.v
                  : "",
                dolares: workbook.Sheets.cliente.P25.v
                  ? workbook.Sheets.cliente.P25.v
                  : "",
              },
              cfdi: workbook.Sheets.cliente.Y25.v ? workbook.Sheets.cliente.Y25.v : "",
              metodoDePago: {
                pagoParcialesDiferidos: workbook.Sheets.cliente.H26.v
                  ? workbook.Sheets.cliente.H26.v
                  : "",
                pagoEnUnaSolaExhibicion: workbook.Sheets.cliente.S26.v
                  ? workbook.Sheets.cliente.S26.v
                  : "",
              },
              TerminosDePago: {
                treintaDias: workbook.Sheets.cliente.L27.v
                  ? workbook.Sheets.cliente.L27.v
                  : "",
                quinceDias: workbook.Sheets.cliente.R27.v
                  ? workbook.Sheets.cliente.R27.v
                  : "",
                contado: workbook.Sheets.cliente.X27.v
                  ? workbook.Sheets.cliente.X27.v
                  : "",
              },
            },
          },
          revisionDeFacturaYpago: {
            descripcion: workbook.Sheets.cliente.D31.v
              ? workbook.Sheets.cliente.D31.v
              : "",
            diasDeRevisionDeFactura: {
              dias: workbook.Sheets.cliente.L33.v ? workbook.Sheets.cliente.L33.v : "",
              horas: workbook.Sheets.cliente.AC33.v ? workbook.Sheets.cliente.AC33.v : "",
            },
            diasDeConfirmacionnDepago: {
              dias: workbook.Sheets.cliente.L34.v ? workbook.Sheets.cliente.L34.v : "",
              horas: workbook.Sheets.cliente.AC34.v ? workbook.Sheets.cliente.AC34.v : "",
            },
            diasDepago: {
              dias: workbook.Sheets.cliente.L35.v ? workbook.Sheets.cliente.L35.v : "",
              horas: workbook.Sheets.cliente.AC35.v ? workbook.Sheets.cliente.AC35.v : "",
            },
            linkPortal: workbook.Sheets.cliente.H37.v
              ? workbook.Sheets.cliente.H37.v
              : "",
            UsuarioContraseña: {
              seEnviaPorEmail: workbook.Sheets.cliente.AD37.v
                ? workbook.Sheets.cliente.AD37.v
                : "",
              seOptienePorElPortal: workbook.Sheets.cliente.AK37.v
                ? workbook.Sheets.cliente.AK37.v
                : "",
            },
            altaDefacturas: {
              seEnviaPorEmail: workbook.Sheets.cliente.O38.v
                ? workbook.Sheets.cliente.O38.v
                : "",
              seOptienePorElPortal: workbook.Sheets.cliente.U38.v
                ? workbook.Sheets.cliente.U38.v
                : "",
            },
            soporteTecnicoEmail: workbook.Sheets.cliente.AJ38.v
              ? workbook.Sheets.cliente.AJ38.v
              : "",
            BancoOrdenante: workbook.Sheets.cliente.O40.v
              ? workbook.Sheets.cliente.O40.v
              : "",
            cuentaDeBanco: workbook.Sheets.cliente.AJ40.v
              ? workbook.Sheets.cliente.AJ40.v
              : "",
            informacionAdicionalDePago: workbook.Sheets.cliente.D43.v
              ? workbook.Sheets.cliente.D43.v
              : "",
            complementoDePagoSeEnviaPorEmail: workbook.Sheets.cliente.O41.v
              ? workbook.Sheets.cliente.O41.v
              : "",
          },
          listaDeAccesoAlaPlata: workbook.Sheets.cliente.D47.v
            ? workbook.Sheets.cliente.D47.v
            : "",
          sucursales: [
            {
              nombre: workbook.Sheets.cliente.E59.v ? workbook.Sheets.cliente.E59.v : "",
              direccion: workbook.Sheets.cliente.H59.v
                ? workbook.Sheets.cliente.H59.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X59.v
                ? workbook.Sheets.cliente.X59.v
                : "",
              email: workbook.Sheets.cliente.AE59.v ? workbook.Sheets.cliente.AE59.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM59.v ? workbook.Sheets.cliente.AM59.v : "",
                telf: workbook.Sheets.cliente.AN59.v
                  ? workbook.Sheets.cliente.AN59.v
                  : "",
                num: workbook.Sheets.cliente.AO59.v ? workbook.Sheets.cliente.AO59.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E60.v ? workbook.Sheets.cliente.E60.v : "",
              direccion: workbook.Sheets.cliente.H60.v
                ? workbook.Sheets.cliente.H60.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X60.v
                ? workbook.Sheets.cliente.X60.v
                : "",
              email: workbook.Sheets.cliente.AE60.v ? workbook.Sheets.cliente.AE60.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM60.v ? workbook.Sheets.cliente.AM60.v : "",
                telf: workbook.Sheets.cliente.AN60.v
                  ? workbook.Sheets.cliente.AN60.v
                  : "",
                num: workbook.Sheets.cliente.AO60.v ? workbook.Sheets.cliente.AO60.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E61.v ? workbook.Sheets.cliente.E61.v : "",
              direccion: workbook.Sheets.cliente.H61.v
                ? workbook.Sheets.cliente.H61.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X61.v
                ? workbook.Sheets.cliente.X61.v
                : "",
              email: workbook.Sheets.cliente.AE61.v ? workbook.Sheets.cliente.AE61.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM61.v ? workbook.Sheets.cliente.AM61.v : "",
                telf: workbook.Sheets.cliente.AN61.v
                  ? workbook.Sheets.cliente.AN61.v
                  : "",
                num: workbook.Sheets.cliente.AO61.v ? workbook.Sheets.cliente.AO61.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E62.v ? workbook.Sheets.cliente.E62.v : "",
              direccion: workbook.Sheets.cliente.H62.v
                ? workbook.Sheets.cliente.H62.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X62.v
                ? workbook.Sheets.cliente.X62.v
                : "",
              email: workbook.Sheets.cliente.AE62.v ? workbook.Sheets.cliente.AE62.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM62.v ? workbook.Sheets.cliente.AM62.v : "",
                telf: workbook.Sheets.cliente.AN62.v
                  ? workbook.Sheets.cliente.AN62.v
                  : "",
                num: workbook.Sheets.cliente.AO62.v ? workbook.Sheets.cliente.AO62.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E63.v ? workbook.Sheets.cliente.E63.v : "",
              direccion: workbook.Sheets.cliente.H63.v
                ? workbook.Sheets.cliente.H63.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X63.v
                ? workbook.Sheets.cliente.X63.v
                : "",
              email: workbook.Sheets.cliente.AE63.v ? workbook.Sheets.cliente.AE63.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM63.v ? workbook.Sheets.cliente.AM63.v : "",
                telf: workbook.Sheets.cliente.AN59.v
                  ? workbook.Sheets.cliente.AN59.v
                  : "",
                num: workbook.Sheets.cliente.AO63.v ? workbook.Sheets.cliente.AO63.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E64.v ? workbook.Sheets.cliente.E64.v : "",
              direccion: workbook.Sheets.cliente.H64.v
                ? workbook.Sheets.cliente.H64.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X64.v
                ? workbook.Sheets.cliente.X64.v
                : "",
              email: workbook.Sheets.cliente.AE64.v ? workbook.Sheets.cliente.AE64.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM64.v ? workbook.Sheets.cliente.AM64.v : "",
                telf: workbook.Sheets.cliente.AN64.v
                  ? workbook.Sheets.cliente.AN64.v
                  : "",
                num: workbook.Sheets.cliente.AO64.v ? workbook.Sheets.cliente.AO64.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E65.v ? workbook.Sheets.cliente.E65.v : "",
              direccion: workbook.Sheets.cliente.H65.v
                ? workbook.Sheets.cliente.H65.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X65.v
                ? workbook.Sheets.cliente.X65.v
                : "",
              email: workbook.Sheets.cliente.AE65.v ? workbook.Sheets.cliente.AE65.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM65.v ? workbook.Sheets.cliente.AM65.v : "",
                telf: workbook.Sheets.cliente.AN65.v
                  ? workbook.Sheets.cliente.AN65.v
                  : "",
                num: workbook.Sheets.cliente.AO65.v ? workbook.Sheets.cliente.AO65.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E66.v ? workbook.Sheets.cliente.E66.v : "",
              direccion: workbook.Sheets.cliente.H66.v
                ? workbook.Sheets.cliente.H66.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X66.v
                ? workbook.Sheets.cliente.X66.v
                : "",
              email: workbook.Sheets.cliente.AE66.v ? workbook.Sheets.cliente.AE66.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM66.v ? workbook.Sheets.cliente.AM66.v : "",
                telf: workbook.Sheets.cliente.AN66.v
                  ? workbook.Sheets.cliente.AN66.v
                  : "",
                num: workbook.Sheets.cliente.AO66.v ? workbook.Sheets.cliente.AO66.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E67.v ? workbook.Sheets.cliente.E67.v : "",
              direccion: workbook.Sheets.cliente.H67.v
                ? workbook.Sheets.cliente.H67.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X67.v
                ? workbook.Sheets.cliente.X67.v
                : "",
              email: workbook.Sheets.cliente.AE67.v ? workbook.Sheets.cliente.AE67.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM67.v ? workbook.Sheets.cliente.AM67.v : "",
                telf: workbook.Sheets.cliente.AN67.v
                  ? workbook.Sheets.cliente.AN67.v
                  : "",
                num: workbook.Sheets.cliente.AO67.v ? workbook.Sheets.cliente.AO67.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E68.v ? workbook.Sheets.cliente.E68.v : "",
              direccion: workbook.Sheets.cliente.H68.v
                ? workbook.Sheets.cliente.H68.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X68.v
                ? workbook.Sheets.cliente.X68.v
                : "",
              email: workbook.Sheets.cliente.AE68.v ? workbook.Sheets.cliente.AE68.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM68.v ? workbook.Sheets.cliente.AM68.v : "",
                telf: workbook.Sheets.cliente.AN68.v
                  ? workbook.Sheets.cliente.AN68.v
                  : "",
                num: workbook.Sheets.cliente.AO68.v ? workbook.Sheets.cliente.AO68.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E69.v ? workbook.Sheets.cliente.E69.v : "",
              direccion: workbook.Sheets.cliente.H69.v
                ? workbook.Sheets.cliente.H69.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X69.v
                ? workbook.Sheets.cliente.X69.v
                : "",
              email: workbook.Sheets.cliente.AE69.v ? workbook.Sheets.cliente.AE69.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM69.v ? workbook.Sheets.cliente.AM69.v : "",
                telf: workbook.Sheets.cliente.AN69.v
                  ? workbook.Sheets.cliente.AN69.v
                  : "",
                num: workbook.Sheets.cliente.AO69.v ? workbook.Sheets.cliente.AO69.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E70.v ? workbook.Sheets.cliente.E70.v : "",
              direccion: workbook.Sheets.cliente.H70.v
                ? workbook.Sheets.cliente.H70.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X70.v
                ? workbook.Sheets.cliente.X70.v
                : "",
              email: workbook.Sheets.cliente.AE70.v ? workbook.Sheets.cliente.AE70.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM70.v ? workbook.Sheets.cliente.AM70.v : "",
                telf: workbook.Sheets.cliente.AN70.v
                  ? workbook.Sheets.cliente.AN70.v
                  : "",
                num: workbook.Sheets.cliente.AO70.v ? workbook.Sheets.cliente.AO70.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E71.v ? workbook.Sheets.cliente.E71.v : "",
              direccion: workbook.Sheets.cliente.H71.v
                ? workbook.Sheets.cliente.H71.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X71.v
                ? workbook.Sheets.cliente.X71.v
                : "",
              email: workbook.Sheets.cliente.AE71.v ? workbook.Sheets.cliente.AE71.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM71.v ? workbook.Sheets.cliente.AM71.v : "",
                telf: workbook.Sheets.cliente.AN71.v
                  ? workbook.Sheets.cliente.AN71.v
                  : "",
                num: workbook.Sheets.cliente.AO71.v ? workbook.Sheets.cliente.AO71.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E72.v ? workbook.Sheets.cliente.E72.v : "",
              direccion: workbook.Sheets.cliente.H72.v
                ? workbook.Sheets.cliente.H72.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X72.v
                ? workbook.Sheets.cliente.X72.v
                : "",
              email: workbook.Sheets.cliente.AE72.v ? workbook.Sheets.cliente.AE72.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM72.v ? workbook.Sheets.cliente.AM72.v : "",
                telf: workbook.Sheets.cliente.AN72.v
                  ? workbook.Sheets.cliente.AN72.v
                  : "",
                num: workbook.Sheets.cliente.AO72.v ? workbook.Sheets.cliente.AO72.v : "",
              },
            },
            {
              nombre: workbook.Sheets.cliente.E73.v ? workbook.Sheets.cliente.E73.v : "",
              direccion: workbook.Sheets.cliente.H73.v
                ? workbook.Sheets.cliente.H73.v
                : "",
              nombreContacto: workbook.Sheets.cliente.X73.v
                ? workbook.Sheets.cliente.X73.v
                : "",
              email: workbook.Sheets.cliente.AE73.v ? workbook.Sheets.cliente.AE73.v : "",
              tel_ext: {
                cel: workbook.Sheets.cliente.AM73.v ? workbook.Sheets.cliente.AM73.v : "",
                telf: workbook.Sheets.cliente.AN73.v
                  ? workbook.Sheets.cliente.AN73.v
                  : "",
                num: workbook.Sheets.cliente.AO73.v ? workbook.Sheets.cliente.AO73.v : "",
              },
            },
          ],
          responsableAlta: workbook.Sheets.cliente.I80.v
            ? workbook.Sheets.cliente.I80.v
            : "",
          fecha: workbook.Sheets.cliente.U80.v ? workbook.Sheets.cliente.U80.v : "",
          ClienteID: workbook.Sheets.cliente.AD80.v ? workbook.Sheets.cliente.AD80.v : "",
          usuarioAlta: workbook.Sheets.cliente.U81.v ? workbook.Sheets.cliente.U81.v : "",
          passAlta: workbook.Sheets.cliente.AD81.v ? workbook.Sheets.cliente.AD81.v : "",
          requerimientosEspeciales: workbook.Sheets.cliente.D83.v
            ? workbook.Sheets.cliente.D83.v
            : "",
        };
        self.cliente = cli;
      };
      reader.readAsArrayBuffer(f);
    },
    async agregarFileCliente() {
      this.load_cliente_file = true;

      try {
        let { data } = await axios.post("/api/cargar-file-cliente", this.cliente);
        this.load_cliente_file = false;
        this.services.clienteServices.getlistclientes();
        this.file_cliente = {};
      } catch (e) {
        this.load_cliente_file = false;
        console.log(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.btnAddFileCliente {
  margin-top: -33px;
}
.btnAddCliente {
  margin-top: -30px;
}
</style>
