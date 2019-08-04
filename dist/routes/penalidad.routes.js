"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _penalidad = require("../controllers/penalidad.controller");

var router = (0, _express.Router)();
router.get('/', _penalidad.listarPenalidad);
router.get('/:id_penalidad', _penalidad.listarPenalidadById);
router.post('/', _penalidad.crearPenalidad);
router.put('/:id_penalidad', _penalidad.editarPenalidad);
var _default = router;
exports["default"] = _default;