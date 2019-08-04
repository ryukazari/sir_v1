"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarRol = listarRol;
exports.listarRolById = listarRolById;
exports.crearRol = crearRol;
exports.editarRol = editarRol;

var _rol = _interopRequireDefault(require("../models/rol.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function listarRol(_x, _x2) {
  return _listarRol.apply(this, arguments);
}

function _listarRol() {
  _listarRol = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var r;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _rol["default"].findAll();

          case 3:
            r = _context.sent;
            res.status(200).json({
              data: r
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener los registros de la tabla Rol",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarRol.apply(this, arguments);
}

function listarRolById(_x3, _x4) {
  return _listarRolById.apply(this, arguments);
}

function _listarRolById() {
  _listarRolById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_rol, r;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_rol = req.params.id_rol;
            _context2.prev = 1;
            _context2.next = 4;
            return _rol["default"].findByPk(id_rol);

          case 4:
            r = _context2.sent;
            res.status(200).json({
              data: r
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al obtener el registro de la tabla Rol",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarRolById.apply(this, arguments);
}

function crearRol(_x5, _x6) {
  return _crearRol.apply(this, arguments);
}

function _crearRol() {
  _crearRol = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre_rol, descripcion_rol, r;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre_rol = _req$body.nombre_rol, descripcion_rol = _req$body.descripcion_rol;
            _context3.prev = 1;
            _context3.next = 4;
            return _rol["default"].create({
              nombre_rol: nombre_rol,
              descripcion_rol: descripcion_rol
            });

          case 4:
            r = _context3.sent;

            if (r) {
              res.status(200).json({
                message: "El Rol se creó de manera exitosa.",
                data: r
              });
            }

            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Error al crear el rol",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _crearRol.apply(this, arguments);
}

function editarRol(_x7, _x8) {
  return _editarRol.apply(this, arguments);
}

function _editarRol() {
  _editarRol = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id_rol, _req$body2, nombre_rol, descripcion_rol, roles;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_rol = req.params.id_rol;
            _req$body2 = req.body, nombre_rol = _req$body2.nombre_rol, descripcion_rol = _req$body2.descripcion_rol;
            _context5.prev = 2;
            _context5.next = 5;
            return _rol["default"].findAll({
              where: {
                id_rol: id_rol
              }
            });

          case 5:
            roles = _context5.sent;

            if (roles.length > 0) {
              roles.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(rol) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return rol.update({
                            nombre_rol: nombre_rol,
                            descripcion_rol: descripcion_rol
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
              message: "El rol se modificó exitosamente.",
              data: roles
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Error al modificar el Rol",
              data: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 10]]);
  }));
  return _editarRol.apply(this, arguments);
}