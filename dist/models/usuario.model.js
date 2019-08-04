"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usuario = _database.sequelize.define('usuario', {
  id_usuario: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_persona: {
    type: _sequelize["default"].INTEGER
  },
  id_sede: {
    type: _sequelize["default"].INTEGER
  },
  nombre_usuario: {
    type: _sequelize["default"].STRING
  },
  bloqueado: {
    type: _sequelize["default"].INTEGER
  },
  intentos_fallidos_login: {
    type: _sequelize["default"].INTEGER
  },
  password: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "usuario"
});

var _default = usuario;
exports["default"] = _default;