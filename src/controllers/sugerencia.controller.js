import sugerencia from '../models/sugerencia.model';

export async function crearSugerencia(req, res){
    const { texto_sugerencia, id_usuario } = req.body;
    try {
        let sug = await sugerencia.create({
            texto_sugerencia, 
            id_usuario
        });

        if(sug){
            return res.json({
                message: "El Sugerencia se creó satisfactoriamente",
                data: sug
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear la Sugerencia",
            data: {}
        });
    }
}

export async function listarSugerencia(req, res){
    try {
        const sugerencias = await sugerencia.findAll();
        res.json({
            data: sugerencias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error al listar las Sugerencias",
            data: {}
        });
    }
}

export async function listarSugerenciaById(req, res){
    const { id_sugerencia } = req.params;
    try {
        const sug = await sugerencia.findByPk(id_sugerencia);
            res.json({
                data: sug
            })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el registro de la sugerencia",
            data: {}
        });
    }
}

export async function editarSugerencia(req, res){
    const { id_sugerencia } = req.params;
    const { texto_sugerencia, id_usuario } = req.body;
    try {
        const sugerenciaes = await sugerencia.findAll({
            where:{
                id_sugerencia
            }
        });
        if(sugerenciaes.length > 0){
            sugerenciaes.forEach(async sugerencia => {
                await sugerencia.update({
                    texto_sugerencia, 
                    id_usuario
                });
            });
        }
        return res.json({
            message: "Sugerencia modificado exitosamente",
            data: sugerenciaes
        });
    } catch (error) {
        res.status(500).json({
            message: "Error 5**, no se puedo editar el sugerencia",
            data: {}
        });
    }
}