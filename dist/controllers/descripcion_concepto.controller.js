"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarDescripcionConcepto = listarDescripcionConcepto;
exports.listarDescripcionConceptoById = listarDescripcionConceptoById;
exports.crearDescripcionConcepto = crearDescripcionConcepto;
exports.editarDescripcionConcepto = editarDescripcionConcepto;

var _descripcion_concepto = _interopRequireDefault(require("../models/descripcion_concepto.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarDescripcionConcepto(_x, _x2) {
  return _listarDescripcionConcepto.apply(this, arguments);
}

function _listarDescripcionConcepto() {
  _listarDescripcionConcepto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var conceptos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _descripcion_concepto["default"].findAll();

          case 3:
            conceptos = _context.sent;

            if (!(conceptos.length > 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              data: conceptos
            }));

          case 8:
            return _context.abrupt("return", res.status(404).json({
              message: "No existen registros en la tabla descripcion_concepto",
              data: {}
            }));

          case 9:
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error a la hora de obtener los registros.",
              data: {}
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _listarDescripcionConcepto.apply(this, arguments);
}

function listarDescripcionConceptoById(_x3, _x4) {
  return _listarDescripcionConceptoById.apply(this, arguments);
}

function _listarDescripcionConceptoById() {
  _listarDescripcionConceptoById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_desc_concepto, descripcion;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_desc_concepto = req.params.id_desc_concepto;
            _context2.prev = 1;
            _context2.next = 4;
            return _descripcion_concepto["default"].findByPk(id_desc_concepto);

          case 4:
            descripcion = _context2.sent;

            if (descripcion) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "No existe un registro con el id:" + id_desc_concepto,
              data: {}
            }));

          case 7:
            return _context2.abrupt("return", res.status(200).json({
              data: descripcion
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(500).json({
              message: "Error al obtener el registro.",
              data: {}
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _listarDescripcionConceptoById.apply(this, arguments);
}

function crearDescripcionConcepto(_x5, _x6) {
  return _crearDescripcionConcepto.apply(this, arguments);
}

function _crearDescripcionConcepto() {
  _crearDescripcionConcepto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, descripcion, monto, id_concepto_pago, estado, desc;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, descripcion = _req$body.descripcion, monto = _req$body.monto, id_concepto_pago = _req$body.id_concepto_pago, estado = _req$body.estado;
            _context3.prev = 1;
            _context3.next = 4;
            return _descripcion_concepto["default"].create({
              descripcion: descripcion,
              monto: monto,
              id_concepto_pago: id_concepto_pago,
              estado: estado
            });

          case 4:
            desc = _context3.sent;

            if (desc) {
              res.status(200).json({
                message: "La descripcion del concepto se creó exitosamente.",
                data: desc
              });
            }

            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", res.status(500).json({
              message: "Error al registrar la descripcion del concepto.",
              data: {}
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearDescripcionConcepto.apply(this, arguments);
}

function editarDescripcionConcepto(_x7, _x8) {
  return _editarDescripcionConcepto.apply(this, arguments);
}

function _editarDescripcionConcepto() {
  _editarDescripcionConcepto = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_desc_concepto, _req$body2, descripcion, monto, id_concepto_pago, estado, desc;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_desc_concepto = req.params.id_desc_concepto;
            _req$body2 = req.body, descripcion = _req$body2.descripcion, monto = _req$body2.monto, id_concepto_pago = _req$body2.id_concepto_pago, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _descripcion_concepto["default"].findAll({
              attributes: ['id_desc_concepto', 'descripcion', 'monto', 'id_concepto_pago', 'estado'],
              where: {
                id_desc_concepto: id_desc_concepto
              }
            });

          case 5:
            desc = _context5.sent;

            if (desc) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: "No existe un registro con el id:" + id_descripcion_concepto,
              data: {}
            }));

          case 8:
            desc.forEach(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee4(descripcion_concepto) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        descripcion_concepto.update({
                          descripcion: descripcion,
                          monto: monto,
                          id_concepto_pago: id_concepto_pago,
                          estado: estado
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
            return _context5.abrupt("return", res.status(200).json({
              message: "El registro se modificó existosamente",
              data: desc
            }));

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](2);
            return _context5.abrupt("return", res.status(500).json({
              message: "Error al editar el registro.",
              data: {}
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return _editarDescripcionConcepto.apply(this, arguments);
}