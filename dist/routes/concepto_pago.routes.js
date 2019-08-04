"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _concepto_pago = require("../controllers/concepto_pago.controller");

var router = (0, _express.Router)();
router.get('/', _concepto_pago.listarConceptoPago);
router.get('/:id_concepto_pago', _concepto_pago.listarConceptoPagoById);
router.post('/', _concepto_pago.crearConceptoPago);
router.put('/:id_concepto_pago', _concepto_pago.editarConceptoPago);
var _default = router;
exports["default"] = _default;