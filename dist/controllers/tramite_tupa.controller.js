"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarTramitesTupa = listarTramitesTupa;
exports.listarTramiteTupaById = listarTramiteTupaById;
exports.crearTramiteTupa = crearTramiteTupa;
exports.editarTramiteTupa = editarTramiteTupa;

var _tramite_tupa = _interopRequireDefault(require("../models/tramite_tupa.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarTramitesTupa(_x, _x2) {
  return _listarTramitesTupa.apply(this, arguments);
}

function _listarTramitesTupa() {
  _listarTramitesTupa = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var tramites;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _tramite_tupa["default"].findAll();

          case 3:
            tramites = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              data: tramites
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: "error en el servidor no se pudo obtener la lista de tramites TUPA."
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarTramitesTupa.apply(this, arguments);
}

function listarTramiteTupaById(_x3, _x4) {
  return _listarTramiteTupaById.apply(this, arguments);
}

function _listarTramiteTupaById() {
  _listarTramiteTupaById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_tramite, tramite;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_tramite = req.params.id_tramite;
            _context2.prev = 1;
            _context2.next = 4;
            return _tramite_tupa["default"].findByPk(id_tramite);

          case 4:
            tramite = _context2.sent;

            if (!(tramite.length <= 0)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "No hay trámites TUPA pertenecientes al Id ingresado.",
              data: {}
            }));

          case 7:
            res.status(200).json({
              data: tramite
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: "Error en el servidor, no se puedo obtener el tramite TUPA.",
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _listarTramiteTupaById.apply(this, arguments);
}

function crearTramiteTupa(_x5, _x6) {
  return _crearTramiteTupa.apply(this, arguments);
}

function _crearTramiteTupa() {
  _crearTramiteTupa = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre_tramite, desc_tramite, newTramiteTupa;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre_tramite = _req$body.nombre_tramite, desc_tramite = _req$body.desc_tramite;
            _context3.prev = 1;
            _context3.next = 4;
            return _tramite_tupa["default"].create({
              nombre_tramite: nombre_tramite,
              desc_tramite: desc_tramite
            });

          case 4:
            newTramiteTupa = _context3.sent;

            if (newTramiteTupa) {
              res.json({
                message: "se creó el trámite TUPA satisfactoriamente.",
                data: newTramiteTupa
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error en el servidor al crear el trámite TUPA",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearTramiteTupa.apply(this, arguments);
}

function editarTramiteTupa(_x7, _x8) {
  return _editarTramiteTupa.apply(this, arguments);
}

function _editarTramiteTupa() {
  _editarTramiteTupa = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre_tramite, desc_tramite, tramite;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre_tramite = _req$body2.nombre_tramite, desc_tramite = _req$body2.desc_tramite;
            _context5.prev = 2;
            _context5.next = 5;
            return _tramite_tupa["default"].findAll({
              attributes: ['id_tramite', 'nombre_tramite', 'desc_tramite'],
              where: {
                id_tramite: id
              }
            });

          case 5:
            tramite = _context5.sent;

            if (tramite.length > 0) {
              tramite.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(tramite_tupa) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return tramite_tupa.update({
                            nombre_tramite: nombre_tramite,
                            desc_tramite: desc_tramite
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
              message: 'tramite TUPA actualizada satisfactoriamente',
              data: tramite
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              "message": "Error en el servidor, no se pudo actualizar el tramite TUPA",
              data: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarTramiteTupa.apply(this, arguments);
}