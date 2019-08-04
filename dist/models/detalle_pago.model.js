"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var detalle_pago = _database.sequelize.define('detalle_pago', {
  id_detalle_pago: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_pago: {
    type: _sequelize["default"].INTEGER
  },
  id_concepto_pago: {
    type: _sequelize["default"].INTEGER
  },
  monto: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  cantidad: {
    type: _sequelize["default"].INTEGER
  },
  estado: {
    type: _sequelize["default"].INTEGER
  },
  fecha_maxima: {
    type: _sequelize["default"].DATE
  },
  costo_penalidad: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  id_penalidad: {
    type: _sequelize["default"].INTEGER
  },
  monto_total: {
    type: _sequelize["default"].DECIMAL(15, 2)
  }
}, {
  timestamps: false,
  tableName: "detalle_pago"
});

var _default = detalle_pago;
exports["default"] = _default;