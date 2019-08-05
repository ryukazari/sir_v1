"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarTransferenciaInterna = listarTransferenciaInterna;
exports.listarTransferenciaInternaById = listarTransferenciaInternaById;
exports.crearTransferenciaInterna = crearTransferenciaInterna;
exports.eliminarTransferenciaInterna = eliminarTransferenciaInterna;
exports.editarTransferenciaInterna = editarTransferenciaInterna;
exports.listarTransferenciaSalienteById = listarTransferenciaSalienteById;
exports.listarTransferenciaEntranteById = listarTransferenciaEntranteById;

var _transferencia_interna = _interopRequireDefault(require("../models/transferencia_interna"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarTransferenciaInterna(_x, _x2) {
  return _listarTransferenciaInterna.apply(this, arguments);
}

function _listarTransferenciaInterna() {
  _listarTransferenciaInterna = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var transferencias;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _transferencia_interna["default"].findAll();

          case 3:
            transferencias = _context.sent;
            res.json({
              data: transferencias
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error en el servidor 505",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarTransferenciaInterna.apply(this, arguments);
}

function listarTransferenciaInternaById(_x3, _x4) {
  return _listarTransferenciaInternaById.apply(this, arguments);
}

function _listarTransferenciaInternaById() {
  _listarTransferenciaInternaById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, transferencia;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _transferencia_interna["default"].findOne({
              where: {
                id_transferencia_interna: id
              }
            });

          case 4:
            transferencia = _context2.sent;
            res.json({
              data: transferencia
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              "message": "Error en el servidor, no se pudieron obtener los datos",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarTransferenciaInternaById.apply(this, arguments);
}

function crearTransferenciaInterna(_x5, _x6) {
  return _crearTransferenciaInterna.apply(this, arguments);
}

function _crearTransferenciaInterna() {
  _crearTransferenciaInterna = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, anio_transferencia_interna, id_sede_origen, id_sede_destino, mes_transferencia_interna, fecha_transferencia_interna, expediente_transferencia_interna, desc_transferencia_interna, monto_transferencia_interna, newTransferenciaInterna;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, anio_transferencia_interna = _req$body.anio_transferencia_interna, id_sede_origen = _req$body.id_sede_origen, id_sede_destino = _req$body.id_sede_destino, mes_transferencia_interna = _req$body.mes_transferencia_interna, fecha_transferencia_interna = _req$body.fecha_transferencia_interna, expediente_transferencia_interna = _req$body.expediente_transferencia_interna, desc_transferencia_interna = _req$body.desc_transferencia_interna, monto_transferencia_interna = _req$body.monto_transferencia_interna;
            _context3.prev = 1;
            _context3.next = 4;
            return _transferencia_interna["default"].create({
              anio_transferencia_interna: anio_transferencia_interna,
              id_sede_origen: id_sede_origen,
              id_sede_destino: id_sede_destino,
              mes_transferencia_interna: mes_transferencia_interna,
              fecha_transferencia_interna: fecha_transferencia_interna,
              expediente_transferencia_interna: expediente_transferencia_interna,
              desc_transferencia_interna: desc_transferencia_interna,
              monto_transferencia_interna: monto_transferencia_interna
            });

          case 4:
            newTransferenciaInterna = _context3.sent;

            if (!newTransferenciaInterna) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              "message": "se creó la transferencia interna",
              data: newTransferenciaInterna
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              "message": "Error en el servidor 505",
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _crearTransferenciaInterna.apply(this, arguments);
}

function eliminarTransferenciaInterna(_x7, _x8) {
  return _eliminarTransferenciaInterna.apply(this, arguments);
}

function _eliminarTransferenciaInterna() {
  _eliminarTransferenciaInterna = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _transferencia_interna["default"].destroy({
              where: {
                id_transferencia_interna: id
              }
            });

          case 4:
            deleteCount = _context4.sent;
            res.json({
              message: 'Se eliminaron ' + deleteCount + ' fila(s) de la tabla transferencia_interna',
              count: deleteCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              "message": "no se pudo eliminar el registro, error en el servidor",
              data: {}
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _eliminarTransferenciaInterna.apply(this, arguments);
}

function editarTransferenciaInterna(_x9, _x10) {
  return _editarTransferenciaInterna.apply(this, arguments);
}

function _editarTransferenciaInterna() {
  _editarTransferenciaInterna = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, anio_transferencia_interna, id_sede_origen, id_sede_destino, mes_transferencia_interna, fecha_transferencia_interna, expediente_transferencia_interna, desc_transferencia_interna, monto_transferencia_interna, transferencias;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, anio_transferencia_interna = _req$body2.anio_transferencia_interna, id_sede_origen = _req$body2.id_sede_origen, id_sede_destino = _req$body2.id_sede_destino, mes_transferencia_interna = _req$body2.mes_transferencia_interna, fecha_transferencia_interna = _req$body2.fecha_transferencia_interna, expediente_transferencia_interna = _req$body2.expediente_transferencia_interna, desc_transferencia_interna = _req$body2.desc_transferencia_interna, monto_transferencia_interna = _req$body2.monto_transferencia_interna;
            _context6.prev = 2;
            _context6.next = 5;
            return _transferencia_interna["default"].findAll({
              attributes: ['id_transferencia_interna', 'anio_transferencia_interna', 'id_sede_origen', 'id_sede_destino', 'mes_transferencia_interna', 'fecha_transferencia_interna', 'expediente_transferencia_interna', 'desc_transferencia_interna', 'monto_transferencia_interna'],
              where: {
                id_transferencia_interna: id
              }
            });

          case 5:
            transferencias = _context6.sent;

            if (transferencias.length > 0) {
              transferencias.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(transferencia_interna) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return transferencia_interna.update({
                            anio_transferencia_interna: anio_transferencia_interna,
                            id_sede_origen: id_sede_origen,
                            id_sede_destino: id_sede_destino,
                            mes_transferencia_interna: mes_transferencia_interna,
                            fecha_transferencia_interna: fecha_transferencia_interna,
                            expediente_transferencia_interna: expediente_transferencia_interna,
                            desc_transferencia_interna: desc_transferencia_interna,
                            monto_transferencia_interna: monto_transferencia_interna
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x15) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'transferencia-interna actualizada satisfactoriamente',
              data: transferencias
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              "message": "Error en el servidor, no se pudo actualizar el registro",
              data: {}
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _editarTransferenciaInterna.apply(this, arguments);
}

function listarTransferenciaSalienteById(_x11, _x12) {
  return _listarTransferenciaSalienteById.apply(this, arguments);
}

function _listarTransferenciaSalienteById() {
  _listarTransferenciaSalienteById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var id_sede_origen, transferencias;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_sede_origen = req.params.id_sede_origen;
            _context7.prev = 1;
            _context7.next = 4;
            return _transferencia_interna["default"].findAll({
              where: {
                id_sede_origen: id_sede_origen
              }
            });

          case 4:
            transferencias = _context7.sent;

            if (!(transferencias.length <= 0)) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", res.status(400).json({
              message: "No existen transferencias salientes para la sede con id: " + id_sede_origen,
              data: {}
            }));

          case 9:
            return _context7.abrupt("return", res.status(200).json({
              data: transferencias
            }));

          case 10:
            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            res.status(500).json({
              message: "error al obtener los registros de las trasnferencias salientes",
              data: {}
            });

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 12]]);
  }));
  return _listarTransferenciaSalienteById.apply(this, arguments);
}

function listarTransferenciaEntranteById(_x13, _x14) {
  return _listarTransferenciaEntranteById.apply(this, arguments);
}

function _listarTransferenciaEntranteById() {
  _listarTransferenciaEntranteById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var id_sede_destino, transferencias;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_sede_destino = req.params.id_sede_destino;
            _context8.prev = 1;
            _context8.next = 4;
            return _transferencia_interna["default"].findAll({
              where: {
                id_sede_destino: id_sede_destino
              }
            });

          case 4:
            transferencias = _context8.sent;

            if (!(transferencias.length <= 0)) {
              _context8.next = 9;
              break;
            }

            return _context8.abrupt("return", res.status(400).json({
              message: "No existen transferencias entrantes para la sede con id: " + id_sede_destino,
              data: {}
            }));

          case 9:
            return _context8.abrupt("return", res.status(200).json({
              data: transferencias
            }));

          case 10:
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            res.status(500).json({
              message: "error al obtener los registros de las trasnferencias entrantes",
              data: {}
            });

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 12]]);
  }));
  return _listarTransferenciaEntranteById.apply(this, arguments);
}