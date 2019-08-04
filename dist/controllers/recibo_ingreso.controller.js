"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarReciboIngreso = listarReciboIngreso;
exports.listarReciboIngresoById = listarReciboIngresoById;
exports.crearReciboIngreso = crearReciboIngreso;
exports.editarReciboIngreso = editarReciboIngreso;

var _recibo_ingreso = _interopRequireDefault(require("../models/recibo_ingreso.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarReciboIngreso(_x, _x2) {
  return _listarReciboIngreso.apply(this, arguments);
}

function _listarReciboIngreso() {
  _listarReciboIngreso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var recibos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _recibo_ingreso["default"].findAll();

          case 3:
            recibos = _context.sent;
            res.status(200).json({
              data: recibos
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error al obtener los registros de la tabla recibo_ingreso",
              data: {}
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarReciboIngreso.apply(this, arguments);
}

function listarReciboIngresoById(_x3, _x4) {
  return _listarReciboIngresoById.apply(this, arguments);
}

function _listarReciboIngresoById() {
  _listarReciboIngresoById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_recibo_ingreso, recibo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_recibo_ingreso = req.params.id_recibo_ingreso;
            _context2.prev = 1;
            _context2.next = 4;
            return _recibo_ingreso["default"].findByPk(id_recibo_ingreso);

          case 4:
            recibo = _context2.sent;
            res.status(200).json({
              data: recibo
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al obtener el registro de la tabla recibo_ingreso",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarReciboIngresoById.apply(this, arguments);
}

function crearReciboIngreso(_x5, _x6) {
  return _crearReciboIngreso.apply(this, arguments);
}

function _crearReciboIngreso() {
  _crearReciboIngreso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, num_impreso_recibo, anio_recibo, id_sede, mes_recibo, fecha_recibo, num_referencia_recibo, tipo_moneda_recibo, monto_recibo, id_usuario, recibo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, num_impreso_recibo = _req$body.num_impreso_recibo, anio_recibo = _req$body.anio_recibo, id_sede = _req$body.id_sede, mes_recibo = _req$body.mes_recibo, fecha_recibo = _req$body.fecha_recibo, num_referencia_recibo = _req$body.num_referencia_recibo, tipo_moneda_recibo = _req$body.tipo_moneda_recibo, monto_recibo = _req$body.monto_recibo, id_usuario = _req$body.id_usuario;
            _context3.prev = 1;
            _context3.next = 4;
            return _recibo_ingreso["default"].create({
              num_impreso_recibo: num_impreso_recibo,
              anio_recibo: anio_recibo,
              id_sede: id_sede,
              mes_recibo: mes_recibo,
              fecha_recibo: fecha_recibo,
              num_referencia_recibo: num_referencia_recibo,
              tipo_moneda_recibo: tipo_moneda_recibo,
              monto_recibo: monto_recibo,
              id_usuario: id_usuario
            });

          case 4:
            recibo = _context3.sent;

            if (recibo) {
              res.status(200).json({
                message: "El recibo de ingreso se creó de manera exitosa.",
                data: recibo
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al crear recibo de ingreso",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearReciboIngreso.apply(this, arguments);
}

function editarReciboIngreso(_x7, _x8) {
  return _editarReciboIngreso.apply(this, arguments);
}

function _editarReciboIngreso() {
  _editarReciboIngreso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_recibo_ingreso, _req$body2, num_impreso_recibo, anio_recibo, id_sede, mes_recibo, fecha_recibo, num_referencia_recibo, tipo_moneda_recibo, monto_recibo, id_usuario, recibos;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_recibo_ingreso = req.params.id_recibo_ingreso;
            _req$body2 = req.body, num_impreso_recibo = _req$body2.num_impreso_recibo, anio_recibo = _req$body2.anio_recibo, id_sede = _req$body2.id_sede, mes_recibo = _req$body2.mes_recibo, fecha_recibo = _req$body2.fecha_recibo, num_referencia_recibo = _req$body2.num_referencia_recibo, tipo_moneda_recibo = _req$body2.tipo_moneda_recibo, monto_recibo = _req$body2.monto_recibo, id_usuario = _req$body2.id_usuario;
            _context5.prev = 2;
            _context5.next = 5;
            return _recibo_ingreso["default"].findAll({
              attributes: ['id_recibo_ingreso', 'num_impreso_recibo', 'anio_recibo', 'id_sede', 'mes_recibo', 'fecha_recibo', 'num_referencia_recibo', 'tipo_moneda_recibo', 'monto_recibo', 'id_usuario'],
              where: {
                id_recibo_ingreso: id_recibo_ingreso
              }
            });

          case 5:
            recibos = _context5.sent;

            if (recibos.length > 0) {
              recibos.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(recibo_ingreso) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return recibo_ingreso.update({
                            num_impreso_recibo: num_impreso_recibo,
                            anio_recibo: anio_recibo,
                            id_sede: id_sede,
                            mes_recibo: mes_recibo,
                            fecha_recibo: fecha_recibo,
                            num_referencia_recibo: num_referencia_recibo,
                            tipo_moneda_recibo: tipo_moneda_recibo,
                            monto_recibo: monto_recibo,
                            id_usuario: id_usuario
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x9) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            res.status(200).json({
              message: "El recibo de ingreso se modificó exitosamente.",
              data: recibos
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Error al modificar el recibo ingreso",
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarReciboIngreso.apply(this, arguments);
}