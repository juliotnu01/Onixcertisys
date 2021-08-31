(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/indexReciboComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/indexReciboComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modals_modalAsignarTecnicoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalAsignarTecnicoComponent */ "./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue");
/* harmony import */ var _modals_modalViewPdfComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modalViewPdfComponent */ "./resources/js/components/recibo/modals/modalViewPdfComponent.vue");
/* harmony import */ var _notificacion_indexComponentNotificacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notificacion/indexComponentNotificacion */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");
/* harmony import */ var _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../overlayComponent.vue */ "./resources/js/components/overlayComponent.vue");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-asignar-tecnico": _modals_modalAsignarTecnicoComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    "modal-pdf": _modals_modalViewPdfComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    notificacion: _notificacion_indexComponentNotificacion__WEBPACK_IMPORTED_MODULE_4__["default"],
    "overlay": _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      userPrintSelected: {},
      active: [],
      avatar: null,
      open: [],
      users: [],
      search: null,
      magnitudSelected: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "recibos", "magnitudes"])), {}, {
    items: function items() {
      return [{
        name: "Ordenes de servicios",
        children: this.users
      }];
    },
    selected: function selected() {
      if (!this.active.length) return undefined;
      var id = this.active[0];
      return this.recibos.find(function (recibo) {
        return recibo.id === id;
      });
    }
  }),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$store.commit('setOverley', true);

              Promise.all([_this.services.reciboServices.getlistRecibos(), _this.services.magnitudesServices.getListMagnitudes()]).then(function () {
                _this.$store.commit('setOverley', false);
              })["catch"](function (reason) {
                _this.$store.commit('setOverley', false);
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
    AsignarTecnico: function AsignarTecnico(item) {
      this.$store.commit("setPartidaTecnico", item);
      this.$store.commit("setDialogAsignarTecnico", true);
    },
    imprimirRecibo: function imprimirRecibo(item) {
      this.services.reciboServices.imprimirRecibo(item);
    },
    imprimirReciboUser: function imprimirReciboUser(item, user) {
      this.services.reciboServices.imprimirReciboUser(item, user);
    },
    fetchUsers: function fetchUsers(item) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this2.recibos.forEach(function (recibo) {
                  if (recibo.has_cotizaicon.has_cliente !== null) {
                    item.children.push({
                      name: "Folio: ".concat(recibo.id, " -\n                   Empresa: ").concat(recibo.has_cotizaicon.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social, " - \n                   Fecha: ").concat(recibo.created_at.substr(0, 10), " - \n                   Estado: ").concat(recibo.estado, "  "),
                      id: recibo.id
                    });
                  }
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    reload: function reload() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.services.reciboServices.getlistRecibos();

              case 2:
                _this3.fetchUsers(_this3.items[0]);

              case 3:
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_asignar_target_data_plantilla", "partida_tecnico", "plantilla"])), {}, {
    data_target_plantilla: function data_target_plantilla() {
      return JSON.parse(this.plantilla.configuracion_documento);
    },
    openDialog: {
      get: function get() {
        return this.dialog_asignar_target_data_plantilla;
      },
      set: function set(val) {
        this.$store.commit("setDialogTargetDataPlantilla", val);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modalAsignarTargetDataPlantilla_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalAsignarTargetDataPlantilla.vue */ "./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue");


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
  components: {
    'modal-config-data-target-plantilla': _modalAsignarTargetDataPlantilla_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      documento_selected: {},
      item_Tipo_documento_para_subir: [{
        name: "Cargar Documento",
        value: 1,
        file: {}
      }, {
        name: "Colocar enlace directo al documento",
        value: 2,
        file: {}
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_asignar_tecnico", "partida_tecnico", "empleados", "documentos", "loading_asignar_tecnico"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_asignar_tecnico;
      },
      set: function set(val) {
        this.$store.commit("setDialogAsignarTecnico", val);
      }
    }
  }),
  mounted: function mounted() {
    this.services.empleadoServices.getlistEmpleados();
    this.services.documentoServices.getlistDocumento();
  },
  methods: {
    AsignarTecnico: function AsignarTecnico() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.services.empleadoServices.AsignarTecnico(_this.partida_tecnico, _this.documento_selected);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    configRuta: function configRuta() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_pdf_recibos", 'recibo_print'])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_pdf_recibos;
      },
      set: function set(val) {
        this.$store.commit("setdialogPDfRecibos", val);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/indexReciboComponent.vue?vue&type=template&id=75525913&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/indexReciboComponent.vue?vue&type=template&id=75525913& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          _c(
            "v-card-title",
            { staticClass: "indigo white--text headline" },
            [
              _c("v-text-field", {
                attrs: {
                  label: "Buscar orden de servicio",
                  dark: "",
                  flat: "",
                  "solo-inverted": "",
                  "hide-details": "",
                  clearable: "",
                  "clear-icon": "mdi-close-circle-outline"
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "pa-4", attrs: { justify: "space-between" } },
            [
              Object.entries(this.recibos).length > 0
                ? _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-treeview", {
                        attrs: {
                          active: _vm.active,
                          search: _vm.search,
                          items: _vm.items,
                          "load-children": _vm.fetchUsers,
                          open: _vm.open,
                          activatable: "",
                          color: "warning",
                          "open-on-click": "",
                          transition: ""
                        },
                        on: {
                          "update:active": function($event) {
                            _vm.active = $event
                          },
                          "update:open": function($event) {
                            _vm.open = $event
                          }
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-divider", { attrs: { vertical: "" } }),
              _vm._v(" "),
              _c(
                "v-col",
                {},
                [
                  _c(
                    "v-scroll-y-transition",
                    { staticClass: "p-1", attrs: { mode: "out-in" } },
                    [
                      !_vm.selected
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "title grey--text text--lighten-1 font-weight-light",
                              staticStyle: { "align-self": "left" }
                            },
                            [
                              _vm._v(
                                "\n            Seleccionar Orden de servicio\n          "
                              )
                            ]
                          )
                        : _c(
                            "v-card",
                            { key: _vm.selected.id, staticClass: "pt-6" },
                            [
                              _c("v-card-text", [
                                _c(
                                  "h6",
                                  { staticClass: "headline mb-2 text-right" },
                                  [
                                    _c("strong", [_vm._v("Fecha: ")]),
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.selected.created_at.substr(0, 10)
                                        ) +
                                        "\n                "
                                    ),
                                    _c("br")
                                  ]
                                ),
                                _vm._v(" "),
                                _c("h6", { staticClass: "headline mb-2" }, [
                                  _c("strong", [_vm._v("Empresa: ")]),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.has_cliente
                                          .datos_fisicos_requeremientos_facturacion_razon_social
                                      ) +
                                      "\n                "
                                  ),
                                  _c("br")
                                ]),
                                _vm._v(" "),
                                _c("h6", { staticClass: "headline mb-2" }, [
                                  _c("strong", [_vm._v("Dirección: ")]),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.has_cliente
                                          .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_calle
                                      ) +
                                      "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.has_cliente
                                          .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_numero
                                      ) +
                                      "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.has_cliente
                                          .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_colonia
                                      ) +
                                      "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.has_cliente
                                          .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_ciudad
                                      ) +
                                      "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.has_cliente
                                          .datos_fisicos_requeremientos_facturacion_domiclio_fiscal_estado
                                      ) +
                                      "\n                "
                                  ),
                                  _c("br")
                                ]),
                                _vm._v(" "),
                                _c("h6", { staticClass: "headline mb-2" }, [
                                  _c("strong", [
                                    _vm._v("Persona de contacto: ")
                                  ]),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon.contacto
                                      )
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("strong", [
                                    _vm._v("Correo de contacto: ")
                                  ]),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon
                                          .contacto_correo
                                      )
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("strong", [
                                    _vm._v("Teléfono de contacto: ")
                                  ]),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        _vm.selected.has_cotizaicon
                                          .contacto_telefono
                                      )
                                  ),
                                  _c("br")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "h6",
                                  { staticClass: "headline mb-2 text-right" },
                                  [
                                    _c("strong", [_vm._v("Vendedor: ")]),
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.selected.has_cotizaicon
                                            .has_empleado.nombre_completo
                                        )
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Estado: ")]),
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.selected.estado)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [_vm._v("Tipo: ")]),
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.selected.has_cotizaicon
                                            .tipo_de_servicio
                                        )
                                    ),
                                    _c("br")
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                {
                                  staticClass: "text-left",
                                  attrs: { tag: "v-card-text" }
                                },
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
                                      _c("v-simple-table", {
                                        attrs: { dense: "" },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "default",
                                            fn: function() {
                                              return [
                                                _c("thead", [
                                                  _c("tr", [
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Partida")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Identificación")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Servicio")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Tipo")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Estado de la Calibracion"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Calidad")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Asignar")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [_vm._v("Acción")]
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "tbody",
                                                  _vm._l(
                                                    _vm.selected.has_partidas,
                                                    function(item) {
                                                      return _c(
                                                        "tr",
                                                        { key: item.name },
                                                        [
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(item.id)
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(
                                                                    item.identificacion
                                                                  ) +
                                                                  "\n                        "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              _c(
                                                                "v-alert",
                                                                {
                                                                  staticClass:
                                                                    "mt-5",
                                                                  attrs: {
                                                                    color:
                                                                      "primary",
                                                                    dark: "",
                                                                    dense: "",
                                                                    small: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                            " +
                                                                      _vm._s(
                                                                        item.servicio
                                                                      ) +
                                                                      "\n                          "
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
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              _c(
                                                                "v-alert",
                                                                {
                                                                  staticClass:
                                                                    "mt-5",
                                                                  attrs: {
                                                                    color:
                                                                      "primary",
                                                                    dark: "",
                                                                    dense: "",
                                                                    small: "",
                                                                    outlined: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                            " +
                                                                      _vm._s(
                                                                        item.tipo
                                                                      ) +
                                                                      "\n                          "
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
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              item.has_calibracion ==
                                                              null
                                                                ? _c(
                                                                    "v-alert",
                                                                    {
                                                                      staticClass:
                                                                        "mt-5",
                                                                      attrs: {
                                                                        dense:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        type:
                                                                          "error"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                            por inicar\n                          "
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
                                                                        "mt-5",
                                                                      attrs: {
                                                                        dense:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        type:
                                                                          "warning"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                            " +
                                                                          _vm._s(
                                                                            item
                                                                              .has_calibracion
                                                                              .estado
                                                                          ) +
                                                                          "\n                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                : _c(
                                                                    "v-alert",
                                                                    {
                                                                      staticClass:
                                                                        "mt-5",
                                                                      attrs: {
                                                                        dense:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        type:
                                                                          "success"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                            " +
                                                                          _vm._s(
                                                                            item
                                                                              .has_calibracion
                                                                              .estado
                                                                          ) +
                                                                          "\n                          "
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
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              item.has_calidad
                                                                .status_calidad ===
                                                              "Por revisar"
                                                                ? _c(
                                                                    "v-alert",
                                                                    {
                                                                      staticClass:
                                                                        "mt-5",
                                                                      attrs: {
                                                                        dense:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        type:
                                                                          "error"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                            Sin Revisar\n                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                : item
                                                                    .has_calidad
                                                                    .status_calidad ===
                                                                  "No autorizado"
                                                                ? _c(
                                                                    "v-alert",
                                                                    {
                                                                      staticClass:
                                                                        "mt-5",
                                                                      attrs: {
                                                                        dense:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        type:
                                                                          "error"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                            " +
                                                                          _vm._s(
                                                                            item
                                                                              .has_calidad
                                                                              .status_calidad
                                                                          ) +
                                                                          "\n                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                : item
                                                                    .has_calidad
                                                                    .status_calidad ===
                                                                  "Autorizado"
                                                                ? _c(
                                                                    "v-alert",
                                                                    {
                                                                      staticClass:
                                                                        "mt-5",
                                                                      attrs: {
                                                                        dense:
                                                                          "",
                                                                        outlined:
                                                                          "",
                                                                        type:
                                                                          "success"
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                            " +
                                                                          _vm._s(
                                                                            item
                                                                              .has_calidad
                                                                              .status_calidad
                                                                          ) +
                                                                          "\n                          "
                                                                      )
                                                                    ]
                                                                  )
                                                                : _vm._e()
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              item.has_empleado
                                                                ? _c("div", [
                                                                    _vm._v(
                                                                      "\n                            " +
                                                                        _vm._s(
                                                                          item
                                                                            .has_empleado
                                                                            .nombre_completo
                                                                        ) +
                                                                        "\n                          "
                                                                    )
                                                                  ])
                                                                : _c(
                                                                    "div",
                                                                    [
                                                                      _c(
                                                                        "v-alert",
                                                                        {
                                                                          staticClass:
                                                                            "mt-5",
                                                                          staticStyle: {
                                                                            "font-size":
                                                                              "12px"
                                                                          },
                                                                          attrs: {
                                                                            color:
                                                                              "error",
                                                                            dark:
                                                                              "",
                                                                            dense:
                                                                              "",
                                                                            small:
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "\n                              Sin Asignar\n                            "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "td",
                                                            {
                                                              staticClass:
                                                                "text-center"
                                                            },
                                                            [
                                                              _c(
                                                                "v-btn",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "success",
                                                                    icon: "",
                                                                    dense: "",
                                                                    small: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.AsignarTecnico(
                                                                        item
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-eye"
                                                                    )
                                                                  ])
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
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
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
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
                                                md: "6",
                                                lg: "6"
                                              }
                                            },
                                            [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  items: _vm.magnitudes,
                                                  outlined: "",
                                                  dense: "",
                                                  "item-text": "nombre",
                                                  "return-object": "",
                                                  label: "Seleccionar magnitud"
                                                },
                                                model: {
                                                  value: _vm.magnitudSelected,
                                                  callback: function($$v) {
                                                    _vm.magnitudSelected = $$v
                                                  },
                                                  expression: "magnitudSelected"
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
                                                    text: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.imprimirReciboUser(
                                                        _vm.selected,
                                                        _vm.magnitudSelected
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-printer")
                                                  ])
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
                                                md: "4",
                                                lg: "4"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    block: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.imprimirRecibo(
                                                        _vm.selected
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Imprimir Orden de servicio"
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
        1
      ),
      _vm._v(" "),
      _c("modal-asignar-tecnico"),
      _vm._v(" "),
      _c("modal-pdf"),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", xs: "12", sm: "4", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Descripcion",
                              outlined: "",
                              dense: ""
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", xs: "12", sm: "4", md: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Celda", outlined: "", dense: "" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", xs: "12", sm: "4", md: "4" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: Object.entries(_vm.partida_tecnico),
                              outlined: "",
                              dense: "",
                              chips: "",
                              "small-chips": "",
                              label: "Data",
                              "return-data": ""
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
          attrs: { width: "1024" },
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
              _c("v-card-title", [_vm._v("Asigar Tecnico")]),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  Object.entries(this.partida_tecnico).length > 0
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
                                md: "3",
                                lg: "3"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  disabled: "",
                                  outlined: "",
                                  label: "Orden de servicio"
                                },
                                model: {
                                  value: _vm.partida_tecnico.recibo_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "recibo_id",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.recibo_id"
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
                                  outlined: "",
                                  label: "Folio"
                                },
                                model: {
                                  value: _vm.partida_tecnico.cotizacion_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "cotizacion_id",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.cotizacion_id"
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
                                  outlined: "",
                                  label: "Partida"
                                },
                                model: {
                                  value: _vm.partida_tecnico.id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida_tecnico, "id", $$v)
                                  },
                                  expression: "partida_tecnico.id"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Identificacion"
                                },
                                model: {
                                  value: _vm.partida_tecnico.identificacion,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "identificacion",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.identificacion"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Informe id"
                                },
                                model: {
                                  value: _vm.partida_tecnico.informe_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "informe_id",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.informe_id"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "servicio"
                                },
                                model: {
                                  value: _vm.partida_tecnico.servicio,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "servicio",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.servicio"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Instrumento"
                                },
                                model: {
                                  value:
                                    _vm.partida_tecnico.has_intrumento.nombre,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico.has_intrumento,
                                      "nombre",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "partida_tecnico.has_intrumento.nombre"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Acreditacion"
                                },
                                model: {
                                  value:
                                    _vm.partida_tecnico.has_intrumento
                                      .has_acreditacion.nombre,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico.has_intrumento
                                        .has_acreditacion,
                                      "nombre",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "partida_tecnico.has_intrumento.has_acreditacion.nombre"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Magnitud"
                                },
                                model: {
                                  value:
                                    _vm.partida_tecnico.has_intrumento
                                      .has_magnitud.nombre,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico.has_intrumento
                                        .has_magnitud,
                                      "nombre",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "partida_tecnico.has_intrumento.has_magnitud.nombre"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Alcance"
                                },
                                model: {
                                  value:
                                    _vm.partida_tecnico.has_intrumento.alcance,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico.has_intrumento,
                                      "alcance",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "partida_tecnico.has_intrumento.alcance"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Marca"
                                },
                                model: {
                                  value: _vm.partida_tecnico.marca,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida_tecnico, "marca", $$v)
                                  },
                                  expression: "partida_tecnico.marca"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Modelo"
                                },
                                model: {
                                  value: _vm.partida_tecnico.modelo,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida_tecnico, "modelo", $$v)
                                  },
                                  expression: "partida_tecnico.modelo"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Serie"
                                },
                                model: {
                                  value: _vm.partida_tecnico.serie,
                                  callback: function($$v) {
                                    _vm.$set(_vm.partida_tecnico, "serie", $$v)
                                  },
                                  expression: "partida_tecnico.serie"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "Cantidad"
                                },
                                model: {
                                  value: _vm.partida_tecnico.cantidad,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "cantidad",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.cantidad"
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
                                  disabled: "",
                                  outlined: "",
                                  label: "vigencia"
                                },
                                model: {
                                  value: _vm.partida_tecnico.vigencia,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "vigencia",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.vigencia"
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
                                  items: _vm.documentos,
                                  outlined: "",
                                  dense: "",
                                  label: "Seleccionar documento",
                                  "item-text": "nombre_documento",
                                  "item-value": "id",
                                  "return-object": ""
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.configRuta(
                                      _vm.documento_selected
                                    )
                                  }
                                },
                                model: {
                                  value:
                                    _vm.partida_tecnico.has_intrumento
                                      .belongs_documento,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico.has_intrumento,
                                      "belongs_documento",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "partida_tecnico.has_intrumento.belongs_documento"
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
                                  "item-text": "nombre_completo",
                                  return: "",
                                  "return-object": "",
                                  items: _vm.empleados,
                                  outlined: "",
                                  label: "Seleccionar Tecnico"
                                },
                                model: {
                                  value: _vm.partida_tecnico.has_empleado,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.partida_tecnico,
                                      "has_empleado",
                                      $$v
                                    )
                                  },
                                  expression: "partida_tecnico.has_empleado"
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
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        text: "",
                        color: "primary",
                        loading: _vm.loading_asignar_tecnico
                      },
                      on: { click: _vm.AsignarTecnico }
                    },
                    [_vm._v(" Asignar Tecnico ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "", color: "error" },
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("modal-config-data-target-plantilla")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=template&id=24657562&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=template&id=24657562& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
            attrs: { src: _vm.recibo_print.ruta_pdf }
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

/***/ "./resources/js/components/recibo/indexReciboComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/recibo/indexReciboComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexReciboComponent_vue_vue_type_template_id_75525913___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexReciboComponent.vue?vue&type=template&id=75525913& */ "./resources/js/components/recibo/indexReciboComponent.vue?vue&type=template&id=75525913&");
/* harmony import */ var _indexReciboComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexReciboComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/recibo/indexReciboComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexReciboComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexReciboComponent_vue_vue_type_template_id_75525913___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexReciboComponent_vue_vue_type_template_id_75525913___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recibo/indexReciboComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/recibo/indexReciboComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/recibo/indexReciboComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReciboComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexReciboComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/indexReciboComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReciboComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recibo/indexReciboComponent.vue?vue&type=template&id=75525913&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/recibo/indexReciboComponent.vue?vue&type=template&id=75525913& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReciboComponent_vue_vue_type_template_id_75525913___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexReciboComponent.vue?vue&type=template&id=75525913& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/indexReciboComponent.vue?vue&type=template&id=75525913&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReciboComponent_vue_vue_type_template_id_75525913___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReciboComponent_vue_vue_type_template_id_75525913___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalAsignarTargetDataPlantilla_vue_vue_type_template_id_c81a636a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a& */ "./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a&");
/* harmony import */ var _modalAsignarTargetDataPlantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js& */ "./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalAsignarTargetDataPlantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalAsignarTargetDataPlantilla_vue_vue_type_template_id_c81a636a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalAsignarTargetDataPlantilla_vue_vue_type_template_id_c81a636a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTargetDataPlantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTargetDataPlantilla_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTargetDataPlantilla_vue_vue_type_template_id_c81a636a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTargetDataPlantilla.vue?vue&type=template&id=c81a636a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTargetDataPlantilla_vue_vue_type_template_id_c81a636a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTargetDataPlantilla_vue_vue_type_template_id_c81a636a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalAsignarTecnicoComponent_vue_vue_type_template_id_5be44771___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771& */ "./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771&");
/* harmony import */ var _modalAsignarTecnicoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAsignarTecnicoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalAsignarTecnicoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalAsignarTecnicoComponent_vue_vue_type_template_id_5be44771___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalAsignarTecnicoComponent_vue_vue_type_template_id_5be44771___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTecnicoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAsignarTecnicoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTecnicoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTecnicoComponent_vue_vue_type_template_id_5be44771___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalAsignarTecnicoComponent.vue?vue&type=template&id=5be44771&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTecnicoComponent_vue_vue_type_template_id_5be44771___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalAsignarTecnicoComponent_vue_vue_type_template_id_5be44771___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/recibo/modals/modalViewPdfComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalViewPdfComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalViewPdfComponent_vue_vue_type_template_id_24657562___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalViewPdfComponent.vue?vue&type=template&id=24657562& */ "./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=template&id=24657562&");
/* harmony import */ var _modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalViewPdfComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalViewPdfComponent_vue_vue_type_template_id_24657562___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalViewPdfComponent_vue_vue_type_template_id_24657562___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recibo/modals/modalViewPdfComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalViewPdfComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=template&id=24657562&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=template&id=24657562& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_template_id_24657562___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalViewPdfComponent.vue?vue&type=template&id=24657562& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recibo/modals/modalViewPdfComponent.vue?vue&type=template&id=24657562&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_template_id_24657562___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalViewPdfComponent_vue_vue_type_template_id_24657562___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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