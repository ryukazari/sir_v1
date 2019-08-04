"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tramite_tupa = require("../controllers/tramite_tupa.controller");

var router = (0, _express.Router)();
/* lista todos los trámites TUPA */

router.get('/', _tramite_tupa.listarTramitesTupa);
/* lista un trámites TUPA por ID */

router.get('/:id_tramite', _tramite_tupa.listarTramiteTupaById);
/* crea un trámite TUPA */

router.post('/', _tramite_tupa.crearTramiteTupa);
/* editar un trámite TUPA */

router.put('/:id', _tramite_tupa.editarTramiteTupa);
var _default = router;
exports["default"] = _default;