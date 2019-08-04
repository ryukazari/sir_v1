import usuario from '../models/usuario.model';
const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function listarUsuarios(req, res){
    try {
        let usuarios = await usuario.findAll({
            attributes:['id_usuario', 'id_persona', 'id_sede', 'nombre_usuario', 'bloqueado', 'intentos_fallidos_login', 'password']
        });
        res.status(200).json({
            data: usuarios
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla usuario",
            data: {}
        });
    }
}

export async function listarUsuarioById(req, res){
    const { id_usuario } = req.params;
    try {
        let user = await usuario.findByPk(id_usuario,{
            attributes:['id_usuario', 'id_persona', 'id_sede', 'nombre_usuario', 'bloqueado', 'intentos_fallidos_login', 'password']
        });
        res.status(200).json({
            data: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener el registro de la tabla usuario",
            data: {}
        });
    }
}

export async function crearUsuario(req, res){
    const { id_persona, id_sede, nombre_usuario, bloqueado, intentos_fallidos_login, password } = req.body;
    let pass = "";
    bcrypt.hash(password, saltRounds, async function(err, hash) {
        try {
            let user = await usuario.create({
                id_persona, 
                id_sede, 
                nombre_usuario, 
                bloqueado, 
                intentos_fallidos_login, 
                password: hash
            });
            if(user){
                return res.status(200).json({
                    message: "Usuario creado exitosamente",
                    data: user
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error al obtener crear el usuario",
                data: {}
            });
        }   
    });
}

export async function editarUsuario(req, res){
    const { id_usuario } = req.params;
    const { id_persona, id_sede, nombre_usuario, bloqueado, intentos_fallidos_login, password } = req.body;
    bcrypt.hash(password, saltRounds, async function(err, hash) {     
        try {
            let usuarios = await usuario.findAll({
                attributes:['id_usuario', 'id_persona', 'id_sede', 'nombre_usuario', 'bloqueado', 'intentos_fallidos_login', 'password'],
                where:{
                    id_usuario
                }
            });
            if(usuarios.length>0){
                usuarios.forEach(async usuario =>{
                    await usuario.update({
                        id_persona, 
                        id_sede, 
                        nombre_usuario, 
                        bloqueado, 
                        intentos_fallidos_login,
                        password: hash
                    })
                })
            }
            return res.status(200).json({
                message: "Usuario modificado",
                data: usuarios
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error al obtener modificar el usuario",
                data: {}
            });
        }
    });
}