"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarDevolucion = listarDevolucion;
exports.listarDevolucionById = listarDevolucionById;
exports.crearDevolucion = crearDevolucion;
exports.editarDevolucion = editarDevolucion;

var _devolucion = _interopRequireDefault(require("../models/devolucion.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarDevolucion(_x, _x2) {
  return _listarDevolucion.apply(this, arguments);
}

function _listarDevolucion() {
  _listarDevolucion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var devol;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _devolucion["default"].findAll();

          case 3:
            devol = _context.sent;

            if (!(devol <= 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "No hay registros en la tabla Devolucion",
              data: {}
            }));

          case 8:
            return _context.abrupt("return", res.status(200).json({
              data: devol
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener los registros",
              data: {}
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _listarDevolucion.apply(this, arguments);
}

function listarDevolucionById(_x3, _x4) {
  return _listarDevolucionById.apply(this, arguments);
}

function _listarDevolucionById() {
  _listarDevolucionById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_devolucion, devol;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_devolucion = req.params.id_devolucion;
            _context2.prev = 1;
            _context2.next = 4;
            return _devolucion["default"].findByPk(id_devolucion);

          case 4:
            devol = _context2.sent;

            if (devol) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "No existe registro con el id:" + id_devolucion,
              data: {}
            }));

          case 7:
            return _context2.abrupt("return", res.status(200).json({
              data: devol
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "Error al obtener el registro",
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _listarDevolucionById.apply(this, arguments);
}

function crearDevolucion(_x5, _x6) {
  return _crearDevolucion.apply(this, arguments);
}

function _crearDevolucion() {
  _crearDevolucion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, id_ingreso, id_tipo_ingreso, fecha_devolucion, motivo_devolucion, expediente_devolucion, id_usuario_realiz, devol;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, id_ingreso = _req$body.id_ingreso, id_tipo_ingreso = _req$body.id_tipo_ingreso, fecha_devolucion = _req$body.fecha_devolucion, motivo_devolucion = _req$body.motivo_devolucion, expediente_devolucion = _req$body.expediente_devolucion, id_usuario_realiz = _req$body.id_usuario_realiz;
            _context3.prev = 1;
            _context3.next = 4;
            return _devolucion["default"].create({
              id_ingreso: id_ingreso,
              id_tipo_ingreso: id_tipo_ingreso,
              fecha_devolucion: fecha_devolucion,
              motivo_devolucion: motivo_devolucion,
              expediente_devolucion: expediente_devolucion,
              id_usuario_realiz: id_usuario_realiz
            });

          case 4:
            devol = _context3.sent;

            if (devol) {
              res.status(200).json({
                message: "La devolucion se registró correctamente.",
                data: devol
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al registrar devolución",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearDevolucion.apply(this, arguments);
}

function editarDevolucion(_x7, _x8) {
  return _editarDevolucion.apply(this, arguments);
}

function _editarDevolucion() {
  _editarDevolucion = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_devolucion, _req$body2, id_ingreso, id_tipo_ingreso, fecha_devolucion, motivo_devolucion, expediente_devolucion, id_usuario_realiz, devol;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_devolucion = req.params.id_devolucion;
            _req$body2 = req.body, id_ingreso = _req$body2.id_ingreso, id_tipo_ingreso = _req$body2.id_tipo_ingreso, fecha_devolucion = _req$body2.fecha_devolucion, motivo_devolucion = _req$body2.motivo_devolucion, expediente_devolucion = _req$body2.expediente_devolucion, id_usuario_realiz = _req$body2.id_usuario_realiz;
            _context5.prev = 2;
            _context5.next = 5;
            return _devolucion["default"].findAll({
              attributes: ['id_devolucion', 'id_ingreso', 'id_tipo_ingreso', 'fecha_devolucion', 'motivo_devolucion', 'expediente_devolucion', 'id_usuario_realiz'],
              where: {
                id_devolucion: id_devolucion
              }
            });

          case 5:
            devol = _context5.sent;

            if (!(devol.length <= 0)) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", res.json({
              message: "No existen registros con el id: " + id_devolucion
            }));

          case 10:
            devol.forEach(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(devolucion) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return devolucion.update({
                          id_ingreso: id_ingreso,
                          id_tipo_ingreso: id_tipo_ingreso,
                          fecha_devolucion: fecha_devolucion,
                          motivo_devolucion: motivo_devolucion,
                          expediente_devolucion: expediente_devolucion,
                          id_usuario_realiz: id_usuario_realiz
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
            return _context5.abrupt("return", res.status(200).json({
              message: "devolucion modificada exitosamente",
              data: devol
            }));

          case 12:
            _context5.next = 18;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Error al modificar la devolucion",
              data: {}
            });

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 14]]);
  }));
  return _editarDevolucion.apply(this, arguments);
}