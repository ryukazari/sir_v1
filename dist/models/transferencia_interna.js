"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import transferencia_externa 
var transferencia_interna = _database.sequelize.define('transferencia_interna', {
  id_transferencia_interna: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  anio_transferencia_interna: {
    type: _sequelize["default"].STRING
  },
  id_sede_origen: {
    type: _sequelize["default"].INTEGER
  },
  id_sede_destino: {
    type: _sequelize["default"].INTEGER
  },
  mes_transferencia_interna: {
    type: _sequelize["default"].STRING
  },
  fecha_transferencia_interna: {
    type: _sequelize["default"].DATE
  },
  desc_transferencia_interna: {
    type: _sequelize["default"].STRING
  },
  expediente_transferencia_interna: {
    type: _sequelize["default"].STRING
  },
  monto_transferencia_interna: {
    type: _sequelize["default"].DECIMAL(15, 2)
  }
}, {
  timestamps: false,
  tableName: "transferencia_interna"
}); //transferencia_interna.hasMany(transferencia_externa, { foreignKey: 'id_transferencia_externa', sourceKey: 'Id' })
//transferencia_externa.belongsTo(transferencia_interna, { foreignKey: 'id_transferencia_interna', sourceKey: 'Id' })


var _default = transferencia_interna;
exports["default"] = _default;