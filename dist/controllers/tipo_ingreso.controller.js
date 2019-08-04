"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarTipoIngreso = listarTipoIngreso;
exports.listarTipoIngresoById = listarTipoIngresoById;
exports.crearTipoIngreso = crearTipoIngreso;
exports.editarTipoIngreso = editarTipoIngreso;

var _tipo_ingreso = _interopRequireDefault(require("../models/tipo_ingreso.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarTipoIngreso(_x, _x2) {
  return _listarTipoIngreso.apply(this, arguments);
}

function _listarTipoIngreso() {
  _listarTipoIngreso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var tipo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _tipo_ingreso["default"].findAll();

          case 3:
            tipo = _context.sent;

            if (!(tipo.length <= 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "No hay registros en la tabla tipo_ingreso.",
              data: {}
            }));

          case 6:
            return _context.abrupt("return", res.status(200).json({
              data: tipo
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error al obtener registros de la tabla tipo_ingreso",
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _listarTipoIngreso.apply(this, arguments);
}

function listarTipoIngresoById(_x3, _x4) {
  return _listarTipoIngresoById.apply(this, arguments);
}

function _listarTipoIngresoById() {
  _listarTipoIngresoById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_tipo_ingreso, tipo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_tipo_ingreso = req.params.id_tipo_ingreso;
            _context2.prev = 1;
            _context2.next = 4;
            return _tipo_ingreso["default"].findByPk(id_tipo_ingreso);

          case 4:
            tipo = _context2.sent;

            if (!tipo) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              data: tipo
            }));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "Error al obtener el registro de la tabla tipo_ingreso",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _listarTipoIngresoById.apply(this, arguments);
}

function crearTipoIngreso(_x5, _x6) {
  return _crearTipoIngreso.apply(this, arguments);
}

function _crearTipoIngreso() {
  _crearTipoIngreso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre_tipo_ingreso, descripcion_tipo_ingreso, tipo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre_tipo_ingreso = _req$body.nombre_tipo_ingreso, descripcion_tipo_ingreso = _req$body.descripcion_tipo_ingreso;
            _context3.prev = 1;
            _context3.next = 4;
            return _tipo_ingreso["default"].create({
              nombre_tipo_ingreso: nombre_tipo_ingreso,
              descripcion_tipo_ingreso: descripcion_tipo_ingreso
            });

          case 4:
            tipo = _context3.sent;

            if (!tipo) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(200).json({
              message: "El tipo de ingreso se creó exitosamente.",
              data: tipo
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al crear el nuevo registro",
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _crearTipoIngreso.apply(this, arguments);
}

function editarTipoIngreso(_x7, _x8) {
  return _editarTipoIngreso.apply(this, arguments);
}

function _editarTipoIngreso() {
  _editarTipoIngreso = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_tipo_ingreso, _req$body2, nombre_tipo_ingreso, descripcion_tipo_ingreso, tipo;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_tipo_ingreso = req.params.id_tipo_ingreso;
            _req$body2 = req.body, nombre_tipo_ingreso = _req$body2.nombre_tipo_ingreso, descripcion_tipo_ingreso = _req$body2.descripcion_tipo_ingreso;
            _context5.prev = 2;
            _context5.next = 5;
            return _tipo_ingreso["default"].findAll({
              attributes: ['id_tipo_ingreso', 'nombre_tipo_ingreso', 'descripcion_tipo_ingreso'],
              where: {
                id_tipo_ingreso: id_tipo_ingreso
              }
            });

          case 5:
            tipo = _context5.sent;

            if (tipo.length > 0) {
              tipo.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(tipo_ingreso) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return tipo_ingreso.update({
                            nombre_tipo_ingreso: nombre_tipo_ingreso,
                            descripcion_tipo_ingreso: descripcion_tipo_ingreso
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
              message: "El tipo ingreso se modificó exitosamente.",
              data: tipo
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Error al editar el registro",
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarTipoIngreso.apply(this, arguments);
}