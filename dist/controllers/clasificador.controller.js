"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearClasificador = crearClasificador;
exports.listarClasificador = listarClasificador;
exports.listarClasificadorById = listarClasificadorById;
exports.editarClasificador = editarClasificador;

var _clasificador = _interopRequireDefault(require("../models/clasificador.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function crearClasificador(_x, _x2) {
  return _crearClasificador.apply(this, arguments);
}

function _crearClasificador() {
  _crearClasificador = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, cod_clasificador, nomb_clasificador, activo_clasificador, desc_clasificador, id_nivel, clasif;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, cod_clasificador = _req$body.cod_clasificador, nomb_clasificador = _req$body.nomb_clasificador, activo_clasificador = _req$body.activo_clasificador, desc_clasificador = _req$body.desc_clasificador, id_nivel = _req$body.id_nivel;
            _context.prev = 1;
            _context.next = 4;
            return _clasificador["default"].create({
              cod_clasificador: cod_clasificador,
              nomb_clasificador: nomb_clasificador,
              activo_clasificador: activo_clasificador,
              desc_clasificador: desc_clasificador,
              id_nivel: id_nivel
            });

          case 4:
            clasif = _context.sent;

            if (!clasif) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "El Clasificador se creó satisfactoriamente",
              data: clasif
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error en el servidor 505",
              data: {}
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _crearClasificador.apply(this, arguments);
}

function listarClasificador(_x3, _x4) {
  return _listarClasificador.apply(this, arguments);
}

function _listarClasificador() {
  _listarClasificador = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var clasificadores;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _clasificador["default"].findAll();

          case 3:
            clasificadores = _context2.sent;
            res.json({
              data: clasificadores
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              "message": "Error al listar los Clasificadores",
              data: {}
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _listarClasificador.apply(this, arguments);
}

function listarClasificadorById(_x5, _x6) {
  return _listarClasificadorById.apply(this, arguments);
}

function _listarClasificadorById() {
  _listarClasificadorById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id_clasificador, clasif;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_clasificador = req.params.id_clasificador;
            _context3.prev = 1;
            _context3.next = 4;
            return _clasificador["default"].findByPk(id_clasificador);

          case 4:
            clasif = _context3.sent;

            if (clasif.length > 0) {
              res.json({
                data: clasif
              });
            }

            _context3.next = 10;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _listarClasificadorById.apply(this, arguments);
}

function editarClasificador(_x7, _x8) {
  return _editarClasificador.apply(this, arguments);
}

function _editarClasificador() {
  _editarClasificador = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_clasificador, _req$body2, cod_clasificador, nomb_clasificador, activo_clasificador, desc_clasificador, id_nivel, clasificadores;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_clasificador = req.params.id_clasificador;
            _req$body2 = req.body, cod_clasificador = _req$body2.cod_clasificador, nomb_clasificador = _req$body2.nomb_clasificador, activo_clasificador = _req$body2.activo_clasificador, desc_clasificador = _req$body2.desc_clasificador, id_nivel = _req$body2.id_nivel;
            _context5.prev = 2;
            _context5.next = 5;
            return _clasificador["default"].findAll({
              attributes: ['id_clasificador', 'cod_clasificador', 'nomb_clasificador', 'activo_clasificador', 'desc_clasificador', 'id_nivel'],
              where: {
                id_clasificador: id_clasificador
              }
            });

          case 5:
            clasificadores = _context5.sent;

            if (clasificadores.length > 0) {
              clasificadores.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(clasificador) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return clasificador.update({
                            cod_clasificador: cod_clasificador,
                            nomb_clasificador: nomb_clasificador,
                            activo_clasificador: activo_clasificador,
                            desc_clasificador: desc_clasificador,
                            id_nivel: id_nivel
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
              message: "Clasificador modificado exitosamente",
              data: clasificadores
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Error 5**, no se puedo editar el clasificador",
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarClasificador.apply(this, arguments);
}