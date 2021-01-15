<template>
  <v-app>
    <v-card class="p-2">
      <v-card-title>Cliente</v-card-title>
      <v-toolbar flat color="white">
        <v-text-field
          label="Buscar Cliente"
          placeholder=""
          v-model="search_cli"
          outlined
          small
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-file-input
          label="Seleccionar documento (.xls | .xlsx)"
          outlined
          v-model="file_cliente"
          @change="handleFile"
        />
        <v-btn
          icon
          dark
          color="primary"
          @click="agregarFileCliente"
          :loading="load_cliente_file"
        >
          <v-icon dark large>mdi-file-upload</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          @click="$store.commit('SetDialogAddCliente', true)"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
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
          align: "end",
          sortable: false,
          sortable: true,
          value: "id",
        },
        {
          text: "Nombre / Razon Social",
          align: "center",
          sortable: false,
          value: "razon_social",
        },
        {
          text: "Direccion Fiscal",
          align: "center",
          sortable: false,
          value: "domicilio_fiscal",
        },
        {
          text: "R.F.C",
          align: "center",
          sortable: false,
          value: "rfc",
        },
        {
          text: "Teléfono",
          align: "center",
          sortable: false,
          value: "telefono_empresa",
        },
        {
          text: "Correo Electronico para la factura",
          align: "center",
          sortable: false,
          value: "correo_electronico_para_el_envio_de_factura",
        },
        {
          text: "Nombre Contacto",
          align: "center",
          sortable: false,
          value: "nombre_contacto",
        },
        {
          text: "IVA (%)",
          align: "center",
          sortable: false,
          value: "iva",
        },
        {
          text: "Agregado",
          align: "center",
          sortable: false,
          value: "created_at",
        },
        {
          text: "Acción",
          align: "center",
          sortable: false,
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
      this.$store.commit("setCliente", cli);
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
          personaDeContacto: {
            nombre: workbook.Sheets.cliente.H12.v,
            celular: workbook.Sheets.cliente.Y12.v,
            TelExt: workbook.Sheets.cliente.AJ12.v,
            email: workbook.Sheets.cliente.H13.v,
            puesto: workbook.Sheets.cliente.Y13.v,
          },
          ContactoAdicionales: {
            compras: {
              compras: workbook.Sheets.cliente.H16.v,
              email: workbook.Sheets.cliente.U16.v,
              telf: workbook.Sheets.cliente.AJ16.v,
            },
            pagos: {
              compras: workbook.Sheets.cliente.H17.v,
              email: workbook.Sheets.cliente.U17.v,
              telf: workbook.Sheets.cliente.AJ17.v,
            },
            almacen: {
              compras: workbook.Sheets.cliente.H18.v,
              email: workbook.Sheets.cliente.U18.v,
              telf: workbook.Sheets.cliente.AJ18.v,
            },
          },
          DatosFiscalesYRequerimientosParaFacturacion: {
            razonSocial: workbook.Sheets.cliente.H21.v,
            rfc: workbook.Sheets.cliente.AJ21.v,
            domicilioFiscalParaFacturacion: {
              calle: workbook.Sheets.cliente.H23.v,
              numero: workbook.Sheets.cliente.Y23.v,
              colonia: workbook.Sheets.cliente.AJ23.v,
              ciudad: workbook.Sheets.cliente.H24.v,
              estado: workbook.Sheets.cliente.Y24.v,
              cp: workbook.Sheets.cliente.AJ24.v,
              emailParaEnvioFactura: workbook.Sheets.cliente.AF25.v,
              cfdi: workbook.Sheets.cliente.Y26.v,
            },
          },
          revisionDeFacturaYpago: {
            descripcion: workbook.Sheets.cliente.D32.v,
            diasDeRevisionDeFactura: {
              dias: workbook.Sheets.cliente.L34.v,
              horas: workbook.Sheets.cliente.AC34.v,
            },
            diasDeConfirmacionnDepago: {
              dias: workbook.Sheets.cliente.L35.v,
              horas: workbook.Sheets.cliente.AC35.v,
            },
            diasDepago: {
              dias: workbook.Sheets.cliente.L36.v,
              horas: workbook.Sheets.cliente.AC36.v,
            },
            linkPortal: workbook.Sheets.cliente.H38.v,
            soporteTecnicoEmail: workbook.Sheets.cliente.AJ39.v,
            BancoOrdenante: workbook.Sheets.cliente.O41.v,
            cuentaDeBanco: workbook.Sheets.cliente.AJ41.v,
            informacionAdicionalDePago: workbook.Sheets.cliente.D44.v,
          },
          listaDeAccesoAlaPlata: [
            workbook.Sheets.cliente.D47.v,
            workbook.Sheets.cliente.D48.v,
            workbook.Sheets.cliente.D49.v,
            workbook.Sheets.cliente.D50.v,
            workbook.Sheets.cliente.D51.v,
            workbook.Sheets.cliente.D52.v,
            workbook.Sheets.cliente.D53.v,
            workbook.Sheets.cliente.D54.v,
          ],
          sucursales: [
            {
              nombre: workbook.Sheets.cliente.E59.v,
              direccion: workbook.Sheets.cliente.H59.v,
              nombreContacto: workbook.Sheets.cliente.X59.v,
              email: workbook.Sheets.cliente.AE59.v,
              tel_ext: workbook.Sheets.cliente.AO59.v,
            },
            {
              nombre: workbook.Sheets.cliente.E60.v,
              direccion: workbook.Sheets.cliente.H60.v,
              nombreContacto: workbook.Sheets.cliente.X60.v,
              email: workbook.Sheets.cliente.AE60.v,
              tel_ext: workbook.Sheets.cliente.AO60.v,
            },
            {
              nombre: workbook.Sheets.cliente.E61.v,
              direccion: workbook.Sheets.cliente.H61.v,
              nombreContacto: workbook.Sheets.cliente.X61.v,
              email: workbook.Sheets.cliente.AE61.v,
              tel_ext: workbook.Sheets.cliente.AO61.v,
            },
            {
              nombre: workbook.Sheets.cliente.E62.v,
              direccion: workbook.Sheets.cliente.H62.v,
              nombreContacto: workbook.Sheets.cliente.X62.v,
              email: workbook.Sheets.cliente.AE62.v,
              tel_ext: workbook.Sheets.cliente.AO62.v,
            },
            {
              nombre: workbook.Sheets.cliente.E63.v,
              direccion: workbook.Sheets.cliente.H63.v,
              nombreContacto: workbook.Sheets.cliente.X63.v,
              email: workbook.Sheets.cliente.AE63.v,
              tel_ext: workbook.Sheets.cliente.AO63.v,
            },
            {
              nombre: workbook.Sheets.cliente.E64.v,
              direccion: workbook.Sheets.cliente.H64.v,
              nombreContacto: workbook.Sheets.cliente.X64.v,
              email: workbook.Sheets.cliente.AE64.v,
              tel_ext: workbook.Sheets.cliente.AO64.v,
            },
            {
              nombre: workbook.Sheets.cliente.E65.v,
              direccion: workbook.Sheets.cliente.H65.v,
              nombreContacto: workbook.Sheets.cliente.X65.v,
              email: workbook.Sheets.cliente.AE65.v,
              tel_ext: workbook.Sheets.cliente.AO65.v,
            },
            {
              nombre: workbook.Sheets.cliente.E66.v,
              direccion: workbook.Sheets.cliente.H66.v,
              nombreContacto: workbook.Sheets.cliente.X66.v,
              email: workbook.Sheets.cliente.AE66.v,
              tel_ext: workbook.Sheets.cliente.AO66.v,
            },
            {
              nombre: workbook.Sheets.cliente.E67.v,
              direccion: workbook.Sheets.cliente.H67.v,
              nombreContacto: workbook.Sheets.cliente.X67.v,
              email: workbook.Sheets.cliente.AE67.v,
              tel_ext: workbook.Sheets.cliente.AO67.v,
            },
            {
              nombre: workbook.Sheets.cliente.E68.v,
              direccion: workbook.Sheets.cliente.H68.v,
              nombreContacto: workbook.Sheets.cliente.X68.v,
              email: workbook.Sheets.cliente.AE68.v,
              tel_ext: workbook.Sheets.cliente.AO68.v,
            },
            {
              nombre: workbook.Sheets.cliente.E69.v,
              direccion: workbook.Sheets.cliente.H69.v,
              nombreContacto: workbook.Sheets.cliente.X69.v,
              email: workbook.Sheets.cliente.AE69.v,
              tel_ext: workbook.Sheets.cliente.AO69.v,
            },
            {
              nombre: workbook.Sheets.cliente.E70.v,
              direccion: workbook.Sheets.cliente.H70.v,
              nombreContacto: workbook.Sheets.cliente.X70.v,
              email: workbook.Sheets.cliente.AE70.v,
              tel_ext: workbook.Sheets.cliente.AO70.v,
            },
            {
              nombre: workbook.Sheets.cliente.E71.v,
              direccion: workbook.Sheets.cliente.H71.v,
              nombreContacto: workbook.Sheets.cliente.X71.v,
              email: workbook.Sheets.cliente.AE71.v,
              tel_ext: workbook.Sheets.cliente.AO71.v,
            },
            {
              nombre: workbook.Sheets.cliente.E72.v,
              direccion: workbook.Sheets.cliente.H72.v,
              nombreContacto: workbook.Sheets.cliente.X72.v,
              email: workbook.Sheets.cliente.AE72.v,
              tel_ext: workbook.Sheets.cliente.AO72.v,
            },
            {
              nombre: workbook.Sheets.cliente.E73.v,
              direccion: workbook.Sheets.cliente.H73.v,
              nombreContacto: workbook.Sheets.cliente.X73.v,
              email: workbook.Sheets.cliente.AE73.v,
              tel_ext: workbook.Sheets.cliente.AO73.v,
            },
          ],
        };
        self.cliente = cli;
      };
      reader.readAsArrayBuffer(f);
    },
    async agregarFileCliente() {
      this.load_cliente_file = true;

      //   var dataCliente = new FormData();
      //   dataCliente.append("file_cliente", this.file_cliente);
      try {
        let { data } = await axios.post("/api/cargar-file-cliente", this.cliente);
        this.load_cliente_file = false;
        this.services.clienteServices.getlistclientes();
      } catch (e) {
        this.load_cliente_file = false;
        console.log(e);
      }
    },
  },
};
</script>
