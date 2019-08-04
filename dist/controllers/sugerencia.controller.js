"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearSugerencia = crearSugerencia;
exports.listarSugerencia = listarSugerencia;
exports.listarSugerenciaById = listarSugerenciaById;
exports.editarSugerencia = editarSugerencia;

var _sugerencia = _interopRequireDefault(require("../models/sugerencia.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function crearSugerencia(_x, _x2) {
  return _crearSugerencia.apply(this, arguments);
}

function _crearSugerencia() {
  _crearSugerencia = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, texto_sugerencia, id_usuario, sug;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, texto_sugerencia = _req$body.texto_sugerencia, id_usuario = _req$body.id_usuario;
            _context.prev = 1;
            _context.next = 4;
            return _sugerencia["default"].create({
              texto_sugerencia: texto_sugerencia,
              id_usuario: id_usuario
            });

          case 4:
            sug = _context.sent;

            if (!sug) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "El Sugerencia se creó satisfactoriamente",
              data: sug
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al crear la Sugerencia",
              data: {}
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _crearSugerencia.apply(this, arguments);
}

function listarSugerencia(_x3, _x4) {
  return _listarSugerencia.apply(this, arguments);
}

function _listarSugerencia() {
  _listarSugerencia = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var sugerencias;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _sugerencia["default"].findAll();

          case 3:
            sugerencias = _context2.sent;
            res.json({
              data: sugerencias
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              "message": "Error al listar las Sugerencias",
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _listarSugerencia.apply(this, arguments);
}

function listarSugerenciaById(_x5, _x6) {
  return _listarSugerenciaById.apply(this, arguments);
}

function _listarSugerenciaById() {
  _listarSugerenciaById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id_sugerencia, sug;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_sugerencia = req.params.id_sugerencia;
            _context3.prev = 1;
            _context3.next = 4;
            return _sugerencia["default"].findByPk(id_sugerencia);

          case 4:
            sug = _context3.sent;
            res.json({
              data: sug
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "Error al obtener el registro de la sugerencia",
              data: {}
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _listarSugerenciaById.apply(this, arguments);
}

function editarSugerencia(_x7, _x8) {
  return _editarSugerencia.apply(this, arguments);
}

function _editarSugerencia() {
  _editarSugerencia = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_sugerencia, _req$body2, texto_sugerencia, id_usuario, sugerenciaes;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_sugerencia = req.params.id_sugerencia;
            _req$body2 = req.body, texto_sugerencia = _req$body2.texto_sugerencia, id_usuario = _req$body2.id_usuario;
            _context5.prev = 2;
            _context5.next = 5;
            return _sugerencia["default"].findAll({
              where: {
                id_sugerencia: id_sugerencia
              }
            });

          case 5:
            sugerenciaes = _context5.sent;

            if (sugerenciaes.length > 0) {
              sugerenciaes.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(sugerencia) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return sugerencia.update({
                            texto_sugerencia: texto_sugerencia,
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

            return _context5.abrupt("return", res.json({
              message: "Sugerencia modificado exitosamente",
              data: sugerenciaes
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Error 5**, no se puedo editar el sugerencia",
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarSugerencia.apply(this, arguments);
}