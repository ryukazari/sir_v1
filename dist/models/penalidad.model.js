"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var penalidad = _database.sequelize.define('penalidad', {
  id_penalidad: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_penalidad: {
    type: _sequelize["default"].STRING
  },
  descripcion: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "penalidad"
});

var _default = penalidad;
exports["default"] = _default;