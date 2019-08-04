"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _devolucion = _interopRequireDefault(require("../models/devolucion.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tipo_ingreso = _database.sequelize.define('tipo_ingreso', {
  id_tipo_ingreso: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_tipo_ingreso: {
    type: _sequelize["default"].STRING
  },
  descripcion_tipo_ingreso: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "tipo_ingreso"
});

tipo_ingreso.hasMany(_devolucion["default"], {
  foreignKey: 'id_tipo_ingreso'
});

_devolucion["default"].belongsTo(tipo_ingreso, {
  foreignKey: 'id_tipo_ingreso'
});

var _default = tipo_ingreso;
exports["default"] = _default;