"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var devolucion = _database.sequelize.define('devolucion', {
  id_devolucion: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_ingreso: {
    type: _sequelize["default"].INTEGER
  },
  id_tipo_ingreso: {
    type: _sequelize["default"].INTEGER
  },
  fecha_devolucion: {
    type: _sequelize["default"].DATE
  },
  motivo_devolucion: {
    type: _sequelize["default"].STRING
  },
  expediente_devolucion: {
    type: _sequelize["default"].STRING
  },
  id_usuario_realiz: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "devolucion"
});

var _default = devolucion;
exports["default"] = _default;