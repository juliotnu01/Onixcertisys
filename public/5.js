(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/indexClienteComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cliente/indexClienteComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_modalDuplicateCotizacionComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/modalDuplicateCotizacionComponent.vue */ "./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue");
/* harmony import */ var _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notificacion/indexComponentNotificacion.vue */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../overlayComponent.vue */ "./resources/js/components/overlayComponent.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-para-duplicar": _modals_modalDuplicateCotizacionComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    notificacion: _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    apexcharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    "overlay": _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      cliente_selected: {},
      headers_cotizacion: [{
        text: "Cotizacion",
        align: "start",
        sortable: false,
        value: "id"
      }, {
        text: "Fecha de creacion",
        align: "start",
        sortable: false,
        value: "created_at"
      }, {
        text: "Accion",
        align: "center",
        sortable: false,
        value: "accion"
      }],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: "",
        data: [30, 40, 45, 50, 49, 60, 70, 81]
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["services", "clientes"])),
  methods: {
    EnlazarCotizacion: function EnlazarCotizacion(item) {
      this.$store.commit("setCotizacionParaDuplicar", item);
      this.$store.commit("setDialogDuplicateCotizacion", true);
    },
    cargarchart: function cargarchart() {
      for (var _i = 0, _Object$entries = Object.entries(this.cliente_selected.has_cotizaciones); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        for (var i = 0; value.length > i; i++) {
          this.options.xaxis.categories.push(key);
          var total = 0;
          total += value[i].total;
          this.series[0].data.push(key);
        }
      } // this.opcionesCotizacion = dataCotizacion;

    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../overlayComponent.vue */ "./resources/js/components/overlayComponent.vue");


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
        name: "Orden de servicio",
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
        unidad: {},
        unidad_cod: {},
        clave_sat: {}
      },
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
  components: {
    "overlay": _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_duplicate_cotizacion", "clientes", "monedas", "empleados", "tiempos_de_entrega", "instrumentos", "cotizacion_para_duplicar", "unidades", "clavesSat"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_duplicate_cotizacion;
      },
      set: function set(val) {
        this.$store.commit("setDialogDuplicateCotizacion", val);
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

        for (var i = 0; i < this.cotizacion_para_duplicar.has_partidas.length; i++) {
          result += parseInt(this.cotizacion_para_duplicar.has_partidas[i].importe);
        }

        this.cotizacion_para_duplicar.sub_total = parseInt(result);
        return this.cotizacion_para_duplicar.sub_total;
      },
      set: function set(newVal) {
        this.cotizacion_para_duplicar.sub_total = newVal;
      }
    },
    var_computed_iva: {
      get: function get() {
        var _this = this;

        var result = 0,
            item_iva = 0;
        this.cotizacion_para_duplicar.has_partidas.forEach(function (item) {
          item_iva = item.importe * _this.cotizacion_para_duplicar.has_cliente.iva / 100;
          result += item_iva;
        });
        this.cotizacion_para_duplicar.iva = parseInt(result);
        return this.cotizacion_para_duplicar.iva;
      },
      set: function set(newVal) {
        this.cotizacion_para_duplicar.iva = newVal;
      }
    },
    var_computed_total: {
      get: function get() {
        var result = 0;
        result = this.var_computed_sub_total + this.var_computed_iva;
        this.cotizacion_para_duplicar.total = parseInt(result);
        return this.cotizacion_para_duplicar.total;
      },
      set: function set(newVal) {
        this.cotizacion_para_duplicar.total;
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
              _this2.$store.commit('setOverley', true);

              Promise.all([_this2.services.clienteServices.getlistclientes(), _this2.services.monedaServices.getlistMonedas(), _this2.services.tiempoDeEntregaServices.getlistTiempoDeEntrega(), _this2.services.empleadoServices.getlistEmpleados(), _this2.services.instrumentoServices.getlistInstrumentos(), _this2.services.unidadServices.getUnidades(), _this2.services.claveSatServices.getclavesSat()]).then(function () {
                _this2.$store.commit('setOverley', false);
              })["catch"](function (reason) {
                _this2.$store.commit('setOverley', false);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    AgregarPartida: function AgregarPartida() {
      for (var i = 0; i < this.partida.cantidad; i++) {
        var _obj;

        var obj = (_obj = {
          identificacion: this.partida.identificacion,
          has_intrumento: this.partida.instrumento,
          cantidad: this.partida.cantidad,
          marca: this.partida.marca,
          modelo: this.partida.modelo,
          serie: this.partida.serie,
          importe: this.partida.importe
        }, _defineProperty(_obj, "marca", this.partida.marca), _defineProperty(_obj, "modelo", this.partida.modelo), _defineProperty(_obj, "serie", this.partida.serie), _defineProperty(_obj, "servicio", this.partida.servicio.name), _defineProperty(_obj, "unidad", this.partida.unidad.name), _defineProperty(_obj, "importe", this.partida.instrumento.precio_venta * 1), _defineProperty(_obj, "unidad_cod", this.partida.unidad_cod), _defineProperty(_obj, "clave_sat", this.partida.clave_sat), _obj);
        this.cotizacion_para_duplicar.has_partidas.push(obj);
      }

      this.partida = {
        identificacion: "",
        instrumento: {},
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {},
        unidad_cod: {},
        clave_sat: {}
      };
    },
    AddCotizacion: function AddCotizacion() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.$refs.f_mag.validate()) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return _this3.services.cotizacionServices.agregarCotizacionDuplicada(_this3.cotizacion_para_duplicar);

              case 3:
                _this3.cotizacion_para_duplicar = {};

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    eliminarPartida: function eliminarPartida(item) {
      this.services.partidaServices.EliminarPartida(item);
      var index = this.cotizacion_para_duplicar.has_partidas.indexOf(item);
      this.cotizacion_para_duplicar.has_partidas.splice(index, 1);
    },
    ActualizarImporte: function ActualizarImporte(item) {
      item.importe = item.has_intrumento.precio_venta;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/indexClienteComponent.vue?vue&type=template&id=05f68c85&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cliente/indexClienteComponent.vue?vue&type=template&id=05f68c85& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          items: _vm.clientes,
                          outlined: "",
                          label: "Seleccionar cliente",
                          "item-text":
                            "datos_fisicos_requeremientos_facturacion_razon_social",
                          "item-value": "id",
                          "return-object": ""
                        },
                        on: { change: _vm.cargarchart },
                        model: {
                          value: _vm.cliente_selected,
                          callback: function($$v) {
                            _vm.cliente_selected = $$v
                          },
                          expression: "cliente_selected"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-data-table", {
                                        staticClass: "elevation-1",
                                        attrs: {
                                          headers: _vm.headers_cotizacion,
                                          items:
                                            _vm.cliente_selected
                                              .has_cotizaciones,
                                          "items-per-page": 5
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "item.accion",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c(
                                                  "v-tooltip",
                                                  {
                                                    attrs: { bottom: "" },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            var attrs =
                                                              ref.attrs
                                                            return [
                                                              _c(
                                                                "v-btn",
                                                                _vm._g(
                                                                  _vm._b(
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "primary",
                                                                        dark:
                                                                          "",
                                                                        icon:
                                                                          "",
                                                                        fab: ""
                                                                      },
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.EnlazarCotizacion(
                                                                            item
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    "v-btn",
                                                                    attrs,
                                                                    false
                                                                  ),
                                                                  on
                                                                ),
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    _vm._g(
                                                                      _vm._b(
                                                                        {
                                                                          attrs: {
                                                                            dark:
                                                                              ""
                                                                          }
                                                                        },
                                                                        "v-icon",
                                                                        attrs,
                                                                        false
                                                                      ),
                                                                      on
                                                                    ),
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-content-duplicate\n                            "
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    )
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v(
                                                        "Enlazar cotizacion"
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item.created_at",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return [
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        item.created_at.substr(
                                                          0,
                                                          10
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  )
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
      _c("modal-para-duplicar"),
      _vm._v(" "),
      _c("notificacion"),
      _vm._v(" "),
      _c("overlay")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee& ***!
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
          attrs: { "max-width": "2556", "min-width": "2556", persistent: "" },
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
                  on: { click: _vm.AddCotizacion }
                },
                [
                  _c("v-icon", [_vm._v("mdi-plus")]),
                  _vm._v("Crear Nueva Cotizacion\n      ")
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
                    "v-form",
                    { ref: "f_mag" },
                    [
                      Object.entries(this.cotizacion_para_duplicar).length > 0
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
                                    md: "2",
                                    lg: "2"
                                  }
                                },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      "offset-y": "",
                                      dense: "",
                                      items: _vm.clientes,
                                      "item-text":
                                        "datos_fisicos_requeremientos_facturacion_razon_social",
                                      "item-value": "id",
                                      outlined: "",
                                      label: "Seleccionar Cliente",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .has_cliente,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "has_cliente",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.has_cliente"
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
                                      dense: "",
                                      items:
                                        _vm.cotizacion_para_duplicar.has_cliente
                                          .has_sucursal,
                                      "item-text": "nombre_sucursal",
                                      "item-value": "id",
                                      outlined: "",
                                      label: "Seleccionar sucursal",
                                      "return-object": ""
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .sucursal_cliente_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "sucursal_cliente_id",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.sucursal_cliente_id"
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
                                    lg: "2"
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
                                      value:
                                        _vm.cotizacion_para_duplicar.has_moneda,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "has_moneda",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.has_moneda"
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
                                    lg: "2"
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
                                        _vm.cotizacion_para_duplicar
                                          .has_tiempo_de_entrega,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "has_tiempo_de_entrega",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.has_tiempo_de_entrega"
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
                                    lg: "2"
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
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .has_empleado,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "has_empleado",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.has_empleado"
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
                                      "item-value": "name",
                                      "return-object": "",
                                      "prepend-icon": "mdi-clock"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .tipo_de_servicio,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "tipo_de_servicio",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.tipo_de_servicio"
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
                                      "item-value": "name",
                                      "return-object": "",
                                      "prepend-icon": "mdi-flag"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .estado_de_la_cotizacion,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "estado_de_la_cotizacion",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.estado_de_la_cotizacion"
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
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Contacto"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar.contacto,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "contacto",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.contacto"
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
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Teléfono"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .contacto_telefono,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "contacto_telefono",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.contacto_telefono"
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
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Correo"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar
                                          .contacto_correo,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "contacto_correo",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.contacto_correo"
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
                                      rules: [_vm.rules.required],
                                      dense: "",
                                      outlined: "",
                                      label: "Condiciones"
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_para_duplicar.condicion,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "condicion",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.condicion"
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
                                        _vm.cotizacion_para_duplicar
                                          .nota_para_la_cotizacion,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_para_duplicar,
                                          "nota_para_la_cotizacion",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_para_duplicar.nota_para_la_cotizacion"
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
                                    "\n                Agregar Partida\n                "
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
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Identicacion")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Servicio")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Clave Sat")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Unidad")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Unidad cod.")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Instrumento")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Marca")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Modelo")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Serie")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Alcance")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Acreditacion")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Precio Unitario")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Importe")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Accion")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm._l(
                                  _vm.cotizacion_para_duplicar.has_partidas,
                                  function(item, p) {
                                    return _c("tr", { key: p }, [
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "Identifcacion",
                                              outlined: "",
                                              dense: "",
                                              small: ""
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
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(item.servicio) +
                                            "\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-autocomplete", {
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "",
                                              outlined: "",
                                              dense: "",
                                              small: "",
                                              "item-text": "codigo",
                                              items: _vm.clavesSat,
                                              "item-value": "id",
                                              "return-object": ""
                                            },
                                            model: {
                                              value: item.has_clave_sat,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "has_clave_sat",
                                                  $$v
                                                )
                                              },
                                              expression: "item.has_clave_sat"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(item.unidad) +
                                            "\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-autocomplete", {
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "",
                                              outlined: "",
                                              dense: "",
                                              small: "",
                                              "item-text": "clave",
                                              items: _vm.unidades,
                                              "item-value": "id",
                                              "return-object": ""
                                            },
                                            model: {
                                              value: item.has_unidad,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "has_unidad",
                                                  $$v
                                                )
                                              },
                                              expression: "item.has_unidad"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(item.has_intrumento.nombre) +
                                            "\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "Marca",
                                              outlined: "",
                                              dense: "",
                                              small: ""
                                            },
                                            model: {
                                              value: item.marca,
                                              callback: function($$v) {
                                                _vm.$set(item, "marca", $$v)
                                              },
                                              expression: "item.marca"
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
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "Modelo",
                                              outlined: "",
                                              dense: "",
                                              small: ""
                                            },
                                            model: {
                                              value: item.modelo,
                                              callback: function($$v) {
                                                _vm.$set(item, "modelo", $$v)
                                              },
                                              expression: "item.modelo"
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
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "Serie",
                                              outlined: "",
                                              dense: "",
                                              small: ""
                                            },
                                            model: {
                                              value: item.serie,
                                              callback: function($$v) {
                                                _vm.$set(item, "serie", $$v)
                                              },
                                              expression: "item.serie"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              item.has_intrumento.alcance
                                            ) +
                                            "\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(
                                              item.has_intrumento
                                                .has_acreditacion.nombre
                                            ) +
                                            "\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("v-text-field", {
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "Precio venta",
                                              outlined: "",
                                              dense: "",
                                              small: ""
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.ActualizarImporte(
                                                  item
                                                )
                                              }
                                            },
                                            model: {
                                              value:
                                                item.has_intrumento
                                                  .precio_venta,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item.has_intrumento,
                                                  "precio_venta",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "item.has_intrumento.precio_venta"
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
                                            staticClass: "m-0 p-0",
                                            attrs: {
                                              label: "Importe",
                                              outlined: "",
                                              dense: "",
                                              small: ""
                                            },
                                            model: {
                                              value: item.importe,
                                              callback: function($$v) {
                                                _vm.$set(item, "importe", $$v)
                                              },
                                              expression: "item.importe"
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
                                                icon: "",
                                                small: "",
                                                color: "error"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.eliminarPartida(
                                                    item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete")
                                              ])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  }
                                ),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: 15 } }, [
                                    _c("div", { staticClass: "text-right" }, [
                                      _c("h3", [
                                        _vm._v(
                                          "SUBTOTAL :" +
                                            _vm._s(
                                              _vm._f("numberFormat")(
                                                _vm.var_computed_sub_total,
                                                ""
                                              )
                                            )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _c("h3", [
                                        _vm._v(
                                          "IVA :" +
                                            _vm._s(
                                              _vm._f("numberFormat")(
                                                _vm.var_computed_iva,
                                                ""
                                              )
                                            )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _c("h3", [
                                        _vm._v(
                                          "TOTAL :" +
                                            _vm._s(
                                              _vm._f("numberFormat")(
                                                _vm.var_computed_total,
                                                ""
                                              )
                                            )
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ],
                              2
                            )
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
          ),
          _vm._v(" "),
          _c("overlay")
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

/***/ "./resources/js/components/cliente/indexClienteComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/cliente/indexClienteComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexClienteComponent_vue_vue_type_template_id_05f68c85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexClienteComponent.vue?vue&type=template&id=05f68c85& */ "./resources/js/components/cliente/indexClienteComponent.vue?vue&type=template&id=05f68c85&");
/* harmony import */ var _indexClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexClienteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cliente/indexClienteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexClienteComponent_vue_vue_type_template_id_05f68c85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexClienteComponent_vue_vue_type_template_id_05f68c85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cliente/indexClienteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cliente/indexClienteComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cliente/indexClienteComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexClienteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/indexClienteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClienteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cliente/indexClienteComponent.vue?vue&type=template&id=05f68c85&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/cliente/indexClienteComponent.vue?vue&type=template&id=05f68c85& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClienteComponent_vue_vue_type_template_id_05f68c85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexClienteComponent.vue?vue&type=template&id=05f68c85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/indexClienteComponent.vue?vue&type=template&id=05f68c85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClienteComponent_vue_vue_type_template_id_05f68c85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexClienteComponent_vue_vue_type_template_id_05f68c85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalDuplicateCotizacionComponent_vue_vue_type_template_id_17f0c4ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee& */ "./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee&");
/* harmony import */ var _modalDuplicateCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalDuplicateCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalDuplicateCotizacionComponent_vue_vue_type_template_id_17f0c4ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalDuplicateCotizacionComponent_vue_vue_type_template_id_17f0c4ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDuplicateCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDuplicateCotizacionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDuplicateCotizacionComponent_vue_vue_type_template_id_17f0c4ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cliente/modals/modalDuplicateCotizacionComponent.vue?vue&type=template&id=17f0c4ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDuplicateCotizacionComponent_vue_vue_type_template_id_17f0c4ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalDuplicateCotizacionComponent_vue_vue_type_template_id_17f0c4ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);