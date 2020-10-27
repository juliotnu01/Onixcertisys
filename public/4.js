(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
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
        name: 'Generar factura desde  los recibos',
        value: 1
      }, {
        name: 'Generar factura en blanco',
        value: 2
      }],
      tipoFacturaSelected: {},
      headers_partidas_factura: [{
        text: 'Cantidad',
        sorable: false,
        align: 'center',
        value: 'cantidad'
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
      cotizacion_partida: {
        forma_de_pago: '',
        metodo_de_pago: '',
        nota_de_factura: ''
      }
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
          }
        }
      }
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
                                      label: "Recibos",
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
                                                    "\r\n                                        Recibo: " +
                                                      _vm._s(data.item.id) +
                                                      " - " +
                                                      _vm._s(
                                                        data.item.has_cotizaicon
                                                          .has_cliente
                                                          .razon_social
                                                      ) +
                                                      "\r\n                                        "
                                                  ),
                                                  _c(
                                                    "v-alert",
                                                    {
                                                      staticClass: "ml-4",
                                                      staticStyle: {
                                                        position: "relative",
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
                                                      "\r\n                                        Recibo: " +
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
                                                    _c(
                                                      "v-alert",
                                                      {
                                                        staticClass: "ml-4",
                                                        staticStyle: {
                                                          position: "relative",
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
                                                  ]
                                                : [
                                                    _vm._v(
                                                      "\r\n                                        Recibo: " +
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
                                                    _c(
                                                      "v-alert",
                                                      {
                                                        staticClass: "ml-4",
                                                        staticStyle: {
                                                          position: "relative",
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
                                                  ]
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      991706659
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
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    xs: "12",
                                    sm: "4",
                                    md: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Forma de pago",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_partida.forma_de_pago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_partida,
                                          "forma_de_pago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_partida.forma_de_pago"
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
                                    sm: "4",
                                    md: "4"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Metodo de pago",
                                      outlined: ""
                                    },
                                    model: {
                                      value:
                                        _vm.cotizacion_partida.metodo_de_pago,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cotizacion_partida,
                                          "metodo_de_pago",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "cotizacion_partida.metodo_de_pago"
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
                                    md: "12"
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
                                        _vm.cotizacion_partida.nota_de_factura,
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
                              _vm._s(item.informe_id)
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
                                  item.has_intrumento.precio_venta
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



/***/ })

}]);