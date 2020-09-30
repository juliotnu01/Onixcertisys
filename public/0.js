(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_modalAddCotizacionComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalAddCotizacionComponent.vue */ "./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue");
/* harmony import */ var _modals_modalEditCotizacionComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modalEditCotizacionComponent */ "./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue");
/* harmony import */ var _modals_modalViewCotizacionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/modalViewCotizacionComponent */ "./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue");
/* harmony import */ var _modals_modalViewPdfComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/modalViewPdfComponent */ "./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-add": _modals_modalAddCotizacionComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "modal-edit": _modals_modalEditCotizacionComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "modal-view": _modals_modalViewCotizacionComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    "modal-pdf": _modals_modalViewPdfComponent__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      headers_cotizacion: [{
        text: "Folio",
        value: "id",
        align: 'center'
      }, {
        text: "Fecha",
        value: "created_at",
        align: 'center'
      }, {
        text: "Cliente",
        value: "has_cliente",
        align: 'center'
      }, {
        text: "Contacto",
        value: "contacto",
        align: 'center'
      }, {
        text: "Vendedor",
        value: "has_empleado",
        align: 'center'
      }, {
        text: "Estado",
        value: "estado_de_la_cotizacion",
        align: 'center'
      }, {
        text: "Tipo de Servicio",
        value: "tipo_de_servicio",
        align: 'center'
      }, {
        text: "Moneda",
        value: "has_moneda",
        align: 'center'
      }, {
        text: "Sub Total",
        value: "sub_total",
        align: 'center'
      }, {
        text: "IVA",
        value: "iva",
        align: 'center'
      }, {
        text: "Total",
        value: "total",
        align: 'center'
      }, {
        text: "Accion",
        value: "accion",
        align: 'center'
      }],
      search_cot: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "cotizaciones"])),
  mounted: function mounted() {
    this.services.cotizacionServices.getlistCotizaciones();
  },
  methods: {
    EditarCotizacion: function EditarCotizacion(cot) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$store.commit("setDialogEditCotizacion", true);

                _this.$store.commit("setCotizacion", cot);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    eliminarCotizacion: function eliminarCotizacion(item) {
      this.services.cotizacionServices.EliminarCotizacion(item);
      this.services.cotizacionServices.getlistCotizaciones();
    },
    ViewCotizacion: function ViewCotizacion(item) {
      this.$store.commit("setDialogViewCotizacion", true);
      this.$store.commit("setCotizacionView", item);
    },
    printCotizacion: function printCotizacion(item) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.services.cotizacionServices.printCotizacion(item);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rules: {
        required: function required(value) {
          return !!value || "Este campo es requerido.";
        }
      },
      tipo_de_servicio: [{
        name: "normal",
        value: 1
      }, {
        name: "urgente",
        value: 2
      }, {
        name: "programado",
        value: 3
      }],
      estado_de_la_cotizacion: [{
        name: "pendiente",
        value: 1
      }, {
        name: "En recibo",
        value: 2
      }, {
        name: "Rechazada",
        value: 3
      }],
      model: {
        cliente_selected: {},
        moneda_selected: {},
        tde_selected: {},
        empleado_selected: {},
        tipo_de_servicio_selected: {
          name: "normal",
          value: 1
        },
        estado_cotizacion_selected: {
          name: "pendiente",
          value: 1
        },
        contacto: "",
        telefono: "",
        correo: "",
        condiciones: "",
        nota_cotizacion: "",
        nota_seguimiento: "",
        partidas: [],
        sub_total: 0,
        iva: 0,
        total: 0
      },
      partida: {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {}
      },
      headers_cotizacion: [{
        text: "Identicacion",
        value: "identificacion",
        align: "center"
      }, {
        text: "Servicio",
        value: "servicio.name",
        align: "center"
      }, {
        text: "Unidad",
        value: "unidad.name",
        align: "center"
      }, {
        text: "Instrumento",
        value: "instrumento.nombre",
        align: "center"
      }, {
        text: "Marca",
        value: "marca",
        align: "center"
      }, {
        text: "Modelo",
        value: "modelo",
        align: "center"
      }, {
        text: "Serie",
        value: "serie",
        align: "center"
      }, {
        text: "Alcance",
        value: "instrumento.alcance",
        align: "center"
      }, {
        text: "Acreditacion",
        value: "instrumento.has_acreditacion.nombre",
        align: "center"
      }, {
        text: "Cantidad",
        value: "cantidad",
        align: "center"
      }, {
        text: "Precio Unitario",
        value: "instrumento.precio_venta",
        align: "center"
      }, {
        text: "Importe",
        value: "importe",
        align: "center"
      }, {
        text: "Accion",
        value: "accion",
        align: "center"
      }],
      servicio_partida: [{
        name: "Calibracion",
        value: 1
      }, {
        name: "Reparacion",
        value: 2
      }, {
        name: "Garantia",
        value: 3
      }, {
        name: "Venta",
        value: 4
      }],
      unidad_partida: [{
        name: "servicio",
        Value: 1
      }, {
        name: "Pieza",
        Value: 2
      }, {
        name: "Juego",
        Value: 3
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_add_cotizacion", "clientes", "monedas", "empleados", "tiempos_de_entrega", "instrumentos"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_add_cotizacion;
      },
      set: function set(val) {
        this.$store.commit("setDialogAddCotizacion", val);
      }
    },
    var_computed_importe_instrumento: {
      get: function get() {
        return this.partida.importe;
      },
      set: function set(newVal) {
        this.partida.importe = newVal;
      }
    },
    var_computed_sub_total: {
      get: function get() {
        var result = 0;
        this.model.partidas.forEach(function (item) {
          result += item.importe;
        });
        this.model.sub_total = result;
        return this.model.sub_total;
      },
      set: function set(newVal) {
        this.model.sub_total = newVal;
      }
    },
    var_computed_iva: {
      get: function get() {
        var _this = this;

        var result = 0,
            item_iva = 0;
        this.model.partidas.forEach(function (item) {
          item_iva = item.importe * _this.model.cliente_selected.iva / 100;
          result += item_iva;
        });
        this.model.iva = result;
        return this.model.iva;
      },
      set: function set(newVal) {
        this.model.iva = newVal;
      }
    },
    var_computed_total: {
      get: function get() {
        var result = 0;
        result = this.var_computed_sub_total + this.var_computed_iva;
        this.model.total = result;
        return this.model.total;
      },
      set: function set(newVal) {
        this.model.total;
      }
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.services.clienteServices.getlistclientes();

            case 2:
              _this2.services.monedaServices.getlistMonedas();

              _this2.services.tiempoDeEntregaServices.getlistTiempoDeEntrega();

              _this2.services.empleadoServices.getlistEmpleados();

              _this2.services.instrumentoServices.getlistInstrumentos();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    ActualizarImporte: function ActualizarImporte(cantidad, pvp) {
      this.var_computed_importe_instrumento = cantidad * pvp;
    },
    AgregarPartida: function AgregarPartida() {
      this.model.partidas.push(this.partida);
      this.partida = {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {}
      };
    },
    addCotizacion: function addCotizacion() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.$refs.f_mag.validate()) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return _this3.services.cotizacionServices.agregarCotizacion(_this3.model);

              case 3:
                _context2.next = 5;
                return _this3.services.cotizacionServices.getlistCotizaciones();

              case 5:
                _this3.model = {
                  cliente_selected: {},
                  moneda_selected: {},
                  tde_selected: {},
                  empleado_selected: {},
                  tipo_de_servicio_selected: {},
                  estado_cotizacion_selected: {},
                  contacto: "",
                  telefono: "",
                  correo: "",
                  condiciones: "",
                  nota_cotizacion: "",
                  nota_seguimiento: "",
                  partidas: [],
                  sub_total: 0,
                  iva: 0,
                  total: 0
                };

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    eliminarPartida: function eliminarPartida(item) {
      var index = this.model.partidas.findIndex(function (item) {
        return item.identificacion === item.identificacion;
      });
      this.model.partidas.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rules: {
        required: function required(value) {
          return !!value || "Este campo es requerido.";
        }
      },
      snack: false,
      edit_caliente_partida: false,
      tipo_de_servicio: [{
        name: "normal",
        value: 1
      }, {
        name: "urgente",
        value: 2
      }, {
        name: "programado",
        value: 3
      }],
      estado_de_la_cotizacion: [{
        name: "pendiente",
        value: 1
      }, {
        name: "En recibo",
        value: 2
      }, {
        name: "Rechazada",
        value: 3
      }],
      partida: {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {}
      },
      headers_cotizacion: [{
        text: "Identicacion",
        value: "identificacion"
      }, {
        text: "Servicio",
        value: "servicio"
      }, {
        text: "Unidad",
        value: "unidad"
      }, {
        text: "Instrumento",
        value: "has_intrumento.nombre"
      }, {
        text: "Marca",
        value: "marca"
      }, {
        text: "Modelo",
        value: "modelo"
      }, {
        text: "Serie",
        value: "serie"
      }, {
        text: "Alcance",
        value: "has_intrumento.alcance"
      }, {
        text: "Acreditacion",
        value: "has_intrumento.has_acreditacion.nombre"
      }, {
        text: "Cantidad",
        value: "cantidad"
      }, {
        text: "Precio Unitario",
        value: "has_intrumento.precio_venta"
      }, {
        text: "Importe",
        value: "importe"
      }, {
        text: "Accion",
        value: "accion"
      }],
      servicio_partida: [{
        name: "Calibracion",
        value: 1
      }, {
        name: "Reparacion",
        value: 2
      }, {
        name: "Garantia",
        value: 3
      }, {
        name: "Venta",
        value: 4
      }],
      unidad_partida: [{
        name: "servicio",
        Value: 1
      }, {
        name: "Pieza",
        Value: 2
      }, {
        name: "Juego",
        Value: 3
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_edit_cotizacion", "clientes", "monedas", "empleados", "tiempos_de_entrega", "instrumentos", "cotizacion"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_edit_cotizacion;
      },
      set: function set(val) {
        this.$store.commit("setDialogEditCotizacion", val);
      }
    },
    var_computed_importe_instrumento: {
      get: function get() {
        return this.partida.importe;
      },
      set: function set(newVal) {
        this.partida.importe = newVal;
      }
    },
    var_computed_sub_total: {
      get: function get() {
        var result = 0;

        for (var i = 0; i < this.cotizacion.has_partidas.length; i++) {
          result += this.cotizacion.has_partidas[i].importe;
        }

        this.cotizacion.sub_total = parseInt(result);
        return this.cotizacion.sub_total;
      },
      set: function set(newVal) {
        this.cotizacion.sub_total = newVal;
      }
    },
    var_computed_iva: {
      get: function get() {
        var _this = this;

        var result = 0,
            item_iva = 0;
        this.cotizacion.has_partidas.forEach(function (item) {
          item_iva = item.importe * _this.cotizacion.has_cliente.iva / 100;
          result += item_iva;
        });
        this.cotizacion.iva = parseInt(result);
        return this.cotizacion.iva;
      },
      set: function set(newVal) {
        this.cotizacion.iva = newVal;
      }
    },
    var_computed_total: {
      get: function get() {
        var result = 0;
        result = this.var_computed_sub_total + this.var_computed_iva;
        this.cotizacion.total = parseInt(result);
        return this.cotizacion.total;
      },
      set: function set(newVal) {
        this.cotizacion.total;
      }
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.services.clienteServices.getlistclientes();

            case 2:
              _this2.services.monedaServices.getlistMonedas();

              _this2.services.tiempoDeEntregaServices.getlistTiempoDeEntrega();

              _this2.services.empleadoServices.getlistEmpleados();

              _this2.services.instrumentoServices.getlistInstrumentos();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    ActualizarImporte: function ActualizarImporte(cantidad, pvp) {
      this.var_computed_importe_instrumento = cantidad * pvp;
    },
    AgregarPartida: function AgregarPartida() {
      var _obj;

      var obj = (_obj = {
        identificacion: this.partida.identificacion,
        has_intrumento: this.partida.instrumento,
        cantidad: this.partida.cantidad,
        marca: this.partida.marca,
        modelo: this.partida.modelo,
        serie: this.partida.serie,
        importe: this.partida.importe
      }, _defineProperty(_obj, "marca", this.partida.marca), _defineProperty(_obj, "modelo", this.partida.modelo), _defineProperty(_obj, "serie", this.partida.serie), _defineProperty(_obj, "servicio", this.partida.servicio.name), _defineProperty(_obj, "unidad", this.partida.unidad.name), _obj);
      this.cotizacion.has_partidas.push(obj);
      this.partida = {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {}
      };
    },
    EditCotizacion: function EditCotizacion() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.$refs.f_mag.validate()) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return _this3.services.cotizacionServices.actualizarCotizacion(_this3.cotizacion);

              case 3:
                _context2.next = 5;
                return _this3.services.cotizacionServices.getlistCotizaciones();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    eliminarPartida: function eliminarPartida(item) {
      this.services.partidaServices.EliminarPartida(item);
      var index = this.cotizacion.has_partidas.findIndex(function (item) {
        return item.id === item.id || item.identificacion === item.identificacion;
      });
      this.cotizacion.has_partidas.splice(index, 1);
    },
    open: function open() {
      this.snack = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rules: {
        required: function required(value) {
          return !!value || "Este campo es requerido.";
        }
      },
      edit_caliente_partida: false,
      value: false,
      items_tipo: [{
        name: "Normal",
        value: 1
      }, {
        name: "Urgente",
        value: 2
      }, {
        name: "Programado",
        value: 3
      }],
      headers_cotizacion: [{
        text: "Servicio",
        value: "servicio",
        align: "center"
      }, {
        text: "Unidad",
        value: "unidad",
        align: "center"
      }, {
        text: "Informe",
        value: "informe",
        align: "center"
      }, {
        text: "Instrumento",
        value: "has_intrumento",
        align: "center"
      }, {
        text: "Acreditacion",
        value: "has_intrumento.has_acreditacion.nombre",
        align: "center"
      }, {
        text: "Tipo",
        value: "tipo",
        align: "center"
      }, {
        text: "Vigencia",
        value: "vigencia",
        align: "center"
      }, {
        text: "Convertir en recibo",
        value: "convert_recibo",
        align: "center"
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_view_cotizacion", "cotizacion_view", "clientes", "clientes", "monedas", "empleados", "tiempos_de_entrega", "informe_id_db"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_view_cotizacion;
      },
      set: function set(val) {
        this.$store.commit("setDialogViewCotizacion", val);
      }
    }
  }),
  methods: {
    GenerarIdInforme: function GenerarIdInforme(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var model;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                model = {
                  clave_info: item.has_intrumento.has_magnitud.clave,
                  cotizacion_id: _this.cotizacion_view.id,
                  partida_id: item.id,
                  info_id: 0
                };

                _this.services.identificadorInformeServices.agregarIdentificador(model);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    GenerarRecibo: function GenerarRecibo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var model;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                model = {
                  estado: "pendiente",
                  cotizacion_id: _this2.cotizacion_view
                };
                _context2.next = 3;
                return _this2.services.reciboServices.agregarRecibo(model);

              case 3:
                _context2.next = 5;
                return _this2.services.cotizacionServices.getlistCotizaciones();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_view_pdf_cotizacion", 'cotizacion_print'])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_view_pdf_cotizacion;
      },
      set: function set(val) {
        this.$store.commit("setDialogViewPdfCotizacion", val);
      }
    }
  }),
  mounted: function mounted() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "fill-heigth" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", xs: "12", sm: "12", md: "6", lg: "6" } },
            [
              _c("v-text-field", {
                attrs: { label: "Buscar Cotizacion", outlined: "" },
                model: {
                  value: _vm.search_cot,
                  callback: function($$v) {
                    _vm.search_cot = $$v
                  },
                  expression: "search_cot"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", xs: "12", sm: "12", md: "6", lg: "6" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "float-right",
                  attrs: { fab: "", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.$store.commit("setDialogAddCotizacion", true)
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-plus")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          dense: "",
          headers: _vm.headers_cotizacion,
          items: _vm.cotizaciones,
          "item-key": "name",
          search: _vm.search_cot
        },
        scopedSlots: _vm._u([
          {
            key: "item.created_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", [
                  _vm._v(
                    "\r\n                " +
                      _vm._s(item.created_at.substr(0, 10)) +
                      "\r\n            "
                  )
                ])
              ]
            }
          },
          {
            key: "item.estado_de_la_cotizacion",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "td",
                  [
                    item.estado_de_la_cotizacion == "pendiente"
                      ? _c(
                          "v-alert",
                          {
                            staticClass: "mt-5",
                            attrs: {
                              type: "info",
                              icon: "mdi-clock",
                              dense: ""
                            }
                          },
                          [
                            _vm._v(
                              " " + _vm._s(item.estado_de_la_cotizacion) + " "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.estado_de_la_cotizacion == "En recibo"
                      ? _c(
                          "v-alert",
                          {
                            staticClass: "mt-5",
                            attrs: {
                              color: "purple",
                              icon: "mdi-receipt",
                              dense: "",
                              dark: ""
                            }
                          },
                          [
                            _vm._v(
                              " " + _vm._s(item.estado_de_la_cotizacion) + " "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.estado_de_la_cotizacion == "Rechazada"
                      ? _c(
                          "v-alert",
                          {
                            staticClass: "mt-5",
                            attrs: {
                              type: "error",
                              icon: "mdi-close-octagon",
                              dense: ""
                            }
                          },
                          [
                            _vm._v(
                              " " + _vm._s(item.estado_de_la_cotizacion) + " "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.tipo_de_servicio",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "td",
                  [
                    item.tipo_de_servicio == "normal"
                      ? _c(
                          "v-alert",
                          {
                            staticClass: "mt-5",
                            attrs: {
                              type: "success",
                              icon: "mdi-flag",
                              dense: "",
                              outlined: ""
                            }
                          },
                          [_vm._v(" " + _vm._s(item.tipo_de_servicio) + " ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.tipo_de_servicio == "urgente"
                      ? _c(
                          "v-alert",
                          {
                            staticClass: "mt-5",
                            attrs: {
                              type: "error",
                              icon: "mdi-flag",
                              dense: "",
                              outlined: ""
                            }
                          },
                          [_vm._v(" " + _vm._s(item.tipo_de_servicio) + " ")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.tipo_de_servicio == "programado"
                      ? _c(
                          "v-alert",
                          {
                            staticClass: "mt-5",
                            attrs: {
                              type: "warning",
                              icon: "mdi-flag",
                              dense: "",
                              outlined: ""
                            }
                          },
                          [_vm._v(" " + _vm._s(item.tipo_de_servicio) + " ")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.accion",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "td",
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "", small: "", color: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.ViewCotizacion(item)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-eye")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "", small: "", color: "error" },
                        on: {
                          click: function($event) {
                            return _vm.eliminarCotizacion(item)
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
                        attrs: { icon: "", small: "", color: "warning" },
                        on: {
                          click: function($event) {
                            return _vm.EditarCotizacion(item)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-pencil")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "", small: "", color: "info" },
                        on: {
                          click: function($event) {
                            return _vm.printCotizacion(item)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-printer")])],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.contacto",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", { staticClass: "text-left" }, [
                  _c("small", { staticClass: "text-left" }, [
                    _vm._v(
                      "\r\n                    Nombre:" +
                        _vm._s(item.contacto) +
                        " "
                    ),
                    _c("br"),
                    _vm._v(
                      "\r\n                    Teléfono:" +
                        _vm._s(item.contacto_telefono) +
                        " "
                    ),
                    _c("br"),
                    _vm._v(
                      "\r\n                    Correo:" +
                        _vm._s(item.contacto_correo) +
                        " "
                    ),
                    _c("br")
                  ])
                ])
              ]
            }
          },
          {
            key: "item.has_cliente",
            fn: function(ref) {
              var item = ref.item
              return [_c("td", [_vm._v(_vm._s(item.has_cliente.razon_social))])]
            }
          },
          {
            key: "item.has_empleado",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", [_vm._v(_vm._s(item.has_empleado.nombre_completo))])
              ]
            }
          },
          {
            key: "item.has_moneda",
            fn: function(ref) {
              var item = ref.item
              return [_c("td", [_vm._v(_vm._s(item.has_moneda.clave))])]
            }
          },
          {
            key: "item.sub_total",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("numberFormat")(
                        item.sub_total,
                        item.has_moneda.clave
                      )
                    )
                  )
                ])
              ]
            }
          },
          {
            key: "item.iva",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("numberFormat")(item.iva, item.has_moneda.clave)
                    )
                  )
                ])
              ]
            }
          },
          {
            key: "item.total",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm._f("numberFormat")(item.total, item.has_moneda.clave)
                    )
                  )
                ])
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("modal-add"),
      _vm._v(" "),
      _c("modal-edit"),
      _vm._v(" "),
      _c("modal-view"),
      _vm._v(" "),
      _c("modal-pdf")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
          attrs: { persistent: "", "max-width": "1256", "min-width": "1256" },
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
              _c(
                "v-btn",
                {
                  attrs: { text: "", dark: "", tile: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.addCotizacion($event)
                    }
                  }
                },
                [
                  _c("v-icon", [_vm._v("mdi-content-save")]),
                  _vm._v(" Guardar\r\n            ")
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
              _c("v-card-title", [_vm._v("Agregar Cotizacion")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    { ref: "f_mag" },
                    [
                      _c(
                        "v-row",
                        { attrs: { align: "center", justify: "space-around" } },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                xs: "12",
                                sm: "12",
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  "offset-y": "",
                                  dense: "",
                                  items: _vm.clientes,
                                  "item-text": "razon_social",
                                  outlined: "",
                                  s: "",
                                  label: "Seleccionar Cliente",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.model.cliente_selected,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "cliente_selected", $$v)
                                  },
                                  expression: "model.cliente_selected"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  "offset-y": "",
                                  dense: "",
                                  items: _vm.monedas,
                                  "item-text": "clave",
                                  outlined: "",
                                  s: "",
                                  label: "Seleccionar Moneda",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.model.moneda_selected,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "moneda_selected", $$v)
                                  },
                                  expression: "model.moneda_selected"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  "offset-y": "",
                                  dense: "",
                                  items: _vm.tiempos_de_entrega,
                                  "item-text": "nombre",
                                  outlined: "",
                                  s: "",
                                  label: "Tiempo de Entrega",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.model.tde_selected,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "tde_selected", $$v)
                                  },
                                  expression: "model.tde_selected"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  "offset-y": "",
                                  dense: "",
                                  items: _vm.empleados,
                                  "item-text": "nombre_completo",
                                  outlined: "",
                                  s: "",
                                  label: "Empleado",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.model.empleado_selected,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model,
                                      "empleado_selected",
                                      $$v
                                    )
                                  },
                                  expression: "model.empleado_selected"
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
                                  "offset-y": "",
                                  dense: "",
                                  items: _vm.tipo_de_servicio,
                                  label: "Tipo de Servicio",
                                  outlined: "",
                                  "item-text": "name",
                                  "return-object": "",
                                  "prepend-icon": "mdi-clock"
                                },
                                model: {
                                  value: _vm.model.tipo_de_servicio_selected,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model,
                                      "tipo_de_servicio_selected",
                                      $$v
                                    )
                                  },
                                  expression: "model.tipo_de_servicio_selected"
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
                                  "offset-y": "",
                                  dense: "",
                                  items: _vm.estado_de_la_cotizacion,
                                  label: "Estado de la cotizacion",
                                  outlined: "",
                                  "item-text": "name",
                                  "return-object": "",
                                  "prepend-icon": "mdi-flag"
                                },
                                model: {
                                  value: _vm.model.estado_cotizacion_selected,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model,
                                      "estado_cotizacion_selected",
                                      $$v
                                    )
                                  },
                                  expression: "model.estado_cotizacion_selected"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.rules.required],
                                  dense: "",
                                  outlined: "",
                                  label: "Contacto"
                                },
                                model: {
                                  value:
                                    _vm.model.cliente_selected.nombre_completo,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model.cliente_selected,
                                      "nombre_completo",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "model.cliente_selected.nombre_completo"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.rules.required],
                                  dense: "",
                                  outlined: "",
                                  label: "Teléfono"
                                },
                                model: {
                                  value:
                                    _vm.model.cliente_selected.celular_contacto,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model.cliente_selected,
                                      "celular_contacto",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "model.cliente_selected.celular_contacto"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.rules.required],
                                  dense: "",
                                  outlined: "",
                                  label: "Correo"
                                },
                                model: {
                                  value:
                                    _vm.model.cliente_selected.correo_contacto,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model.cliente_selected,
                                      "correo_contacto",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "model.cliente_selected.correo_contacto"
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.rules.required],
                                  dense: "",
                                  outlined: "",
                                  label: "Condiciones"
                                },
                                model: {
                                  value: _vm.model.condiciones,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "condiciones", $$v)
                                  },
                                  expression: "model.condiciones"
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
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  label: "Notas de la cotizacion"
                                },
                                model: {
                                  value: _vm.model.nota_cotizacion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "nota_cotizacion", $$v)
                                  },
                                  expression: "model.nota_cotizacion"
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
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  label: "Notas de seguimiento"
                                },
                                model: {
                                  value: _vm.model.nota_seguimiento,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "nota_seguimiento", $$v)
                                  },
                                  expression: "model.nota_seguimiento"
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
                "v-card-text",
                [
                  _c(
                    "v-card",
                    { staticClass: "p-1 elevation-2" },
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
                                md: "2",
                                lg: "2"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: { outlined: "", label: "Identicacion" },
                                model: {
                                  value: _vm.partida.identificacion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "identificacion", $$v)
                                  },
                                  expression: "partida.identificacion"
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
                              _c("v-select", {
                                attrs: {
                                  "offset-y": "",
                                  items: _vm.servicio_partida,
                                  label: "Servicio",
                                  outlined: "",
                                  "item-text": "name",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.partida.servicio,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "servicio", $$v)
                                  },
                                  expression: "partida.servicio"
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
                              _c("v-select", {
                                attrs: {
                                  "offset-y": "",
                                  items: _vm.unidad_partida,
                                  label: "Unidad",
                                  outlined: "",
                                  "item-text": "name",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.partida.unidad,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "unidad", $$v)
                                  },
                                  expression: "partida.unidad"
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
                              _c("v-autocomplete", {
                                attrs: {
                                  "offset-y": "",
                                  items: _vm.instrumentos,
                                  "item-text": "nombre",
                                  outlined: "",
                                  s: "",
                                  label: "Seleccionar Instrumento",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.partida.instrumento,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "instrumento", $$v)
                                  },
                                  expression: "partida.instrumento"
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
                                attrs: { outlined: "", label: "Alcance" },
                                model: {
                                  value: _vm.partida.instrumento.alcance,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida.instrumento,
                                      "alcance",
                                      $$v
                                    )
                                  },
                                  expression: "partida.instrumento.alcance"
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
                                attrs: { outlined: "", label: "Cantidad" },
                                on: {
                                  change: function($event) {
                                    return _vm.ActualizarImporte(
                                      _vm.partida.cantidad,
                                      _vm.partida.instrumento.precio_venta
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.partida.cantidad,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "cantidad", $$v)
                                  },
                                  expression: "partida.cantidad"
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
                                attrs: { outlined: "", label: "Marca" },
                                model: {
                                  value: _vm.partida.marca,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "marca", $$v)
                                  },
                                  expression: "partida.marca"
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
                                attrs: { outlined: "", label: "Modelo" },
                                model: {
                                  value: _vm.partida.modelo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "modelo", $$v)
                                  },
                                  expression: "partida.modelo"
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
                                attrs: { outlined: "", label: "Serie" },
                                model: {
                                  value: _vm.partida.serie,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "serie", $$v)
                                  },
                                  expression: "partida.serie"
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
                                  outlined: "",
                                  label: "Precio Unitario"
                                },
                                model: {
                                  value: _vm.partida.instrumento.precio_venta,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida.instrumento,
                                      "precio_venta",
                                      $$v
                                    )
                                  },
                                  expression: "partida.instrumento.precio_venta"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Importe"
                                },
                                model: {
                                  value: _vm.var_computed_importe_instrumento,
                                  callback: function($$v) {
                                    _vm.var_computed_importe_instrumento = $$v
                                  },
                                  expression: "var_computed_importe_instrumento"
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
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    block: "",
                                    small: "",
                                    dense: ""
                                  },
                                  on: { click: _vm.AgregarPartida }
                                },
                                [
                                  _vm._v(
                                    "\r\n                                Agregar Partida\r\n                                "
                                  ),
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-plus")
                                  ])
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
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-5",
                    attrs: {
                      dense: "",
                      headers: _vm.headers_cotizacion,
                      items: _vm.model.partidas,
                      "item-key": "name"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.accion",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      icon: "",
                                      small: "",
                                      color: "error"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.eliminarPartida(item)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-delete")])],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "item.importe",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", [
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(
                                    _vm._f("numberFormat")(
                                      item.importe,
                                      _vm.model.moneda_selected.clave
                                    )
                                  ) +
                                  "\r\n                        "
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.instrumento.precio_venta",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", [
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(
                                    _vm._f("numberFormat")(
                                      item.instrumento.precio_venta,
                                      _vm.model.moneda_selected.clave
                                    )
                                  ) +
                                  "\r\n                        "
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "body.append",
                        fn: function(ref) {
                          var headers = ref.headers
                          return [
                            _c("tr", [
                              _c("td", { attrs: { colspan: headers.length } }, [
                                _c("div", { staticClass: "text-right" }, [
                                  _c("h3", [
                                    _vm._v(
                                      "\r\n                                        SUBTOTAL :" +
                                        _vm._s(
                                          _vm._f("numberFormat")(
                                            _vm.var_computed_sub_total,
                                            _vm.model.moneda_selected.clave
                                          )
                                        ) +
                                        "\r\n                                    "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right" }, [
                                  _c("h3", [
                                    _vm._v(
                                      "\r\n                                        IVA :" +
                                        _vm._s(
                                          _vm._f("numberFormat")(
                                            _vm.var_computed_iva,
                                            _vm.model.moneda_selected.clave
                                          )
                                        ) +
                                        "\r\n                                    "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right" }, [
                                  _c("h3", [
                                    _vm._v(
                                      "\r\n                                        TOTAL :" +
                                        _vm._s(
                                          _vm._f("numberFormat")(
                                            _vm.var_computed_total,
                                            _vm.model.moneda_selected.clave
                                          )
                                        ) +
                                        "\r\n                                    "
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
          attrs: { "max-width": "1256", "min-width": "1256", persistent: "" },
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
              _c(
                "v-btn",
                {
                  attrs: { text: "", dark: "", tile: "" },
                  on: { click: _vm.EditCotizacion }
                },
                [
                  _c("v-icon", [_vm._v("mdi-pencil")]),
                  _vm._v("Editar\r\n            ")
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
              _c("v-card-title", [_vm._v("Editar Cotizacion")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    { ref: "f_mag" },
                    [
                      Object.entries(this.cotizacion).length > 0
                        ? _c(
                            "v-row",
                            {
                              attrs: {
                                align: "center",
                                justify: "space-around"
                              }
                            },
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.clientes,
                                      "item-text": "razon_social",
                                      outlined: "",
                                      s: "",
                                      label: "Seleccionar Cliente",
                                      "return-object": ""
                                    },
                                    model: {
                                      value: _vm.cotizacion.has_cliente,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "has_cliente",
                                          $$v
                                        )
                                      },
                                      expression: "cotizacion.has_cliente"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.monedas,
                                      "item-text": "clave",
                                      outlined: "",
                                      s: "",
                                      label: "Seleccionar Moneda",
                                      "return-object": ""
                                    },
                                    model: {
                                      value: _vm.cotizacion.has_moneda,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "has_moneda",
                                          $$v
                                        )
                                      },
                                      expression: "cotizacion.has_moneda"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.tiempos_de_entrega,
                                      "item-text": "nombre",
                                      outlined: "",
                                      s: "",
                                      label: "Tiempo de Entrega",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion.has_tiempo_de_entrega,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "has_tiempo_de_entrega",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.has_tiempo_de_entrega"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.empleados,
                                      "item-text": "nombre_completo",
                                      outlined: "",
                                      s: "",
                                      label: "Empleado",
                                      "return-object": ""
                                    },
                                    model: {
                                      value: _vm.cotizacion.has_empleado,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "has_empleado",
                                          $$v
                                        )
                                      },
                                      expression: "cotizacion.has_empleado"
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
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.tipo_de_servicio,
                                      label: "Tipo de Servicio",
                                      outlined: "",
                                      "item-text": "name",
                                      "return-object": "",
                                      "prepend-icon": "mdi-clock"
                                    },
                                    model: {
                                      value: _vm.cotizacion.tipo_de_servicio,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "tipo_de_servicio",
                                          $$v
                                        )
                                      },
                                      expression: "cotizacion.tipo_de_servicio"
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
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.estado_de_la_cotizacion,
                                      label: "Estado de la cotizacion",
                                      outlined: "",
                                      "item-text": "name",
                                      "return-object": "",
                                      "prepend-icon": "mdi-flag"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion.estado_de_la_cotizacion,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "estado_de_la_cotizacion",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.estado_de_la_cotizacion"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Contacto"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion.has_cliente
                                          .nombre_completo,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion.has_cliente,
                                          "nombre_completo",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.has_cliente.nombre_completo"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Teléfono"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion.has_cliente
                                          .celular_contacto,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion.has_cliente,
                                          "celular_contacto",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.has_cliente.celular_contacto"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Correo"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion.has_cliente
                                          .correo_contacto,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion.has_cliente,
                                          "correo_contacto",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.has_cliente.correo_contacto"
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
                                    md: "3",
                                    lg: "3"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Condiciones"
                                    },
                                    model: {
                                      value: _vm.cotizacion.condicion,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "condicion",
                                          $$v
                                        )
                                      },
                                      expression: "cotizacion.condicion"
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
                                  _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      label: "Notas de la cotizacion"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion.nota_para_la_cotizacion,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "nota_para_la_cotizacion",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.nota_para_la_cotizacion"
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
                                  _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      label: "Notas de seguimiento"
                                    },
                                    model: {
                                      value: _vm.cotizacion.nota_de_seguimiento,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion,
                                          "nota_de_seguimiento",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion.nota_de_seguimiento"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-card",
                    { staticClass: "p-1 elevation-2" },
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
                                md: "2",
                                lg: "2"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: { outlined: "", label: "Identicacion" },
                                model: {
                                  value: _vm.partida.identificacion,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "identificacion", $$v)
                                  },
                                  expression: "partida.identificacion"
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
                              _c("v-select", {
                                attrs: {
                                  "offset-y": "",
                                  items: _vm.servicio_partida,
                                  label: "Servicio",
                                  outlined: "",
                                  "item-text": "name",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.partida.servicio,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "servicio", $$v)
                                  },
                                  expression: "partida.servicio"
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
                              _c("v-select", {
                                attrs: {
                                  "offset-y": "",
                                  items: _vm.unidad_partida,
                                  label: "Unidad",
                                  outlined: "",
                                  "item-text": "name",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.partida.unidad,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "unidad", $$v)
                                  },
                                  expression: "partida.unidad"
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
                              _c("v-autocomplete", {
                                attrs: {
                                  "offset-y": "",
                                  items: _vm.instrumentos,
                                  "item-text": "nombre",
                                  outlined: "",
                                  s: "",
                                  label: "Seleccionar Instrumento",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.partida.instrumento,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "instrumento", $$v)
                                  },
                                  expression: "partida.instrumento"
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
                                attrs: { outlined: "", label: "Alcance" },
                                model: {
                                  value: _vm.partida.instrumento.alcance,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida.instrumento,
                                      "alcance",
                                      $$v
                                    )
                                  },
                                  expression: "partida.instrumento.alcance"
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
                                attrs: { outlined: "", label: "Cantidad" },
                                on: {
                                  change: function($event) {
                                    return _vm.ActualizarImporte(
                                      _vm.partida.cantidad,
                                      _vm.partida.instrumento.precio_venta
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.partida.cantidad,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "cantidad", $$v)
                                  },
                                  expression: "partida.cantidad"
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
                                attrs: { outlined: "", label: "Marca" },
                                model: {
                                  value: _vm.partida.marca,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "marca", $$v)
                                  },
                                  expression: "partida.marca"
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
                                attrs: { outlined: "", label: "Modelo" },
                                model: {
                                  value: _vm.partida.modelo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "modelo", $$v)
                                  },
                                  expression: "partida.modelo"
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
                                attrs: { outlined: "", label: "Serie" },
                                model: {
                                  value: _vm.partida.serie,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida, "serie", $$v)
                                  },
                                  expression: "partida.serie"
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
                                  outlined: "",
                                  label: "Precio Unitario"
                                },
                                model: {
                                  value: _vm.partida.instrumento.precio_venta,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida.instrumento,
                                      "precio_venta",
                                      $$v
                                    )
                                  },
                                  expression: "partida.instrumento.precio_venta"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Importe"
                                },
                                model: {
                                  value: _vm.var_computed_importe_instrumento,
                                  callback: function($$v) {
                                    _vm.var_computed_importe_instrumento = $$v
                                  },
                                  expression: "var_computed_importe_instrumento"
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
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    block: "",
                                    dense: "",
                                    small: ""
                                  },
                                  on: { click: _vm.AgregarPartida }
                                },
                                [
                                  _vm._v(
                                    "\r\n                                Agregar Partida\r\n                                "
                                  ),
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("mdi-plus")
                                  ])
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
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-5",
                    attrs: {
                      dense: "",
                      headers: _vm.headers_cotizacion,
                      items: _vm.cotizacion.has_partidas,
                      "item-key": "name"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.identificacion",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-edit-dialog",
                              {
                                attrs: { "return-value": item.identificacion },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(
                                      item,
                                      "identificacion",
                                      $event
                                    )
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(
                                      item,
                                      "identificacion",
                                      $event
                                    )
                                  },
                                  open: _vm.open
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "input",
                                      fn: function() {
                                        return [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "identificacion",
                                              dense: "",
                                              small: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.identificacion,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "identificacion",
                                                  $$v
                                                )
                                              },
                                              expression: "item.identificacion"
                                            }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(item.identificacion) +
                                    "\r\n                            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.marca",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-edit-dialog",
                              {
                                attrs: { "return-value": item.marca },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(item, "marca", $event)
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(item, "marca", $event)
                                  },
                                  open: _vm.open
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "input",
                                      fn: function() {
                                        return [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "marca",
                                              dense: "",
                                              small: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.marca,
                                              callback: function($$v) {
                                                _vm.$set(item, "marca", $$v)
                                              },
                                              expression: "item.marca"
                                            }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(item.marca) +
                                    "\r\n                            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.modelo",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-edit-dialog",
                              {
                                attrs: { "return-value": item.modelo },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(item, "modelo", $event)
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(item, "modelo", $event)
                                  },
                                  open: _vm.open
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "input",
                                      fn: function() {
                                        return [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "modelo",
                                              dense: "",
                                              small: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.modelo,
                                              callback: function($$v) {
                                                _vm.$set(item, "modelo", $$v)
                                              },
                                              expression: "item.modelo"
                                            }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(item.modelo) +
                                    "\r\n                            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.serie",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-edit-dialog",
                              {
                                attrs: { "return-value": item.serie },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(item, "serie", $event)
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(item, "serie", $event)
                                  },
                                  open: _vm.open
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "input",
                                      fn: function() {
                                        return [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "serie",
                                              dense: "",
                                              small: "",
                                              outlined: ""
                                            },
                                            model: {
                                              value: item.serie,
                                              callback: function($$v) {
                                                _vm.$set(item, "serie", $$v)
                                              },
                                              expression: "item.serie"
                                            }
                                          })
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(item.serie) +
                                    "\r\n                            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.has_intrumento.precio_venta",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(
                                    _vm._f("numberFormat")(
                                      item.has_intrumento.precio_venta
                                    )
                                  ) +
                                  "\r\n                        "
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.importe",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(_vm._f("numberFormat")(item.importe)) +
                                  "\r\n                        "
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.accion",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      icon: "",
                                      small: "",
                                      color: "error"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.eliminarPartida(item)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-delete")])],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "body.append",
                        fn: function(ref) {
                          var headers = ref.headers
                          return [
                            _c("tr", [
                              _c("td", { attrs: { colspan: headers.length } }, [
                                _c("div", { staticClass: "text-right" }, [
                                  _c("h3", [
                                    _vm._v(
                                      "\r\n                                        SUBTOTAL : " +
                                        _vm._s(
                                          _vm._f("numberFormat")(
                                            _vm.var_computed_sub_total
                                          )
                                        ) +
                                        "\r\n                                    "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right" }, [
                                  _c("h3", [
                                    _vm._v(
                                      "IVA : " +
                                        _vm._s(
                                          _vm._f("numberFormat")(
                                            _vm.var_computed_iva
                                          )
                                        )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right" }, [
                                  _c("h3", [
                                    _vm._v(
                                      "TOTAL : " +
                                        _vm._s(
                                          _vm._f("numberFormat")(
                                            _vm.var_computed_total
                                          )
                                        )
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
        "v-layout",
        { attrs: { row: "", "justify-center": "" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "1256" },
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
                { attrs: { color: "primary" } },
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
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", dark: "" },
                      on: { click: _vm.GenerarRecibo }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-receipt")]),
                      _vm._v("Generar Recibo\r\n                ")
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
                        "v-container",
                        [
                          Object.entries(this.cotizacion_view).length > 0
                            ? _c(
                                "v-row",
                                {
                                  attrs: {
                                    align: "center",
                                    justify: "space-around"
                                  }
                                },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          disabled: "",
                                          "offset-y": "",
                                          dense: "",
                                          items: _vm.clientes,
                                          "item-text": "razon_social",
                                          outlined: "",
                                          label: "Seleccionar Cliente",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view.has_cliente,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "has_cliente",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_cliente"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          disabled: "",
                                          "offset-y": "",
                                          dense: "",
                                          items: _vm.monedas,
                                          "item-text": "clave",
                                          outlined: "",
                                          label: "Seleccionar Moneda",
                                          "return-object": ""
                                        },
                                        model: {
                                          value: _vm.cotizacion_view.has_moneda,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "has_moneda",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_moneda"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          disabled: "",
                                          "offset-y": "",
                                          dense: "",
                                          items: _vm.tiempos_de_entrega,
                                          "item-text": "nombre",
                                          outlined: "",
                                          label: "Tiempo de Entrega",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view
                                              .has_tiempo_de_entrega,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "has_tiempo_de_entrega",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_tiempo_de_entrega"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          disabled: "",
                                          "offset-y": "",
                                          dense: "",
                                          items: _vm.empleados,
                                          "item-text": "nombre_completo",
                                          outlined: "",
                                          label: "Empleado",
                                          "return-object": ""
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view.has_empleado,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "has_empleado",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_empleado"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          disabled: "",
                                          rules: [_vm.rules.required],
                                          dense: "",
                                          outlined: "",
                                          label: "Contacto"
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view.has_cliente
                                              .nombre_completo,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view.has_cliente,
                                              "nombre_completo",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_cliente.nombre_completo"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          disabled: "",
                                          rules: [_vm.rules.required],
                                          dense: "",
                                          outlined: "",
                                          label: "Teléfono"
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view.has_cliente
                                              .celular_contacto,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view.has_cliente,
                                              "celular_contacto",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_cliente.celular_contacto"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          disabled: "",
                                          rules: [_vm.rules.required],
                                          dense: "",
                                          outlined: "",
                                          label: "Correo"
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view.has_cliente
                                              .correo_contacto,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view.has_cliente,
                                              "correo_contacto",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_cliente.correo_contacto"
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
                                        md: "3",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          disabled: "",
                                          rules: [_vm.rules.required],
                                          dense: "",
                                          outlined: "",
                                          label: "Condiciones"
                                        },
                                        model: {
                                          value: _vm.cotizacion_view.condicion,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "condicion",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.condicion"
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
                                      _c("v-textarea", {
                                        attrs: {
                                          disabled: "",
                                          outlined: "",
                                          label: "Notas de la cotizacion"
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view
                                              .nota_para_la_cotizacion,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "nota_para_la_cotizacion",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.nota_para_la_cotizacion"
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
                                      _c("v-textarea", {
                                        attrs: {
                                          disabled: "",
                                          outlined: "",
                                          label: "Notas de seguimiento"
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_view
                                              .nota_de_seguimiento,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view,
                                              "nota_de_seguimiento",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.nota_de_seguimiento"
                                        }
                                      })
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
                      _c(
                        "v-data-table",
                        {
                          staticClass: "elevation-1 mt-5",
                          attrs: {
                            dense: "",
                            headers: _vm.headers_cotizacion,
                            items: _vm.cotizacion_view.has_partidas,
                            "item-key": "name"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "items",
                              fn: function(props) {
                                return [
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.servicio))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.unidad))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.informe))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.has_intrumento))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      _vm._s(
                                        props.item.has_intrumento
                                          .has_acreditacion.nombre
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.tipo))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.vigencia))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(props.item.accion))
                                  ])
                                ]
                              }
                            },
                            {
                              key: "item.has_intrumento",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c("td", [
                                    _c("strong", { staticClass: "text-left" }, [
                                      _vm._v(_vm._s(item.identificacion))
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "float-left" }, [
                                      _c("strong", [_vm._v("ID:")]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(_vm._s(item.identificacion))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "float-left" }, [
                                      _c("strong", [_vm._v("Marca:")]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(item.marca))])
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "float-left" }, [
                                      _c("strong", [_vm._v("Modelo:")]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(item.modelo))])
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "float-left" }, [
                                      _c("strong", [_vm._v("Serie:")]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(item.serie))])
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "float-left" }, [
                                      _c("strong", [_vm._v("Magnitud:")]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(
                                          _vm._s(
                                            item.has_intrumento.has_magnitud
                                              .nombre
                                          )
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              }
                            },
                            {
                              key: "item.tipo",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      !item.tipo
                                        ? _c("v-select", {
                                            staticClass: "text-center mt-5",
                                            attrs: {
                                              items: _vm.items_tipo,
                                              label: "",
                                              "item-text": "name",
                                              "return-object": "",
                                              outlined: "",
                                              dense: "",
                                              "offset-y": ""
                                            },
                                            model: {
                                              value: item.tipo,
                                              callback: function($$v) {
                                                _vm.$set(item, "tipo", $$v)
                                              },
                                              expression: "item.tipo"
                                            }
                                          })
                                        : _c(
                                            "div",
                                            { staticClass: "text-center" },
                                            [_vm._v(_vm._s(item.tipo))]
                                          )
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.informe",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "td",
                                    [
                                      item.informe_id
                                        ? _c("span", [
                                            _vm._v(_vm._s(item.informe_id))
                                          ])
                                        : _c(
                                            "v-btn",
                                            {
                                              staticClass: "text-center mt-5",
                                              attrs: {
                                                color: "primary",
                                                block: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.GenerarIdInforme(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Generar ID Informe")]
                                          )
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.convert_recibo",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "td",
                                    [
                                      _c("v-switch", {
                                        staticClass: "text-center mt-5 w-50",
                                        attrs: { label: "", small: "" },
                                        model: {
                                          value: item.convertir_recibo,
                                          callback: function($$v) {
                                            _vm.$set(
                                              item,
                                              "convertir_recibo",
                                              $$v
                                            )
                                          },
                                          expression: "item.convertir_recibo"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.vigencia",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "td",
                                    [
                                      !item.vigencia
                                        ? _c("v-text-field", {
                                            staticClass: "mt-5 text-center",
                                            attrs: {
                                              label: "",
                                              outlined: "",
                                              dense: ""
                                            },
                                            model: {
                                              value: item.vigencia,
                                              callback: function($$v) {
                                                _vm.$set(item, "vigencia", $$v)
                                              },
                                              expression: "item.vigencia"
                                            }
                                          })
                                        : _c(
                                            "span",
                                            { staticClass: "text-center" },
                                            [_vm._v(_vm._s(item.vigencia))]
                                          )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "template",
                            { slot: "no-data" },
                            [
                              _c(
                                "v-alert",
                                {
                                  attrs: {
                                    value: true,
                                    color: "error",
                                    icon: "warning"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n                                Sorry, nothing to display here :(\r\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        2
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
          attrs: { persistent: "", "max-width": "1256", "min-width": "1256" },
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
              _c(
                "v-btn",
                {
                  attrs: { text: "", icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.myPdfComponent.print()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-printer")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("pdf", {
            ref: "myPdfComponent",
            attrs: { src: _vm.cotizacion_print.ruta_print_document }
          })
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

/***/ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/indexCotizacionesComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexCotizacionesComponent_vue_vue_type_template_id_57f955a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true& */ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true&");
/* harmony import */ var _indexCotizacionesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexCotizacionesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true& */ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _indexCotizacionesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexCotizacionesComponent_vue_vue_type_template_id_57f955a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexCotizacionesComponent_vue_vue_type_template_id_57f955a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57f955a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/indexCotizacionesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexCotizacionesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=style&index=0&id=57f955a9&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_style_index_0_id_57f955a9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_template_id_57f955a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/indexCotizacionesComponent.vue?vue&type=template&id=57f955a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_template_id_57f955a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexCotizacionesComponent_vue_vue_type_template_id_57f955a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalAddCotizacionComponent_vue_vue_type_template_id_4eb4180c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c& */ "./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c&");
/* harmony import */ var _modalAddCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAddCotizacionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalAddCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalAddCotizacionComponent_vue_vue_type_template_id_4eb4180c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalAddCotizacionComponent_vue_vue_type_template_id_4eb4180c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAddCotizacionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddCotizacionComponent_vue_vue_type_template_id_4eb4180c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalAddCotizacionComponent.vue?vue&type=template&id=4eb4180c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddCotizacionComponent_vue_vue_type_template_id_4eb4180c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAddCotizacionComponent_vue_vue_type_template_id_4eb4180c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalEditCotizacionComponent_vue_vue_type_template_id_4e441a59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59& */ "./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59&");
/* harmony import */ var _modalEditCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEditCotizacionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalEditCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalEditCotizacionComponent_vue_vue_type_template_id_4e441a59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalEditCotizacionComponent_vue_vue_type_template_id_4e441a59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEditCotizacionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditCotizacionComponent_vue_vue_type_template_id_4e441a59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalEditCotizacionComponent.vue?vue&type=template&id=4e441a59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditCotizacionComponent_vue_vue_type_template_id_4e441a59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalEditCotizacionComponent_vue_vue_type_template_id_4e441a59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalViewCotizacionComponent_vue_vue_type_template_id_09284f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e& */ "./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e&");
/* harmony import */ var _modalViewCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalViewCotizacionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalViewCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalViewCotizacionComponent_vue_vue_type_template_id_09284f5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalViewCotizacionComponent_vue_vue_type_template_id_09284f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalViewCotizacionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewCotizacionComponent_vue_vue_type_template_id_09284f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewCotizacionComponent.vue?vue&type=template&id=09284f5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewCotizacionComponent_vue_vue_type_template_id_09284f5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewCotizacionComponent_vue_vue_type_template_id_09284f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalViewPdfComponent_vue_vue_type_template_id_6b67dd2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d& */ "./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d&");
/* harmony import */ var _modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalViewPdfComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalViewPdfComponent_vue_vue_type_template_id_6b67dd2d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalViewPdfComponent_vue_vue_type_template_id_6b67dd2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalViewPdfComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_template_id_6b67dd2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalViewPdfComponent.vue?vue&type=template&id=6b67dd2d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_template_id_6b67dd2d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_template_id_6b67dd2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);