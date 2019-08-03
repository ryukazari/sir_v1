import sede from '../models/sede.model'

export async function listarSedes(req, res){
    try {
        const sedes = await sede.findAll();
        return res.json({
            data: sedes
        });
        
    } catch (error) {
        res.json({
            message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
            data:{}
        });
    }
}

export async function crearSede(req, res){
    const { codigo_sede, nombre_sede, desc_sede, id_padre_sede, codigo_inicial, presupuesto_sede, ejecutado_sede } = req.body;
    try {
        let newSede = await sede.create({
            codigo_sede, 
            nombre_sede, 
            desc_sede, 
            id_padre_sede, 
            codigo_inicial, 
            presupuesto_sede, 
            ejecutado_sede
        });

        if(newSede){
            return res.json({
                message: "Se registró la Sede satisfactoriamente.",
                data: newSede
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error en el servidor 5**",
            data: {}
        });
    }
}

export async function listarSedesPadres(req, res){
    try {
        const sedes = await sede.findAll({
            where:{
                id_padre_sede: null
            }
        });
        if(sedes.length<=0){
            return res.json({
                message: "Error 4**, no hay ninguna sede padre",
                data: {}
            });
        }

        return res.json({
            data: sedes
        });
        
    } catch (error) {
        res.json({
            message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
            data:{}
        });
    }
}

export async function listarSedesHijos(req, res){
    const { id_padre_sede } = req.params;
    try {
        const sedes = await sede.findAll({
            where:{
                id_padre_sede
            }
        });
        if(sedes.length<=0){
            return res.json({
                message: "Error 4**, no hay ninguna sede hijo",
                data: {}
            });
        }

        return res.json({
            data: sedes
        });
        
    } catch (error) {
        res.json({
            message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
            data:{}
        });
    }
}