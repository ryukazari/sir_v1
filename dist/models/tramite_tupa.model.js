"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tramite_tupa = _database.sequelize.define('tramite_tupa', {
  id_tramite: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_tramite: {
    type: _sequelize["default"].STRING
  },
  desc_tramite: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "tramite_tupa"
});

var _default = tramite_tupa;
exports["default"] = _default;