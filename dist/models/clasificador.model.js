"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clasificador = _database.sequelize.define('clasificador', {
  id_clasificador: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cod_clasificador: {
    type: _sequelize["default"].STRING
  },
  nomb_clasificador: {
    type: _sequelize["default"].STRING
  },
  activo_clasificador: {
    type: _sequelize["default"].INTEGER
  },
  desc_clasificador: {
    type: _sequelize["default"].STRING
  },
  id_nivel: {
    type: _sequelize["default"].INTEGER //required: true,
    //allowNull: false

  }
}, {
  timestamps: false,
  tableName: "clasificador"
});

var _default = clasificador;
exports["default"] = _default;