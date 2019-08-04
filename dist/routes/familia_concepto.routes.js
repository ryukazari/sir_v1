"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _familia_concepto = require("../controllers/familia_concepto.controller");

var router = (0, _express.Router)();
/* Listar todas las familias de conceptos de pago */

router.get('/', _familia_concepto.listarFamiliasConcepto);
/* Listar una familia de concepto por Id */

router.get('/:id_familia_concepto', _familia_concepto.listarFamiliaConceptoById);
/* Crear familia de conceptos de pago */

router.post('/', _familia_concepto.crearFamiliaConcepto);
/* Crear familia de conceptos de pago */

router.put('/:id', _familia_concepto.editarFamiliaConcepto);
var _default = router;
exports["default"] = _default;