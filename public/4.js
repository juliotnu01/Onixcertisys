(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_modalCalibracionComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalCalibracionComponent.vue */ "./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'modal-calibracion': _modals_modalCalibracionComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      search: '',
      headers: [{
        text: "Recibo",
        align: "center",
        sortable: true,
        value: "has_recibo.id"
      }, {
        text: "Informe",
        align: "center",
        sortable: true,
        value: "informe_id"
      }, {
        text: "Instrumento",
        align: "center",
        sortable: true,
        value: "has_intrumento.nombre"
      }, {
        text: "Cliente",
        align: "center",
        sortable: true,
        value: "has_recibo.has_cotizaicon.has_cliente.razon_social"
      }, {
        text: "Magnitud",
        align: "center",
        sortable: true,
        value: "has_intrumento.has_magnitud.nombre"
      }, {
        text: "Tenico",
        align: "center",
        sortable: true,
        value: "has_tecnico.nombre_completo"
      }, {
        text: "Estado de la calibracion",
        align: "center",
        sortable: true,
        value: "has_calibracion"
      }, {
        text: "Accion",
        align: "center",
        sortable: false,
        value: "accion"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['services', 'partidas', 'partidas_para_calibrar'])),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.services.partidaServices.getlistpartidasParaCalibrar();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    Calibrar: function Calibrar(item) {
      this.$store.commit('setDialogCalibracion', true);
      this.$store.commit('setPartida', item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      patronSelected: '',
      procedimientoSelected: '',
      menu1: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      item_tipo_de_calibracion: [{
        name: 'En laboratrio',
        value: 1
      }, {
        name: 'En campo',
        value: 2
      }],
      TipocalibracionSelected: {},
      descripcion_anomalia: '',
      observacion_de_tecnico: '',
      fechaIniciaCalibracion: '',
      terminaCalibracion: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_calibracion", "recibo_print", "partida", 'patrones', 'procedimientos'])), {}, {
    computedDateFormatted: function computedDateFormatted() {
      return this.formatDate(this.date);
    },
    openDialog: {
      get: function get() {
        return this.dialog_calibracion;
      },
      set: function set(val) {
        this.$store.commit("setDialogCalibracion", val);
      }
    }
  }),
  watch: {
    date: function date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.services.patronServices.getlistPatrones();

            case 2:
              _context.next = 4;
              return _this.services.procedimientoServices.getlistProcedimientos();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    IniciarCalibracion: function IniciarCalibracion() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var model;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                model = {
                  tipo_de_calibracion: _this2.TipocalibracionSelected,
                  patron_de_calibracion: _this2.patronSelected,
                  procedimiento_de_calibracion: _this2.procedimientoSelected,
                  fecha_anomalia: _this2.date,
                  descripcion_anomalia: _this2.descripcion_anomalia,
                  observacion_tecnico: _this2.observacion_de_tecnico,
                  id_partida: _this2.partida.id
                };
                _context2.next = 4;
                return _this2.services.calibracionServices.agregarCalibracion(model);

              case 4:
                _context2.next = 6;
                return _this2.services.partidaServices.getlistpartidasParaCalibrar();

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
    },
    terminarCalibracion: function terminarCalibracion(calibracion) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var model;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                model = {
                  id_calibracion: calibracion.has_calibracion.id,
                  partida: calibracion
                };
                _context3.next = 4;
                return _this3.services.calibracionServices.terminarCalibracion(model);

              case 4:
                _context3.next = 6;
                return _this3.services.partidaServices.getlistpartidasParaCalibrar();

              case 6:
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    formatDate: function formatDate(date) {
      if (!date) return null;

      var _date$split = date.split('-'),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      return "".concat(day, "/").concat(month, "/").concat(year);
    },
    parseDate: function parseDate(date) {
      if (!date) return null;

      var _date$split3 = date.split('/'),
          _date$split4 = _slicedToArray(_date$split3, 3),
          month = _date$split4[0],
          day = _date$split4[1],
          year = _date$split4[2];

      return "".concat(year, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        [
          _c("v-text-field", {
            attrs: { label: "Buscar Instrumento", outlined: "" },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.partidas_para_calibrar,
              "items-per-page": 5,
              search: _vm.search
            },
            scopedSlots: _vm._u([
              {
                key: "item.accion",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "td",
                      { staticClass: "text-rigth" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", color: "primary" },
                            on: {
                              click: function($event) {
                                return _vm.Calibrar(item)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-crosshairs-gps")])],
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
                      { staticClass: "text-rigth" },
                      [
                        !item.has_calibracion
                          ? _c(
                              "v-alert",
                              {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  type: "error"
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                        por iniciar\r\n                    "
                                )
                              ]
                            )
                          : item.has_calibracion.estado === "en proceso"
                          ? _c(
                              "v-alert",
                              {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  type: "warning"
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                        " +
                                    _vm._s(item.has_calibracion.estado) +
                                    "\r\n                    "
                                )
                              ]
                            )
                          : _c(
                              "v-alert",
                              {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  type: "success"
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                        " +
                                    _vm._s(item.has_calibracion.estado) +
                                    "\r\n                    "
                                )
                              ]
                            )
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
      ),
      _vm._v(" "),
      _c("modal-calibracion")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=template&id=243ea854&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=template&id=243ea854& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
                "v-container",
                [
                  Object.entries(this.partida).length > 0
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
                                md: "7",
                                lg: "7"
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
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          label: "Recibo",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.partida.has_recibo.id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.partida.has_recibo,
                                              "id",
                                              $$v
                                            )
                                          },
                                          expression: "partida.has_recibo.id"
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
                                        lg: "3"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          label: "Partida",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.partida.id,
                                          callback: function($$v) {
                                            _vm.$set(_vm.partida, "id", $$v)
                                          },
                                          expression: "partida.id"
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
                                        lg: "6"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          label: "Instrumento",
                                          disabled: ""
                                        },
                                        model: {
                                          value:
                                            _vm.partida.has_intrumento.nombre,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.partida.has_intrumento,
                                              "nombre",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "partida.has_intrumento.nombre"
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
                                      _vm.partida.has_calibracion
                                        ? _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              label: "Inicia la Calibracion",
                                              disabled: ""
                                            },
                                            model: {
                                              value: _vm.partida.has_calibracion.fecha_inicio_calibracion.substr(
                                                0,
                                                10
                                              ),
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.partida.has_calibracion
                                                    .fecha_inicio_calibracion,
                                                  "substr(0,10)",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "partida.has_calibracion.fecha_inicio_calibracion.substr(0,10)"
                                            }
                                          })
                                        : _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              label: "Inicia la Calibracion",
                                              disabled: ""
                                            },
                                            model: {
                                              value: _vm.fechaIniciaCalibracion,
                                              callback: function($$v) {
                                                _vm.fechaIniciaCalibracion = $$v
                                              },
                                              expression:
                                                "fechaIniciaCalibracion"
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
                                      _vm.partida.has_calibracion
                                        ? _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              label: "Termina la Calibracion",
                                              disabled: ""
                                            },
                                            model: {
                                              value:
                                                _vm.partida.has_calibracion
                                                  .fecha_terminacion_calibracion,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.partida.has_calibracion,
                                                  "fecha_terminacion_calibracion",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "partida.has_calibracion.fecha_terminacion_calibracion"
                                            }
                                          })
                                        : _c("v-text-field", {
                                            attrs: {
                                              outlined: "",
                                              label: "Termina la Calibracion",
                                              disabled: ""
                                            },
                                            model: {
                                              value: _vm.terminaCalibracion,
                                              callback: function($$v) {
                                                _vm.terminaCalibracion = $$v
                                              },
                                              expression: "terminaCalibracion"
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
                                          outlined: "",
                                          label: "Vigencia",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.partida.vigencia,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.partida,
                                              "vigencia",
                                              $$v
                                            )
                                          },
                                          expression: "partida.vigencia"
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
                                          outlined: "",
                                          label: "Vencimiento",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.partida.vigencia,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.partida,
                                              "vigencia",
                                              $$v
                                            )
                                          },
                                          expression: "partida.vigencia"
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
                                      _vm.partida.has_calibracion
                                        ? _c("v-autocomplete", {
                                            attrs: {
                                              items:
                                                _vm.item_tipo_de_calibracion,
                                              "item-text": "name",
                                              "return-object": "",
                                              outlined: "",
                                              label: "Tipo de calibracion",
                                              clearable: ""
                                            },
                                            model: {
                                              value:
                                                _vm.partida.has_calibracion
                                                  .tipo_de_calibracion,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.partida.has_calibracion,
                                                  "tipo_de_calibracion",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "partida.has_calibracion.tipo_de_calibracion"
                                            }
                                          })
                                        : _c("v-autocomplete", {
                                            attrs: {
                                              items:
                                                _vm.item_tipo_de_calibracion,
                                              "item-text": "name",
                                              "return-object": "",
                                              outlined: "",
                                              label: "Tipo de calibracion",
                                              clearable: ""
                                            },
                                            model: {
                                              value:
                                                _vm.TipocalibracionSelected,
                                              callback: function($$v) {
                                                _vm.TipocalibracionSelected = $$v
                                              },
                                              expression:
                                                "TipocalibracionSelected"
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
                                      _vm.partida.has_calibracion
                                        ? _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.patrones,
                                              "item-text": "nombre",
                                              "return-object": "",
                                              outlined: "",
                                              label: "Patron a utilizar",
                                              clearable: ""
                                            },
                                            model: {
                                              value:
                                                _vm.partida.has_calibracion
                                                  .patron_de_calibracion,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.partida.has_calibracion,
                                                  "patron_de_calibracion",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "partida.has_calibracion.patron_de_calibracion"
                                            }
                                          })
                                        : _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.patrones,
                                              "item-text": "nombre",
                                              "return-object": "",
                                              outlined: "",
                                              label: "Patron a utilizar",
                                              clearable: ""
                                            },
                                            model: {
                                              value: _vm.patronSelected,
                                              callback: function($$v) {
                                                _vm.patronSelected = $$v
                                              },
                                              expression: "patronSelected"
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
                                      _vm.partida.has_calibracion
                                        ? _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.procedimientos,
                                              "item-text": "nombre",
                                              "return-object": "",
                                              outlined: "",
                                              label: "Procedimiento a utilizar",
                                              clearable: ""
                                            },
                                            model: {
                                              value:
                                                _vm.partida.has_calibracion
                                                  .procedimiento_de_calibracion,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.partida.has_calibracion,
                                                  "procedimiento_de_calibracion",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "partida.has_calibracion.procedimiento_de_calibracion"
                                            }
                                          })
                                        : _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.procedimientos,
                                              "item-text": "nombre",
                                              "return-object": "",
                                              outlined: "",
                                              label: "Procedimiento a utilizar",
                                              clearable: ""
                                            },
                                            model: {
                                              value: _vm.procedimientoSelected,
                                              callback: function($$v) {
                                                _vm.procedimientoSelected = $$v
                                              },
                                              expression:
                                                "procedimientoSelected"
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
                                      _vm.partida.has_calibracion
                                        ? _c(
                                            "v-menu",
                                            {
                                              ref: "menu1",
                                              attrs: {
                                                "close-on-content-click": false,
                                                transition: "scale-transition",
                                                "offset-y": "",
                                                "max-width": "290px",
                                                "min-width": "290px"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      var attrs = ref.attrs
                                                      return [
                                                        _c(
                                                          "v-text-field",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    "Fecha de anomalia",
                                                                  outlined: "",
                                                                  "prepend-icon":
                                                                    "mdi-calendar"
                                                                },
                                                                on: {
                                                                  blur: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.date = _vm.parseDate(
                                                                      _vm.dateFormatted
                                                                    )
                                                                  }
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.dateFormatted,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.dateFormatted = $$v
                                                                  },
                                                                  expression:
                                                                    "dateFormatted"
                                                                }
                                                              },
                                                              "v-text-field",
                                                              attrs,
                                                              false
                                                            ),
                                                            on
                                                          )
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                false,
                                                1048079218
                                              ),
                                              model: {
                                                value: _vm.menu1,
                                                callback: function($$v) {
                                                  _vm.menu1 = $$v
                                                },
                                                expression: "menu1"
                                              }
                                            },
                                            [
                                              _vm._v(" "),
                                              _c("v-date-picker", {
                                                attrs: { "no-title": "" },
                                                on: {
                                                  input: function($event) {
                                                    _vm.menu1 = false
                                                  }
                                                },
                                                model: {
                                                  value: _vm.partida.has_calibracion.fecha_anomalia.substr(
                                                    0,
                                                    10
                                                  ),
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.partida
                                                        .has_calibracion
                                                        .fecha_anomalia,
                                                      "substr(0, 10)",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "partida.has_calibracion.fecha_anomalia.substr(0, 10)"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _c(
                                            "v-menu",
                                            {
                                              ref: "menu1",
                                              attrs: {
                                                "close-on-content-click": false,
                                                transition: "scale-transition",
                                                "offset-y": "",
                                                "max-width": "290px",
                                                "min-width": "290px"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      var attrs = ref.attrs
                                                      return [
                                                        _c(
                                                          "v-text-field",
                                                          _vm._g(
                                                            _vm._b(
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    "Fecha de anomalia",
                                                                  outlined: "",
                                                                  "prepend-icon":
                                                                    "mdi-calendar"
                                                                },
                                                                on: {
                                                                  blur: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.date = _vm.parseDate(
                                                                      _vm.dateFormatted
                                                                    )
                                                                  }
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.dateFormatted,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.dateFormatted = $$v
                                                                  },
                                                                  expression:
                                                                    "dateFormatted"
                                                                }
                                                              },
                                                              "v-text-field",
                                                              attrs,
                                                              false
                                                            ),
                                                            on
                                                          )
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                false,
                                                1048079218
                                              ),
                                              model: {
                                                value: _vm.menu1,
                                                callback: function($$v) {
                                                  _vm.menu1 = $$v
                                                },
                                                expression: "menu1"
                                              }
                                            },
                                            [
                                              _vm._v(" "),
                                              _c("v-date-picker", {
                                                attrs: { "no-title": "" },
                                                on: {
                                                  input: function($event) {
                                                    _vm.menu1 = false
                                                  }
                                                },
                                                model: {
                                                  value: _vm.date,
                                                  callback: function($$v) {
                                                    _vm.date = $$v
                                                  },
                                                  expression: "date"
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
                            "v-col",
                            {
                              attrs: {
                                cols: "12",
                                xs: "12",
                                sm: "12",
                                md: "5",
                                lg: "5"
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
                                          outlined: "",
                                          label: "Cliente",
                                          disabled: ""
                                        },
                                        model: {
                                          value:
                                            _vm.partida.has_recibo
                                              .has_cotizaicon.has_cliente
                                              .razon_social,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.partida.has_recibo
                                                .has_cotizaicon.has_cliente,
                                              "razon_social",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "partida.has_recibo.has_cotizaicon.has_cliente.razon_social"
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
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          label: "Tipo de servicio",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.partida.tipo,
                                          callback: function($$v) {
                                            _vm.$set(_vm.partida, "tipo", $$v)
                                          },
                                          expression: "partida.tipo"
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
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mt-1",
                                          attrs: {
                                            color: "primary",
                                            link: "",
                                            href:
                                              _vm.partida.ruta_doc_calibracion,
                                            target: "_blank",
                                            block: "",
                                            large: ""
                                          }
                                        },
                                        [_vm._v("Documento de calibracion")]
                                      )
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
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "info", block: "" },
                                          on: { click: _vm.IniciarCalibracion }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-clock-start")
                                          ]),
                                          _vm._v(
                                            "\r\n                                    Iniciar calibracion\r\n                                "
                                          )
                                        ],
                                        1
                                      )
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
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "warning",
                                            block: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.terminarCalibracion(
                                                _vm.partida
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-content-save")
                                          ]),
                                          _vm._v(
                                            "\r\n                                    finalizar calibracion\r\n                                "
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
                              _vm.partida.has_calibracion
                                ? _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      name: "input-7-4",
                                      label: "Decripcion de la anomalia"
                                    },
                                    model: {
                                      value:
                                        _vm.partida.has_calibracion
                                          .descripcion_anomalia,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.partida.has_calibracion,
                                          "descripcion_anomalia",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "partida.has_calibracion.descripcion_anomalia"
                                    }
                                  })
                                : _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      name: "input-7-4",
                                      label: "Decripcion de la anomalia"
                                    },
                                    model: {
                                      value: _vm.descripcion_anomalia,
                                      callback: function($$v) {
                                        _vm.descripcion_anomalia = $$v
                                      },
                                      expression: "descripcion_anomalia"
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
                              _vm.partida.has_calibracion
                                ? _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      name: "input-7-4",
                                      label: "Observacion del tecnico"
                                    },
                                    model: {
                                      value:
                                        _vm.partida.has_calibracion
                                          .observacion_tecnico,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.partida.has_calibracion,
                                          "observacion_tecnico",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "partida.has_calibracion.observacion_tecnico"
                                    }
                                  })
                                : _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      name: "input-7-4",
                                      label: "Observacion del tecnico"
                                    },
                                    model: {
                                      value: _vm.observacion_de_tecnico,
                                      callback: function($$v) {
                                        _vm.observacion_de_tecnico = $$v
                                      },
                                      expression: "observacion_de_tecnico"
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

/***/ "./resources/js/components/laboratorio/indexComponentLaboratorio.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/laboratorio/indexComponentLaboratorio.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexComponentLaboratorio_vue_vue_type_template_id_a3de02fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa& */ "./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa&");
/* harmony import */ var _indexComponentLaboratorio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexComponentLaboratorio.vue?vue&type=script&lang=js& */ "./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexComponentLaboratorio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexComponentLaboratorio_vue_vue_type_template_id_a3de02fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexComponentLaboratorio_vue_vue_type_template_id_a3de02fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/laboratorio/indexComponentLaboratorio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentLaboratorio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexComponentLaboratorio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentLaboratorio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentLaboratorio_vue_vue_type_template_id_a3de02fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/indexComponentLaboratorio.vue?vue&type=template&id=a3de02fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentLaboratorio_vue_vue_type_template_id_a3de02fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexComponentLaboratorio_vue_vue_type_template_id_a3de02fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalCalibracionComponent_vue_vue_type_template_id_243ea854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalCalibracionComponent.vue?vue&type=template&id=243ea854& */ "./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=template&id=243ea854&");
/* harmony import */ var _modalCalibracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalCalibracionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalCalibracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalCalibracionComponent_vue_vue_type_template_id_243ea854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalCalibracionComponent_vue_vue_type_template_id_243ea854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/laboratorio/modals/modalCalibracionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCalibracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalCalibracionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCalibracionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=template&id=243ea854&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=template&id=243ea854& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCalibracionComponent_vue_vue_type_template_id_243ea854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalCalibracionComponent.vue?vue&type=template&id=243ea854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalCalibracionComponent.vue?vue&type=template&id=243ea854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCalibracionComponent_vue_vue_type_template_id_243ea854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalCalibracionComponent_vue_vue_type_template_id_243ea854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);