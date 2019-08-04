"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sede = require("../controllers/sede.controller");

var router = (0, _express.Router)();
/* Listar todas las sede sin excepciones*/

router.get('/', _sede.listarSedes);
/* Listar sede para el registro de un usuario: Sedes sin una sede padre*/

router.get('/padres', _sede.listarSedesPadres);
/* Listar sedes de un mismo padre id_sede_padre*/

router.get('/hijos/:id_padre_sede', _sede.listarSedesHijos);
/* Crear Sede */

router.post('/', _sede.crearSede);
/* Editar Sede */

router.put('/:id', _sede.editarSede);
var _default = router;
exports["default"] = _default;