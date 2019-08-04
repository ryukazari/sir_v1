"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarNivelClasificador = listarNivelClasificador;
exports.crearNivelClasificador = crearNivelClasificador;
exports.editarNivelClasificador = editarNivelClasificador;

var _nivel_clasificador = _interopRequireDefault(require("../models/nivel_clasificador.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarNivelClasificador(_x, _x2) {
  return _listarNivelClasificador.apply(this, arguments);
}

function _listarNivelClasificador() {
  _listarNivelClasificador = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var niveles;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _nivel_clasificador["default"].findAll();

          case 3:
            niveles = _context.sent;
            res.status(200).json({
              data: niveles
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error al obtener la lista de niveles de los clasificadores",
              data: {}
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarNivelClasificador.apply(this, arguments);
}

function crearNivelClasificador(_x3, _x4) {
  return _crearNivelClasificador.apply(this, arguments);
}

function _crearNivelClasificador() {
  _crearNivelClasificador = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var nomb_nivel_clasif, nivel;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nomb_nivel_clasif = req.body.nomb_nivel_clasif;
            _context2.prev = 1;
            _context2.next = 4;
            return _nivel_clasificador["default"].create({
              nomb_nivel_clasif: nomb_nivel_clasif
            });

          case 4:
            nivel = _context2.sent;

            if (!nivel) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              "message": "se creó el nivel del clasificador.",
              data: nivel
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "error al crear el nivel de clasificador"
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _crearNivelClasificador.apply(this, arguments);
}

function editarNivelClasificador(_x5, _x6) {
  return _editarNivelClasificador.apply(this, arguments);
}

function _editarNivelClasificador() {
  _editarNivelClasificador = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id_nivel_clasificador, nomb_nivel_clasif, nivel;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_nivel_clasificador = req.params.id_nivel_clasificador;
            nomb_nivel_clasif = req.body.nomb_nivel_clasif;
            _context4.prev = 2;
            _context4.next = 5;
            return _nivel_clasificador["default"].findAll({
              attributes: ['id_nivel_clasificador', 'nomb_nivel_clasif'],
              where: {
                id_nivel_clasificador: id_nivel_clasificador
              }
            });

          case 5:
            nivel = _context4.sent;

            if (nivel.length > 0) {
              nivel.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3(nivel_clasificador) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return nivel_clasificador.update({
                            nomb_nivel_clasif: nomb_nivel_clasif
                          });

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x7) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context4.abrupt("return", res.status(200).json({
              message: "se actualizó correctamente el nivel del clasificador",
              data: nivel
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            res.status(500).json({
              message: "no se pudo actualizar el nivel del clasificador",
              data: {}
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 10]]);
  }));
  return _editarNivelClasificador.apply(this, arguments);
}