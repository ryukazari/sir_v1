"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var descripcion_concepto = _database.sequelize.define('descripcion_concepto', {
  id_desc_concepto: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: _sequelize["default"].STRING
  },
  monto: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  id_concepto_pago: {
    type: _sequelize["default"].INTEGER
  },
  estado: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "descripcion_concepto"
});

var _default = descripcion_concepto;
exports["default"] = _default;