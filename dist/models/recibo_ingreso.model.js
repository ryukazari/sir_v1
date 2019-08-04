"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var recibo_ingreso = _database.sequelize.define('recibo_ingreso', {
  id_recibo_ingreso: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  num_impreso_recibo: {
    type: _sequelize["default"].STRING
  },
  anio_recibo: {
    type: _sequelize["default"].STRING
  },
  id_sede: {
    type: _sequelize["default"].INTEGER
  },
  mes_recibo: {
    type: _sequelize["default"].STRING
  },
  fecha_recibo: {
    type: _sequelize["default"].DATE
  },
  num_referencia_recibo: {
    type: _sequelize["default"].STRING
  },
  tipo_moneda_recibo: {
    type: _sequelize["default"].STRING
  },
  monto_recibo: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  id_usuario: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "recibo_ingreso"
});

var _default = recibo_ingreso;
exports["default"] = _default;