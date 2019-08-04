import detalle_recibo_ingreso from '../models/detalle_recibo_ingreso.model';

export async function listarDetalleReciboIngreso(req, res){
    try {
        let recibos = await detalle_recibo_ingreso.findAll();
        res.status(200).json({
            data: recibos
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los registros de la tabla detalle_recibo_ingreso",
            data: {}
        });
    }
}

export async function listarDetalleReciboIngresoById(req, res){
    const { id_detalle_recibo_ingreso } = req.params;
    try {
        let recibo = await detalle_recibo_ingreso.findByPk(id_detalle_recibo_ingreso);
        res.status(200).json({
            data: recibo
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al obtener el registro de la tabla detalle_recibo_ingreso",
            data: {}
        });
    }
}

export async function crearDetalleReciboIngreso(req, res){
    const { id_recibo_ingreso, anio_recibo, id_sede, descripcion, tipo_moneda, tipo_cambio, monto_item, monto_final_item} = req.body;
    try {
        let recibo = await detalle_recibo_ingreso.create({
            id_recibo_ingreso, 
            anio_recibo, 
            id_sede,
            descripcion,
            tipo_moneda, 
            tipo_cambio, 
            monto_item, 
            monto_final_item
        });
        if(recibo){
            res.status(200).json({
                message: "El recibo de ingreso se creó de manera exitosa.",
                data: recibo
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al crear recibo de ingreso",
            data: {}
        });
    }
}

export async function editarDetalleReciboIngreso(req, res){
    const { id_detalle_recibo_ingreso } = req.params;
    const { id_recibo_ingreso, anio_recibo, id_sede, descripcion, tipo_moneda, tipo_cambio, monto_item, monto_final_item} = req.body;
    try {
        let recibos = await detalle_recibo_ingreso.findAll({
            attributes: ['id_detalle_recibo_ingreso', 'id_recibo_ingreso', 'anio_recibo', 'id_sede', 'descripcion',  'tipo_moneda', 'tipo_cambio', 'monto_item', 'monto_final_item'],
            where:{
                id_detalle_recibo_ingreso
            }
        });
        if(recibos.length>0){
            recibos.forEach(async detalle_recibo_ingreso => {
                await detalle_recibo_ingreso.update({
                    id_recibo_ingreso, 
                    anio_recibo, 
                    id_sede, 
                    descripcion,
                    tipo_moneda, 
                    tipo_cambio, 
                    monto_item, 
                    monto_final_item
                })
            });
        }

        res.status(200).json({
            message: "El detalle del recibo de ingreso se modificó exitosamente.",
            data: recibos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al modificar el detalle del recibo ingreso",
            data: {}
        });
    }
}