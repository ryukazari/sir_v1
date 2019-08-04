"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pago = _database.sequelize.define('pago', {
  id_pago: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: _sequelize["default"].INTEGER
  },
  fecha_vencimiento: {
    type: _sequelize["default"].DATE
  },
  contrapartida: {
    type: _sequelize["default"].STRING
  },
  referencia_adicional: {
    type: _sequelize["default"].STRING
  },
  moneda_importe: {
    type: _sequelize["default"].STRING
  },
  estado: {
    type: _sequelize["default"].INTEGER
  },
  codigo_pago: {
    type: _sequelize["default"].STRING
  },
  fecha_pago: {
    type: _sequelize["default"].STRING
  },
  hora_pago: {
    type: _sequelize["default"].STRING
  },
  codigo_operacion_banco: {
    type: _sequelize["default"].STRING
  },
  nombre_banco: {
    type: _sequelize["default"].STRING
  },
  canal_banco: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "pago"
});

var _default = pago;
exports["default"] = _default;