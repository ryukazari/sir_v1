"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarConceptoPago = listarConceptoPago;
exports.listarConceptoPagoById = listarConceptoPagoById;
exports.crearConceptoPago = crearConceptoPago;
exports.editarConceptoPago = editarConceptoPago;

var _concepto_pago = _interopRequireDefault(require("../models/concepto_pago.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarConceptoPago(_x, _x2) {
  return _listarConceptoPago.apply(this, arguments);
}

function _listarConceptoPago() {
  _listarConceptoPago = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var conceptos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _concepto_pago["default"].findAll();

          case 3:
            conceptos = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              data: conceptos
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error al obtener los conceptos de pago",
              data: {}
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarConceptoPago.apply(this, arguments);
}

function listarConceptoPagoById(_x3, _x4) {
  return _listarConceptoPagoById.apply(this, arguments);
}

function _listarConceptoPagoById() {
  _listarConceptoPagoById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_concepto_pago, concepto;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_concepto_pago = req.params.id_concepto_pago;
            _context2.prev = 1;
            _context2.next = 4;
            return _concepto_pago["default"].findByPk(id_concepto_pago);

          case 4:
            concepto = _context2.sent;

            if (!concepto) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              data: concepto
            }));

          case 9:
            return _context2.abrupt("return", res.status(404).json({
              message: "No existe concepto de pago con el ID: " + id_concepto_pago,
              data: {}
            }));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "error al obtener el concepto de pago",
              data: {}
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return _listarConceptoPagoById.apply(this, arguments);
}

function crearConceptoPago(_x5, _x6) {
  return _crearConceptoPago.apply(this, arguments);
}

function _crearConceptoPago() {
  _crearConceptoPago = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, codigo_final, desc_concepto_pago, id_sede, id_clasificador, id_familia_concepto, monto, concepto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, codigo_final = _req$body.codigo_final, desc_concepto_pago = _req$body.desc_concepto_pago, id_sede = _req$body.id_sede, id_clasificador = _req$body.id_clasificador, id_familia_concepto = _req$body.id_familia_concepto, monto = _req$body.monto;
            _context3.prev = 1;
            _context3.next = 4;
            return _concepto_pago["default"].create({
              codigo_final: codigo_final,
              desc_concepto_pago: desc_concepto_pago,
              id_sede: id_sede,
              id_clasificador: id_clasificador,
              id_familia_concepto: id_familia_concepto,
              monto: monto
            });

          case 4:
            concepto = _context3.sent;

            if (!concepto) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(200).json({
              message: "El concepto de pago se creó exitosamente",
              data: concepto
            }));

          case 7:
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "Error al crear concepto de pago",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _crearConceptoPago.apply(this, arguments);
}

function editarConceptoPago(_x7, _x8) {
  return _editarConceptoPago.apply(this, arguments);
}

function _editarConceptoPago() {
  _editarConceptoPago = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_concepto_pago, _req$body2, codigo_final, desc_concepto_pago, id_sede, id_clasificador, id_familia_concepto, monto, concepto;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_concepto_pago = req.params.id_concepto_pago;
            _req$body2 = req.body, codigo_final = _req$body2.codigo_final, desc_concepto_pago = _req$body2.desc_concepto_pago, id_sede = _req$body2.id_sede, id_clasificador = _req$body2.id_clasificador, id_familia_concepto = _req$body2.id_familia_concepto, monto = _req$body2.monto;
            _context5.prev = 2;
            _context5.next = 5;
            return _concepto_pago["default"].findAll({
              attributes: ['id_concepto_pago', 'codigo_final', 'desc_concepto_pago', 'id_sede', 'id_clasificador', 'id_familia_concepto', 'monto'],
              where: {
                id_concepto_pago: id_concepto_pago
              }
            });

          case 5:
            concepto = _context5.sent;

            if (concepto.length > 0) {
              concepto.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(concepto_pago) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          concepto_pago.update({
                            codigo_final: codigo_final,
                            desc_concepto_pago: desc_concepto_pago,
                            id_sede: id_sede,
                            id_clasificador: id_clasificador,
                            id_familia_concepto: id_familia_concepto,
                            monto: monto
                          });

                        case 1:
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

            return _context5.abrupt("return", res.json({
              message: "se modificó el concepto de pago",
              data: concepto
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "error al editar el concepto de pago",
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarConceptoPago.apply(this, arguments);
}