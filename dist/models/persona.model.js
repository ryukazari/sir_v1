"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persona = _database.sequelize.define('persona', {
  id_persona: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nro_doc_per: {
    type: _sequelize["default"].STRING
  },
  ape_pat_per: {
    type: _sequelize["default"].STRING
  },
  ape_mat_per: {
    type: _sequelize["default"].STRING
  },
  nomb_per: {
    type: _sequelize["default"].STRING
  },
  fech_nac_per: {
    type: _sequelize["default"].DATE
  },
  correo_per: {
    type: _sequelize["default"].STRING
  },
  nro_celular: {
    type: _sequelize["default"].STRING
  },
  nro_telefono: {
    type: _sequelize["default"].STRING
  },
  aud_fech_creac: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false,
  tableName: "persona"
});

var _default = persona;
exports["default"] = _default;