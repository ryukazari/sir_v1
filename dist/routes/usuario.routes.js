"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuario = require("../controllers/usuario.controller");

var router = (0, _express.Router)();
router.get('/', _usuario.listarUsuarios);
router.get('/:id_usuario', _usuario.listarUsuarioById);
router.post('/', _usuario.crearUsuario);
router.put('/:id_usuario', _usuario.editarUsuario);
var _default = router;
exports["default"] = _default;