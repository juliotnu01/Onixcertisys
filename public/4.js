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
/* harmony import */ var _notificacion_indexComponentNotificacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notificacion/indexComponentNotificacion */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");
/* harmony import */ var _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../overlayComponent.vue */ "./resources/js/components/overlayComponent.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "modal-calibracion": _modals_modalCalibracionComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    notificacion: _notificacion_indexComponentNotificacion__WEBPACK_IMPORTED_MODULE_3__["default"],
    overlay: _overlayComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      search: "",
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
        value: "has_recibo.has_cotizaicon.has_cliente.datos_fisicos_requeremientos_facturacion_razon_social"
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
        text: "Certificado de la calibracion",
        align: "center",
        sortable: true,
        value: "ruta_pdf_calibracion"
      }, {
        text: "Accion",
        align: "center",
        sortable: false,
        value: "accion"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "partidas", "partidas_para_calibrar"])),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$store.commit("setOverley", true);

              Promise.all([_this.services.partidaServices.getlistpartidasParaCalibrar()]).then(function () {
                _this.$store.commit("setOverley", false);
              })["catch"](function (reason) {
                _this.$store.commit("setOverley", false);
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
    Calibrar: function Calibrar(item) {
      this.$store.commit("setPartida", item);
      this.$store.commit("setDialogCalibracion", true);
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
/* harmony import */ var _modalRealizacionCalibracion_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalRealizacionCalibracion.vue */ "./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue");
/* harmony import */ var _config_datosGenerales_patron_modals_modalEditPatronComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/datosGenerales/patron/modals/modalEditPatronComponent */ "./resources/js/components/config/datosGenerales/patron/modals/modalEditPatronComponent.vue");
/* harmony import */ var _config_datosGenerales_procedimiento_modals_modalEditProcedimientoComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/datosGenerales/procedimiento/modals/modalEditProcedimientoComponent */ "./resources/js/components/config/datosGenerales/procedimiento/modals/modalEditProcedimientoComponent.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "modal-realizacion-calibracion": _modalRealizacionCalibracion_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "modal-edit-patron": _config_datosGenerales_patron_modals_modalEditPatronComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    "modal-edit-procedimiento": _config_datosGenerales_procedimiento_modals_modalEditProcedimientoComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      patronSelected: "",
      procedimientoSelected: "",
      menu1: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      item_tipo_de_calibracion: [{
        name: "En laboratrio",
        value: 1
      }, {
        name: "En campo",
        value: 2
      }],
      TipocalibracionSelected: {},
      descripcion_anomalia: "",
      observacion_de_tecnico: "",
      fechaIniciaCalibracion: "",
      terminaCalibracion: "",
      patronesLab: [],
      procedimientoLab: [],
      files_plantilla: [],
      show_upload_platilla_terminada: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_calibracion", "recibo_print", "partida", "patrones", "procedimientos", "loading_finalizar_calibracion"])), {}, {
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
                  patron_de_calibracion: _this2.partida.has_patrones_labs,
                  procedimiento_de_calibracion: _this2.partida.has_procedimientos_labs,
                  fecha_anomalia: _this2.date,
                  descripcion_anomalia: _this2.descripcion_anomalia,
                  observacion_tecnico: _this2.observacion_de_tecnico,
                  id_partida: _this2.partida.id,
                  vencimiento: _this2.partida.vigencia,
                  doc_calibracion: _this2.partida.ruta_doc_calibracion,
                  fecha_recibo: _this2.partida.created_at
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
                  partida: calibracion,
                  file_certificado: _this3.files_plantilla
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

      var _date$split = date.split("-"),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      return "".concat(day, "/").concat(month, "/").concat(year);
    },
    parseDate: function parseDate(date) {
      if (!date) return null;

      var _date$split3 = date.split("/"),
          _date$split4 = _slicedToArray(_date$split3, 3),
          month = _date$split4[0],
          day = _date$split4[1],
          year = _date$split4[2];

      return "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
    },
    agregarPatrones: function agregarPatrones() {
      try {
        var data = {
          "belongs_patron": this.patronSelected
        };

        if (this.patronSelected) {
          this.partida.has_patrones_labs.push(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    EditPatron: function EditPatron(ptr) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$store.commit("setPatron", ptr);

                _this4.$store.commit("setDialogEditPatron", true);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    eliminarPatron: function eliminarPatron(ptr) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                index = _this5.partida.has_patrones_labs.findIndex(function (item) {
                  return item.id === ptr.id;
                });

                _this5.partida.has_patrones_labs.splice(index, 1);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    agregarProcedimiento: function agregarProcedimiento() {
      try {
        var data = {
          "belongs_procedimiento": this.procedimientoSelected
        };

        if (this.procedimientoSelected) {
          this.partida.has_procedimientos_labs.push(data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    EditProcedimiento: function EditProcedimiento(proce) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.$store.commit("setProcedimiento", proce);

                _this6.$store.commit("setDialogEditProcedimiento", true);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    eliminarProcedimiento: function eliminarProcedimiento(pr) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                index = _this7.partida.has_procedimientos_labs.findIndex(function (item) {
                  return item.id === pr.id;
                });

                _this7.partida.has_procedimientos_labs.splice(index, 1);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      var_calibracion_pdf: null,
      urlPdfCalibracion: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "dialog_realizacion_calibracion", "partida"])), {}, {
    openDialog: {
      get: function get() {
        return this.dialog_realizacion_calibracion;
      },
      set: function set(val) {
        this.$store.commit("setDialogRealizacionCalibracion", val);
      }
    }
  }),
  methods: {
    cargarCertificado: function cargarCertificado() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var pdfCalibracion, _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pdfCalibracion = new FormData();
                pdfCalibracion.append("pdf_calibracion", _this.var_calibracion_pdf);
                pdfCalibracion.append("partida", JSON.stringify(_this.partida));
                _context.prev = 3;
                _context.next = 6;
                return axios.post("/api/cargar-certificado-partidas", pdfCalibracion, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                });

              case 6:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                _this.urlPdfCalibracion = data;
                _context.next = 11;
                return _this.services.partidaServices.getlistpartidasParaCalibrar();

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }))();
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
                key: "item.ruta_pdf_calibracion",
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
                            attrs: {
                              color: "primary",
                              target: "_blank",
                              href: item.ruta_pdf_calibracion,
                              block: ""
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-eye")])],
                          1
                        )
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
                              [_vm._v("\n            por iniciar\n          ")]
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
                                  "\n            " +
                                    _vm._s(item.has_calibracion.estado) +
                                    "\n          "
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
                                  "\n            " +
                                    _vm._s(item.has_calibracion.estado) +
                                    "\n          "
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
      _c("modal-calibracion"),
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
                "div",
                { staticClass: "m-5" },
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
                                                  "substr(0, 10)",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "\n                    partida.has_calibracion.fecha_inicio_calibracion.substr(0, 10)\n                  "
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
                                              "item-value": "name",
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
                                        md: "8",
                                        lg: "8"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
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
                                      staticClass: "mr-2",
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "1",
                                        lg: "1"
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
                                          on: { click: _vm.agregarPatrones }
                                        },
                                        [_vm._v("Agregar PAtron")]
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
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("Nombre")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("Clave")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("Alcance")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Fecha Calibracion"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Fecha Vencimiento"
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("Accion")]
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "tbody",
                                                    _vm._l(
                                                      _vm.partida
                                                        .has_patrones_labs,
                                                      function(item) {
                                                        return _c(
                                                          "tr",
                                                          { key: item.id },
                                                          [
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_patron
                                                                    .nombre
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_patron
                                                                    .clave
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_patron
                                                                    .alcance
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_patron
                                                                    .fecha_calibracion
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_patron
                                                                    .fecha_vencimiento
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        "error",
                                                                      icon: "",
                                                                      small: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.eliminarPatron(
                                                                          item
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _c("v-spacer"),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        "warning",
                                                                      icon: "",
                                                                      small: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.EditPatron(
                                                                          item
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-pencil"
                                                                        )
                                                                      ]
                                                                    )
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
                                          ],
                                          null,
                                          false,
                                          3778056775
                                        )
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
                                        md: "8",
                                        lg: "8"
                                      }
                                    },
                                    [
                                      _c("v-autocomplete", {
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
                                          expression: "procedimientoSelected"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "mr-2",
                                      attrs: {
                                        cols: "12",
                                        xs: "12",
                                        sm: "12",
                                        md: "1",
                                        lg: "1"
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
                                            click: _vm.agregarProcedimiento
                                          }
                                        },
                                        [_vm._v("Agregar Procedimiento")]
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
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("ID")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("Nombre")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "th",
                                                        {
                                                          staticClass:
                                                            "text-left"
                                                        },
                                                        [_vm._v("Accion")]
                                                      )
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "tbody",
                                                    _vm._l(
                                                      _vm.partida
                                                        .has_procedimientos_labs,
                                                      function(item) {
                                                        return _c(
                                                          "tr",
                                                          { key: item.id },
                                                          [
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_procedimiento
                                                                    .id
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("td", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item
                                                                    .belongs_procedimiento
                                                                    .nombre
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        "error",
                                                                      icon: "",
                                                                      small: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.eliminarProcedimiento(
                                                                          item
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _c("v-spacer"),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        "warning",
                                                                      icon: "",
                                                                      small: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.EditProcedimiento(
                                                                          item
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-pencil"
                                                                        )
                                                                      ]
                                                                    )
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
                                          ],
                                          null,
                                          false,
                                          4206374472
                                        )
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
                                              .datos_fisicos_requeremientos_facturacion_razon_social,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.partida.has_recibo
                                                .has_cotizaicon.has_cliente,
                                              "datos_fisicos_requeremientos_facturacion_razon_social",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                    partida.has_recibo.has_cotizaicon.has_cliente\n                      .datos_fisicos_requeremientos_facturacion_razon_social\n                  "
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
                                  !_vm.partida.ruta_pdf_calibracion
                                    ? _c(
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
                                                color: "info",
                                                block: ""
                                              },
                                              on: {
                                                click: _vm.IniciarCalibracion
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-clock-start")
                                              ]),
                                              _vm._v(
                                                "\n                  Iniciar calibracion\n                "
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.partida.ruta_pdf_calibracion
                                    ? _c(
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
                                                  _vm.show_upload_platilla_terminada = true
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-content-save")
                                              ]),
                                              _vm._v(
                                                "\n                  finalizar calibracion\n                "
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            xs: "12",
                                            sm: "12",
                                            md: "12",
                                            lg: "12",
                                            block: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "primary",
                                                block: "",
                                                target: "_blank",
                                                href:
                                                  _vm.partida
                                                    .ruta_pdf_calibracion
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                  Visualizar Certificado "
                                              ),
                                              _c("v-icon", [_vm._v("mdi-eye")])
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                  _vm._v(" "),
                                  _vm.show_upload_platilla_terminada
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
                                          _c("v-file-input", {
                                            attrs: {
                                              color: "#0095d9",
                                              counter: "",
                                              label: "Seleccionar Plantilla",
                                              "prepend-icon": "mdi-paperclip",
                                              outlined: "",
                                              "show-size": 1000
                                            },
                                            scopedSlots: _vm._u(
                                              [
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
                                                                color:
                                                                  "#0095d9",
                                                                dark: "",
                                                                label: "",
                                                                small: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                      " +
                                                                  _vm._s(text) +
                                                                  "\n                    "
                                                              )
                                                            ]
                                                          )
                                                        : index === 2
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "text-overline grey--text text--darken-3 mx-2"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                      +" +
                                                                  _vm._s(
                                                                    _vm.files
                                                                      .length -
                                                                      2
                                                                  ) +
                                                                  " File(s)\n                    "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              2378264441
                                            ),
                                            model: {
                                              value: _vm.files_plantilla,
                                              callback: function($$v) {
                                                _vm.files_plantilla = $$v
                                              },
                                              expression: "files_plantilla"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.show_upload_platilla_terminada
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
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "#0095d9",
                                                dark: "",
                                                loading:
                                                  _vm.loading_finalizar_calibracion
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
                                              _c(
                                                "v-icon",
                                                { staticClass: "mr-5" },
                                                [_vm._v("mdi-content-save")]
                                              ),
                                              _vm._v(
                                                "\n                  Generar Certificado\n                "
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
      ),
      _vm._v(" "),
      _c("modal-realizacion-calibracion"),
      _vm._v(" "),
      _c("modal-edit-patron"),
      _vm._v(" "),
      _c("modal-edit-procedimiento")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=template&id=7c669996&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=template&id=7c669996& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
                            md: "6",
                            lg: "6"
                          }
                        },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "pdf/*",
                              label: "Cargar Certificado (.pdf)",
                              outlined: "",
                              small: "",
                              dense: ""
                            },
                            model: {
                              value: _vm.var_calibracion_pdf,
                              callback: function($$v) {
                                _vm.var_calibracion_pdf = $$v
                              },
                              expression: "var_calibracion_pdf"
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
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success", block: "" },
                              on: { click: _vm.cargarCertificado }
                            },
                            [_vm._v("Registrar Certificado")]
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
                            md: "12",
                            lg: "12"
                          }
                        },
                        [
                          _c("pdf", {
                            ref: "myPdfComponent",
                            attrs: { src: _vm.urlPdfCalibracion }
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



/***/ }),

/***/ "./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalRealizacionCalibracion_vue_vue_type_template_id_7c669996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalRealizacionCalibracion.vue?vue&type=template&id=7c669996& */ "./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=template&id=7c669996&");
/* harmony import */ var _modalRealizacionCalibracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalRealizacionCalibracion.vue?vue&type=script&lang=js& */ "./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalRealizacionCalibracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalRealizacionCalibracion_vue_vue_type_template_id_7c669996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalRealizacionCalibracion_vue_vue_type_template_id_7c669996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalRealizacionCalibracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalRealizacionCalibracion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalRealizacionCalibracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=template&id=7c669996&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=template&id=7c669996& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalRealizacionCalibracion_vue_vue_type_template_id_7c669996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modalRealizacionCalibracion.vue?vue&type=template&id=7c669996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/laboratorio/modals/modalRealizacionCalibracion.vue?vue&type=template&id=7c669996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalRealizacionCalibracion_vue_vue_type_template_id_7c669996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalRealizacionCalibracion_vue_vue_type_template_id_7c669996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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