import detalle_pago from '../models/detalle_pago.model';

export async function listarDetallePago(req, res){
    try {
        let p = await detalle_pago.findAll();
        res.status(200).json({
            data: p
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla detalle_pago",
            data: {}
        });
    }
}

export async function listarDetallePagoById(req, res){
    const { id_detalle_pago } = req.params;
    try {
        let p = await detalle_pago.findByPk(id_detalle_pago);
        res.status(200).json({
            data: p
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener el registro de la tabla detalle_pago",
            data: {}
        });
    }
}

export async function crearDetallePago(req, res){
    const { id_pago, id_concepto_pago, monto, cantidad, estado, fecha_maxima, costo_penalidad, id_penalidad, monto_total } = req.body;
    try {
        let p = await detalle_pago.create({
            id_pago,
            id_concepto_pago,
            monto, cantidad,
            estado, fecha_maxima,
            costo_penalidad,
            id_penalidad,
            monto_total
        });
        if(p){
            res.status(200).json({
                message: "El detalle_pago se creó de manera exitosa.",
                data: p
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al crear DetallePago",
            data: {}
        });
    }
}

export async function editarDetallePago(req, res){
    const { id_detalle_pago } = req.params;
    const { id_pago, id_concepto_pago, monto, cantidad, estado, fecha_maxima, costo_penalidad, id_penalidad, monto_total} = req.body;
    try {
        let p = await detalle_pago.findAll({
            where:{
                id_detalle_pago
            }
        });
        if(p.length>0){
            p.forEach(async detalle_pago => {
                await detalle_pago.update({
                    id_pago,
                    id_concepto_pago,
                    monto, cantidad,
                    estado, fecha_maxima,
                    costo_penalidad,
                    id_penalidad,
                    monto_total
                });
            });
        }
        return res.status(200).json({
            message: "El detalle_pago se modificó exitosamente",
            data: p
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al modificar el DetallePago",
            data: {}
        });
    }
}