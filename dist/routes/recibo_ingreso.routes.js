"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _recibo_ingreso = require("../controllers/recibo_ingreso.controller");

var router = (0, _express.Router)();
router.get('/', _recibo_ingreso.listarReciboIngreso);
router.get('/:id_recibo_ingreso', _recibo_ingreso.listarReciboIngresoById);
router.post('/', _recibo_ingreso.crearReciboIngreso);
router.put('/:id_recibo_ingreso', _recibo_ingreso.editarReciboIngreso);
var _default = router;
exports["default"] = _default;