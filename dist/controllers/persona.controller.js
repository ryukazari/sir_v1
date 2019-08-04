"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarPersona = listarPersona;
exports.listarPersonaById = listarPersonaById;
exports.crearPersona = crearPersona;
exports.editarPersona = editarPersona;

var _persona = _interopRequireDefault(require("../models/persona.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarPersona(_x, _x2) {
  return _listarPersona.apply(this, arguments);
}

function _listarPersona() {
  _listarPersona = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var personas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _persona["default"].findAll();

          case 3:
            personas = _context.sent;
            res.status(200).json({
              data: personas
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener los registros de la tabla persona",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarPersona.apply(this, arguments);
}

function listarPersonaById(_x3, _x4) {
  return _listarPersonaById.apply(this, arguments);
}

function _listarPersonaById() {
  _listarPersonaById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_persona, per;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_persona = req.params.id_persona;
            _context2.prev = 1;
            _context2.next = 4;
            return _persona["default"].findByPk(id_persona);

          case 4:
            per = _context2.sent;
            res.status(200).json({
              data: per
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al obtener el registro de la tabla persona",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarPersonaById.apply(this, arguments);
}

function crearPersona(_x5, _x6) {
  return _crearPersona.apply(this, arguments);
}

function _crearPersona() {
  _crearPersona = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nro_doc_per, ape_pat_per, ape_mat_per, nomb_per, fech_nac_per, correo_per, nro_celular, nro_telefono, per;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nro_doc_per = _req$body.nro_doc_per, ape_pat_per = _req$body.ape_pat_per, ape_mat_per = _req$body.ape_mat_per, nomb_per = _req$body.nomb_per, fech_nac_per = _req$body.fech_nac_per, correo_per = _req$body.correo_per, nro_celular = _req$body.nro_celular, nro_telefono = _req$body.nro_telefono;
            _context3.prev = 1;
            _context3.next = 4;
            return _persona["default"].create({
              nro_doc_per: nro_doc_per,
              ape_pat_per: ape_pat_per,
              ape_mat_per: ape_mat_per,
              nomb_per: nomb_per,
              fech_nac_per: fech_nac_per,
              correo_per: correo_per,
              nro_celular: nro_celular,
              nro_telefono: nro_telefono
            });

          case 4:
            per = _context3.sent;

            if (per) {
              res.status(200).json({
                message: "La persona se creó de manera exitosa.",
                data: per
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al crear recibo de ingreso",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearPersona.apply(this, arguments);
}

function editarPersona(_x7, _x8) {
  return _editarPersona.apply(this, arguments);
}

function _editarPersona() {
  _editarPersona = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_persona, _req$body2, nro_doc_per, ape_pat_per, ape_mat_per, nomb_per, fech_nac_per, correo_per, nro_celular, nro_telefono, personas;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_persona = req.params.id_persona;
            _req$body2 = req.body, nro_doc_per = _req$body2.nro_doc_per, ape_pat_per = _req$body2.ape_pat_per, ape_mat_per = _req$body2.ape_mat_per, nomb_per = _req$body2.nomb_per, fech_nac_per = _req$body2.fech_nac_per, correo_per = _req$body2.correo_per, nro_celular = _req$body2.nro_celular, nro_telefono = _req$body2.nro_telefono;
            /*
            let fecha = new Date();
            let month = fecha.getMonth();
            month = month+1;
            aud_fech_creac = month+"-"+fecha.getDate();+"-"+fecha.getFullYear();
            */

            _context5.prev = 2;
            _context5.next = 5;
            return _persona["default"].findAll({
              //attributes: ['id_persona', 'nro_doc_per', 'ape_pat_per', 'ape_mat_per', 'nomb_per', 'fech_nac_per', 'correo_per', 'nro_celular', 'nro_telefono'],
              where: {
                id_persona: id_persona
              }
            });

          case 5:
            personas = _context5.sent;

            if (personas.length > 0) {
              personas.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(persona) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return persona.update({
                            nro_doc_per: nro_doc_per,
                            ape_pat_per: ape_pat_per,
                            ape_mat_per: ape_mat_per,
                            nomb_per: nomb_per,
                            fech_nac_per: fech_nac_per,
                            correo_per: correo_per,
                            nro_celular: nro_celular,
                            nro_telefono: nro_telefono
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

            res.status(200).json({
              message: "La persona se modificó exitosamente.",
              data: personas
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Error al modificar la Persona",
              data: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarPersona.apply(this, arguments);
}