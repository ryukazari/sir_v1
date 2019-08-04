"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _sequelize$define;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import transferencia_externa 
var transferencia_interna = _database.sequelize.define('transferencia_interna', (_sequelize$define = {
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
  }
}, _defineProperty(_sequelize$define, "desc_transferencia_interna", {
  type: _sequelize["default"].STRING
}), _defineProperty(_sequelize$define, "monto_transferencia_interna", {
  type: _sequelize["default"].DECIMAL(15, 2)
}), _defineProperty(_sequelize$define, "id_detalle_pago", {
  type: _sequelize["default"].INTEGER
}), _sequelize$define), {
  timestamps: false,
  tableName: "transferencia_interna"
}); //transferencia_interna.hasMany(transferencia_externa, { foreignKey: 'id_transferencia_externa', sourceKey: 'Id' })
//transferencia_externa.belongsTo(transferencia_interna, { foreignKey: 'id_transferencia_interna', sourceKey: 'Id' })


var _default = transferencia_interna;
exports["default"] = _default;