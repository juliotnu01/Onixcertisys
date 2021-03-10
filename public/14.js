(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportes/indexReportesComponents.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportes/indexReportesComponents.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-pdf */ "./node_modules/vue-pdf/src/vuePdfNoSss.vue");
/* harmony import */ var _notificacion_indexComponentNotificacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notificacion/indexComponentNotificacion */ "./resources/js/components/notificacion/indexComponentNotificacion.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    pdf: vue_pdf__WEBPACK_IMPORTED_MODULE_2__["default"],
    notificacion: _notificacion_indexComponentNotificacion__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      // data para reporte de ventas por magnitud
      magnitud_selected: {},
      instrumento_selected: {},
      pdf_ruta: ""
    };
  },
  mounted: function mounted() {
    this.services.magnitudesServices.getListMagnitudesParaReporte();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["services", "magnitudes_para_reporte"])), {}, {
    var_computed_total_vendido: {
      get: function get() {
        var _this = this;

        var result = [],
            data = 0;

        if (Object.entries(this.instrumento_selected).length > 0) {
          for (var i = 0; this.instrumento_selected.belongs_partida.length > i; i++) {
            for (var j = 0; this.instrumento_selected.belongs_partida[i].belongs_cotizacion.belongs_recibo.length > j; j++) {
              if (!result.some(function (item) {
                return item.id == _this.instrumento_selected.belongs_partida[i].belongs_cotizacion.belongs_recibo[j].id;
              })) {
                result.push(this.instrumento_selected.belongs_partida[i].belongs_cotizacion.belongs_recibo[j]);
              }
            }
          }
        }

        result.forEach(function (item) {
          data += item.total;
        });
        return data;
      },
      set: function set(val) {
        this.instrumento_selected = val;
      }
    }
  }),
  methods: {
    getReporteVentasMagnitud: function getReporteVentasMagnitud() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var model, _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.pdf_ruta = "";
                _context.prev = 1;
                model = {
                  total_vendido: _this2.var_computed_total_vendido,
                  instrumento_selected: _this2.instrumento_selected
                };
                _context.next = 5;
                return axios.post("/api/get-reporte-magnitud-ventas", model);

              case 5:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                _this2.pdf_ruta = data;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportes/indexReportesComponents.vue?vue&type=template&id=621ba1a8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/reportes/indexReportesComponents.vue?vue&type=template&id=621ba1a8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "6" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\r\n                    Reporte de ventas por magnitud\r\n                "
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
                            { attrs: { cols: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.magnitudes_para_reporte,
                                  "item-text": "nombre",
                                  "return-object": "",
                                  outlined: "",
                                  label: "Seleccionar Magnitud"
                                },
                                model: {
                                  value: _vm.magnitud_selected,
                                  callback: function($$v) {
                                    _vm.magnitud_selected = $$v
                                  },
                                  expression: "magnitud_selected"
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
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.magnitud_selected.has_instrumento,
                                  "item-text": "nombre",
                                  "return-object": "",
                                  outlined: "",
                                  label: "Seleccionar Instrumento"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "selection",
                                    fn: function(data) {
                                      return [
                                        _c("strong", [
                                          _vm._v(" Instrumento: ")
                                        ]),
                                        _vm._v(
                                          " " +
                                            _vm._s(data.item.nombre) +
                                            "    "
                                        ),
                                        _c("strong", [_vm._v("Alcance:")]),
                                        _vm._v(
                                          _vm._s(data.item.alcance) +
                                            "\r\n\r\n                                "
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
                                              _c("strong", [
                                                _vm._v(" Instrumento: ")
                                              ]),
                                              _vm._v(
                                                " " +
                                                  _vm._s(data.item.nombre) +
                                                  "   "
                                              ),
                                              _c("strong", [
                                                _vm._v("Alcance:")
                                              ]),
                                              _vm._v(
                                                _vm._s(data.item.alcance) +
                                                  "\r\n                                    "
                                              )
                                            ]
                                          : [
                                              _c("strong", [
                                                _vm._v(" Instrumento: ")
                                              ]),
                                              _vm._v(
                                                " " +
                                                  _vm._s(data.item.nombre) +
                                                  "   "
                                              ),
                                              _c("strong", [
                                                _vm._v("Alcance:")
                                              ]),
                                              _vm._v(
                                                _vm._s(data.item.alcance) +
                                                  "\r\n                                    "
                                              )
                                            ]
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.instrumento_selected,
                                  callback: function($$v) {
                                    _vm.instrumento_selected = $$v
                                  },
                                  expression: "instrumento_selected"
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
                              _c("v-simple-table", {
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function() {
                                      return [
                                        _c("thead", [
                                          _c("tr", [
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Partida\r\n                                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Partida ID\r\n                                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Folio\r\n                                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Cliente\r\n                                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Factura\r\n                                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\r\n                                                Fecha\r\n                                            "
                                                )
                                              ]
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(
                                            _vm.instrumento_selected
                                              .belongs_partida,
                                            function(item, i) {
                                              return _c("tr", { key: i }, [
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [_vm._v(_vm._s(item.id))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        item.identificacion
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        item.belongs_cotizacion
                                                          .id
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        item.belongs_cotizacion
                                                          .has_cliente
                                                          .razon_social
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        item.belongs_cotizacion
                                                          .belongs_recibo[0].id
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        item.belongs_cotizacion.belongs_recibo[0].created_at.substr(
                                                          0,
                                                          10
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
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
                          ),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12" } }, [
                            _c("h1", [
                              _vm._v(
                                " Total Facturado: " +
                                  _vm._s(
                                    _vm._f("numberFormat")(
                                      _vm.var_computed_total_vendido
                                    )
                                  )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "success", block: "" },
                                  on: { click: _vm.getReporteVentasMagnitud }
                                },
                                [
                                  _vm._v(
                                    "\r\n                                Obtener Reporte  "
                                  ),
                                  _c("v-icon", [_vm._v("mdi-printer")])
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
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c(
                "v-card",
                [
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
                  ),
                  _vm._v(" "),
                  _c("pdf", {
                    ref: "myPdfComponent",
                    attrs: { src: _vm.pdf_ruta }
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
      _c("notificacion")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/reportes/indexReportesComponents.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/reportes/indexReportesComponents.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexReportesComponents_vue_vue_type_template_id_621ba1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexReportesComponents.vue?vue&type=template&id=621ba1a8& */ "./resources/js/components/reportes/indexReportesComponents.vue?vue&type=template&id=621ba1a8&");
/* harmony import */ var _indexReportesComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexReportesComponents.vue?vue&type=script&lang=js& */ "./resources/js/components/reportes/indexReportesComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexReportesComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexReportesComponents_vue_vue_type_template_id_621ba1a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexReportesComponents_vue_vue_type_template_id_621ba1a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/reportes/indexReportesComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportes/indexReportesComponents.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/reportes/indexReportesComponents.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReportesComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexReportesComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportes/indexReportesComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReportesComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportes/indexReportesComponents.vue?vue&type=template&id=621ba1a8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/reportes/indexReportesComponents.vue?vue&type=template&id=621ba1a8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReportesComponents_vue_vue_type_template_id_621ba1a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./indexReportesComponents.vue?vue&type=template&id=621ba1a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/reportes/indexReportesComponents.vue?vue&type=template&id=621ba1a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReportesComponents_vue_vue_type_template_id_621ba1a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indexReportesComponents_vue_vue_type_template_id_621ba1a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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