"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _concepto_pago = _interopRequireDefault(require("./concepto_pago.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var familia_concepto = _database.sequelize.define('familia_concepto', {
  id_familia_concepto: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_familia_concepto: {
    type: _sequelize["default"].STRING
  },
  desc_familia_concepto: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "familia_concepto"
});

familia_concepto.hasMany(_concepto_pago["default"], {
  foreignKey: 'id_familia_concepto'
});

_concepto_pago["default"].belongsTo(familia_concepto, {
  foreignKey: 'id_familia_concepto'
});

var _default = familia_concepto;
exports["default"] = _default;