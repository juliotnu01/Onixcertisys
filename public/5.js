(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/indexComponentfactura.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/factura/indexComponentfactura.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_modalTotalizarComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalTotalizarComponent.vue */ "./resources/js/components/factura/modals/modalTotalizarComponent.vue");
/* harmony import */ var _modals_modalPdfFacturaComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modalPdfFacturaComponent */ "./resources/js/components/factura/modals/modalPdfFacturaComponent.vue");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'modal-add-factura': _modals_modalTotalizarComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'modal-pdf-factura': _modals_modalPdfFacturaComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      model: {
        recibo: [],
        factura_nueva: {
          cliente: {},
          moneda: {},
          vendedor: {},
          forma_de_pago: '',
          metodo_de_pago: '',
          nota_de_factura: ''
        }
      },
      instrumentoSelected: {
        cantidad: 1,
        concepto: {
          name: "Calibracion",
          value: 1
        },
        instrumento: {},
        importe: '',
        marca: '',
        modelo: '',
        serie: ''
      },
      tipo_de_factura: [{
        name: 'Generar factura de las orde de servicio ',
        value: 1
      } // {
      //     name: 'Generar factura en blanco',
      //     value: 2
      // },
      ],
      tipoFacturaSelected: {},
      headers_partidas_factura: [{
        text: 'Orden de Servicio',
        sorable: false,
        align: 'center',
        value: 'reciboID'
      }, {
        text: 'Cotizacion',
        sorable: false,
        align: 'center',
        value: 'cotizacionID'
      }, {
        text: 'ID',
        sorable: false,
        align: 'center',
        value: 'informe_id'
      }, {
        text: 'Concepto',
        sorable: false,
        align: 'center',
        value: 'servicio'
      }, {
        text: 'Instrumento',
        sorable: false,
        align: 'center',
        value: 'has_intrumento'
      }, {
        text: 'Estado de la calibracion',
        sorable: false,
        align: 'center',
        value: 'has_calibracion'
      }, {
        text: 'Precio unitario',
        sorable: false,
        align: 'center',
        value: 'has_intrumento.precio_venta'
      }, {
        text: 'Importe',
        sorable: false,
        align: 'center',
        value: 'importe'
      }, {
        text: 'Accion',
        sorable: false,
        align: 'center',
        value: 'accion'
      }],
      tipo_de_servicio: [{
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
      ClienteSelected: {},
      partidas_acumuladas: [],
      cotizacion_partida: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['services', 'recibos', 'clientes', 'monedas', 'empleados', 'instrumentos', 'clientes', 'recibos_cliente'])), {}, {
    var_computed_subtotal: {
      get: function get() {
        var result = 0;

        if (Object.entries(this.partidas_acumuladas).length > 0) {
          for (var i = 0; this.partidas_acumuladas.length > i; i++) {
            result += this.partidas_acumuladas[i].cantidad * this.partidas_acumuladas[i].has_intrumento.precio_venta;
          }
        }

        return result;
      },
      set: function set(val) {
        this.partidas_acumuladas = val;
      }
    },
    var_computed_iva: {
      get: function get() {
        var result = 0;

        if (Object.entries(this.cotizacion_partida).length > 3) {
          result = this.var_computed_subtotal * this.cotizacion_partida.has_cliente.iva / 100;
          return result;
        }
      },
      set: function set(val) {
        this.partidas_acumuladas = val;
      }
    },
    var_computed_total: {
      get: function get() {
        var result = 0;

        if (Object.entries(this.partidas_acumuladas.length > 0)) {
          result = this.var_computed_subtotal + this.var_computed_iva;
          return result;
        }
      },
      set: function set(val) {
        this.partidas_acumuladas = val;
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
              return _this.services.reciboServices.getlistRecibos();

            case 2:
              _context.next = 4;
              return _this.services.clienteServices.getlistclientes();

            case 4:
              _context.next = 6;
              return _this.services.monedaServices.getlistMonedas();

            case 6:
              _context.next = 8;
              return _this.services.empleadoServices.getlistEmpleados();

            case 8:
              _context.next = 10;
              return _this.services.instrumentoServices.getlistInstrumentos();

            case 10:
              _context.next = 12;
              return _this.services.clienteServices.getlistclientes();

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    addPartida: function addPartida() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var model;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  model = {
                    cantidad: _this2.instrumentoSelected.cantidad,
                    has_intrumento: _this2.instrumentoSelected.instrumento,
                    importe: _this2.instrumentoSelected.cantidad * _this2.instrumentoSelected.instrumento.precio_venta,
                    marca: _this2.instrumentoSelected.marca,
                    modelo: _this2.instrumentoSelected.modelo,
                    serie: _this2.instrumentoSelected.serie,
                    id: _this2.partidas_acumuladas[_this2.partidas_acumuladas.length - 1].id + 1
                  };

                  _this2.partidas_acumuladas.push(model);

                  _this2.instrumentoSelected = {
                    cantidad: 1,
                    concepto: {
                      name: "Calibracion",
                      value: 1
                    },
                    instrumento: {}
                  };
                } catch (e) {
                  console.log(e);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    EliminarPartida: function EliminarPartida(item) {
      var index = this.partidas_acumuladas.indexOf(item);
      this.partidas_acumuladas.splice(index, 1);
    },
    ClienteSeleccionado: function ClienteSeleccionado(cli) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this3.model.recibo = [];
                _this3.partidas_acumuladas = [];
                _this3.cotizacion_partida = {};
                _context3.next = 6;
                return _this3.services.reciboServices.getlistRecibosClientes(cli);

              case 6:
                _context3.next = 10;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    remove: function remove(item) {
      var index = this.model.recibo.indexOf(item);
      if (index >= 0) this.model.recibo.splice(index, 1);

      for (var j = 0; j < item.has_partidas.length; j++) {
        var indexP = this.partidas_acumuladas.indexOf(item.has_partidas[j]);
        this.partidas_acumuladas.splice(indexP, 1);
      }
    },
    CargarPartidas: function CargarPartidas(p) {
      var _this4 = this;

      this.model.recibo.forEach(function (item) {
        _this4.cotizacion_partida = item.has_cotizaicon;
      });

      for (var i = 0; i < this.model.recibo.length; i++) {
        for (var j = 0; j < this.model.recibo[i].has_partidas.length; j++) {
          if (!this.partidas_acumuladas.includes(this.model.recibo[i].has_partidas[j])) {
            this.partidas_acumuladas.push(this.model.recibo[i].has_partidas[j]);

            var _iterator = _createForOfIteratorHelper(this.partidas_acumuladas),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var a = _step.value;

                if (a.id === this.model.recibo[i].has_partidas[j].id) {
                  a.cotizacionID = this.model.recibo[i].has_cotizaicon.id;
                  a.reciboID = this.model.recibo[i].id;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }
    },
    TotalizarFactura: function TotalizarFactura() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var dataFactura;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dataFactura = {
                  partidas: _this5.partidas_acumuladas,
                  cliente: _this5.cotizacion_partida,
                  subtotal: _this5.var_computed_subtotal,
                  iva: _this5.var_computed_iva,
                  total: _this5.var_computed_total,
                  nota: _this5.cotizacion_partida.nota_de_factura
                };

                _this5.$store.commit('setDialogFactura', dataFactura);

                _this5.$store.commit("setDialogAddFactura", true);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_pdf_factura", 'ruta_pdf_factura'])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_pdf_factura;
      },
      set: function set(val) {
        this.$store.commit("setDialogPdfFactura", val);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fecha: moment__WEBPACK_IMPORTED_MODULE_2___default()().format('l')
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['services', 'dialog_add_factura', 'factura'])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_add_factura;
      },
      set: function set(val) {
        this.$store.commit("setDialogAddFactura", val);
      }
    }
  }),
  methods: {
    RegistrarFactura: function RegistrarFactura() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  _this.services.facturaServices.agregarFactura(_this.factura);
                } catch (e) {
                  console.log(e);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/indexComponentfactura.vue?vue&type=template&id=2cf2378a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/factura/indexComponentfactura.vue?vue&type=template&id=2cf2378a& ***!
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
            { attrs: { cols: "12", xs: "12", sm: "12", md: "6", lg: "6" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", xs: "12", sm: "12", md: "12" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.tipo_de_factura,
                          label: "Seleccionar el tipo de factura",
                          "item-text": "name",
                          "return-object": "",
                          outlined: "",
                          clearable: ""
                        },
                        model: {
                          value: _vm.tipoFacturaSelected,
                          callback: function($$v) {
                            _vm.tipoFacturaSelected = $$v
                          },
                          expression: "tipoFacturaSelected"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _vm.tipoFacturaSelected.value == 1
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", xs: "12", sm: "12", md: "12" } },
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
                                      items: _vm.clientes,
                                      "item-text": "razon_social",
                                      "return-object": "",
                                      label: "Clientes",
                                      outlined: "",
                                      clearable: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.ClienteSeleccionado(
                                          _vm.ClienteSelected
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.ClienteSelected,
                                      callback: function($$v) {
                                        _vm.ClienteSelected = $$v
                                      },
                                      expression: "ClienteSelected"
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
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.recibos_cliente,
                                      outlined: "",
                                      chips: "",
                                      label: "Ordenes de Sercicios",
                                      "item-text": "id",
                                      "item-value": "id",
                                      multiple: "",
                                      "return-object": ""
                                    },
                                    on: { change: _vm.CargarPartidas },
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
                                                    },
                                                    on: {
                                                      click: data.select,
                                                      "click:close": function(
                                                        $event
                                                      ) {
                                                        return _vm.remove(
                                                          data.item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  "v-chip",
                                                  data.attrs,
                                                  false
                                                ),
                                                [
                                                  _vm._v(
                                                    "\r\n                                        Orden de servicio: " +
                                                      _vm._s(data.item.id) +
                                                      " - " +
                                                      _vm._s(
                                                        data.item.has_cotizaicon
                                                          .has_cliente
                                                          .razon_social
                                                      ) +
                                                      "\r\n                                        "
                                                  ),
                                                  data.item.estado ===
                                                  "pendiente"
                                                    ? _c(
                                                        "v-alert",
                                                        {
                                                          staticClass: "ml-4",
                                                          staticStyle: {
                                                            position:
                                                              "relative",
                                                            top: "8px",
                                                            height: "23px",
                                                            "padding-top": "0px"
                                                          },
                                                          attrs: {
                                                            color: "primary",
                                                            dark: "",
                                                            value: true,
                                                            dense: "",
                                                            small: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                            " +
                                                              _vm._s(
                                                                data.item.estado
                                                              ) +
                                                              "\r\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    : _c(
                                                        "v-alert",
                                                        {
                                                          staticClass: "ml-4",
                                                          staticStyle: {
                                                            position:
                                                              "relative",
                                                            top: "8px",
                                                            height: "23px",
                                                            "padding-top": "0px"
                                                          },
                                                          attrs: {
                                                            color: "success",
                                                            dark: "",
                                                            value: true,
                                                            dense: "",
                                                            small: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                            " +
                                                              _vm._s(
                                                                data.item.estado
                                                              ) +
                                                              "\r\n                                        "
                                                          )
                                                        ]
                                                      )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        },
                                        {
                                          key: "item",
                                          fn: function(data) {
                                            return [
                                              typeof data.item !== "object"
                                                ? [
                                                    _vm._v(
                                                      "\r\n                                        Orden de servicio: " +
                                                        _vm._s(data.item.id) +
                                                        " - " +
                                                        _vm._s(
                                                          data.item
                                                            .has_cotizaicon
                                                            .has_cliente
                                                            .razon_social
                                                        ) +
                                                        "\r\n                                        "
                                                    ),
                                                    data.item.estado ===
                                                    "pendiente"
                                                      ? _c(
                                                          "v-alert",
                                                          {
                                                            staticClass: "ml-4",
                                                            staticStyle: {
                                                              position:
                                                                "relative",
                                                              top: "8px",
                                                              height: "23px",
                                                              "padding-top":
                                                                "0px"
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                              dark: "",
                                                              value: true,
                                                              dense: "",
                                                              small: ""
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\r\n                                            " +
                                                                _vm._s(
                                                                  data.item
                                                                    .estado
                                                                ) +
                                                                "\r\n                                        "
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "v-alert",
                                                          {
                                                            staticClass: "ml-4",
                                                            staticStyle: {
                                                              position:
                                                                "relative",
                                                              top: "8px",
                                                              height: "23px",
                                                              "padding-top":
                                                                "0px"
                                                            },
                                                            attrs: {
                                                              color: "success",
                                                              dark: "",
                                                              value: true,
                                                              dense: "",
                                                              small: ""
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\r\n                                            " +
                                                                _vm._s(
                                                                  data.item
                                                                    .estado
                                                                ) +
                                                                "\r\n                                        "
                                                            )
                                                          ]
                                                        )
                                                  ]
                                                : [
                                                    _vm._v(
                                                      "\r\n                                        Orden de servicio: " +
                                                        _vm._s(data.item.id) +
                                                        " - " +
                                                        _vm._s(
                                                          data.item
                                                            .has_cotizaicon
                                                            .has_cliente
                                                            .razon_social
                                                        ) +
                                                        "\r\n                                        "
                                                    ),
                                                    data.item.estado ===
                                                    "pendiente"
                                                      ? _c(
                                                          "v-alert",
                                                          {
                                                            staticClass: "ml-4",
                                                            staticStyle: {
                                                              position:
                                                                "relative",
                                                              top: "8px",
                                                              height: "23px",
                                                              "padding-top":
                                                                "0px"
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                              dark: "",
                                                              value: true,
                                                              dense: "",
                                                              small: ""
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\r\n                                            " +
                                                                _vm._s(
                                                                  data.item
                                                                    .estado
                                                                ) +
                                                                "\r\n                                        "
                                                            )
                                                          ]
                                                        )
                                                      : _c(
                                                          "v-alert",
                                                          {
                                                            staticClass: "ml-4",
                                                            staticStyle: {
                                                              position:
                                                                "relative",
                                                              top: "8px",
                                                              height: "23px",
                                                              "padding-top":
                                                                "0px"
                                                            },
                                                            attrs: {
                                                              color: "success",
                                                              dark: "",
                                                              value: true,
                                                              dense: "",
                                                              small: ""
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\r\n                                            " +
                                                                _vm._s(
                                                                  data.item
                                                                    .estado
                                                                ) +
                                                                "\r\n                                        "
                                                            )
                                                          ]
                                                        )
                                                  ]
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      3206093725
                                    ),
                                    model: {
                                      value: _vm.model.recibo,
                                      callback: function($$v) {
                                        _vm.$set(_vm.model, "recibo", $$v)
                                      },
                                      expression: "model.recibo"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              Object.entries(_vm.cotizacion_partida).length > 3
                                ? _c(
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
                                          label: "Cliente",
                                          outlined: "",
                                          disabled: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_partida.has_cliente
                                              .razon_social,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_partida
                                                .has_cliente,
                                              "razon_social",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_partida.has_cliente.razon_social"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              Object.entries(_vm.cotizacion_partida).length > 3
                                ? _c(
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
                                          label: "Moneda",
                                          outlined: "",
                                          disabled: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_partida.has_moneda
                                              .clave,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_partida.has_moneda,
                                              "clave",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_partida.has_moneda.clave"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              Object.entries(_vm.cotizacion_partida).length > 3
                                ? _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "6",
                                        md: "6"
                                      }
                                    },
                                    [
                                      _c("v-textarea", {
                                        attrs: {
                                          outlined: "",
                                          label: "NOTA",
                                          outlined: ""
                                        },
                                        model: {
                                          value:
                                            _vm.cotizacion_partida
                                              .nota_de_factura,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_partida,
                                              "nota_de_factura",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_partida.nota_de_factura"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "12",
                                    md: "12"
                                  }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "success" },
                                      on: { click: _vm.TotalizarFactura }
                                    },
                                    [_vm._v("Totalizar")]
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", xs: "12", sm: "12", md: "6", lg: "6" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers_partidas_factura,
                  items: _vm.partidas_acumuladas,
                  "items-per-page": 5
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.has_intrumento",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(
                            "\r\n                        " +
                              _vm._s(item.has_intrumento.nombre)
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                        ID:" +
                              _vm._s(item.identificacion)
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                        Marca:" +
                              _vm._s(item.marca)
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                        Modelo:" +
                              _vm._s(item.modelo)
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                        Serie:" +
                              _vm._s(item.serie)
                          ),
                          _c("br")
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.servicio",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("td", { staticClass: "text-left" }, [
                          _vm._v(
                            "\r\n                        Servicio de " +
                              _vm._s(item.servicio) +
                              "\r\n                    "
                          )
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.has_intrumento.precio_venta",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("td", { attrs: { clas: "text-left" } }, [
                          _vm._v(
                            "\r\n                        " +
                              _vm._s(
                                _vm._f("numberFormat")(
                                  item.has_intrumento.precio_venta,
                                  Object.entries(_vm.cotizacion_partida)
                                    .length > 3
                                    ? _vm.cotizacion_partida.has_moneda.clave
                                    : ""
                                )
                              ) +
                              "\r\n                    "
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
                        _c("td", { attrs: { clas: "text-left" } }, [
                          _vm._v(
                            "\r\n                        " +
                              _vm._s(
                                _vm._f("numberFormat")(
                                  item.importe,
                                  Object.entries(_vm.cotizacion_partida)
                                    .length > 3
                                    ? _vm.cotizacion_partida.has_moneda.clave
                                    : ""
                                )
                              ) +
                              "\r\n                    "
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
                          { attrs: { clas: "text-left" } },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "error", icon: "", fab: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.EliminarPartida(item)
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
                    key: "item.has_calibracion",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "td",
                          { attrs: { clas: "text-left" } },
                          [
                            !item.has_calibracion
                              ? _c(
                                  "v-alert",
                                  {
                                    staticClass: "m-0 p-0",
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      type: "error"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            por iniciar\r\n                        "
                                    )
                                  ]
                                )
                              : item.has_calibracion.estado === "en proceso"
                              ? _c(
                                  "v-alert",
                                  {
                                    staticClass: "m-0 p-0",
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      type: "warning"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(item.has_calibracion.estado) +
                                        "\r\n                        "
                                    )
                                  ]
                                )
                              : _c(
                                  "v-alert",
                                  {
                                    staticClass: "m-0 p-0",
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      type: "success"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(item.has_calibracion.estado) +
                                        "\r\n                        "
                                    )
                                  ]
                                )
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "footer",
                    fn: function() {
                      return [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "m-0 p-0",
                                    attrs: {
                                      cols: "12",
                                      xs: "12",
                                      sm: "12",
                                      md: "12",
                                      lg: "12"
                                    }
                                  },
                                  [
                                    _c("h3", { staticClass: "float-right" }, [
                                      _vm._v(
                                        "SUBTOTAL: " +
                                          _vm._s(
                                            _vm._f("numberFormat")(
                                              _vm.var_computed_subtotal,
                                              Object.entries(
                                                _vm.cotizacion_partida
                                              ).length > 3
                                                ? _vm.cotizacion_partida
                                                    .has_moneda.clave
                                                : ""
                                            )
                                          )
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "m-0 p-0",
                                    attrs: {
                                      cols: "12",
                                      xs: "12",
                                      sm: "12",
                                      md: "12",
                                      lg: "12"
                                    }
                                  },
                                  [
                                    _c("h3", { staticClass: "float-right" }, [
                                      _vm._v(
                                        "IVA : " +
                                          _vm._s(
                                            _vm._f("numberFormat")(
                                              _vm.var_computed_iva,
                                              Object.entries(
                                                _vm.cotizacion_partida
                                              ).length > 3
                                                ? _vm.cotizacion_partida
                                                    .has_moneda.clave
                                                : ""
                                            )
                                          )
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticClass: "m-0 p-0",
                                    attrs: {
                                      cols: "12",
                                      xs: "12",
                                      sm: "12",
                                      md: "12",
                                      lg: "12"
                                    }
                                  },
                                  [
                                    _c("h3", { staticClass: "float-right" }, [
                                      _vm._v(
                                        "TOTAL: " +
                                          _vm._s(
                                            _vm._f("numberFormat")(
                                              _vm.var_computed_total,
                                              Object.entries(
                                                _vm.cotizacion_partida
                                              ).length > 3
                                                ? _vm.cotizacion_partida
                                                    .has_moneda.clave
                                                : ""
                                            )
                                          )
                                      )
                                    ])
                                  ]
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
      _c("modal-add-factura"),
      _vm._v(" "),
      _c("modal-pdf-factura")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
            attrs: { src: _vm.ruta_pdf_factura }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=template&id=97e9acc6&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=template&id=97e9acc6& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "text-center" },
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "1256" },
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  Object.entries(_vm.factura).length > 0
                    ? _c(
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
                              _c("div", [
                                _c("h4", [
                                  _vm._v(
                                    "Cliente:" +
                                      _vm._s(
                                        _vm.factura.cliente.has_cliente
                                          .razon_social
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h4", [
                                  _vm._v(
                                    "Dirección:" +
                                      _vm._s(
                                        _vm.factura.cliente.has_cliente
                                          .direccion_fiscal
                                      ) +
                                      " - " +
                                      _vm._s(
                                        _vm.factura.cliente.has_cliente
                                          .ciudad_estad_pais
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h4", [
                                  _vm._v(
                                    "Teléfono:" +
                                      _vm._s(
                                        _vm.factura.cliente.has_cliente.telefono
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h4", [
                                  _vm._v(
                                    "Correo:" +
                                      _vm._s(
                                        _vm.factura.cliente.has_cliente
                                          .correo_electronico_factura
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h4", { staticClass: "text-right" }, [
                                  _vm._v(
                                    "Vendedor:" +
                                      _vm._s(
                                        _vm.factura.cliente.has_empleado
                                          .nombre_completo
                                      )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h4", { staticClass: "text-right" }, [
                                  _vm._v("Fecha:" + _vm._s(_vm.fecha))
                                ]),
                                _c("br")
                              ])
                            ]
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
                              _c("v-simple-table", {
                                attrs: { dense: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function() {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Orden de servicio\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Cotizacion\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            ID\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Concepto\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Instrumento\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Estado de la calibracion\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Precio Unitario\r\n                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                            Importe\r\n                                        "
                                                  )
                                                ]
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            [
                                              _vm._l(
                                                _vm.factura.partidas,
                                                function(item) {
                                                  return _c(
                                                    "tr",
                                                    { key: item.name },
                                                    [
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.reciboID
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.cotizacionID
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.informe_id
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                            Servicio de " +
                                                              _vm._s(
                                                                item.servicio
                                                              ) +
                                                              "\r\n                                        "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                            " +
                                                              _vm._s(
                                                                item
                                                                  .has_intrumento
                                                                  .nombre
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\r\n                                            ID:" +
                                                              _vm._s(
                                                                item.identificacion
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\r\n                                            Marca:" +
                                                              _vm._s(item.marca)
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\r\n                                            Modelo:" +
                                                              _vm._s(
                                                                item.modelo
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\r\n                                            Serie:" +
                                                              _vm._s(item.serie)
                                                          ),
                                                          _c("br")
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            clas: "text-left"
                                                          }
                                                        },
                                                        [
                                                          !item.has_calibracion
                                                            ? _c(
                                                                "v-alert",
                                                                {
                                                                  staticClass:
                                                                    "m-0 p-0",
                                                                  attrs: {
                                                                    dense: "",
                                                                    outlined:
                                                                      "",
                                                                    type:
                                                                      "error"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n                                                por iniciar\r\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            : item
                                                                .has_calibracion
                                                                .estado ===
                                                              "en proceso"
                                                            ? _c(
                                                                "v-alert",
                                                                {
                                                                  staticClass:
                                                                    "m-0 p-0",
                                                                  attrs: {
                                                                    dense: "",
                                                                    outlined:
                                                                      "",
                                                                    type:
                                                                      "warning"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n                                                " +
                                                                      _vm._s(
                                                                        item
                                                                          .has_calibracion
                                                                          .estado
                                                                      ) +
                                                                      "\r\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            : _c(
                                                                "v-alert",
                                                                {
                                                                  staticClass:
                                                                    "m-0 p-0",
                                                                  attrs: {
                                                                    dense: "",
                                                                    outlined:
                                                                      "",
                                                                    type:
                                                                      "success"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\r\n                                                " +
                                                                      _vm._s(
                                                                        item
                                                                          .has_calibracion
                                                                          .estado
                                                                      ) +
                                                                      "\r\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            clas: "text-left"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                            " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "numberFormat"
                                                                )(
                                                                  item
                                                                    .has_intrumento
                                                                    .precio_venta,
                                                                  Object.entries(
                                                                    _vm.factura
                                                                  ).length > 0
                                                                    ? _vm
                                                                        .factura
                                                                        .cliente
                                                                        .has_moneda
                                                                        .clave
                                                                    : ""
                                                                )
                                                              ) +
                                                              "\r\n                                        "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            clas: "text-left"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\r\n                                            " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "numberFormat"
                                                                )(
                                                                  item.importe,
                                                                  Object.entries(
                                                                    _vm.factura
                                                                  ).length > 0
                                                                    ? _vm
                                                                        .factura
                                                                        .cliente
                                                                        .has_moneda
                                                                        .clave
                                                                    : ""
                                                                )
                                                              ) +
                                                              "\r\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                }
                                              ),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "8" } },
                                                  [
                                                    _c(
                                                      "h3",
                                                      {
                                                        staticClass:
                                                          " text-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "SUBTOTAL: " +
                                                            _vm._s(
                                                              _vm._f(
                                                                "numberFormat"
                                                              )(
                                                                _vm.factura
                                                                  .subtotal,
                                                                Object.entries(
                                                                  _vm.factura
                                                                ).length > 0
                                                                  ? _vm.factura
                                                                      .cliente
                                                                      .has_moneda
                                                                      .clave
                                                                  : ""
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "h3",
                                                      {
                                                        staticClass:
                                                          "text-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "IVA : " +
                                                            _vm._s(
                                                              _vm._f(
                                                                "numberFormat"
                                                              )(
                                                                _vm.factura.iva,
                                                                Object.entries(
                                                                  _vm.factura
                                                                ).length > 0
                                                                  ? _vm.factura
                                                                      .cliente
                                                                      .has_moneda
                                                                      .clave
                                                                  : ""
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "h3",
                                                      {
                                                        staticClass:
                                                          "text-right"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "TOTAL: " +
                                                            _vm._s(
                                                              _vm._f(
                                                                "numberFormat"
                                                              )(
                                                                _vm.factura
                                                                  .total,
                                                                Object.entries(
                                                                  _vm.factura
                                                                ).length > 0
                                                                  ? _vm.factura
                                                                      .cliente
                                                                      .has_moneda
                                                                      .clave
                                                                  : ""
                                                              )
                                                            )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ])
                                            ],
                                            2
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  false,
                                  658115051
                                )
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
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.RegistrarFactura }
                    },
                    [
                      _vm._v(
                        "\r\n                    Registrar Factura\r\n                "
                      )
                    ]
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

/***/ "./resources/js/components/factura/indexComponentfactura.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/factura/indexComponentfactura.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexComponentfactura_vue_vue_type_template_id_2cf2378a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexComponentfactura.vue?vue&type=template&id=2cf2378a& */ "./resources/js/components/factura/indexComponentfactura.vue?vue&type=template&id=2cf2378a&");
/* harmony import */ var _indexComponentfactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexComponentfactura.vue?vue&type=script&lang=js& */ "./resources/js/components/factura/indexComponentfactura.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexComponentfactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexComponentfactura_vue_vue_type_template_id_2cf2378a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexComponentfactura_vue_vue_type_template_id_2cf2378a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/factura/indexComponentfactura.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/factura/indexComponentfactura.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/factura/indexComponentfactura.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentfactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexComponentfactura.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/indexComponentfactura.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentfactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/factura/indexComponentfactura.vue?vue&type=template&id=2cf2378a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/factura/indexComponentfactura.vue?vue&type=template&id=2cf2378a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentfactura_vue_vue_type_template_id_2cf2378a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexComponentfactura.vue?vue&type=template&id=2cf2378a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/indexComponentfactura.vue?vue&type=template&id=2cf2378a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentfactura_vue_vue_type_template_id_2cf2378a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentfactura_vue_vue_type_template_id_2cf2378a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/factura/modals/modalPdfFacturaComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/factura/modals/modalPdfFacturaComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalPdfFacturaComponent_vue_vue_type_template_id_1f1cf101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101& */ "./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101&");
/* harmony import */ var _modalPdfFacturaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalPdfFacturaComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalPdfFacturaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalPdfFacturaComponent_vue_vue_type_template_id_1f1cf101___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalPdfFacturaComponent_vue_vue_type_template_id_1f1cf101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/factura/modals/modalPdfFacturaComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalPdfFacturaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalPdfFacturaComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalPdfFacturaComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalPdfFacturaComponent_vue_vue_type_template_id_1f1cf101___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalPdfFacturaComponent.vue?vue&type=template&id=1f1cf101&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalPdfFacturaComponent_vue_vue_type_template_id_1f1cf101___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalPdfFacturaComponent_vue_vue_type_template_id_1f1cf101___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/factura/modals/modalTotalizarComponent.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/factura/modals/modalTotalizarComponent.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalTotalizarComponent_vue_vue_type_template_id_97e9acc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalTotalizarComponent.vue?vue&type=template&id=97e9acc6& */ "./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=template&id=97e9acc6&");
/* harmony import */ var _modalTotalizarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalTotalizarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalTotalizarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalTotalizarComponent_vue_vue_type_template_id_97e9acc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalTotalizarComponent_vue_vue_type_template_id_97e9acc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/factura/modals/modalTotalizarComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTotalizarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalTotalizarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTotalizarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=template&id=97e9acc6&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=template&id=97e9acc6& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTotalizarComponent_vue_vue_type_template_id_97e9acc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalTotalizarComponent.vue?vue&type=template&id=97e9acc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/factura/modals/modalTotalizarComponent.vue?vue&type=template&id=97e9acc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTotalizarComponent_vue_vue_type_template_id_97e9acc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalTotalizarComponent_vue_vue_type_template_id_97e9acc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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