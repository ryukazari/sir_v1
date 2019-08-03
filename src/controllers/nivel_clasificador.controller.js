import nivel_clasificador from '../models/nivel_clasificador.model';

export async function listarNivelClasificador(req, res){
    try {
        const niveles = await nivel_clasificador.findAll();
        res.status(200).json({
            data: niveles
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener la lista de niveles de los clasificadores",
            data: {}
        });
    }
}

export async function crearNivelClasificador(req, res){
    const { nomb_nivel_clasif } = req.body;
    try {
        let nivel = await nivel_clasificador.create({
            nomb_nivel_clasif
        });

        if(nivel){
            return res.json({
                "message": "se creó el nivel del clasificador.",
                data: nivel
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "error al crear el nivel de clasificador"
        });
    }
}

export async function editarNivelClasificador(req, res){
    const { id_nivel_clasificador } = req.params;
    const { nomb_nivel_clasif } = req.body;
    try {
        const nivel = await nivel_clasificador.findAll({
            attributes:[
                'id_nivel_clasificador', 
                'nomb_nivel_clasif'
            ],
            where:{
                id_nivel_clasificador
            }
        });
        if(nivel.length > 0){
            nivel.forEach(async nivel_clasificador =>{
                await nivel_clasificador.update({
                    nomb_nivel_clasif
                });
            });
        }
        
        return res.status(200).json({
            message: "se actualizó correctamente el nivel del clasificador",
            data:nivel
        });
    } catch (error) {
        res.status(500).json({
            message: "no se pudo actualizar el nivel del clasificador",
            data:{}
        });
    }
}