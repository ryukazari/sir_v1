import rol from '../models/rol.model';

export async function listarRol(req, res){
    try {
        let r = await rol.findAll();
        res.status(200).json({
            data: r
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla Rol",
            data: {}
        });
    }
}

export async function listarRolById(req, res){
    const { id_rol } = req.params;
    try {
        let r = await rol.findByPk(id_rol);
        res.status(200).json({
            data: r
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al obtener el registro de la tabla Rol",
            data: {}
        });
    }
}

export async function crearRol(req, res){
    const { nombre_rol, descripcion_rol} = req.body;
    try {
        let r = await rol.create({
            nombre_rol, 
            descripcion_rol
        });
        if(r){
            res.status(200).json({
                message: "El Rol se creó de manera exitosa.",
                data: r
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al crear el rol",
            data: {}
        });
    }
}

export async function editarRol(req, res){
    const { id_rol } = req.params;
    const { nombre_rol, descripcion_rol} = req.body;
    try {
        let roles = await rol.findAll({
            where:{
                id_rol
            }
        });
        if(roles.length>0){
            roles.forEach(async rol => {
                await rol.update({
                    nombre_rol, 
                    descripcion_rol
                })
            });
        }

        res.status(200).json({
            message: "El rol se modificó exitosamente.",
            data: roles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al modificar el Rol",
            data: {}
        });
    }
}