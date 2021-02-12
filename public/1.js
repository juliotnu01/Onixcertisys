(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
/* harmony import */ var _modals_indexNotaDeseguimientoComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/indexNotaDeseguimientoComponent.vue */ "./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue");
/* harmony import */ var _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notificacion/indexComponentNotificacion.vue */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");


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







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-add": _modals_modalAddCotizacionComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "modal-edit": _modals_modalEditCotizacionComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "modal-view": _modals_modalViewCotizacionComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    "modal-pdf": _modals_modalViewPdfComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    "modal-nota-seguimiento": _modals_indexNotaDeseguimientoComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    notificacion: _notificacion_indexComponentNotificacion_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      menu: false,
      headers_cotizacion: [{
        text: "Folio",
        value: "id",
        align: "start"
      }, {
        text: "Fecha",
        value: "created_at",
        align: "start"
      }, {
        text: "Cliente",
        value: "has_cliente.datos_fisicos_requeremientos_facturacion_razon_social",
        align: "start"
      }, {
        text: "Contacto",
        value: "contacto",
        align: "start"
      }, {
        text: "Vendedor",
        value: "has_empleado.nombre_completo",
        align: "start"
      }, {
        text: "Estado",
        value: "estado_de_la_cotizacion",
        align: "start"
      }, {
        text: "Tipo de Servicio",
        value: "tipo_de_servicio",
        align: "start"
      }, {
        text: "Moneda",
        value: "has_moneda",
        align: "start"
      }, {
        text: "Sub Total",
        value: "sub_total",
        align: "start"
      }, {
        text: "IVA",
        value: "iva",
        align: "start"
      }, {
        text: "Total",
        value: "total",
        align: "start"
      }, {
        text: "Nota de seguimiento",
        value: "nota_de_seguimiento",
        align: "start"
      }, {
        text: "Accion",
        value: "accion",
        align: "start"
      }],
      search_cot: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "cotizaciones", "dialog_nota_de_seguimiento"])),
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
    },
    hacerNotaDeSeguimiento: function hacerNotaDeSeguimiento(item) {
      this.$store.commit("setDialogNotaDeSeguimiento", true);
      this.$store.commit("setCotizacion", item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      var_instrumento_selected: {},
      model_inicio_cotizacion: {
        nota_seguimiento: ""
      },
      add_comentario_cotizacion: {
        nota_seguimiento: ""
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_nota_de_seguimiento", "NotdasDeSeguimiento", "cotizacion"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_nota_de_seguimiento;
      },
      set: function set(val) {
        this.$store.commit("setDialogNotaDeSeguimiento", val);
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
              _this.services.NotdasDeSeguimientoServices.getlisNotasDeSeguimiento();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    iniciarNotaSeguimientoCotizacion: function iniciarNotaSeguimientoCotizacion() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                _this2.cotizacion.has_nota_de_seguimiento.push(_this2.model_inicio_cotizacion);

                _context2.next = 4;
                return axios.post("/api/iniciar-nota-seguimiento-cotizacion", {
                  model: _this2.model_inicio_cotizacion,
                  cotizacion: _this2.cotizacion
                });

              case 4:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                _this2.model_inicio_cotizacion = {
                  nota_seguimiento: ""
                };
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    iniciarNotaSeguimientoCalibracion: function iniciarNotaSeguimientoCalibracion() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$axios$post2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this3.var_instrumento_selected.has_nota_de_seguimiento.push(_this3.model_inicio_cotizacion);

                _context3.next = 4;
                return axios.post("/api/iniciar-nota-seguimiento-calibracion", {
                  model: _this3.model_inicio_cotizacion,
                  partida: _this3.var_instrumento_selected
                });

              case 4:
                _yield$axios$post2 = _context3.sent;
                data = _yield$axios$post2.data;
                _this3.model_inicio_cotizacion = {
                  nota_seguimiento: ""
                };
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    AgregarComentarioACalibracion: function AgregarComentarioACalibracion(item) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$axios$post3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios.post("/api/add-nota-seguimiento-calibracion", {
                  model: _this4.add_comentario_cotizacion,
                  partida: item
                });

              case 3:
                _yield$axios$post3 = _context4.sent;
                data = _yield$axios$post3.data;
                item.has_onw_note.push(_this4.add_comentario_cotizacion);
                _this4.add_comentario_cotizacion = {
                  nota_seguimiento: ""
                };
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }))();
    },
    AgregarComentarioACotizacion: function AgregarComentarioACotizacion(item) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$axios$post4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return axios.post("/api/add-nota-seguimiento-cotizacion", {
                  model: _this5.add_comentario_cotizacion,
                  cotizacion: item
                });

              case 3:
                _yield$axios$post4 = _context5.sent;
                data = _yield$axios$post4.data;
                item.has_onw_note.push(_this5.add_comentario_cotizacion);
                _this5.add_comentario_cotizacion = {
                  nota_seguimiento: ""
                };
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
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
/* harmony import */ var _modalCargarPartidaMasivamenteComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalCargarPartidaMasivamenteComponent */ "./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue");
/* harmony import */ var _config_datosGenerales_instrumento_modals_modalEditInstrumentocomponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/datosGenerales/instrumento/modals/modalEditInstrumentocomponent.vue */ "./resources/js/components/config/datosGenerales/instrumento/modals/modalEditInstrumentocomponent.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-cargar-partidas-masivamente": _modalCargarPartidaMasivamenteComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "modal-edit-instrumento": _config_datosGenerales_instrumento_modals_modalEditInstrumentocomponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
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
        name: "Orden de servicio",
        value: 2
      }, {
        name: "Rechazada",
        value: 3
      }],
      model: {
        cliente_selected: {},
        sucursal_cliente: {},
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_add_cotizacion", "clientes", "monedas", "empleados", "tiempos_de_entrega", "instrumentos", "masivPartidas"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_add_cotizacion;
      },
      set: function set(val) {
        this.$store.commit("setDialogAddCotizacion", val);
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
    AgregarPartida: function AgregarPartida() {
      for (var i = 0; i < this.partida.cantidad; i++) {
        var model = {
          identificacion: this.partida.identificacion,
          instrumento: this.partida.instrumento,
          instrumento_nombre: this.partida.instrumento.nombre,
          cantidad: 1,
          marca: this.partida.marca,
          modelo: this.partida.modelo,
          serie: this.partida.serie,
          importe: this.partida.instrumento.precio_venta * 1,
          servicio: this.partida.servicio,
          unidad: this.partida.unidad,
          precio_venta: this.partida.instrumento.precio_venta
        };
        this.model.partidas.push(model);
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
                  _context2.next = 7;
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

                _this3.$store.commit("setMasivPartidas", []);

              case 7:
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
    },
    cargarPartidasImportadas: function cargarPartidasImportadas(masivPartidas) {
      var _this4 = this;

      var partida = {
        identificacion: "",
        instrumento: {},
        instrumento_nombre: "",
        cantidad: 0,
        marca: "",
        modelo: "",
        serie: "",
        importe: 0,
        servicio: {},
        unidad: {},
        precio_venta: 0
      };
      this.masivPartidas.forEach(function (item) {
        partida = {
          identificacion: item.identificacion,
          instrumento: item.has_instrumento,
          instrumento_nombre: item.has_instrumento.nombre,
          cantidad: 1,
          marca: item.marca,
          modelo: item.modelo,
          serie: item.serie,
          importe: 1 * item.has_instrumento.precio_venta,
          servicio: item.servicio,
          unidad: item.unidad,
          precio_venta: item.has_instrumento.precio_venta
        };

        _this4.model.partidas.push(partida);
      });
    },
    ActualizarImporte: function ActualizarImporte(item) {
      item.importe = item.cantidad * item.precio_venta;
    },
    editarInstrumento: function editarInstrumento(inst) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.$store.commit("setInstrumento", inst.instrumento);

                _this5.$store.commit("setDialogEditInstrumento", true);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      files: null,
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
      }],
      loading_importar: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_cargar_partidas_masivamente", "masivPartidas", "instrumentos", "acreditaciones", "magnitudes"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_cargar_partidas_masivamente;
      },
      set: function set(val) {
        this.$store.commit("setDialogCargarPartidaMasivamente", val);
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
              _this.services.instrumentoServices.getlistInstrumentos();

              _this.services.magnitudesServices.getListMagnitudes();

              _this.services.acreditacionesServices.getlistAcreditaciones();

              _this.services.cotizacionServices.getMasivPartidas();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    importarPartidas: function importarPartidas() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$store.commit("setMasivPartidas", []);

                _this2.loading_importar = true;
                _context2.prev = 2;
                formData = new FormData();
                formData.append("excel", _this2.files);
                _context2.next = 7;
                return axios.post("/api/importar-partidas", formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                });

              case 7:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                _context2.next = 11;
                return _this2.services.cotizacionServices.getMasivPartidas();

              case 11:
                _this2.loading_importar = false;
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](2);
                console.log(_context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 14]]);
      }))();
    },
    CargarPärtidas: function CargarPRtidas() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$emit("cargarPartidas", _this3.masivPartidas);

                _this3.$store.commit("setDialogCargarPartidaMasivamente", false);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateInstrumento: function updateInstrumento(item) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var model, _yield$axios$put, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                model = {
                  acreditacion: item.acreditacion.id,
                  magnitud: item.magnitud.id,
                  id_instrumento: item.instrumento_id,
                  precio_venta: item.has_instrumento.precio_venta
                };
                _context4.next = 4;
                return axios.put("/api/edit-instrumento-cargado-masivamente", model);

              case 4:
                _yield$axios$put = _context4.sent;
                data = _yield$axios$put.data;
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        align: "center",
        width: 150
      }, {
        text: "Acreditacion",
        value: "has_intrumento.has_acreditacion.nombre",
        align: "center"
      }, {
        text: "Tipo",
        value: "tipo",
        align: "center"
      }, {
        text: "Vigencia(Meses)",
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
                _context2.prev = 0;
                model = {
                  estado: "pendiente",
                  cotizacion_id: _this2.cotizacion_view
                };
                _context2.next = 4;
                return _this2.services.reciboServices.agregarRecibo(model);

              case 4:
                _context2.next = 6;
                return _this2.services.cotizacionServices.getlistCotizaciones();

              case 6:
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_view_pdf_cotizacion", "cotizacion_print"])), {}, {
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
                  staticClass: "float-right ml-5",
                  attrs: { fab: "", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.services.cotizacionServices.getlistCotizaciones()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-reload")])],
                1
              ),
              _vm._v(" "),
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
                    "\n        " +
                      _vm._s(item.created_at.substr(0, 10)) +
                      "\n      "
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
                              "\n          " +
                                _vm._s(item.estado_de_la_cotizacion) +
                                "\n        "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.estado_de_la_cotizacion == "Orden de servicio"
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
                              "\n          " +
                                _vm._s(item.estado_de_la_cotizacion) +
                                "\n        "
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
                              "\n          " +
                                _vm._s(item.estado_de_la_cotizacion) +
                                "\n        "
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
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(item.tipo_de_servicio) +
                                "\n        "
                            )
                          ]
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
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(item.tipo_de_servicio) +
                                "\n        "
                            )
                          ]
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
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(item.tipo_de_servicio) +
                                "\n        "
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
            key: "item.accion",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "td",
                  [
                    _c(
                      "v-menu",
                      {
                        staticClass: "text-center",
                        attrs: { bottom: "", left: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: { color: "primary", icon: "" }
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-dots-vertical")
                                      ])
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
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { left: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    icon: "",
                                                    small: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.ViewCotizacion(
                                                        item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            dark: ""
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
                                                        "\n                      mdi-eye\n                    "
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
                                    _c("span", [_vm._v("Orden de servicio")])
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { left: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
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
                                                      return _vm.eliminarCotizacion(
                                                        item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "error",
                                                            dark: ""
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
                                                        "\n                      mdi-delete\n                    "
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
                                    _c("span", [_vm._v("Eliminar cotizacion")])
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { left: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    icon: "",
                                                    small: "",
                                                    color: "warning"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.EditarCotizacion(
                                                        item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "warning",
                                                            dark: ""
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
                                                        "\n                      mdi-pencil\n                    "
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
                                    _c("span", [_vm._v("Editar cotizacion")])
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item",
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { left: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    icon: "",
                                                    small: "",
                                                    color: "info"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.printCotizacion(
                                                        item
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                            dark: ""
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
                                                        "\n                      mdi-printer\n                    "
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
                                    _c("span", [_vm._v("Imprimir cotizacion")])
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
              ]
            }
          },
          {
            key: "item.contacto",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", { staticClass: "text-left" }, [
                  _vm._v("\n        Nombre:" + _vm._s(item.contacto) + " "),
                  _c("br"),
                  _vm._v(
                    "\n        Teléfono:" + _vm._s(item.contacto_telefono) + " "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n        Correo:" + _vm._s(item.contacto_correo) + " "
                  ),
                  _c("br")
                ])
              ]
            }
          },
          {
            key:
              "item.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("td", [
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        item.has_cliente
                          .datos_fisicos_requeremientos_facturacion_razon_social
                      )
                  ),
                  _c("br")
                ])
              ]
            }
          },
          {
            key: "item.has_empleado.nombre_completo",
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
          },
          {
            key: "item.nota_de_seguimiento",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "success",
                      small: "",
                      dense: "",
                      block: ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.hacerNotaDeSeguimiento(item)
                      }
                    }
                  },
                  [
                    _vm._v("\n        Nota de seguimiento "),
                    _c("v-icon", [_vm._v("mdi-note")])
                  ],
                  1
                )
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
      _c("modal-pdf"),
      _vm._v(" "),
      _c("notificacion"),
      _vm._v(" "),
      _c("modal-nota-seguimiento")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6& ***!
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
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "" },
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            [
              _c(
                "v-row",
                [
                  _vm._l(_vm.cotizacion.has_nota_de_seguimiento, function(
                    i,
                    n
                  ) {
                    return _c(
                      "v-col",
                      {
                        key: n,
                        attrs: { xs: "12", sm: "12", md: "12", lg: "12" }
                      },
                      [
                        _c(
                          "v-card",
                          { staticClass: "m-5 elevation-2" },
                          [
                            _c(
                              "v-card-text",
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(i.nota_seguimiento) +
                                    "\n              "
                                ),
                                _c("v-divider")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "text-right p-5" },
                              _vm._l(i.has_onw_note, function(sc, x) {
                                return _c(
                                  "span",
                                  { key: x },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(sc.nota_seguimiento) +
                                        "\n                "
                                    ),
                                    _c("v-divider")
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        attrs: {
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
                                            attrs: { color: "primary" },
                                            on: {
                                              click: function($event) {
                                                return _vm.AgregarComentarioACotizacion(
                                                  i
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Agregar comentario")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: {
                                          xs: "12",
                                          sm: "12",
                                          md: "10",
                                          lg: "10"
                                        }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            name: "name",
                                            label:
                                              "Escribe un comentario para el seguimiento de la cotizacion",
                                            id: "id",
                                            outlined: ""
                                          },
                                          model: {
                                            value:
                                              _vm.add_comentario_cotizacion
                                                .nota_seguimiento,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.add_comentario_cotizacion,
                                                "nota_seguimiento",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "add_comentario_cotizacion.nota_seguimiento"
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
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(
                    _vm.var_instrumento_selected.has_nota_de_seguimiento,
                    function(i, n) {
                      return _c(
                        "v-col",
                        {
                          key: n,
                          attrs: { xs: "12", sm: "12", md: "12", lg: "12" }
                        },
                        [
                          _c(
                            "v-card",
                            { staticClass: "m-5 elevation-2" },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(i.nota_seguimiento) +
                                      "\n              "
                                  ),
                                  _c("v-divider")
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-right p-5" },
                                _vm._l(i.has_onw_note, function(sc, x) {
                                  return _c(
                                    "span",
                                    { key: x },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(sc.nota_seguimiento)
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("v-divider")
                                    ],
                                    1
                                  )
                                }),
                                0
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            xs: "12",
                                            sm: "12",
                                            md: "10",
                                            lg: "10"
                                          }
                                        },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              name: "name",
                                              label:
                                                "Escribe un comentario para el seguimiento de la calibracion",
                                              id: "id",
                                              outlined: ""
                                            },
                                            model: {
                                              value:
                                                _vm.add_comentario_cotizacion
                                                  .nota_seguimiento,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.add_comentario_cotizacion,
                                                  "nota_seguimiento",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "add_comentario_cotizacion.nota_seguimiento"
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
                                              attrs: { color: "primary" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.AgregarComentarioACalibracion(
                                                    i
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Agregar comentario")]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { xs: "12", sm: "12", md: "12", lg: "12" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "mx-auto p-5" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    xs: "12",
                                    sm: "12",
                                    md: "12",
                                    lg: "12"
                                  }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            xs: "12",
                                            sm: "12",
                                            md: "8",
                                            lg: "8"
                                          }
                                        },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              outlined: "",
                                              label: "Escribe un comentario"
                                            },
                                            model: {
                                              value:
                                                _vm.model_inicio_cotizacion
                                                  .nota_seguimiento,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.model_inicio_cotizacion,
                                                  "nota_seguimiento",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "model_inicio_cotizacion.nota_seguimiento"
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
                                            xs: "12",
                                            sm: "12",
                                            md: "4",
                                            lg: "4"
                                          }
                                        },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              items:
                                                _vm.cotizacion.has_partidas,
                                              outlined: "",
                                              chips: "",
                                              label: "Seleccionar Instrumento",
                                              "return-object": ""
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "selection",
                                                fn: function(data) {
                                                  return [
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(
                                                          data.item
                                                            .has_intrumento
                                                            .nombre
                                                        ) +
                                                        "\n                      "
                                                    )
                                                  ]
                                                }
                                              },
                                              {
                                                key: "item",
                                                fn: function(data) {
                                                  return [
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(
                                                          data.item
                                                            .has_intrumento
                                                            .nombre
                                                        ) +
                                                        "\n                      "
                                                    )
                                                  ]
                                                }
                                              }
                                            ]),
                                            model: {
                                              value:
                                                _vm.var_instrumento_selected,
                                              callback: function($$v) {
                                                _vm.var_instrumento_selected = $$v
                                              },
                                              expression:
                                                "var_instrumento_selected"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-row",
                                            [
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    xs: "12",
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "12"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "success",
                                                        block: ""
                                                      },
                                                      on: {
                                                        click:
                                                          _vm.iniciarNotaSeguimientoCalibracion
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Inicar Seguimiento del instrumento"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-col",
                                                {
                                                  attrs: {
                                                    xs: "12",
                                                    sm: "12",
                                                    md: "12",
                                                    lg: "12"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "warning",
                                                        block: ""
                                                      },
                                                      on: {
                                                        click:
                                                          _vm.iniciarNotaSeguimientoCotizacion
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Inicar Seguimiento de la cotizacion\n                        "
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
          attrs: { persistent: "", "max-width": "2556", "min-width": "2556" },
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
              _c("v-card-title", [_vm._v("Agregar Cotizacion")]),
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
                      return _vm.$store.commit(
                        "setDialogCargarPartidaMasivamente",
                        true
                      )
                    }
                  }
                },
                [
                  _c("v-icon", [_vm._v("mdi-file-upload")]),
                  _vm._v(" Cargar Partidas masivamente\n      ")
                ],
                1
              ),
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
                  _vm._v(" Guardar\n      ")
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
                                    _vm.model.cliente_selected.has_sucursal,
                                  "item-value": "id",
                                  "item-text": "nombre_sucursal",
                                  outlined: "",
                                  s: "",
                                  label: "Seleccionar sucursal",
                                  "return-object": ""
                                },
                                model: {
                                  value: _vm.model.sucursal_cliente,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "sucursal_cliente", $$v)
                                  },
                                  expression: "model.sucursal_cliente"
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
                                md: "4",
                                lg: "4"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  label: "Contacto"
                                },
                                model: {
                                  value:
                                    _vm.model.cliente_selected
                                      .contacto_adicionales_compra,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model.cliente_selected,
                                      "contacto_adicionales_compra",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "model.cliente_selected.contacto_adicionales_compra"
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
                                  dense: "",
                                  outlined: "",
                                  label: "Teléfono"
                                },
                                model: {
                                  value:
                                    _vm.model.cliente_selected
                                      .contacto_adicionales_compra_telf,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model.cliente_selected,
                                      "contacto_adicionales_compra_telf",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "model.cliente_selected.contacto_adicionales_compra_telf"
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
                                  dense: "",
                                  outlined: "",
                                  label: "Correo"
                                },
                                model: {
                                  value:
                                    _vm.model.cliente_selected
                                      .contacto_adicionales_compra_correo,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.model.cliente_selected,
                                      "contacto_adicionales_compra_correo",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "model.cliente_selected.contacto_adicionales_compra_correo"
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
                                attrs: { outlined: "", label: "Condiciones" },
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
                                  attrs: { color: "primary", block: "" },
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
                                  _vm._v("Unidad")
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
                                _vm._l(_vm.model.partidas, function(item, p) {
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
                                          _vm._s(item.servicio.name) +
                                          "\n                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(item.unidad.name) +
                                          "\n                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(item.instrumento_nombre) +
                                            "\n                  "
                                        ),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              color: "warning",
                                              icon: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editarInstrumento(
                                                  item
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("mdi-pencil")])
                                          ],
                                          1
                                        )
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
                                          _vm._s(item.instrumento.alcance) +
                                          "\n                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            item.instrumento.has_acreditacion
                                              .nombre
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
                                              return _vm.ActualizarImporte(item)
                                            }
                                          },
                                          model: {
                                            value: item.precio_venta,
                                            callback: function($$v) {
                                              _vm.$set(
                                                item,
                                                "precio_venta",
                                                $$v
                                              )
                                            },
                                            expression: "item.precio_venta"
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
                                                return _vm.eliminarPartida(item)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("mdi-delete")])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                }),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: 12 } }, [
                                    _c("div", { staticClass: "text-right" }, [
                                      _c("h3", [
                                        _vm._v(
                                          "\n                      SUBTOTAL :" +
                                            _vm._s(
                                              _vm._f("numberFormat")(
                                                _vm.var_computed_sub_total,
                                                _vm.model.moneda_selected.clave
                                              )
                                            ) +
                                            "\n                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _c("h3", [
                                        _vm._v(
                                          "\n                      IVA :" +
                                            _vm._s(
                                              _vm._f("numberFormat")(
                                                _vm.var_computed_iva,
                                                _vm.model.moneda_selected.clave
                                              )
                                            ) +
                                            "\n                    "
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _c("h3", [
                                        _vm._v(
                                          "\n                      TOTAL :" +
                                            _vm._s(
                                              _vm._f("numberFormat")(
                                                _vm.var_computed_total,
                                                _vm.model.moneda_selected.clave
                                              )
                                            ) +
                                            "\n                    "
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("modal-cargar-partidas-masivamente", {
        on: { cargarPartidas: _vm.cargarPartidasImportadas }
      }),
      _vm._v(" "),
      _c("modal-edit-instrumento")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
          attrs: {
            persistent: "",
            "max-width": "2556",
            "min-width": "2556",
            scrollable: ""
          },
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
            {
              staticClass: "mx-auto",
              attrs: { "max-width": "2556", width: "2556" }
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
                  _c("v-file-input", {
                    staticClass: "mt-5",
                    attrs: {
                      dense: "",
                      color: "deep-purple accent-4",
                      label: "",
                      placeholder: "Seleccione un documento excel",
                      "prepend-icon": "mdi-paperclip",
                      outlined: "",
                      "show-size": 1000
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selection",
                        fn: function(ref) {
                          var index = ref.index
                          var text = ref.text
                          return [
                            index < 2
                              ? _c(
                                  "v-chip",
                                  {
                                    attrs: {
                                      color: "deep-purple accent-4",
                                      dark: "",
                                      label: "",
                                      small: ""
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(text) +
                                        "\n            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.files,
                      callback: function($$v) {
                        _vm.files = $$v
                      },
                      expression: "files"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        text: "",
                        dark: "",
                        tile: "",
                        loading: _vm.loading_importar
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.importarPartidas($event)
                        }
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-file-upload")]),
                      _vm._v(" importar\n        ")
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
                  _c("v-simple-table", {
                    attrs: { dense: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Identificacion")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Instrumento")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Alcance")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Acreditacion")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Magnitud")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Marca")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Modelo")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Serie")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Precio Unitario")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Servicio")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-center" }, [
                                  _vm._v("Unidad")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.masivPartidas, function(item) {
                                return _c("tr", { key: item.id }, [
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.identificacion))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(item.has_instrumento.nombre) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(item.has_instrumento.alcance) +
                                        "\n                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.acreditaciones,
                                          outlined: "",
                                          dense: "",
                                          "item-text": "nombre",
                                          "return-object": ""
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.updateInstrumento(item)
                                          }
                                        },
                                        model: {
                                          value: item.acreditacion,
                                          callback: function($$v) {
                                            _vm.$set(item, "acreditacion", $$v)
                                          },
                                          expression: "item.acreditacion"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.magnitudes,
                                          outlined: "",
                                          dense: "",
                                          "item-text": "nombre",
                                          "return-object": ""
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.updateInstrumento(item)
                                          }
                                        },
                                        model: {
                                          value: item.magnitud,
                                          callback: function($$v) {
                                            _vm.$set(item, "magnitud", $$v)
                                          },
                                          expression: "item.magnitud"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.marca))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.modelo))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" }, [
                                    _vm._v(_vm._s(item.serie))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          small: "",
                                          dense: "",
                                          label: "",
                                          outlined: ""
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.updateInstrumento(item)
                                          }
                                        },
                                        model: {
                                          value:
                                            item.has_instrumento.precio_venta,
                                          callback: function($$v) {
                                            _vm.$set(
                                              item.has_instrumento,
                                              "precio_venta",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "item.has_instrumento.precio_venta"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          small: "",
                                          dense: "",
                                          items: _vm.servicio_partida,
                                          label: "Servicio",
                                          "item-text": "name",
                                          "return-object": "",
                                          outlined: ""
                                        },
                                        model: {
                                          value: item.servicio,
                                          callback: function($$v) {
                                            _vm.$set(item, "servicio", $$v)
                                          },
                                          expression: "item.servicio"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "text-center" },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          small: "",
                                          dense: "",
                                          items: _vm.unidad_partida,
                                          label: "Unidad",
                                          "item-text": "name",
                                          "return-object": "",
                                          outlined: ""
                                        },
                                        model: {
                                          value: item.unidad,
                                          callback: function($$v) {
                                            _vm.$set(item, "unidad", $$v)
                                          },
                                          expression: "item.unidad"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ])
                              }),
                              0
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
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
                      attrs: { text: "", color: "deep-purple accent-4" },
                      on: {
                        click: function($event) {
                          _vm.CargarPärtidas()
                        }
                      }
                    },
                    [_vm._v("\n          Cargar partidas\n        ")]
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
                      _vm._v("Generar Orden de Servicio\n        ")
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
                                          "item-text":
                                            "datos_fisicos_requeremientos_facturacion_razon_social",
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
                                              .contacto_adicionales_compra,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view.has_cliente,
                                              "contacto_adicionales_compra",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_cliente.contacto_adicionales_compra"
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
                                              .contacto_adicionales_compra_telf,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view.has_cliente,
                                              "contacto_adicionales_compra_telf",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "cotizacion_view.has_cliente.contacto_adicionales_compra_telf"
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
                                              .contacto_adicionales_compra_correo,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.cotizacion_view.has_cliente,
                                              "contacto_adicionales_compra_correo",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    cotizacion_view.has_cliente.contacto_adicionales_compra_correo\n                  "
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
                                        md: "12",
                                        lg: "12"
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
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
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
                                    "\n                " +
                                      _vm._s(
                                        props.item.has_intrumento
                                          .has_acreditacion.nombre
                                      ) +
                                      "\n              "
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
                                  _c(
                                    "div",
                                    { staticClass: "text-left w-100" },
                                    [
                                      _c("strong", [
                                        _vm._v(_vm._s(item.identificacion))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-left w-100" },
                                    [
                                      _c("strong", [_vm._v("ID:")]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(_vm._s(item.identificacion))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-left w-100" },
                                    [
                                      _c("strong", [_vm._v("Marca:")]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(item.marca))])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-left w-100" },
                                    [
                                      _c("strong", [_vm._v("Modelo:")]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(item.modelo))])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-left w-100" },
                                    [
                                      _c("strong", [_vm._v("Serie:")]),
                                      _vm._v(" "),
                                      _c("small", [_vm._v(_vm._s(item.serie))])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-left w-100" },
                                    [
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
                                    ]
                                  )
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
                                          [_vm._v(_vm._s(item.tipo.name))]
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
                                          [_vm._v("Generar Certificado")]
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
                                    _c("v-text-field", {
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
                                  ],
                                  1
                                )
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

/***/ "./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexNotaDeseguimientoComponent_vue_vue_type_template_id_60fa76f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6& */ "./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6&");
/* harmony import */ var _indexNotaDeseguimientoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexNotaDeseguimientoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexNotaDeseguimientoComponent_vue_vue_type_template_id_60fa76f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexNotaDeseguimientoComponent_vue_vue_type_template_id_60fa76f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexNotaDeseguimientoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexNotaDeseguimientoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexNotaDeseguimientoComponent_vue_vue_type_template_id_60fa76f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/indexNotaDeseguimientoComponent.vue?vue&type=template&id=60fa76f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexNotaDeseguimientoComponent_vue_vue_type_template_id_60fa76f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexNotaDeseguimientoComponent_vue_vue_type_template_id_60fa76f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalCargarPartidaMasivamenteComponent_vue_vue_type_template_id_7e196aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6& */ "./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6&");
/* harmony import */ var _modalCargarPartidaMasivamenteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalCargarPartidaMasivamenteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalCargarPartidaMasivamenteComponent_vue_vue_type_template_id_7e196aa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalCargarPartidaMasivamenteComponent_vue_vue_type_template_id_7e196aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCargarPartidaMasivamenteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCargarPartidaMasivamenteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCargarPartidaMasivamenteComponent_vue_vue_type_template_id_7e196aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cotizaciones/modals/modalCargarPartidaMasivamenteComponent.vue?vue&type=template&id=7e196aa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCargarPartidaMasivamenteComponent_vue_vue_type_template_id_7e196aa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCargarPartidaMasivamenteComponent_vue_vue_type_template_id_7e196aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ 4:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);