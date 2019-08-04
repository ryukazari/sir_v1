"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _clasificador = _interopRequireDefault(require("./clasificador.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nivel_clasificador = _database.sequelize.define('nivel_clasificador', {
  id_nivel_clasificador: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomb_nivel_clasif: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "nivel_clasificador"
});

nivel_clasificador.hasMany(_clasificador["default"], {
  foreignKey: 'id_nivel'
});

_clasificador["default"].belongsTo(nivel_clasificador, {
  foreignKey: 'id_nivel'
});

var _default = nivel_clasificador;
exports["default"] = _default;