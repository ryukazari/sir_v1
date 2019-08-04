"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sugerencia = require("../controllers/sugerencia.controller");

var router = (0, _express.Router)();
router.get('/', _sugerencia.listarSugerencia);
router.get('/:id_sugerencia', _sugerencia.listarSugerenciaById);
router.post('/', _sugerencia.crearSugerencia);
router.put('/:id_sugerencia', _sugerencia.editarSugerencia);
var _default = router;
exports["default"] = _default;