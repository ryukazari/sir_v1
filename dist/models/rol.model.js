"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rol = _database.sequelize.define('rol', {
  id_rol: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_rol: {
    type: _sequelize["default"].STRING
  },
  descripcion_rol: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "rol"
});

var _default = rol;
exports["default"] = _default;