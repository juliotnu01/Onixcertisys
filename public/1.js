(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      headers_cotizacion: [{
        text: "Folio",
        value: "id"
      }, {
        text: "Fecha",
        value: "created_at"
      }, {
        text: "Cliente",
        value: "has_cliente"
      }, {
        text: "Contacto",
        value: "contacto"
      }, {
        text: "Vendedor",
        value: "has_empleado"
      }, {
        text: "Estado",
        value: "estado_de_la_cotizacion"
      }, {
        text: "Tipo de Servicio",
        value: "tipo_de_servicio"
      }, {
        text: "Moneda",
        value: "has_moneda"
      }, {
        text: "Sub Total",
        value: "sub_total"
      }, {
        text: "IVA",
        value: "iva"
      }, {
        text: "Total",
        value: "total"
      }, {
        text: "Accion",
        value: "accion"
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
                _this.$store.commit('setDialogEditCotizacion', true);

                _this.$store.commit('setCotizacion', cot);

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
      this.$store.commit('setDialogViewCotizacion', true);
      this.$store.commit('setCotizacionView', item);
    }
  }
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
                _c("td", [
                  _c("small", [
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
          }
        ])
      })
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



/***/ })

}]);