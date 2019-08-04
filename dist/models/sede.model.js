"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sede = _database.sequelize.define('sede', {
  id_sede: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_sede: {
    type: _sequelize["default"].STRING
  },
  nombre_sede: {
    type: _sequelize["default"].STRING
  },
  desc_sede: {
    type: _sequelize["default"].STRING
  },
  id_padre_sede: {
    type: _sequelize["default"].STRING
  },
  codigo_inicial: {
    type: _sequelize["default"].STRING
  },
  presupuesto_sede: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  ejecutado_sede: {
    type: _sequelize["default"].DECIMAL(15, 2)
  }
}, {
  timestamps: false,
  tableName: "sede"
});

var _default = sede;
exports["default"] = _default;