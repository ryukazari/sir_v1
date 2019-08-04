"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _devolucion = require("../controllers/devolucion.controller");

var router = (0, _express.Router)();
router.get('/', _devolucion.listarDevoluciones);
router.get('/:id_devolucion', _devolucion.listarDevolucionesById);
router.post('/', _devolucion.crearDevolucion);
router.put('/:id_devolucion', _devolucion.editarDevolucion);
var _default = router;
exports["default"] = _default;