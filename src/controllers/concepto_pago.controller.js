import concepto_pago from '../models/concepto_pago.model';

export async function listarConceptoPago(req, res){
    try {
        const conceptos = await concepto_pago.findAll();
            return res.status(200).json({
                data: conceptos
            })
        
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los conceptos de pago",
            data: {}
        })    
    }
}

export async function listarConceptoPagoById(req, res){
    const { id_concepto_pago } = req.params;
    try {
        const concepto = await concepto_pago.findByPk(id_concepto_pago);
        if(concepto){
            return res.status(200).json({
                data: concepto
            })
        }else{
            return res.status(404).json({
                message: "No existe concepto de pago con el ID: "+id_concepto_pago,
                data: {}
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "error al obtener el concepto de pago",
            data:{}
        })
    }
}

export async function crearConceptoPago(req, res){
    const { codigo_final, desc_concepto_pago, id_sede, id_clasificador, id_familia_concepto, monto } = req.body;
    try {
        const concepto = await concepto_pago.create({
            codigo_final, 
            desc_concepto_pago, 
            id_sede, 
            id_clasificador, 
            id_familia_concepto,
            monto
        });
        if(concepto){
            return res.status(200).json({
                message: "El concepto de pago se creó exitosamente",
                data: concepto
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Error al crear concepto de pago",
            data:{}
        })
    }
}

export async function editarConceptoPago(req, res){
    const { id_concepto_pago } = req.params;
    const { codigo_final, desc_concepto_pago, id_sede, id_clasificador, id_familia_concepto, monto } = req.body;
    try {
        let concepto = await concepto_pago.findAll({
            attributes: ['id_concepto_pago', 'codigo_final', 'desc_concepto_pago', 'id_sede', 'id_clasificador', 'id_familia_concepto', 'monto'],
            where:{
                id_concepto_pago
            }
        });

        if(concepto.length > 0){
            concepto.forEach(async concepto_pago =>{
                concepto_pago.update({
                    codigo_final, 
                    desc_concepto_pago, 
                    id_sede, 
                    id_clasificador, 
                    id_familia_concepto,
                    monto
                })
            })
        }
        return res.json({
            message: "se modificó el concepto de pago",
            data: concepto
        })
    } catch (error) {
        res.status(500).json({
            message: "error al editar el concepto de pago",
            data: {}
        })
    }
}