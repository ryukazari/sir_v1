"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _nivel_clasificador = require("../controllers/nivel_clasificador.controller");

var router = (0, _express.Router)();
router.get('/', _nivel_clasificador.listarNivelClasificador);
router.post('/', _nivel_clasificador.crearNivelClasificador);
router.put('/:id_nivel_clasificador', _nivel_clasificador.editarNivelClasificador);
var _default = router;
exports["default"] = _default;