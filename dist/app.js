"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _transferencia_interna = _interopRequireDefault(require("./routes/transferencia_interna.routes"));

var _sede = _interopRequireDefault(require("./routes/sede.routes"));

var _familia_concepto = _interopRequireDefault(require("./routes/familia_concepto.routes"));

var _tramite_tupa = _interopRequireDefault(require("./routes/tramite_tupa.routes"));

var _nivel_clasificador = _interopRequireDefault(require("./routes/nivel_clasificador.routes"));

var _clasificador = _interopRequireDefault(require("./routes/clasificador.routes"));

var _concepto_pago = _interopRequireDefault(require("./routes/concepto_pago.routes"));

var _descripcion_concepto = _interopRequireDefault(require("./routes/descripcion_concepto.routes"));

var _devolucion = _interopRequireDefault(require("./routes/devolucion.routes"));

var _tipo_ingreso = _interopRequireDefault(require("./routes/tipo_ingreso.routes"));

var _recibo_ingreso = _interopRequireDefault(require("./routes/recibo_ingreso.routes"));

var _detalle_recibo_ingreso = _interopRequireDefault(require("./routes/detalle_recibo_ingreso.routes"));

var _persona = _interopRequireDefault(require("./routes/persona.routes"));

var _sugerencia = _interopRequireDefault(require("./routes/sugerencia.routes"));

var _rol = _interopRequireDefault(require("./routes/rol.routes"));

var _penalidad = _interopRequireDefault(require("./routes/penalidad.routes"));

var _usuario = _interopRequireDefault(require("./routes/usuario.routes"));

var _pago = _interopRequireDefault(require("./routes/pago.routes"));

var _detalle_pago = _interopRequireDefault(require("./routes/detalle_pago.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])();
/* Import Routes*/

/* Middleware */
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
/* Routes */

app.use('/api/transferencia-interna', _transferencia_interna["default"]);
app.use('/api/sede', _sede["default"]);
app.use('/api/familia-concepto', _familia_concepto["default"]);
app.use('/api/tramite-tupa', _tramite_tupa["default"]);
app.use('/api/nivel-clasificador', _nivel_clasificador["default"]);
app.use('/api/clasificador', _clasificador["default"]);
app.use('/api/concepto-pago', _concepto_pago["default"]);
app.use('/api/descripcion-concepto', _descripcion_concepto["default"]);
app.use('/api/devolucion', _devolucion["default"]);
app.use('/api/tipo-ingreso', _tipo_ingreso["default"]);
app.use('/api/recibo-ingreso', _recibo_ingreso["default"]);
app.use('/api/detalle-recibo-ingreso', _detalle_recibo_ingreso["default"]);
app.use('/api/persona', _persona["default"]);
app.use('/api/sugerencia', _sugerencia["default"]);
app.use('/api/rol', _rol["default"]);
app.use('/api/penalidad', _penalidad["default"]);
app.use('/api/usuario', _usuario["default"]);
app.use('/api/pago', _pago["default"]);
app.use('/api/detalle-pago', _detalle_pago["default"]);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
var _default = app;
exports["default"] = _default;