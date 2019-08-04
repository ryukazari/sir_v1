"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _recibo_ingreso = _interopRequireDefault(require("./recibo_ingreso.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var detalle_recibo_ingreso = _database.sequelize.define('detalle_recibo_ingreso', {
  id_detalle_recibo_ingreso: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_recibo_ingreso: {
    type: _sequelize["default"].INTEGER
  },
  anio_recibo: {
    type: _sequelize["default"].STRING
  },
  id_sede: {
    type: _sequelize["default"].INTEGER
  },
  tipo_moneda: {
    type: _sequelize["default"].STRING
  },
  tipo_cambio: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  monto_item: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  monto_final_item: {
    type: _sequelize["default"].DECIMAL(15, 2)
  },
  descripcion: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "detalle_recibo_ingreso"
});

detalle_recibo_ingreso.belongsTo(_recibo_ingreso["default"], {
  foreignKey: 'id_recibo_ingreso'
});

_recibo_ingreso["default"].hasMany(detalle_recibo_ingreso, {
  foreignKey: 'id_recibo_ingreso'
});

var _default = detalle_recibo_ingreso;
exports["default"] = _default;