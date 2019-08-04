"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarFamiliasConcepto = listarFamiliasConcepto;
exports.listarFamiliaConceptoById = listarFamiliaConceptoById;
exports.crearFamiliaConcepto = crearFamiliaConcepto;
exports.editarFamiliaConcepto = editarFamiliaConcepto;

var _familia_concepto = _interopRequireDefault(require("../models/familia_concepto.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarFamiliasConcepto(_x, _x2) {
  return _listarFamiliasConcepto.apply(this, arguments);
}

function _listarFamiliasConcepto() {
  _listarFamiliasConcepto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var familias;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _familia_concepto["default"].findAll();

          case 3:
            familias = _context.sent;
            res.json({
              data: familias
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarFamiliasConcepto.apply(this, arguments);
}

function listarFamiliaConceptoById(_x3, _x4) {
  return _listarFamiliaConceptoById.apply(this, arguments);
}

function _listarFamiliaConceptoById() {
  _listarFamiliaConceptoById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_familia_concepto, familia;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_familia_concepto = req.params.id_familia_concepto;
            _context2.prev = 1;
            _context2.next = 4;
            return _familia_concepto["default"].findByPk(id_familia_concepto);

          case 4:
            familia = _context2.sent;
            res.json({
              data: familia
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error en el servidor 5**, no se pudo obtener el registros.",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarFamiliaConceptoById.apply(this, arguments);
}

function crearFamiliaConcepto(_x5, _x6) {
  return _crearFamiliaConcepto.apply(this, arguments);
}

function _crearFamiliaConcepto() {
  _crearFamiliaConcepto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre_familia_concepto, desc_familia_concepto, new_familia_concepto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre_familia_concepto = _req$body.nombre_familia_concepto, desc_familia_concepto = _req$body.desc_familia_concepto;
            _context3.prev = 1;
            _context3.next = 4;
            return _familia_concepto["default"].create({
              nombre_familia_concepto: nombre_familia_concepto,
              desc_familia_concepto: desc_familia_concepto
            });

          case 4:
            new_familia_concepto = _context3.sent;

            if (!new_familia_concepto) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "se creó la familia de conceptos de pago.",
              data: new_familia_concepto
            }));

          case 7:
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: "Error en el servidor 5** no se pudo crear la familia de conceptos de pago.",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _crearFamiliaConcepto.apply(this, arguments);
}

function editarFamiliaConcepto(_x7, _x8) {
  return _editarFamiliaConcepto.apply(this, arguments);
}

function _editarFamiliaConcepto() {
  _editarFamiliaConcepto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre_familia_concepto, desc_familia_concepto, familias;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre_familia_concepto = _req$body2.nombre_familia_concepto, desc_familia_concepto = _req$body2.desc_familia_concepto;
            _context5.prev = 2;
            _context5.next = 5;
            return _familia_concepto["default"].findAll({
              attributes: ['id_familia_concepto', 'nombre_familia_concepto', 'desc_familia_concepto'],
              where: {
                id_familia_concepto: id
              }
            });

          case 5:
            familias = _context5.sent;

            if (familias.length > 0) {
              familias.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(familia_concepto) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return familia_concepto.update({
                            nombre_familia_concepto: nombre_familia_concepto,
                            desc_familia_concepto: desc_familia_concepto
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
              message: 'Familia de conceptos de pago actualizada satisfactoriamente',
              data: familias
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: "Error al editar la Familia de Conceptos de Pago."
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarFamiliaConcepto.apply(this, arguments);
}