"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _rol = require("../controllers/rol.controller");

var router = (0, _express.Router)();
router.get('/', _rol.listarRol);
router.get('/:id_rol', _rol.listarRolById);
router.post('/', _rol.crearRol);
router.put('/:id_rol', _rol.editarRol);
var _default = router;
exports["default"] = _default;