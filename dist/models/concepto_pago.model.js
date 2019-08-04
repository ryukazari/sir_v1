"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _descripcion_concepto = _interopRequireDefault(require("./descripcion_concepto.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var concepto_pago = _database.sequelize.define('concepto_pago', {
  id_concepto_pago: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_final: {
    type: _sequelize["default"].STRING,
    required: true
  },
  desc_concepto_pago: {
    type: _sequelize["default"].STRING
  },
  id_sede: {
    type: _sequelize["default"].INTEGER
  },
  id_clasificador: {
    type: _sequelize["default"].INTEGER
  },
  id_familia_concepto: {
    type: _sequelize["default"].INTEGER
  },
  monto: {
    type: _sequelize["default"].DECIMAL(15, 2)
  }
}, {
  timestamps: false,
  tableName: "concepto_pago"
});

concepto_pago.hasMany(_descripcion_concepto["default"], {
  foreignKey: 'id_concepto_pago'
});

_descripcion_concepto["default"].belongsTo(concepto_pago, {
  foreignKey: 'id_concepto_pago'
});

var _default = concepto_pago;
exports["default"] = _default;