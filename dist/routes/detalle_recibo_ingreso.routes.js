"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalle_recibo_ingreso = require("../controllers/detalle_recibo_ingreso.controller");

var router = (0, _express.Router)();
router.get('/', _detalle_recibo_ingreso.listarDetalleReciboIngreso);
router.get('/:id_detalle_recibo_ingreso', _detalle_recibo_ingreso.listarDetalleReciboIngresoById);
router.post('/', _detalle_recibo_ingreso.crearDetalleReciboIngreso);
router.put('/:id_detalle_recibo_ingreso', _detalle_recibo_ingreso.editarDetalleReciboIngreso);
var _default = router;
exports["default"] = _default;