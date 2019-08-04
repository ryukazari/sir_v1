"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarUsuarios = listarUsuarios;
exports.listarUsuarioById = listarUsuarioById;
exports.crearUsuario = crearUsuario;
exports.editarUsuario = editarUsuario;

var _usuario = _interopRequireDefault(require("../models/usuario.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

var saltRounds = 10;

function listarUsuarios(_x, _x2) {
  return _listarUsuarios.apply(this, arguments);
}

function _listarUsuarios() {
  _listarUsuarios = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var usuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _usuario["default"].findAll({
              attributes: ['id_usuario', 'id_persona', 'id_sede', 'nombre_usuario', 'bloqueado', 'intentos_fallidos_login', 'password']
            });

          case 3:
            usuarios = _context.sent;
            res.status(200).json({
              data: usuarios
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al obtener los registros de la tabla usuario",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _listarUsuarios.apply(this, arguments);
}

function listarUsuarioById(_x3, _x4) {
  return _listarUsuarioById.apply(this, arguments);
}

function _listarUsuarioById() {
  _listarUsuarioById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id_usuario, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_usuario = req.params.id_usuario;
            _context2.prev = 1;
            _context2.next = 4;
            return _usuario["default"].findByPk(id_usuario, {
              attributes: ['id_usuario', 'id_persona', 'id_sede', 'nombre_usuario', 'bloqueado', 'intentos_fallidos_login', 'password']
            });

          case 4:
            user = _context2.sent;
            res.status(200).json({
              data: user
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Error al obtener el registro de la tabla usuario",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _listarUsuarioById.apply(this, arguments);
}

function crearUsuario(_x5, _x6) {
  return _crearUsuario.apply(this, arguments);
}

function _crearUsuario() {
  _crearUsuario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, id_persona, id_sede, nombre_usuario, bloqueado, intentos_fallidos_login, password, pass;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, id_persona = _req$body.id_persona, id_sede = _req$body.id_sede, nombre_usuario = _req$body.nombre_usuario, bloqueado = _req$body.bloqueado, intentos_fallidos_login = _req$body.intentos_fallidos_login, password = _req$body.password;
            pass = "";
            bcrypt.hash(password, saltRounds,
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee3(err, hash) {
                var user;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _usuario["default"].create({
                          id_persona: id_persona,
                          id_sede: id_sede,
                          nombre_usuario: nombre_usuario,
                          bloqueado: bloqueado,
                          intentos_fallidos_login: intentos_fallidos_login,
                          password: hash
                        });

                      case 3:
                        user = _context3.sent;

                        if (!user) {
                          _context3.next = 6;
                          break;
                        }

                        return _context3.abrupt("return", res.status(200).json({
                          message: "Usuario creado exitosamente",
                          data: user
                        }));

                      case 6:
                        _context3.next = 12;
                        break;

                      case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3["catch"](0);
                        console.log(_context3.t0);
                        res.status(500).json({
                          message: "Error al obtener crear el usuario",
                          data: {}
                        });

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, null, [[0, 8]]);
              }));

              return function (_x9, _x10) {
                return _ref.apply(this, arguments);
              };
            }());

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _crearUsuario.apply(this, arguments);
}

function editarUsuario(_x7, _x8) {
  return _editarUsuario.apply(this, arguments);
}

function _editarUsuario() {
  _editarUsuario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var id_usuario, _req$body2, id_persona, id_sede, nombre_usuario, bloqueado, intentos_fallidos_login, password;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_usuario = req.params.id_usuario;
            _req$body2 = req.body, id_persona = _req$body2.id_persona, id_sede = _req$body2.id_sede, nombre_usuario = _req$body2.nombre_usuario, bloqueado = _req$body2.bloqueado, intentos_fallidos_login = _req$body2.intentos_fallidos_login, password = _req$body2.password;
            bcrypt.hash(password, saltRounds,
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee6(err, hash) {
                var usuarios;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.prev = 0;
                        _context6.next = 3;
                        return _usuario["default"].findAll({
                          attributes: ['id_usuario', 'id_persona', 'id_sede', 'nombre_usuario', 'bloqueado', 'intentos_fallidos_login', 'password'],
                          where: {
                            id_usuario: id_usuario
                          }
                        });

                      case 3:
                        usuarios = _context6.sent;

                        if (usuarios.length > 0) {
                          usuarios.forEach(
                          /*#__PURE__*/
                          function () {
                            var _ref3 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee5(usuario) {
                              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      _context5.next = 2;
                                      return usuario.update({
                                        id_persona: id_persona,
                                        id_sede: id_sede,
                                        nombre_usuario: nombre_usuario,
                                        bloqueado: bloqueado,
                                        intentos_fallidos_login: intentos_fallidos_login,
                                        password: hash
                                      });

                                    case 2:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5);
                            }));

                            return function (_x13) {
                              return _ref3.apply(this, arguments);
                            };
                          }());
                        }

                        return _context6.abrupt("return", res.status(200).json({
                          message: "Usuario modificado",
                          data: usuarios
                        }));

                      case 8:
                        _context6.prev = 8;
                        _context6.t0 = _context6["catch"](0);
                        console.log(_context6.t0);
                        res.status(500).json({
                          message: "Error al obtener modificar el usuario",
                          data: {}
                        });

                      case 12:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[0, 8]]);
              }));

              return function (_x11, _x12) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _editarUsuario.apply(this, arguments);
}