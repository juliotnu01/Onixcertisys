(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_datosGenerales_cliente_indexClientecomponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/datosGenerales/cliente/indexClientecomponent.vue */ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue");
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    cliente: _config_datosGenerales_cliente_indexClientecomponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_modalAddClienteComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalAddClienteComponent.vue */ "./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue");
/* harmony import */ var _modals_modalEditClienteComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modalEditClienteComponent.vue */ "./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-add": _modals_modalAddClienteComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "modal-edit": _modals_modalEditClienteComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;

    return {
      headers_cli: [(_ref = {
        text: "ID",
        align: "start",
        sortable: false
      }, _defineProperty(_ref, "sortable", true), _defineProperty(_ref, "value", "id"), _ref), (_ref2 = {
        text: "Nombre / Razon social",
        align: "start",
        sortable: false
      }, _defineProperty(_ref2, "sortable", true), _defineProperty(_ref2, "value", "datos_fisicos_requeremientos_facturacion_razon_social"), _ref2), (_ref3 = {
        text: "Direccion",
        align: "start",
        sortable: false
      }, _defineProperty(_ref3, "sortable", true), _defineProperty(_ref3, "value", "direccion_fiscal"), _ref3), (_ref4 = {
        text: "R.F.C.",
        align: "start",
        sortable: false
      }, _defineProperty(_ref4, "sortable", true), _defineProperty(_ref4, "value", "datos_fisicos_requeremientos_facturacion_rfc"), _ref4), (_ref5 = {
        text: "Telefonos",
        align: "start",
        sortable: false
      }, _defineProperty(_ref5, "sortable", true), _defineProperty(_ref5, "value", "telefonos"), _ref5), (_ref6 = {
        text: "Correo Electronico para el envio de la factura",
        align: "start",
        sortable: false
      }, _defineProperty(_ref6, "sortable", true), _defineProperty(_ref6, "value", "correo_envio_factura"), _ref6), (_ref7 = {
        text: "Nombres contactos",
        align: "start",
        sortable: false
      }, _defineProperty(_ref7, "sortable", true), _defineProperty(_ref7, "value", "contacto"), _ref7), (_ref8 = {
        text: "Accion",
        align: "start",
        sortable: false
      }, _defineProperty(_ref8, "sortable", true), _defineProperty(_ref8, "value", "accion"), _ref8)],
      search_cli: "",
      file_cliente: {},
      load_cliente_file: false,
      cliente: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "clientes"])),
  mounted: function mounted() {
    this.services.clienteServices.getlistclientes();
  },
  methods: {
    onChange: function onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
    },
    EditarCliente: function EditarCliente(cli) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {};
                data = {
                  id: cli.id,
                  servicio_solicitado: JSON.parse(cli.servicio_solicitado),
                  persona_de_contacto: {
                    nombre: cli.persona_de_contacto_nombre,
                    celular: cli.persona_de_contacto_celular,
                    tel_ext: cli.persona_de_contacto_te_ext,
                    email: cli.persona_de_contacto_email,
                    puesto: cli.persona_de_contacto_puesto
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
                    telf_almacen: cli.contacto_adicionales_telf
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
                      terminosDePago: cli.termino_de_pago
                    }
                  },
                  revisionDeFacturasYpagos: {
                    descripcionRevisionFactura: cli.revision_de_factura_pagos_descripcion_revision_factura,
                    diasRevisionFactura: cli.revision_de_factura_pagos_dias_revision_factura,
                    horaDiasRevisionFactura: cli.revision_de_factura_pagos_hora_revision_factura,
                    diasDeConfirmacionDePago: cli.revision_de_factura_pagos_dias_confirmacion_pagos,
                    horaDiasDeConfirmacionDePago: cli.revision_de_factura_pagos_hora_confirmacion_pagos,
                    diasDePago: cli.revision_de_factura_pagos_dias_pagos,
                    horaDiasDePago: cli.revision_de_factura_pagos_hora_pagos,
                    linkPortal: cli.link_portal,
                    usuarioContrasena: cli.usuario_contraseña,
                    indicacionesAltaFacturaPortal: cli.indiciones_alta_factura,
                    correoSoporteTecnicoPortal: cli.correo_soporte_tecnico_portal,
                    bancoOrdenante: cli.banco_ordenante,
                    cuentaDePago: cli.cuenta_de_pago,
                    complementoDePagoSeEnviaPorEmail: cli.complemento_de_pago_se_envia_por_email,
                    informacionAdicionalComplementoDePago: cli.informacion_adicional_complemento_de_pago,
                    listaRequerimientoDeAccesoAlaPlata: cli.lista_requerimiento_acceso_planta
                  },
                  iva: cli.iva,
                  sucursales: cli.has_sucursal
                };

                _this.$store.commit("setCliente", data);

                _this.$store.commit("setDialogEditCliente", true);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    EliminarCliente: function EliminarCliente(cli) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.services.clienteServices.EliminarCliente(cli);

                _this2.services.clienteServices.getlistclientes();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleFile: function handleFile(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var files, f, reader, self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                files = _this3.file_cliente, f = files;
                reader = new FileReader();
                self = _this3;

                reader.onload = function (e) {
                  var data = new Uint8Array(e.target.result);
                  var workbook = xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.read(data, {
                    type: "array",
                    bookType: "xlsm",
                    bookVBA: true,
                    cellStyles: true,
                    cellNF: true
                  });
                  var cli = {
                    serviciosSolicitados: {
                      calibracion: workbook.Sheets.cliente.I8.v ? workbook.Sheets.cliente.I8.v : "",
                      venta: workbook.Sheets.cliente.O8.v ? workbook.Sheets.cliente.O8.v : "",
                      mantenimiento: workbook.Sheets.cliente.T8.v ? workbook.Sheets.cliente.T8.v : "",
                      capacitación: workbook.Sheets.cliente.Z8.v ? workbook.Sheets.cliente.Z8.v : ""
                    },
                    personaDeContacto: {
                      nombre: workbook.Sheets.cliente.H11.v ? workbook.Sheets.cliente.H11.v : "",
                      celular: workbook.Sheets.cliente.Y11.v ? workbook.Sheets.cliente.Y11.v : "",
                      TelExt: workbook.Sheets.cliente.AJ11.v ? workbook.Sheets.cliente.AJ11.v : "",
                      email: workbook.Sheets.cliente.H12.v ? workbook.Sheets.cliente.H12.v : "",
                      puesto: workbook.Sheets.cliente.Y12.v ? workbook.Sheets.cliente.Y12.v : ""
                    },
                    ContactoAdicionales: {
                      compras: {
                        compras: workbook.Sheets.cliente.H15.v ? workbook.Sheets.cliente.H15.v : "",
                        email: workbook.Sheets.cliente.U15.v ? workbook.Sheets.cliente.U15.v : "",
                        telf: workbook.Sheets.cliente.AJ15.v ? workbook.Sheets.cliente.AJ15.v : ""
                      },
                      pagos: {
                        compras: workbook.Sheets.cliente.H16.v ? workbook.Sheets.cliente.H16.v : "",
                        email: workbook.Sheets.cliente.U16.v ? workbook.Sheets.cliente.U16.v : "",
                        telf: workbook.Sheets.cliente.AJ16.v ? workbook.Sheets.cliente.AJ16.v : ""
                      },
                      almacen: {
                        compras: workbook.Sheets.cliente.H17.v ? workbook.Sheets.cliente.H17.v : "",
                        email: workbook.Sheets.cliente.U17.v ? workbook.Sheets.cliente.U17.v : "",
                        telf: workbook.Sheets.cliente.AJ17.v ? workbook.Sheets.cliente.AJ17.v : ""
                      }
                    },
                    DatosFiscalesYRequerimientosParaFacturacion: {
                      razonSocial: workbook.Sheets.cliente.H20.v ? workbook.Sheets.cliente.H20.v : "",
                      rfc: workbook.Sheets.cliente.AJ20.v ? workbook.Sheets.cliente.AJ20.v : "",
                      domicilioFiscalParaFacturacion: {
                        calle: workbook.Sheets.cliente.H22.v ? workbook.Sheets.cliente.H22.v : "",
                        numero: workbook.Sheets.cliente.Y22.v ? workbook.Sheets.cliente.Y22.v : "",
                        colonia: workbook.Sheets.cliente.AJ22.v ? workbook.Sheets.cliente.AJ22.v : "",
                        ciudad: workbook.Sheets.cliente.H23.v ? workbook.Sheets.cliente.H23.v : "",
                        estado: workbook.Sheets.cliente.Y23.v ? workbook.Sheets.cliente.Y23.v : "",
                        cp: workbook.Sheets.cliente.AJ23.v ? workbook.Sheets.cliente.AJ23.v : "",
                        formaDePago: {
                          transferenciaElectronica: workbook.Sheets.cliente.H24.v ? workbook.Sheets.cliente.H24.v : "",
                          depositoEnEfectivo: workbook.Sheets.cliente.P24.v ? workbook.Sheets.cliente.P24.v : "",
                          cheque: workbook.Sheets.cliente.U24.v ? workbook.Sheets.cliente.U24.v : ""
                        },
                        emailParaEnvioFactura: workbook.Sheets.cliente.AF24.v ? workbook.Sheets.cliente.AF24.v : "",
                        monedaFactura: {
                          pesosMexicano: workbook.Sheets.cliente.H25.v ? workbook.Sheets.cliente.H25.v : "",
                          dolares: workbook.Sheets.cliente.P25.v ? workbook.Sheets.cliente.P25.v : ""
                        },
                        cfdi: workbook.Sheets.cliente.Y25.v ? workbook.Sheets.cliente.Y25.v : "",
                        metodoDePago: {
                          pagoParcialesDiferidos: workbook.Sheets.cliente.H26.v ? workbook.Sheets.cliente.H26.v : "",
                          pagoEnUnaSolaExhibicion: workbook.Sheets.cliente.S26.v ? workbook.Sheets.cliente.S26.v : ""
                        },
                        TerminosDePago: {
                          treintaDias: workbook.Sheets.cliente.L27.v ? workbook.Sheets.cliente.L27.v : "",
                          quinceDias: workbook.Sheets.cliente.R27.v ? workbook.Sheets.cliente.R27.v : "",
                          contado: workbook.Sheets.cliente.X27.v ? workbook.Sheets.cliente.X27.v : ""
                        }
                      }
                    },
                    revisionDeFacturaYpago: {
                      descripcion: workbook.Sheets.cliente.D31.v ? workbook.Sheets.cliente.D31.v : "",
                      diasDeRevisionDeFactura: {
                        dias: workbook.Sheets.cliente.L33.v ? workbook.Sheets.cliente.L33.v : "",
                        horas: workbook.Sheets.cliente.AC33.v ? workbook.Sheets.cliente.AC33.v : ""
                      },
                      diasDeConfirmacionnDepago: {
                        dias: workbook.Sheets.cliente.L34.v ? workbook.Sheets.cliente.L34.v : "",
                        horas: workbook.Sheets.cliente.AC34.v ? workbook.Sheets.cliente.AC34.v : ""
                      },
                      diasDepago: {
                        dias: workbook.Sheets.cliente.L35.v ? workbook.Sheets.cliente.L35.v : "",
                        horas: workbook.Sheets.cliente.AC35.v ? workbook.Sheets.cliente.AC35.v : ""
                      },
                      linkPortal: workbook.Sheets.cliente.H37.v ? workbook.Sheets.cliente.H37.v : "",
                      UsuarioContraseña: {
                        seEnviaPorEmail: workbook.Sheets.cliente.AD37.v ? workbook.Sheets.cliente.AD37.v : "",
                        seOptienePorElPortal: workbook.Sheets.cliente.AK37.v ? workbook.Sheets.cliente.AK37.v : ""
                      },
                      altaDefacturas: {
                        seEnviaPorEmail: workbook.Sheets.cliente.O38.v ? workbook.Sheets.cliente.O38.v : "",
                        seOptienePorElPortal: workbook.Sheets.cliente.U38.v ? workbook.Sheets.cliente.U38.v : ""
                      },
                      soporteTecnicoEmail: workbook.Sheets.cliente.AJ38.v ? workbook.Sheets.cliente.AJ38.v : "",
                      BancoOrdenante: workbook.Sheets.cliente.O40.v ? workbook.Sheets.cliente.O40.v : "",
                      cuentaDeBanco: workbook.Sheets.cliente.AJ40.v ? workbook.Sheets.cliente.AJ40.v : "",
                      informacionAdicionalDePago: workbook.Sheets.cliente.D43.v ? workbook.Sheets.cliente.D43.v : ""
                    },
                    listaDeAccesoAlaPlata: workbook.Sheets.cliente.D47.v ? workbook.Sheets.cliente.D47.v : "",
                    sucursales: [{
                      nombre: workbook.Sheets.cliente.E59.v ? workbook.Sheets.cliente.E59.v : "",
                      direccion: workbook.Sheets.cliente.H59.v ? workbook.Sheets.cliente.H59.v : "",
                      nombreContacto: workbook.Sheets.cliente.X59.v ? workbook.Sheets.cliente.X59.v : "",
                      email: workbook.Sheets.cliente.AE59.v ? workbook.Sheets.cliente.AE59.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM59.v ? workbook.Sheets.cliente.AM59.v : "",
                        telf: workbook.Sheets.cliente.AN59.v ? workbook.Sheets.cliente.AN59.v : "",
                        num: workbook.Sheets.cliente.AO59.v ? workbook.Sheets.cliente.AO59.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E60.v ? workbook.Sheets.cliente.E60.v : "",
                      direccion: workbook.Sheets.cliente.H60.v ? workbook.Sheets.cliente.H60.v : "",
                      nombreContacto: workbook.Sheets.cliente.X60.v ? workbook.Sheets.cliente.X60.v : "",
                      email: workbook.Sheets.cliente.AE60.v ? workbook.Sheets.cliente.AE60.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM60.v ? workbook.Sheets.cliente.AM60.v : "",
                        telf: workbook.Sheets.cliente.AN60.v ? workbook.Sheets.cliente.AN60.v : "",
                        num: workbook.Sheets.cliente.AO60.v ? workbook.Sheets.cliente.AO60.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E61.v ? workbook.Sheets.cliente.E61.v : "",
                      direccion: workbook.Sheets.cliente.H61.v ? workbook.Sheets.cliente.H61.v : "",
                      nombreContacto: workbook.Sheets.cliente.X61.v ? workbook.Sheets.cliente.X61.v : "",
                      email: workbook.Sheets.cliente.AE61.v ? workbook.Sheets.cliente.AE61.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM61.v ? workbook.Sheets.cliente.AM61.v : "",
                        telf: workbook.Sheets.cliente.AN61.v ? workbook.Sheets.cliente.AN61.v : "",
                        num: workbook.Sheets.cliente.AO61.v ? workbook.Sheets.cliente.AO61.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E62.v ? workbook.Sheets.cliente.E62.v : "",
                      direccion: workbook.Sheets.cliente.H62.v ? workbook.Sheets.cliente.H62.v : "",
                      nombreContacto: workbook.Sheets.cliente.X62.v ? workbook.Sheets.cliente.X62.v : "",
                      email: workbook.Sheets.cliente.AE62.v ? workbook.Sheets.cliente.AE62.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM62.v ? workbook.Sheets.cliente.AM62.v : "",
                        telf: workbook.Sheets.cliente.AN62.v ? workbook.Sheets.cliente.AN62.v : "",
                        num: workbook.Sheets.cliente.AO62.v ? workbook.Sheets.cliente.AO62.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E63.v ? workbook.Sheets.cliente.E63.v : "",
                      direccion: workbook.Sheets.cliente.H63.v ? workbook.Sheets.cliente.H63.v : "",
                      nombreContacto: workbook.Sheets.cliente.X63.v ? workbook.Sheets.cliente.X63.v : "",
                      email: workbook.Sheets.cliente.AE63.v ? workbook.Sheets.cliente.AE63.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM63.v ? workbook.Sheets.cliente.AM63.v : "",
                        telf: workbook.Sheets.cliente.AN59.v ? workbook.Sheets.cliente.AN59.v : "",
                        num: workbook.Sheets.cliente.AO63.v ? workbook.Sheets.cliente.AO63.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E64.v ? workbook.Sheets.cliente.E64.v : "",
                      direccion: workbook.Sheets.cliente.H64.v ? workbook.Sheets.cliente.H64.v : "",
                      nombreContacto: workbook.Sheets.cliente.X64.v ? workbook.Sheets.cliente.X64.v : "",
                      email: workbook.Sheets.cliente.AE64.v ? workbook.Sheets.cliente.AE64.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM64.v ? workbook.Sheets.cliente.AM64.v : "",
                        telf: workbook.Sheets.cliente.AN64.v ? workbook.Sheets.cliente.AN64.v : "",
                        num: workbook.Sheets.cliente.AO64.v ? workbook.Sheets.cliente.AO64.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E65.v ? workbook.Sheets.cliente.E65.v : "",
                      direccion: workbook.Sheets.cliente.H65.v ? workbook.Sheets.cliente.H65.v : "",
                      nombreContacto: workbook.Sheets.cliente.X65.v ? workbook.Sheets.cliente.X65.v : "",
                      email: workbook.Sheets.cliente.AE65.v ? workbook.Sheets.cliente.AE65.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM65.v ? workbook.Sheets.cliente.AM65.v : "",
                        telf: workbook.Sheets.cliente.AN65.v ? workbook.Sheets.cliente.AN65.v : "",
                        num: workbook.Sheets.cliente.AO65.v ? workbook.Sheets.cliente.AO65.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E66.v ? workbook.Sheets.cliente.E66.v : "",
                      direccion: workbook.Sheets.cliente.H66.v ? workbook.Sheets.cliente.H66.v : "",
                      nombreContacto: workbook.Sheets.cliente.X66.v ? workbook.Sheets.cliente.X66.v : "",
                      email: workbook.Sheets.cliente.AE66.v ? workbook.Sheets.cliente.AE66.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM66.v ? workbook.Sheets.cliente.AM66.v : "",
                        telf: workbook.Sheets.cliente.AN66.v ? workbook.Sheets.cliente.AN66.v : "",
                        num: workbook.Sheets.cliente.AO66.v ? workbook.Sheets.cliente.AO66.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E67.v ? workbook.Sheets.cliente.E67.v : "",
                      direccion: workbook.Sheets.cliente.H67.v ? workbook.Sheets.cliente.H67.v : "",
                      nombreContacto: workbook.Sheets.cliente.X67.v ? workbook.Sheets.cliente.X67.v : "",
                      email: workbook.Sheets.cliente.AE67.v ? workbook.Sheets.cliente.AE67.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM67.v ? workbook.Sheets.cliente.AM67.v : "",
                        telf: workbook.Sheets.cliente.AN67.v ? workbook.Sheets.cliente.AN67.v : "",
                        num: workbook.Sheets.cliente.AO67.v ? workbook.Sheets.cliente.AO67.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E68.v ? workbook.Sheets.cliente.E68.v : "",
                      direccion: workbook.Sheets.cliente.H68.v ? workbook.Sheets.cliente.H68.v : "",
                      nombreContacto: workbook.Sheets.cliente.X68.v ? workbook.Sheets.cliente.X68.v : "",
                      email: workbook.Sheets.cliente.AE68.v ? workbook.Sheets.cliente.AE68.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM68.v ? workbook.Sheets.cliente.AM68.v : "",
                        telf: workbook.Sheets.cliente.AN68.v ? workbook.Sheets.cliente.AN68.v : "",
                        num: workbook.Sheets.cliente.AO68.v ? workbook.Sheets.cliente.AO68.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E69.v ? workbook.Sheets.cliente.E69.v : "",
                      direccion: workbook.Sheets.cliente.H69.v ? workbook.Sheets.cliente.H69.v : "",
                      nombreContacto: workbook.Sheets.cliente.X69.v ? workbook.Sheets.cliente.X69.v : "",
                      email: workbook.Sheets.cliente.AE69.v ? workbook.Sheets.cliente.AE69.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM69.v ? workbook.Sheets.cliente.AM69.v : "",
                        telf: workbook.Sheets.cliente.AN69.v ? workbook.Sheets.cliente.AN69.v : "",
                        num: workbook.Sheets.cliente.AO69.v ? workbook.Sheets.cliente.AO69.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E70.v ? workbook.Sheets.cliente.E70.v : "",
                      direccion: workbook.Sheets.cliente.H70.v ? workbook.Sheets.cliente.H70.v : "",
                      nombreContacto: workbook.Sheets.cliente.X70.v ? workbook.Sheets.cliente.X70.v : "",
                      email: workbook.Sheets.cliente.AE70.v ? workbook.Sheets.cliente.AE70.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM70.v ? workbook.Sheets.cliente.AM70.v : "",
                        telf: workbook.Sheets.cliente.AN70.v ? workbook.Sheets.cliente.AN70.v : "",
                        num: workbook.Sheets.cliente.AO70.v ? workbook.Sheets.cliente.AO70.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E71.v ? workbook.Sheets.cliente.E71.v : "",
                      direccion: workbook.Sheets.cliente.H71.v ? workbook.Sheets.cliente.H71.v : "",
                      nombreContacto: workbook.Sheets.cliente.X71.v ? workbook.Sheets.cliente.X71.v : "",
                      email: workbook.Sheets.cliente.AE71.v ? workbook.Sheets.cliente.AE71.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM71.v ? workbook.Sheets.cliente.AM71.v : "",
                        telf: workbook.Sheets.cliente.AN71.v ? workbook.Sheets.cliente.AN71.v : "",
                        num: workbook.Sheets.cliente.AO71.v ? workbook.Sheets.cliente.AO71.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E72.v ? workbook.Sheets.cliente.E72.v : "",
                      direccion: workbook.Sheets.cliente.H72.v ? workbook.Sheets.cliente.H72.v : "",
                      nombreContacto: workbook.Sheets.cliente.X72.v ? workbook.Sheets.cliente.X72.v : "",
                      email: workbook.Sheets.cliente.AE72.v ? workbook.Sheets.cliente.AE72.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM72.v ? workbook.Sheets.cliente.AM72.v : "",
                        telf: workbook.Sheets.cliente.AN72.v ? workbook.Sheets.cliente.AN72.v : "",
                        num: workbook.Sheets.cliente.AO72.v ? workbook.Sheets.cliente.AO72.v : ""
                      }
                    }, {
                      nombre: workbook.Sheets.cliente.E73.v ? workbook.Sheets.cliente.E73.v : "",
                      direccion: workbook.Sheets.cliente.H73.v ? workbook.Sheets.cliente.H73.v : "",
                      nombreContacto: workbook.Sheets.cliente.X73.v ? workbook.Sheets.cliente.X73.v : "",
                      email: workbook.Sheets.cliente.AE73.v ? workbook.Sheets.cliente.AE73.v : "",
                      tel_ext: {
                        cel: workbook.Sheets.cliente.AM73.v ? workbook.Sheets.cliente.AM73.v : "",
                        telf: workbook.Sheets.cliente.AN73.v ? workbook.Sheets.cliente.AN73.v : "",
                        num: workbook.Sheets.cliente.AO73.v ? workbook.Sheets.cliente.AO73.v : ""
                      }
                    }],
                    responsableAlta: workbook.Sheets.cliente.I80.v ? workbook.Sheets.cliente.I80.v : "",
                    fecha: workbook.Sheets.cliente.U80.v ? workbook.Sheets.cliente.U80.v : "",
                    ClienteID: workbook.Sheets.cliente.AD80.v ? workbook.Sheets.cliente.AD80.v : "",
                    usuarioAlta: workbook.Sheets.cliente.U81.v ? workbook.Sheets.cliente.U81.v : "",
                    passAlta: workbook.Sheets.cliente.AD81.v ? workbook.Sheets.cliente.AD81.v : "",
                    requerimientosEspeciales: workbook.Sheets.cliente.D83.v ? workbook.Sheets.cliente.D83.v : ""
                  };
                  self.cliente = cli;
                };

                reader.readAsArrayBuffer(f);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    agregarFileCliente: function agregarFileCliente() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.load_cliente_file = true;
                _context4.prev = 1;
                _context4.next = 4;
                return axios.post("/api/cargar-file-cliente", _this4.cliente);

              case 4:
                _yield$axios$post = _context4.sent;
                data = _yield$axios$post.data;
                _this4.load_cliente_file = false;

                _this4.services.clienteServices.getlistclientes();

                _this4.file_cliente = {};
                _context4.next = 15;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                _this4.load_cliente_file = false;
                console.log(_context4.t0);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../notificacion/indexComponentNotificacion.vue */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'notificacion': _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      headers_sucursal: [{
        text: 'Nombre sucursal',
        align: 'center',
        value: 'nombre'
      }, {
        text: 'Direccion sucursal',
        align: 'center',
        value: 'direccion'
      }, {
        text: 'Contacto sucursal',
        align: 'center',
        value: 'contacto'
      }, {
        text: 'Correo contacto',
        align: 'center',
        value: 'correo'
      }, {
        text: 'Telefono contacto',
        align: 'center',
        value: 'telefono'
      }],
      items_sucursales: [],
      items_servicios_solicitados: [{
        name: "Calibracion",
        value: 1
      }, {
        name: "Venta",
        value: 2
      }, {
        name: "Mantenimiento",
        value: 3
      }, {
        name: "Capacitación",
        value: 4
      }],
      items_forma_de_pago: [{
        name: "transferencia electronica",
        value: 1
      }, {
        name: "deposito en efectivo",
        value: 2
      }, {
        name: "cheque",
        value: 3
      }],
      items_terminos_de_pago: [{
        name: "credito de 30 dias",
        value: 1
      }, {
        name: "credito de 15 dias",
        value: 2
      }, {
        name: "contado",
        value: 3
      }],
      sucursal: {
        nombre: "",
        direccion: "",
        contacto: "",
        correo: "",
        telefono: ""
      },
      model: {
        servicio_solicitado: [],
        persona_de_contacto: {
          nombre: "",
          celular: "",
          tel_ext: "",
          email: "",
          puesto: ""
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
          telf_almacen: ""
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
            terminosDePago: []
          }
        },
        revisionDeFacturasYpagos: {
          descripcionRevisionFactura: '',
          diasRevisionFactura: '',
          horaDiasRevisionFactura: '',
          diasDeConfirmacionDePago: '',
          horaDiasDeConfirmacionDePago: '',
          diasDePago: '',
          horaDiasDePago: '',
          linkPortal: '',
          usuarioContrasena: [],
          indicacionesAltaFacturaPortal: [],
          correoSoporteTecnicoPortal: '',
          bancoOrdenante: '',
          cuentaDePago: '',
          complementoDePagoSeEnviaPorEmail: '',
          informacionAdicionalComplementoDePago: ''
        },
        listaRequerimientoDeAccesoAlaPlata: {},
        sucursales: []
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_add_clientes", "empleados", "ciudades_estados_paises", "list_metodo_de_pago", "listCondicionDePago", "monedas"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_add_clientes;
      },
      set: function set(val) {
        this.$store.commit("SetDialogAddCliente", val);
      }
    }
  }),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.services.metodoDePagoServices.getlistMetodoDePago();

            case 2:
              _context.next = 4;
              return _this.services.condicionDePagoServices.getlistCondicionDePago();

            case 4:
              _context.next = 6;
              return _this.services.monedaServices.getlistMonedas();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    addCliente: function addCliente() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var model_notificacion;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.services.clienteServices.agregarCliente(_this2.model);

              case 2:
                _context2.next = 4;
                return _this2.services.clienteServices.getlistclientes();

              case 4:
                _this2.model = {
                  servicio_solicitado: [],
                  persona_de_contacto: {
                    nombre: "",
                    celular: "",
                    tel_ext: "",
                    email: "",
                    puesto: ""
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
                    telf_almacen: ""
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
                      terminosDePago: []
                    }
                  },
                  revisionDeFacturasYpagos: {
                    descripcionRevisionFactura: '',
                    diasRevisionFactura: '',
                    horaDiasRevisionFactura: '',
                    diasDeConfirmacionDePago: '',
                    horaDiasDeConfirmacionDePago: '',
                    diasDePago: '',
                    horaDiasDePago: '',
                    linkPortal: '',
                    usuarioContrasena: [],
                    indicacionesAltaFacturaPortal: [],
                    correoSoporteTecnicoPortal: '',
                    bancoOrdenante: '',
                    cuentaDePago: '',
                    complementoDePagoSeEnviaPorEmail: '',
                    informacionAdicionalComplementoDePago: ''
                  },
                  listaRequerimientoDeAccesoAlaPlata: {},
                  sucursales: [],
                  iva: 0
                };
                model_notificacion = {
                  mensaje: 'la sucursal ya esta registrada',
                  status: true,
                  color: 'warning'
                };

                _this2.$store.commit("setNotificacion", model_notificacion);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    AgregarSucursal: function AgregarSucursal() {
      var _this3 = this;

      var index = this.model.sucursales.find(function (item) {
        return item.nombre === _this3.sucursal.nombre;
      });

      if (!index) {
        this.model.sucursales.push(this.sucursal);
      } else {
        var model_notificacion = {
          mensaje: 'la sucursal ya esta registrada',
          status: true,
          color: 'warning'
        };
        this.$store.commit("setNotificacion", model_notificacion);
      }

      this.sucursal = {
        nombre: "",
        direccion: "",
        contacto: "",
        correo: "",
        telefono: ""
      };
    },
    eliminarSucursal: function eliminarSucursal(suc) {
      var index = this.model.sucursales.indexOf(suc);
      this.model.sucursales.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../notificacion/indexComponentNotificacion.vue */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'notificacion': _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      editSucursal: false,
      headers_sucursal: [{
        text: 'Nombre sucursal',
        align: 'center',
        value: 'nombre_sucursal'
      }, {
        text: 'Direccion sucursal',
        align: 'center',
        value: 'direccion_sucursal'
      }, {
        text: 'Contacto sucursal',
        align: 'center',
        value: 'contacto_sucural'
      }, {
        text: 'Correo contacto',
        align: 'center',
        value: 'correo_contacto_sucural'
      }, {
        text: 'Telefono contacto',
        align: 'center',
        value: 'telefono'
      }],
      items_sucursales: [],
      items_servicios_solicitados: [{
        name: "Calibracion",
        value: 1
      }, {
        name: "Venta",
        value: 2
      }, {
        name: "Mantenimiento",
        value: 3
      }, {
        name: "Capacitación",
        value: 4
      }],
      items_forma_de_pago: [{
        name: "transferencia electronica",
        value: 1
      }, {
        name: "deposito en efectivo",
        value: 2
      }, {
        name: "cheque",
        value: 3
      }],
      items_terminos_de_pago: [{
        name: "credito de 30 dias",
        value: 1
      }, {
        name: "credito de 15 dias",
        value: 2
      }, {
        name: "contado",
        value: 3
      }],
      sucursal: {
        nombre_sucursal: "",
        direccion_sucursal: "",
        contacto_sucural: "",
        correo_contacto_sucural: "",
        telefono: ""
      },
      model: {
        servicio_solicitado: [],
        persona_de_contacto: {
          nombre: "",
          celular: "",
          tel_ext: "",
          email: "",
          puesto: ""
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
          telf_almacen: ""
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
            terminosDePago: []
          }
        },
        revisionDeFacturasYpagos: {
          descripcionRevisionFactura: '',
          diasRevisionFactura: '',
          horaDiasRevisionFactura: '',
          diasDeConfirmacionDePago: '',
          horaDiasDeConfirmacionDePago: '',
          diasDePago: '',
          horaDiasDePago: '',
          linkPortal: '',
          usuarioContrasena: [],
          indicacionesAltaFacturaPortal: [],
          correoSoporteTecnicoPortal: '',
          bancoOrdenante: '',
          cuentaDePago: '',
          complementoDePagoSeEnviaPorEmail: '',
          informacionAdicionalComplementoDePago: ''
        },
        listaRequerimientoDeAccesoAlaPlata: {},
        sucursales: []
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['services', 'dialog_edit_cliente', "empleados", "ciudades_estados_paises", "list_metodo_de_pago", "listCondicionDePago", "monedas", "cliente"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_edit_cliente;
      },
      set: function set(val) {
        this.$store.commit("setDialogEditCliente", val);
      }
    }
  }),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.services.metodoDePagoServices.getlistMetodoDePago();

            case 2:
              _context.next = 4;
              return _this.services.condicionDePagoServices.getlistCondicionDePago();

            case 4:
              _context.next = 6;
              return _this.services.monedaServices.getlistMonedas();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    editCliente: function editCliente() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.services.clienteServices.actualizarCliente(_this2.cliente);

              case 2:
                _context2.next = 4;
                return _this2.services.clienteServices.getlistclientes();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    AgregarSucursal: function AgregarSucursal() {
      var _this3 = this;

      var index = this.cliente.sucursales.find(function (item) {
        return item.nombre === _this3.sucursal.nombre;
      });

      if (!index) {
        this.cliente.sucursales.push(this.sucursal);
      } else {
        var model_notificacion = {
          mensaje: 'la sucursal ya esta registrada',
          status: true,
          color: 'warning'
        };
        this.$store.commit("setNotificacion", model_notificacion);
      }

      this.sucursal = {
        nombre: "",
        direccion: "",
        contacto: "",
        correo: "",
        telefono: ""
      };
    },
    eliminarSucursal: function eliminarSucursal(suc) {
      var index = this.cliente.sucursales.indexOf(suc);
      this.cliente.sucursales.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnAddFileCliente[data-v-b20855c4] {\n  margin-top: -33px;\n}\n.btnAddCliente[data-v-b20855c4] {\n  margin-top: -30px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("cliente")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-card",
        { staticClass: "p-2" },
        [
          _c("v-card-title", { attrs: { color: "primary" } }, [
            _vm._v("Cliente")
          ]),
          _vm._v(" "),
          _c(
            "v-app-bar",
            { attrs: { absolute: "", color: "primary", dark: "" } },
            [
              _c("v-toolbar-title", [_vm._v("Cliente")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mt-5 mr-5",
                attrs: {
                  label: "Buscar Cliente",
                  placeholder: "",
                  outlined: "",
                  dense: ""
                },
                model: {
                  value: _vm.search_cli,
                  callback: function($$v) {
                    _vm.search_cli = $$v
                  },
                  expression: "search_cli"
                }
              }),
              _vm._v(" "),
              _c("v-file-input", {
                staticClass: "mt-5",
                attrs: {
                  label: "Seleccionar documento (.xls | .xlsx)",
                  outlined: "",
                  dense: ""
                },
                on: { change: _vm.handleFile },
                model: {
                  value: _vm.file_cliente,
                  callback: function($$v) {
                    _vm.file_cliente = $$v
                  },
                  expression: "file_cliente"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    icon: "",
                    dark: "",
                    color: "info",
                    loading: _vm.load_cliente_file,
                    large: ""
                  },
                  on: { click: _vm.agregarFileCliente }
                },
                [
                  _c("v-icon", { attrs: { dark: "", large: "" } }, [
                    _vm._v("mdi-file-upload")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { fab: "", dark: "", color: "info" },
                  on: {
                    click: function($event) {
                      return _vm.$store.commit("SetDialogAddCliente", true)
                    }
                  }
                },
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-plus")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headers_cli,
              items: _vm.clientes,
              search: _vm.search_cli
            },
            scopedSlots: _vm._u([
              {
                key: "item.accion",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "red", small: "" },
                            on: {
                              click: function($event) {
                                return _vm.EliminarCliente(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-delete")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "warning", small: "" },
                            on: {
                              click: function($event) {
                                return _vm.EditarCliente(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-pencil")])],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "item.created_at",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(item.created_at.substr(0, 10)) +
                          "\n        "
                      )
                    ])
                  ]
                }
              },
              {
                key: "item.direccion_fiscal",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("td", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle
                          ) +
                          " -\n          " +
                          _vm._s(
                            item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero
                          ) +
                          " -\n          " +
                          _vm._s(
                            item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia
                          ) +
                          " -\n          " +
                          _vm._s(
                            item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad
                          ) +
                          " -\n          " +
                          _vm._s(
                            item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado
                          ) +
                          " -\n          " +
                          _vm._s(
                            item.datos_fisicos_requeremientos_facturacion_domiclio_fiscal_cp
                          ) +
                          "\n        "
                      )
                    ])
                  ]
                }
              },
              {
                key: "item.telefonos",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("td", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n          Telf.: Compra: " +
                          _vm._s(item.contacto_adicionales_compra_telf) +
                          " "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n          Telf.: Pagos: " +
                          _vm._s(item.contacto_adicionales_pagos_telf) +
                          " "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n          Telf.: Almacen: " +
                          _vm._s(item.contacto_adicionales_pagos_telf) +
                          " "
                      ),
                      _c("br")
                    ])
                  ]
                }
              },
              {
                key: "item.contacto",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("td", { staticClass: "text-left" }, [
                      _vm._v(
                        "\n          Contact.: Compra: " +
                          _vm._s(item.contacto_adicionales_compra) +
                          " "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n          Contact.: Pagos: " +
                          _vm._s(item.contacto_adicionales_pagos) +
                          " "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n          Contact.: Almacen: " +
                          _vm._s(item.contacto_adicionales_almacen) +
                          " "
                      ),
                      _c("br")
                    ])
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("modal-add"),
      _vm._v(" "),
      _c("modal-edit")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=template&id=0a718aa9&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=template&id=0a718aa9& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-dialog",
        {
          model: {
            value: _vm.openDialog,
            callback: function($$v) {
              _vm.openDialog = $$v
            },
            expression: "openDialog"
          }
        },
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "primary" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "", dark: "" },
                  on: {
                    click: function($event) {
                      _vm.openDialog = false
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-close")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-card-title", [_vm._v("Agregar cliente")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { text: "", dark: "", tile: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.addCliente($event)
                    }
                  }
                },
                [
                  _vm._v("\n        Agregar\n        "),
                  _c("v-icon", [_vm._v("mdi-content-save")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-card",
                    { staticClass: "elevation-1" },
                    [
                      _c("v-card-title", { attrs: { "primary-title": "" } }, [
                        _vm._v(" SERVICIO SOLICITADO: ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "12"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.items_servicios_solicitados,
                                      outlined: "",
                                      chips: "",
                                      label: "Sercicios",
                                      "item-text": "name",
                                      "item-value": "value",
                                      multiple: "",
                                      "return-object": ""
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "selection",
                                        fn: function(data) {
                                          return [
                                            _c(
                                              "v-chip",
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    "input-value":
                                                      data.selected,
                                                    close: ""
                                                  }
                                                },
                                                "v-chip",
                                                data.attrs,
                                                false
                                              ),
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(data.item.name) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      },
                                      {
                                        key: "item",
                                        fn: function(data) {
                                          return [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(data.item.name) +
                                                "\n                  "
                                            )
                                          ]
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.model.servicio_solicitado,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model,
                                          "servicio_solicitado",
                                          $$v
                                        )
                                      },
                                      expression: "model.servicio_solicitado"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "elevation-1" },
                    [
                      _c("v-card-title", { attrs: { "primary-title": "" } }, [
                        _vm._v(" PERSONA DE CONTACTO: ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Nombre del Contacto",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.persona_de_contacto.nombre,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.persona_de_contacto,
                                          "nombre",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.persona_de_contacto.nombre"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Celular del Contacto",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.persona_de_contacto.celular,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.persona_de_contacto,
                                          "celular",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.persona_de_contacto.celular"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tel. / Ext. del Contacto",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.persona_de_contacto.tel_ext,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.persona_de_contacto,
                                          "tel_ext",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.persona_de_contacto.tel_ext"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Email del Contacto",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.persona_de_contacto.email,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.persona_de_contacto,
                                          "email",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.persona_de_contacto.email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Puesto del Contacto",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.persona_de_contacto.puesto,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.persona_de_contacto,
                                          "puesto",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.persona_de_contacto.puesto"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "elevation-1" },
                    [
                      _c("v-card-title", { attrs: { "primary-title": "" } }, [
                        _vm._v(" CONTACTO ADICIONALES: ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Compras", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales.compras,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "compras",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.compras"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Correo Compras",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales
                                          .correo_compras,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "correo_compras",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.correo_compras"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tel. Compras",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales
                                          .telf_compras,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "telf_compras",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.telf_compras"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Pagos", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales.pagos,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "pagos",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.pagos"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Correo Pagos",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales
                                          .correo_pagos,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "correo_pagos",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.correo_pagos"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tel. Pagos",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales
                                          .telf_pagos,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "telf_pagos",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.telf_pagos"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Almacen", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales.almacen,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "almacen",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.almacen"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Correo Almacen",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales
                                          .correo_almacen,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "correo_almacen",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.correo_almacen"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tel. Almacen",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.contacto_adicionales
                                          .telf_almacen,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.contacto_adicionales,
                                          "telf_almacen",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.contacto_adicionales.telf_almacen"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "elevation-1" },
                    [
                      _c("v-card-title", { attrs: { "primary-title": "" } }, [
                        _vm._v(
                          "\n            DATOS FISCALES Y REQUERIMIENTOS DE FACTURACION"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "10",
                                    lg: "10"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Razon Social",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .razon_social,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion,
                                          "razon_social",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.datosFisicosYRequerimientosDeFactuacion.razon_social"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "2",
                                    lg: "2"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "R.F.C", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .rfc,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion,
                                          "rfc",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.datosFisicosYRequerimientosDeFactuacion.rfc"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Calle ", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion.calle,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "calle",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.calle\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Numero", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .numero,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "numero",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.numero\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Colonia", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .colonia,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "colonia",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.colonia\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Ciudad", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .ciudad,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "ciudad",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.ciudad\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Esado", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .estado,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "estado",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.estado\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "4",
                                    lg: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "C.P.", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion.cp,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "cp",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.cp\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.listCondicionDePago,
                                      label: "Formas de pago",
                                      outlined: "",
                                      "item-text": "nombre",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .formaDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "formaDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.formaDePago\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Correo para el envio de factura",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .emailEnvioFactura,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "emailEnvioFactura",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.emailEnvioFactura\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.monedas,
                                      label: "Moneda de Factura",
                                      outlined: "",
                                      "item-text": "nombre_moneda",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .monedaFactura,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "monedaFactura",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.monedaFactura\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "CFDI", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion.cfdi,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "cfdi",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.cfdi\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.list_metodo_de_pago,
                                      label: "Metodo de pago",
                                      outlined: "",
                                      "item-text": "nombre",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .metodoDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "metodoDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.metodoDePago\n                  "
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.items_terminos_de_pago,
                                      label: "terminos de pago",
                                      outlined: "",
                                      "item-text": "name",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.model
                                          .datosFisicosYRequerimientosDeFactuacion
                                          .domicilioFiscalParaFacturacion
                                          .terminosDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model
                                            .datosFisicosYRequerimientosDeFactuacion
                                            .domicilioFiscalParaFacturacion,
                                          "terminosDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "\n                    model.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.terminosDePago\n                  "
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "elevation-1" },
                    [
                      _c("v-card-title", { attrs: { "primary-title": "" } }, [
                        _vm._v("REVISION DE FACTURA Y PAGOS")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        "descripcion para la revision de la facturas y pagos",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .descripcionRevisionFactura,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "descripcionRevisionFactura",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.descripcionRevisionFactura"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Dias de revision de factura",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .diasRevisionFactura,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "diasRevisionFactura",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.diasRevisionFactura"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Horario", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .horaDiasRevisionFactura,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "horaDiasRevisionFactura",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.horaDiasRevisionFactura"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Dias de confirmacion de pago",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .diasDeConfirmacionDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "diasDeConfirmacionDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.diasDeConfirmacionDePago"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Horario", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .horaDiasDeConfirmacionDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "horaDiasDeConfirmacionDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.horaDiasDeConfirmacionDePago"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Dias de pago",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .diasDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "diasDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.diasDePago"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Horario", outlined: "" },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .horaDiasDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "horaDiasDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.horaDiasDePago"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Link del portal",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .linkPortal,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "linkPortal",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.linkPortal"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Usuario y contraseña",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .usuarioContrasena,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "usuarioContrasena",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.usuarioContrasena"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        "Indicaciones para alta de factura del portal",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .indicacionesAltaFacturaPortal,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "indicacionesAltaFacturaPortal",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.indicacionesAltaFacturaPortal"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Correo Soporte Tecnico portal",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .correoSoporteTecnicoPortal,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "correoSoporteTecnicoPortal",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.correoSoporteTecnicoPortal"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Banco Ordenante",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .bancoOrdenante,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "bancoOrdenante",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.bancoOrdenante"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Cuenta Bancaria",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .cuentaDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "cuentaDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.cuentaDePago"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        "Complemento de pago se envia a e-mail",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .complementoDePagoSeEnviaPorEmail,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "complementoDePagoSeEnviaPorEmail",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.complementoDePagoSeEnviaPorEmail"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "6",
                                    lg: "6"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        "Informacion adicional a incluir en el complemento  de pago",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .informacionAdicionalComplementoDePago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "informacionAdicionalComplementoDePago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.informacionAdicionalComplementoDePago"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "10",
                                    lg: "10"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label:
                                        "Listar requerimientos de acceso a la planta",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.model.revisionDeFacturasYpagos
                                          .listaRequerimientoDeAccesoAlaPlata,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model.revisionDeFacturasYpagos,
                                          "listaRequerimientoDeAccesoAlaPlata",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "model.revisionDeFacturasYpagos.listaRequerimientoDeAccesoAlaPlata"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "2",
                                    lg: "2"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "I.V.A. %", outlined: "" },
                                    model: {
                                      value: _vm.model.iva,
                                      callback: function($$v) {
                                        _vm.$set(_vm.model, "iva", $$v)
                                      },
                                      expression: "model.iva"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "12"
                                  }
                                },
                                [
                                  _c("v-data-table", {
                                    staticClass: "elevation-1",
                                    attrs: {
                                      headers: _vm.headers_sucursal,
                                      items: _vm.model.sucursales,
                                      "items-per-page": 5
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "body.prepend",
                                        fn: function() {
                                          return [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mt-5",
                                                    attrs: {
                                                      label: "",
                                                      dense: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.sucursal.nombre,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.sucursal,
                                                          "nombre",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "sucursal.nombre"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mt-5",
                                                    attrs: {
                                                      label: "",
                                                      dense: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.sucursal.direccion,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.sucursal,
                                                          "direccion",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "sucursal.direccion"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mt-5",
                                                    attrs: {
                                                      label: "",
                                                      dense: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.sucursal.contacto,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.sucursal,
                                                          "contacto",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "sucursal.contacto"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mt-5",
                                                    attrs: {
                                                      label: "",
                                                      dense: "",
                                                      outlined: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.sucursal.correo,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.sucursal,
                                                          "correo",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "sucursal.correo"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  _c("v-text-field", {
                                                    staticClass: "mt-5",
                                                    attrs: {
                                                      label: "",
                                                      dense: "",
                                                      outlined: ""
                                                    },
                                                    on: {
                                                      keyup: function($event) {
                                                        if (
                                                          !$event.type.indexOf(
                                                            "key"
                                                          ) &&
                                                          _vm._k(
                                                            $event.keyCode,
                                                            "enter",
                                                            13,
                                                            $event.key,
                                                            "Enter"
                                                          )
                                                        ) {
                                                          return null
                                                        }
                                                        return _vm.AgregarSucursal(
                                                          $event
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.sucursal.telefono,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.sucursal,
                                                          "telefono",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "sucursal.telefono"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "success"
                                                      },
                                                      on: {
                                                        click:
                                                          _vm.AgregarSucursal
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-company")
                                                      ]),
                                                      _vm._v(
                                                        " Agregar Sucursal"
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ])
                                          ]
                                        },
                                        proxy: true
                                      }
                                    ])
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "blue" },
                      on: { click: _vm.addCliente }
                    },
                    [_vm._v(" Agregar ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.openDialog = false
                        }
                      }
                    },
                    [_vm._v(" Cerrar ")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("notificacion")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=template&id=62fe18d8&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=template&id=62fe18d8& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-dialog",
        {
          model: {
            value: _vm.openDialog,
            callback: function($$v) {
              _vm.openDialog = $$v
            },
            expression: "openDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.openDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-card-title", [_vm._v("Editar cliente")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", dark: "", tile: "" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.editCliente($event)
                        }
                      }
                    },
                    [
                      _vm._v("\n        Editar\n        "),
                      _c("v-icon", [_vm._v("mdi-content-save")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-title", [_vm._v("Editar cliente")]),
              _vm._v(" "),
              Object.entries(_vm.cliente).length > 0
                ? _c(
                    "v-card-text",
                    [
                      _c(
                        "v-card",
                        { staticClass: "elevation-1" },
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [_vm._v(" SERVICIO SOLICITADO: ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "12",
                                        lg: "12"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items:
                                            _vm.items_servicios_solicitados,
                                          outlined: "",
                                          chips: "",
                                          label: "Sercicios",
                                          "item-text": "name",
                                          "item-value": "value",
                                          multiple: "",
                                          "return-object": ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "selection",
                                              fn: function(data) {
                                                return [
                                                  _c(
                                                    "v-chip",
                                                    _vm._b(
                                                      {
                                                        attrs: {
                                                          "input-value":
                                                            data.selected,
                                                          close: ""
                                                        }
                                                      },
                                                      "v-chip",
                                                      data.attrs,
                                                      false
                                                    ),
                                                    [
                                                      _vm._v(
                                                        "\n                      " +
                                                          _vm._s(
                                                            data.item.name
                                                          ) +
                                                          "\n                    "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            },
                                            {
                                              key: "item",
                                              fn: function(data) {
                                                return [
                                                  _vm._v(
                                                    "\n                    " +
                                                      _vm._s(data.item.name) +
                                                      "\n                  "
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          1254128083
                                        ),
                                        model: {
                                          value:
                                            _vm.cliente.servicio_solicitado,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente,
                                              "servicio_solicitado",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.servicio_solicitado"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "elevation-1" },
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [_vm._v(" PERSONA DE CONTACTO: ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Nombre del Contacto",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.persona_de_contacto
                                              .nombre,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.persona_de_contacto,
                                              "nombre",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.persona_de_contacto.nombre"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Celular del Contacto",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.persona_de_contacto
                                              .celular,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.persona_de_contacto,
                                              "celular",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.persona_de_contacto.celular"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Tel. / Ext. del Contacto",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.persona_de_contacto
                                              .tel_ext,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.persona_de_contacto,
                                              "tel_ext",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.persona_de_contacto.tel_ext"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Email del Contacto",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.persona_de_contacto
                                              .email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.persona_de_contacto,
                                              "email",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.persona_de_contacto.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Puesto del Contacto",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.persona_de_contacto
                                              .puesto,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.persona_de_contacto,
                                              "puesto",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.persona_de_contacto.puesto"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "elevation-1" },
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [_vm._v(" CONTACTO ADICIONALES: ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Compras",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .compras,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "compras",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.compras"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Correo Compras",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .correo_compras,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "correo_compras",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.correo_compras"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Tel. Compras",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .telf_compras,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "telf_compras",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.telf_compras"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Pagos", outlined: "" },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .pagos,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "pagos",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.pagos"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Correo Pagos",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .correo_pagos,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "correo_pagos",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.correo_pagos"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Tel. Pagos",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .telf_pagos,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "telf_pagos",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.telf_pagos"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Almacen",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .almacen,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "almacen",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.almacen"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Correo Almacen",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .correo_almacen,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "correo_almacen",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.correo_almacen"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Tel. Almacen",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.contacto_adicionales
                                              .telf_almacen,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente.contacto_adicionales,
                                              "telf_almacen",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.contacto_adicionales.telf_almacen"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "elevation-1" },
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [
                              _vm._v(
                                "\n            DATOS FISCALES Y REQUERIMIENTOS DE FACTURACION"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "10",
                                        lg: "10"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Razon Social",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .razon_social,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion,
                                              "razon_social",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.datosFisicosYRequerimientosDeFactuacion.razon_social"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "2",
                                        lg: "2"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "R.F.C", outlined: "" },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .rfc,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion,
                                              "rfc",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.datosFisicosYRequerimientosDeFactuacion.rfc"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Calle ",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .calle,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "calle",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.calle\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Numero",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .numero,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "numero",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.numero\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Colonia",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .colonia,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "colonia",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.colonia\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Ciudad",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .ciudad,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "ciudad",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.ciudad\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Esado", outlined: "" },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .estado,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "estado",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.estado\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "C.P.", outlined: "" },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .cp,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "cp",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.cp\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.listCondicionDePago,
                                          label: "Formas de pago",
                                          outlined: "",
                                          "item-text": "nombre",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .formaDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "formaDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.formaDePago\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "Correo para el envio de factura",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .emailEnvioFactura,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "emailEnvioFactura",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.emailEnvioFactura\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.monedas,
                                          label: "Moneda de Factura",
                                          outlined: "",
                                          "item-text": "clave",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .monedaFactura,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "monedaFactura",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.monedaFactura\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "CFDI", outlined: "" },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .cfdi,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "cfdi",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.cfdi\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.list_metodo_de_pago,
                                          label: "Metodo de pago",
                                          outlined: "",
                                          "item-text": "nombre",
                                          "item-value": "nombre",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .metodoDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "metodoDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.metodoDePago\n                  "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.items_terminos_de_pago,
                                          label: "terminos de pago",
                                          outlined: "",
                                          "item-text": "name",
                                          "item-value": "name",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente
                                              .datosFisicosYRequerimientosDeFactuacion
                                              .domicilioFiscalParaFacturacion
                                              .termino_de_pago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .datosFisicosYRequerimientosDeFactuacion
                                                .domicilioFiscalParaFacturacion,
                                              "termino_de_pago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cliente.datosFisicosYRequerimientosDeFactuacion\n                      .domicilioFiscalParaFacturacion.termino_de_pago \n                  "
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { staticClass: "elevation-1" },
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [_vm._v("REVISION DE FACTURA Y PAGOS")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "12",
                                        lg: "12"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "descripcion para la revision de la facturas y pagos",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .descripcionRevisionFactura,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "descripcionRevisionFactura",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.descripcionRevisionFactura"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Dias de revision de factura",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .diasRevisionFactura,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "diasRevisionFactura",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.diasRevisionFactura"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Horario",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .horaDiasRevisionFactura,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "horaDiasRevisionFactura",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.horaDiasRevisionFactura"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Dias de confirmacion de pago",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .diasDeConfirmacionDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "diasDeConfirmacionDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.diasDeConfirmacionDePago"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Horario",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .horaDiasDeConfirmacionDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "horaDiasDeConfirmacionDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.horaDiasDeConfirmacionDePago"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Dias de pago",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .diasDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "diasDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.diasDePago"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Horario",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .horaDiasDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "horaDiasDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.horaDiasDePago"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Link del portal",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .linkPortal,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "linkPortal",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.linkPortal"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Usuario y contraseña",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .usuarioContrasena,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "usuarioContrasena",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.usuarioContrasena"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "Indicaciones para alta de factura del portal",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .indicacionesAltaFacturaPortal,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "indicacionesAltaFacturaPortal",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.indicacionesAltaFacturaPortal"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "Correo Soporte Tecnico portal",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .correoSoporteTecnicoPortal,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "correoSoporteTecnicoPortal",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.correoSoporteTecnicoPortal"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Banco Ordenante",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .bancoOrdenante,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "bancoOrdenante",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.bancoOrdenante"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Cuenta Bancaria",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .cuentaDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "cuentaDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.cuentaDePago"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "Complemento de pago se envia a e-mail",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .complementoDePagoSeEnviaPorEmail,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "complementoDePagoSeEnviaPorEmail",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.complementoDePagoSeEnviaPorEmail"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "6",
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "Informacion adicional a incluir en el complemento  de pago",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .informacionAdicionalComplementoDePago,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "informacionAdicionalComplementoDePago",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.informacionAdicionalComplementoDePago"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "10",
                                        lg: "10"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label:
                                            "Listar requerimientos de acceso a la planta",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cliente.revisionDeFacturasYpagos
                                              .listaRequerimientoDeAccesoAlaPlata,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cliente
                                                .revisionDeFacturasYpagos,
                                              "listaRequerimientoDeAccesoAlaPlata",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cliente.revisionDeFacturasYpagos.listaRequerimientoDeAccesoAlaPlata"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "2",
                                        lg: "2"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "I.V.A. %",
                                          outlined: ""
                                        },
                                        model: {
                                          value: _vm.cliente.iva,
                                          callback: function($$v) {
                                            _vm.$set(_vm.cliente, "iva", $$v)
                                          },
                                          expression: "cliente.iva"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "12",
                                        lg: "12"
                                      }
                                    },
                                    [
                                      _c("v-data-table", {
                                        staticClass: "elevation-1",
                                        attrs: {
                                          headers: _vm.headers_sucursal,
                                          items: _vm.cliente.sucursales,
                                          "items-per-page": 5
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "body.prepend",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "tr",
                                                    [
                                                      _c(
                                                        "td",
                                                        [
                                                          _c("v-text-field", {
                                                            staticClass: "mt-5",
                                                            attrs: {
                                                              label: "",
                                                              color: "error",
                                                              dense: "",
                                                              outlined: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sucursal
                                                                  .nombre_sucursal,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.sucursal,
                                                                  "nombre_sucursal",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "sucursal.nombre_sucursal"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c("v-text-field", {
                                                            staticClass: "mt-5",
                                                            attrs: {
                                                              label: "",
                                                              color: "error",
                                                              dense: "",
                                                              outlined: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sucursal
                                                                  .direccion_sucursal,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.sucursal,
                                                                  "direccion_sucursal",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "sucursal.direccion_sucursal"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c("v-text-field", {
                                                        staticClass: "mt-5",
                                                        attrs: {
                                                          label: "",
                                                          color: "error",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.sucursal
                                                              .contacto_sucural,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.sucursal,
                                                              "contacto_sucural",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "sucursal.contacto_sucural"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c("v-text-field", {
                                                            staticClass: "mt-5",
                                                            attrs: {
                                                              label: "",
                                                              color: "error",
                                                              dense: "",
                                                              outlined: ""
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sucursal
                                                                  .correo_contacto_sucural,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.sucursal,
                                                                  "correo_contacto_sucural",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "sucursal.correo_contacto_sucural"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c("v-text-field", {
                                                            staticClass: "mt-5",
                                                            attrs: {
                                                              label: "",
                                                              color: "error",
                                                              dense: "",
                                                              outlined: ""
                                                            },
                                                            on: {
                                                              keyup: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  !$event.type.indexOf(
                                                                    "key"
                                                                  ) &&
                                                                  _vm._k(
                                                                    $event.keyCode,
                                                                    "enter",
                                                                    13,
                                                                    $event.key,
                                                                    "Enter"
                                                                  )
                                                                ) {
                                                                  return null
                                                                }
                                                                return _vm.AgregarSucursal(
                                                                  $event
                                                                )
                                                              }
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sucursal
                                                                  .telefono,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.sucursal,
                                                                  "telefono",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "sucursal.telefono"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                color: "error"
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.AgregarSucursal
                                                              }
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-company"
                                                                )
                                                              ]),
                                                              _vm._v(
                                                                " Agregar Sucursal"
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            },
                                            {
                                              key: "item",
                                              fn: function(ref) {
                                                var item = ref.item
                                                return [
                                                  _c("tr", [
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            outlined: "",
                                                            dense: ""
                                                          },
                                                          model: {
                                                            value:
                                                              item.nombre_sucursal,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "nombre_sucursal",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.nombre_sucursal"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            outlined: "",
                                                            dense: ""
                                                          },
                                                          model: {
                                                            value:
                                                              item.direccion_sucursal,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "direccion_sucursal",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.direccion_sucursal"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            outlined: "",
                                                            dense: ""
                                                          },
                                                          model: {
                                                            value:
                                                              item.contacto_sucural,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "contacto_sucural",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.contacto_sucural"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            outlined: "",
                                                            dense: ""
                                                          },
                                                          model: {
                                                            value:
                                                              item.correo_contacto_sucural,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "correo_contacto_sucural",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.correo_contacto_sucural"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            outlined: "",
                                                            dense: ""
                                                          },
                                                          model: {
                                                            value:
                                                              item.telefono,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "telefono",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.telefono"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ])
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          4256519263
                                        )
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("notificacion")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexComponentAgregarCliente_vue_vue_type_template_id_62c6534a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a& */ "./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a&");
/* harmony import */ var _indexComponentAgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexComponentAgregarCliente.vue?vue&type=script&lang=js& */ "./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexComponentAgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexComponentAgregarCliente_vue_vue_type_template_id_62c6534a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexComponentAgregarCliente_vue_vue_type_template_id_62c6534a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentAgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexComponentAgregarCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentAgregarCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentAgregarCliente_vue_vue_type_template_id_62c6534a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/agregar_cliente/indexComponentAgregarCliente.vue?vue&type=template&id=62c6534a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentAgregarCliente_vue_vue_type_template_id_62c6534a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentAgregarCliente_vue_vue_type_template_id_62c6534a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexClientecomponent_vue_vue_type_template_id_b20855c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true& */ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true&");
/* harmony import */ var _indexClientecomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexClientecomponent.vue?vue&type=script&lang=js& */ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _indexClientecomponent_vue_vue_type_style_index_0_id_b20855c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true& */ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _indexClientecomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexClientecomponent_vue_vue_type_template_id_b20855c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexClientecomponent_vue_vue_type_template_id_b20855c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b20855c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexClientecomponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_style_index_0_id_b20855c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=style&index=0&id=b20855c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_style_index_0_id_b20855c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_style_index_0_id_b20855c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_style_index_0_id_b20855c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_style_index_0_id_b20855c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_template_id_b20855c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/indexClientecomponent.vue?vue&type=template&id=b20855c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_template_id_b20855c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClientecomponent_vue_vue_type_template_id_b20855c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalAddClienteComponent_vue_vue_type_template_id_0a718aa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAddClienteComponent.vue?vue&type=template&id=0a718aa9& */ "./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=template&id=0a718aa9&");
/* harmony import */ var _modalAddClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAddClienteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalAddClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalAddClienteComponent_vue_vue_type_template_id_0a718aa9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalAddClienteComponent_vue_vue_type_template_id_0a718aa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAddClienteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=template&id=0a718aa9&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=template&id=0a718aa9& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddClienteComponent_vue_vue_type_template_id_0a718aa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAddClienteComponent.vue?vue&type=template&id=0a718aa9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalAddClienteComponent.vue?vue&type=template&id=0a718aa9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddClienteComponent_vue_vue_type_template_id_0a718aa9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddClienteComponent_vue_vue_type_template_id_0a718aa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalEditClienteComponent_vue_vue_type_template_id_62fe18d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalEditClienteComponent.vue?vue&type=template&id=62fe18d8& */ "./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=template&id=62fe18d8&");
/* harmony import */ var _modalEditClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEditClienteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalEditClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalEditClienteComponent_vue_vue_type_template_id_62fe18d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalEditClienteComponent_vue_vue_type_template_id_62fe18d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEditClienteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=template&id=62fe18d8&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=template&id=62fe18d8& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditClienteComponent_vue_vue_type_template_id_62fe18d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEditClienteComponent.vue?vue&type=template&id=62fe18d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/config/datosGenerales/cliente/modals/modalEditClienteComponent.vue?vue&type=template&id=62fe18d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditClienteComponent_vue_vue_type_template_id_62fe18d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditClienteComponent_vue_vue_type_template_id_62fe18d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);