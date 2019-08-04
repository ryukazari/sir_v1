import devolucion from '../models/devolucion.model';

export async function listarDevoluciones(req, res){
    try {
        let devol = await devolucion.findAll();
        if(devol<=0){
            return res.json({
                message: "No hay registros en la tabla Devolucion",
                data:{}
            });
        }else{
            return res.status(200).json({
                data:devol
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message:"Error al obtener los registros",
            data:{}
        })
    }

}

export async function listarDevolucionesById(req, res){
    const { id_devolucion } = req.params;
    try {
        let devol = await devolucion.findByPk(id_devolucion);
        if(!devol){
            return res.json({
                message: "No existe registro con el id:"+id_devolucion,
                data:{}
            })
        }
        return res.status(200).json({
            data: devol
        })
    } catch (error) {
        res.status(500).json({
            message:"Error al obtener el registro",
            data:{}
        })
    }
}

export async function crearDevolucion(req, res){
    const { id_ingreso, id_tipo_ingreso, fecha_devolucion, motivo_devolucion, expediente_devolucion, id_usuario_realiz } = req.body;
    try {
        let devol = await devolucion.create({
            id_ingreso,
            id_tipo_ingreso,
            fecha_devolucion,
            motivo_devolucion, 
            expediente_devolucion, 
            id_usuario_realiz
        });
        if(devol){
            res.status(200).json({
                message:"La devolucion se registró correctamente.",
                data: devol
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message:"Error al registrar devolución",
            data:{}
        })
    }

    
}

export async function editarDevolucion(req, res){
    const { id_devolucion } = req.params;
    const { id_ingreso, id_tipo_ingreso, fecha_devolucion, motivo_devolucion, expediente_devolucion, id_usuario_realiz } = req.body;
    try {
        let devol = await devolucion.findAll({
            attributes:['id_devolucion', 'id_ingreso', 'id_tipo_ingreso', 'fecha_devolucion', 'motivo_devolucion', 'expediente_devolucion', 'id_usuario_realiz' ],
            where:{
                id_devolucion
            }
        });
        if(devol.length<=0){
            return res.json({
                message: "No existen registros con el id: "+id_devolucion
            })
        }else{
            devol.forEach(async devolucion => {
                await devolucion.update({
                    id_ingreso, 
                    id_tipo_ingreso,
                    fecha_devolucion, 
                    motivo_devolucion, 
                    expediente_devolucion, 
                    id_usuario_realiz
                })
            });
            return res.status(200).json({
                message: "devolucion modificada exitosamente",
                data: devol
            });
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message:"Error al modificar la devolucion",
            data:{}
        })
    }
    
}