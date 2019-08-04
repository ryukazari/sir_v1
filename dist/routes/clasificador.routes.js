"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clasificador = require("../controllers/clasificador.controller");

var router = (0, _express.Router)();
router.get('/', _clasificador.listarClasificador);
router.get('/:id_clasificador', _clasificador.listarClasificadorById);
router.post('/', _clasificador.crearClasificador);
router.put('/:id_clasificador', _clasificador.editarClasificador);
var _default = router;
exports["default"] = _default;