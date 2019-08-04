"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sugerencia = _database.sequelize.define('sugerencia', {
  id_sugerencia: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  texto_sugerencia: {
    type: _sequelize["default"].STRING
  },
  id_usuario: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "sugerencia"
});

var _default = sugerencia;
exports["default"] = _default;