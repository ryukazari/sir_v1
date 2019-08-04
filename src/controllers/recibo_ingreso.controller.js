import recibo_ingreso from '../models/recibo_ingreso.model';

export async function listarReciboIngreso(req, res){
    try {
        let recibos = await recibo_ingreso.findAll();
        res.status(200).json({
            data: recibos
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los registros de la tabla recibo_ingreso",
            data: {}
        });
    }
}

export async function listarReciboIngresoById(req, res){
    const { id_recibo_ingreso } = req.params;
    try {
        let recibo = await recibo_ingreso.findByPk(id_recibo_ingreso);
        res.status(200).json({
            data: recibo
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al obtener el registro de la tabla recibo_ingreso",
            data: {}
        });
    }
}

export async function crearReciboIngreso(req, res){
    const { num_impreso_recibo, anio_recibo, id_sede, mes_recibo, fecha_recibo, num_referencia_recibo, tipo_moneda_recibo, monto_recibo, id_usuario } = req.body;
    try {
        let recibo = await recibo_ingreso.create({
            num_impreso_recibo, 
            anio_recibo, 
            id_sede, 
            mes_recibo, 
            fecha_recibo, 
            num_referencia_recibo, 
            tipo_moneda_recibo, 
            monto_recibo, 
            id_usuario
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

export async function editarReciboIngreso(req, res){
    const { id_recibo_ingreso } = req.params;
    const { num_impreso_recibo, anio_recibo, id_sede, mes_recibo, fecha_recibo, num_referencia_recibo, tipo_moneda_recibo, monto_recibo, id_usuario } = req.body;
    try {
        let recibos = await recibo_ingreso.findAll({
            attributes: ['id_recibo_ingreso', 'num_impreso_recibo', 'anio_recibo', 'id_sede', 'mes_recibo', 'fecha_recibo', 'num_referencia_recibo', 'tipo_moneda_recibo', 'monto_recibo', 'id_usuario'],
            where:{
                id_recibo_ingreso
            }
        });

        if(recibos.length>0){
            recibos.forEach(async recibo_ingreso => {
                await recibo_ingreso.update({
                    num_impreso_recibo, 
                    anio_recibo, 
                    id_sede, 
                    mes_recibo, 
                    fecha_recibo, 
                    num_referencia_recibo, 
                    tipo_moneda_recibo, 
                    monto_recibo, 
                    id_usuario
                })
            });
        }

        res.status(200).json({
            message: "El recibo de ingreso se modificó exitosamente.",
            data: recibos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al modificar el recibo ingreso",
            data: {}
        });
    }
}