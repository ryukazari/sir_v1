"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarSedes = listarSedes;
exports.crearSede = crearSede;
exports.listarSedesPadres = listarSedesPadres;
exports.listarSedesHijos = listarSedesHijos;
exports.editarSede = editarSede;

var _sede = _interopRequireDefault(require("../models/sede.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarSedes(_x, _x2) {
  return _listarSedes.apply(this, arguments);
}

function _listarSedes() {
  _listarSedes = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var sedes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _sede["default"].findAll();

          case 3:
            sedes = _context.sent;
            return _context.abrupt("return", res.json({
              data: sedes
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.json({
              message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
              data: {}
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarSedes.apply(this, arguments);
}

function crearSede(_x3, _x4) {
  return _crearSede.apply(this, arguments);
}

function _crearSede() {
  _crearSede = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, codigo_sede, nombre_sede, desc_sede, id_padre_sede, codigo_inicial, presupuesto_sede, ejecutado_sede, newSede;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, codigo_sede = _req$body.codigo_sede, nombre_sede = _req$body.nombre_sede, desc_sede = _req$body.desc_sede, id_padre_sede = _req$body.id_padre_sede, codigo_inicial = _req$body.codigo_inicial, presupuesto_sede = _req$body.presupuesto_sede, ejecutado_sede = _req$body.ejecutado_sede;
            _context2.prev = 1;
            _context2.next = 4;
            return _sede["default"].create({
              codigo_sede: codigo_sede,
              nombre_sede: nombre_sede,
              desc_sede: desc_sede,
              id_padre_sede: id_padre_sede,
              codigo_inicial: codigo_inicial,
              presupuesto_sede: presupuesto_sede,
              ejecutado_sede: ejecutado_sede
            });

          case 4:
            newSede = _context2.sent;

            if (!newSede) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Se registró la Sede satisfactoriamente.",
              data: newSede
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              "message": "Error en el servidor 5**",
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _crearSede.apply(this, arguments);
}

function listarSedesPadres(_x5, _x6) {
  return _listarSedesPadres.apply(this, arguments);
}

function _listarSedesPadres() {
  _listarSedesPadres = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var sedes;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _sede["default"].findAll({
              where: {
                id_padre_sede: null
              }
            });

          case 3:
            sedes = _context3.sent;

            if (!(sedes.length <= 0)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Error 4**, no hay ninguna sede padre",
              data: {}
            }));

          case 6:
            return _context3.abrupt("return", res.json({
              data: sedes
            }));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            res.json({
              message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _listarSedesPadres.apply(this, arguments);
}

function listarSedesHijos(_x7, _x8) {
  return _listarSedesHijos.apply(this, arguments);
}

function _listarSedesHijos() {
  _listarSedesHijos = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id_padre_sede, sedes;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_padre_sede = req.params.id_padre_sede;
            _context4.prev = 1;
            _context4.next = 4;
            return _sede["default"].findAll({
              where: {
                id_padre_sede: id_padre_sede
              }
            });

          case 4:
            sedes = _context4.sent;

            if (!(sedes.length <= 0)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: "Error 4**, no hay ninguna sede hijo",
              data: {}
            }));

          case 7:
            return _context4.abrupt("return", res.json({
              data: sedes
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            res.json({
              message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
              data: {}
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return _listarSedesHijos.apply(this, arguments);
}

function editarSede(_x9, _x10) {
  return _editarSede.apply(this, arguments);
}

function _editarSede() {
  _editarSede = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, codigo_sede, nombre_sede, desc_sede, id_padre_sede, codigo_inicial, presupuesto_sede, ejecutado_sede, s;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, codigo_sede = _req$body2.codigo_sede, nombre_sede = _req$body2.nombre_sede, desc_sede = _req$body2.desc_sede, id_padre_sede = _req$body2.id_padre_sede, codigo_inicial = _req$body2.codigo_inicial, presupuesto_sede = _req$body2.presupuesto_sede, ejecutado_sede = _req$body2.ejecutado_sede;
            _context6.prev = 2;
            _context6.next = 5;
            return _sede["default"].findAll({
              attributes: ['id_sede', 'codigo_sede', 'nombre_sede', 'desc_sede', 'id_padre_sede', 'codigo_inicial', 'presupuesto_sede', 'ejecutado_sede'],
              where: {
                id_sede: id
              }
            });

          case 5:
            s = _context6.sent;

            if (s.length > 0) {
              s.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(sede) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return sede.update({
                            codigo_sede: codigo_sede,
                            nombre_sede: nombre_sede,
                            desc_sede: desc_sede,
                            id_padre_sede: id_padre_sede,
                            codigo_inicial: codigo_inicial,
                            presupuesto_sede: presupuesto_sede,
                            ejecutado_sede: ejecutado_sede
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Sede actualizada satisfactoriamente',
              data: s
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            res.status(500).json({
              message: "no se pudo editar la SEDE. ERROR 5**"
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _editarSede.apply(this, arguments);
}