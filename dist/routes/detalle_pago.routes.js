"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalle_pago = require("../controllers/detalle_pago.controller");

var router = (0, _express.Router)();
router.get('/', _detalle_pago.listarDetallePago);
router.get('/:id_detalle_pago', _detalle_pago.listarDetallePagoById);
router.post('/', _detalle_pago.crearDetallePago);
router.put('/:id_detalle_pago', _detalle_pago.editarDetallePago);
var _default = router;
exports["default"] = _default;