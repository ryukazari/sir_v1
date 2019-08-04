import penalidad from '../models/penalidad.model';

export async function listarPenalidad(req, res){
    try {
        let r = await penalidad.findAll();
        res.status(200).json({
            data: r
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla Penalidad",
            data: {}
        });
    }
}

export async function listarPenalidadById(req, res){
    const { id_penalidad } = req.params;
    try {
        let r = await penalidad.findByPk(id_penalidad);
        res.status(200).json({
            data: r
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al obtener el registro de la tabla Penalidad",
            data: {}
        });
    }
}

export async function crearPenalidad(req, res){
    const { nombre_penalidad, descripcion} = req.body;
    try {
        let r = await penalidad.create({
            nombre_penalidad, 
            descripcion
        });
        if(r){
            res.status(200).json({
                message: "La Penalidad se creó de manera exitosa.",
                data: r
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al crear la penalidad",
            data: {}
        });
    }
}

export async function editarPenalidad(req, res){
    const { id_penalidad } = req.params;
    const { nombre_penalidad, descripcion} = req.body;
    try {
        let penalidades = await penalidad.findAll({
            where:{
                id_penalidad
            }
        });
        if(penalidades.length>0){
            penalidades.forEach(async penalidad => {
                await penalidad.update({
                    nombre_penalidad, 
                    descripcion
                })
            });
        }

        res.status(200).json({
            message: "La penalidad se modificó exitosamente.",
            data: penalidades
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al modificar la Penalidad",
            data: {}
        });
    }
}