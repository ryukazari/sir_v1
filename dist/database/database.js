"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('kddhmgyb', 'kddhmgyb', 'tY7uNo1zFoKmhigHQ4NLB-H_VHWIFPyN', {
  host: 'motty.db.elephantsql.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idel: 10000
  },
  logging: false
});
exports.sequelize = sequelize;