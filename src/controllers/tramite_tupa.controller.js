import tramite_tupa from '../models/tramite_tupa.model';

export async function listarTramitesTupa(req, res){
    try {
        const tramites = await tramite_tupa.findAll();
        return res.status(200).json({
            data: tramites
        });
    } catch (error) {
        return res.status(500).json({
            message: "error en el servidor no se pudo obtener la lista de tramites TUPA."
        });
    }
}

export async function listarTramiteTupaById(req, res){
    const { id_tramite } = req.params;
    try {
        const tramite = await tramite_tupa.findByPk(id_tramite);
        if(tramite.length<=0){
            return res.json({
                message: "No hay trámites TUPA pertenecientes al Id ingresado.",
                data: {}
            });
        }
        res.status(200).json({
            data: tramite
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor, no se puedo obtener el tramite TUPA.",
            data:{}
        });
    }
}

export async function crearTramiteTupa(req, res){
    const { nombre_tramite, desc_tramite } = req.body;
    try {
        let newTramiteTupa = await tramite_tupa.create({
            nombre_tramite, 
            desc_tramite
        });

        if(newTramiteTupa){
            res.json({
                message: "se creó el trámite TUPA satisfactoriamente.",
                data: newTramiteTupa
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error en el servidor al crear el trámite TUPA",
            data: {}
        });
    }
}

export async function editarTramiteTupa(req, res){
    const { id } = req.params;
    const { nombre_tramite, desc_tramite } = req.body;
    try {
        const tramite = await tramite_tupa.findAll({
            attributes: ['id_tramite','nombre_tramite', 'desc_tramite'],
            where:{
                id_tramite: id
            }
        });
        if(tramite.length >0) {
            tramite.forEach(async tramite_tupa =>{
                await tramite_tupa.update({
                    nombre_tramite, 
                    desc_tramite
                });
            });
        }
        
        return res.json({
            message: 'tramite TUPA actualizada satisfactoriamente',
            data: tramite
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error en el servidor, no se pudo actualizar el tramite TUPA",
            data: {}
        });
    }
}