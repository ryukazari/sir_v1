import pago from '../models/pago.model';

export async function listarPago(req, res){
    try {
        let p = await pago.findAll();
        res.status(200).json({
            data: p
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla pago",
            data: {}
        });
    }
}

export async function listarPagoById(req, res){
    const { id_pago } = req.params;
    try {
        let p = await pago.findByPk(id_pago);
        res.status(200).json({
            data: p
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener el registro de la tabla pago",
            data: {}
        });
    }
}

export async function crearPago(req, res){
    const { id_usuario, fecha_vencimiento, contrapartida, referencia_adicional, moneda_importe, estado,
        codigo_pago, fecha_pago, hora_pago, codigo_operacion_banco, nombre_banco, canal_banco } = req.body;
    try {
        let p = await pago.create({
            id_usuario, 
            fecha_vencimiento, 
            contrapartida, 
            referencia_adicional, 
            moneda_importe, 
            estado,
            codigo_pago, 
            fecha_pago, 
            hora_pago, 
            codigo_operacion_banco, 
            nombre_banco, 
            canal_banco
        });
        if(p){
            res.status(200).json({
                message: "El pago se creó de manera exitosa.",
                data: p
            })
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al crear Pago",
            data: {}
        });
    }
}

export async function editarPago(req, res){
    const { id_pago } = req.params;
    const { id_usuario, fecha_vencimiento, contrapartida, referencia_adicional, moneda_importe, estado,
        codigo_pago, fecha_pago, hora_pago, codigo_operacion_banco, nombre_banco, canal_banco } = req.body;
    try {
        let p = await pago.findAll({
            where:{
                id_pago
            }
        });
        if(p.length>0){
            p.forEach(async pago => {
                await pago.update({
                    id_usuario, 
                    fecha_vencimiento, 
                    contrapartida, 
                    referencia_adicional, 
                    moneda_importe, 
                    estado,
                    codigo_pago, 
                    fecha_pago, 
                    hora_pago, 
                    codigo_operacion_banco, 
                    nombre_banco, 
                    canal_banco
                });
            });
        }
        return res.status(200).json({
            message: "El pago se modificó exitosamente",
            data: p
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al modificar el Pago",
            data: {}
        });
    }
}