"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _descripcion_concepto = _interopRequireDefault(require("./descripcion_concepto.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var desc_concepto_tramite = _database.sequelize.define('desc_concepto_tramite', {
  id_desc_concepto: {
    type: _sequelize["default"].INTEGER
  },
  id_tramite: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  tableName: "desc_concepto_tramite"
});

_descripcion_concepto["default"].hasMany(desc_concepto_tramite, {
  foreignKey: 'id_desc_concepto'
});

desc_concepto_tramite.belongsTo(_descripcion_concepto["default"], {
  foreignKey: 'id_desc_concepto'
});
tramite_tupa.hasMany(desc_concepto_tramite, {
  foreignKey: 'id_tramite'
});
desc_concepto_tramite.belongsTo(tramite_tupa, {
  foreignKey: 'id_tramite'
});
var _default = desc_concepto_tramite;
exports["default"] = _default;