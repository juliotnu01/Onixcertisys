(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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
      console.log({
        item: item
      });
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: c:\\laragon\\www\\Onixcertisys\\resources\\js\\components\\laboratorio\\modals\\modalCalibracionComponent.vue: Unexpected token, expected \",\" (515:8)\n\n\u001b[0m \u001b[90m 513 | \u001b[39m              file_certificado\u001b[33m:\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfiles_plantilla\u001b[0m\n\u001b[0m \u001b[90m 514 | \u001b[39m        \u001b[90m// };\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 515 | \u001b[39m        await \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mservices\u001b[33m.\u001b[39mcalibracionServices\u001b[33m.\u001b[39mterminaCalibracion(model)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 516 | \u001b[39m      } \u001b[36mcatch\u001b[39m (e) {\u001b[0m\n\u001b[0m \u001b[90m 517 | \u001b[39m        console\u001b[33m.\u001b[39mlog(e)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 518 | \u001b[39m      }\u001b[0m\n    at Parser._raise (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.raise (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.unexpected (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Parser.expect (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9087:28)\n    at Parser.parseObjectLike (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:10923:14)\n    at Parser.parseExprAtom (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:10491:23)\n    at Parser.parseExprSubscripts (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9893:39\n    at Parser.allowInAnd (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11541:16)\n    at Parser.parseMaybeAssignAllowIn (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:9893:17)\n    at Parser.parseVar (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12339:70)\n    at Parser.parseVarStatement (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12151:10)\n    at Parser.parseStatementContent (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11743:21)\n    at Parser.parseStatement (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseBlock (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Parser.parseTryStatement (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12119:23)\n    at Parser.parseStatementContent (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11733:21)\n    at Parser.parseStatement (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseBlock (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Parser.parseFunctionBody (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11221:24)\n    at Parser.parseFunctionBodyAndFinish (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11205:10)\n    at Parser.parseMethod (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11155:10)\n    at Parser.parseObjectMethod (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11084:19)\n    at Parser.parseObjPropValue (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11117:23)\n    at Parser.parsePropertyDefinition (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:11041:10)\n    at Parser.parseObjectLike (c:\\laragon\\www\\Onixcertisys\\node_modules\\@babel\\parser\\lib\\index.js:10931:25)");

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