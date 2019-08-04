"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _transferencia_interna = require("../controllers/transferencia_interna.controller");

var router = (0, _express.Router)(); //api/transferencia-interna

router.post('/', _transferencia_interna.createTransferenciaInterna);
router.get('/', _transferencia_interna.listarTransferenciasInternas); //api/transferencia-interna/id

router.get('/:id', _transferencia_interna.getTransferenciaInterna);
router["delete"]('/:id', _transferencia_interna.deleteTransferenciaInterna);
router.put('/:id', _transferencia_interna.updateTransferenciaInterna);
var _default = router;
exports["default"] = _default;