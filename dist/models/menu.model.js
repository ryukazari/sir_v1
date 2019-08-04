"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var menu = _database.sequelize.define('menu', {
  id_menu: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_menu_sup: {
    type: _sequelize["default"].INTEGER
  },
  orden_menu: {
    type: _sequelize["default"].INTEGER
  },
  nivel_menu: {
    type: _sequelize["default"].INTEGER
  },
  propiedades_menu: {
    type: _sequelize["default"].JSONB
  },
  url_menu: {
    type: _sequelize["default"].STRING
  }
}, {
  timestamps: false,
  tableName: "menu"
});

var _default = menu;
exports["default"] = _default;