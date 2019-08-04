"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarPago = listarPago;
exports.listarPagoById = listarPagoById;
exports.crearPago = crearPago;
exports.editarPago = editarPago;

var _pago = _interopRequireDefault(require("../models/pago.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarPago(_x, _x2) {
  return _listarPago.apply(this, arguments);
}

function _listarPago() {
  _listarPago = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var p;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _pago["default"].findAll();

          case 3:
            p = _context.sent;
            res.status(200).json({
              data: p
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener los registros de la tabla pago",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarPago.apply(this, arguments);
}

function listarPagoById(_x3, _x4) {
  return _listarPagoById.apply(this, arguments);
}

function _listarPagoById() {
  _listarPagoById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_pago, p;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_pago = req.params.id_pago;
            _context2.prev = 1;
            _context2.next = 4;
            return _pago["default"].findByPk(id_pago);

          case 4:
            p = _context2.sent;
            res.status(200).json({
              data: p
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al obtener el registro de la tabla pago",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarPagoById.apply(this, arguments);
}

function crearPago(_x5, _x6) {
  return _crearPago.apply(this, arguments);
}

function _crearPago() {
  _crearPago = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, id_usuario, fecha_vencimiento, contrapartida, referencia_adicional, moneda_importe, estado, codigo_pago, fecha_pago, hora_pago, codigo_operacion_banco, nombre_banco, canal_banco, p;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, id_usuario = _req$body.id_usuario, fecha_vencimiento = _req$body.fecha_vencimiento, contrapartida = _req$body.contrapartida, referencia_adicional = _req$body.referencia_adicional, moneda_importe = _req$body.moneda_importe, estado = _req$body.estado, codigo_pago = _req$body.codigo_pago, fecha_pago = _req$body.fecha_pago, hora_pago = _req$body.hora_pago, codigo_operacion_banco = _req$body.codigo_operacion_banco, nombre_banco = _req$body.nombre_banco, canal_banco = _req$body.canal_banco;
            _context3.prev = 1;
            _context3.next = 4;
            return _pago["default"].create({
              id_usuario: id_usuario,
              fecha_vencimiento: fecha_vencimiento,
              contrapartida: contrapartida,
              referencia_adicional: referencia_adicional,
              moneda_importe: moneda_importe,
              estado: estado,
              codigo_pago: codigo_pago,
              fecha_pago: fecha_pago,
              hora_pago: hora_pago,
              codigo_operacion_banco: codigo_operacion_banco,
              nombre_banco: nombre_banco,
              canal_banco: canal_banco
            });

          case 4:
            p = _context3.sent;

            if (p) {
              res.status(200).json({
                message: "El pago se creó de manera exitosa.",
                data: p
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al crear Pago",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearPago.apply(this, arguments);
}

function editarPago(_x7, _x8) {
  return _editarPago.apply(this, arguments);
}

function _editarPago() {
  _editarPago = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_pago, _req$body2, id_usuario, fecha_vencimiento, contrapartida, referencia_adicional, moneda_importe, estado, codigo_pago, fecha_pago, hora_pago, codigo_operacion_banco, nombre_banco, canal_banco, p;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_pago = req.params.id_pago;
            _req$body2 = req.body, id_usuario = _req$body2.id_usuario, fecha_vencimiento = _req$body2.fecha_vencimiento, contrapartida = _req$body2.contrapartida, referencia_adicional = _req$body2.referencia_adicional, moneda_importe = _req$body2.moneda_importe, estado = _req$body2.estado, codigo_pago = _req$body2.codigo_pago, fecha_pago = _req$body2.fecha_pago, hora_pago = _req$body2.hora_pago, codigo_operacion_banco = _req$body2.codigo_operacion_banco, nombre_banco = _req$body2.nombre_banco, canal_banco = _req$body2.canal_banco;
            _context5.prev = 2;
            _context5.next = 5;
            return _pago["default"].findAll({
              where: {
                id_pago: id_pago
              }
            });

          case 5:
            p = _context5.sent;

            if (p.length > 0) {
              p.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(pago) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return pago.update({
                            id_usuario: id_usuario,
                            fecha_vencimiento: fecha_vencimiento,
                            contrapartida: contrapartida,
                            referencia_adicional: referencia_adicional,
                            moneda_importe: moneda_importe,
                            estado: estado,
                            codigo_pago: codigo_pago,
                            fecha_pago: fecha_pago,
                            hora_pago: hora_pago,
                            codigo_operacion_banco: codigo_operacion_banco,
                            nombre_banco: nombre_banco,
                            canal_banco: canal_banco
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

            return _context5.abrupt("return", res.status(200).json({
              message: "El pago se modificó exitosamente",
              data: p
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Error al modificar el Pago",
              data: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarPago.apply(this, arguments);
}