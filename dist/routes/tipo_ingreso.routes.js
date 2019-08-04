"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipo_ingreso = require("../controllers/tipo_ingreso.controller");

var router = (0, _express.Router)();
router.get('/', _tipo_ingreso.listarTipoIngreso);
router.get('/:id_tipo_ingreso', _tipo_ingreso.listarTipoIngresoById);
router.post('/', _tipo_ingreso.crearTipoIngreso);
router.put('/:id_tipo_ingreso', _tipo_ingreso.editarTipoIngreso);
var _default = router;
exports["default"] = _default;