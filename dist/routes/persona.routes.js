"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _persona = require("../controllers/persona.controller");

var router = (0, _express.Router)();
router.get('/', _persona.listarPersona);
router.get('/:id_persona', _persona.listarPersonaById);
router.post('/', _persona.crearPersona);
router.put('/:id_persona', _persona.editarPersona);
var _default = router;
exports["default"] = _default;