"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pago = require("../controllers/pago.controller");

var router = (0, _express.Router)();
router.get('/', _pago.listarPago);
router.get('/:id_pago', _pago.listarPagoById);
router.post('/', _pago.crearPago);
router.put('/:id_pago', _pago.editarPago);
var _default = router;
exports["default"] = _default;