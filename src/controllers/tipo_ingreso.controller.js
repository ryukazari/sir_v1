import tipo_ingreso from '../models/tipo_ingreso.model';

export async function listarTipoIngreso(req, res){
    try {
        let tipo = await tipo_ingreso.findAll();
        if(tipo.length<=0){
            return res.json({
                message: "No hay registros en la tabla tipo_ingreso.",
                data: {}
            })
        }
        return res.status(200).json({
            data: tipo
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener registros de la tabla tipo_ingreso",
            data: {}
        })
    }
}

export async function listarTipoIngresoById(req, res){
    const { id_tipo_ingreso } = req.params;
    try {
        let tipo = await tipo_ingreso.findByPk(id_tipo_ingreso);
        if(tipo){
            return res.status(200).json({
                data: tipo
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el registro de la tabla tipo_ingreso",
            data: {}
        })
    }
}

export async function crearTipoIngreso(req, res){
    const{ nombre_tipo_ingreso, descripcion_tipo_ingreso } = req.body;
    try {
        let tipo = await tipo_ingreso.create({
            nombre_tipo_ingreso, 
            descripcion_tipo_ingreso
        });

        if(tipo){
            return res.status(200).json({
                message: "El tipo de ingreso se creó exitosamente.",
                data: tipo
            })
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al crear el nuevo registro",
            data: {}
        })
    }
}

export async function editarTipoIngreso(req, res){
    const { id_tipo_ingreso } = req.params;
    const{ nombre_tipo_ingreso, descripcion_tipo_ingreso } = req.body;
    try {
        let tipo = await tipo_ingreso.findAll({
            attributes: ['id_tipo_ingreso', 'nombre_tipo_ingreso', 'descripcion_tipo_ingreso'],
            where:{
                id_tipo_ingreso
            }
        });
        if(tipo.length>0){
            tipo.forEach(async tipo_ingreso => {
                await tipo_ingreso.update({
                    nombre_tipo_ingreso, 
                    descripcion_tipo_ingreso
                });
            })
        }
        return res.status(200).json({
            message: "El tipo ingreso se modificó exitosamente.",
            data: tipo
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error al editar el registro",
            data: {}
        })
    }
}