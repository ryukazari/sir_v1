"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _descripcion_concepto = require("../controllers/descripcion_concepto.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.get('/', _descripcion_concepto.listarDescripcionConcepto);
router.get('/:id_desc_concepto', _descripcion_concepto.listarDescripcionConceptoById);
router.post('/', _descripcion_concepto.crearDescripcionConcepto);
router.put('/:id_desc_concepto', _descripcion_concepto.editarDescripcionConcepto);
var _default = router;
exports["default"] = _default;