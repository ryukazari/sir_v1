import transferencia_interna from '../models/transferencia_interna';

export async function listarTransferenciasInternas(req, res) {
    try {
        const transferencias = await transferencia_interna.findAll();
        res.json({
            data: transferencias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error en el servidor 505",
            data: {}
        });

    }
}

export async function getTransferenciaInterna(req, res){
    const { id } = req.params;
    try {
        const transferencia = await transferencia_interna.findOne({
            where:{
                id_transferencia_interna: id
            }
        });
        res.json({
            data: transferencia
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error en el servidor, no se pudieron obtener los datos",
            data: {}
        });
        
    }
}

export async function createTransferenciaInterna(req, res) {
    const { anio_transferencia_interna, id_sede_origen, id_sede_destino, mes_transferencia_interna,
        fecha_transferencia_interna, expediente_transferencia_interna, desc_transferencia_interna,
        monto_transferencia_interna, id_detalle_pago } = req.body;
    try {
        let newTransferenciaInterna = await transferencia_interna.create({
            anio_transferencia_interna,
            id_sede_origen,
            id_sede_destino,
            mes_transferencia_interna,
            fecha_transferencia_interna,
            expediente_transferencia_interna,
            desc_transferencia_interna,
            monto_transferencia_interna,
            id_detalle_pago
        });

        if (newTransferenciaInterna) {
            return res.json({
                "message": "se creó la transferencia interna",
                data: newTransferenciaInterna
            });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error en el servidor 505",
            data: {}
        });
    }

}

export async function deleteTransferenciaInterna(req, res){
    const { id } = req.params;
    try {
        const deleteCount = await transferencia_interna.destroy({
            where:{
                id_transferencia_interna: id
            }
        });
        res.json({
            message: 'Se eliminó la transferencia interna',
            count: deleteCount
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "no se pudo eliminar el registro, error en el servidor",
            data: {}
        });
    }
}

export async function updateTransferenciaInterna(req, res){
    const { id } = req.params;
    const { anio_transferencia_interna, id_sede_origen, id_sede_destino, mes_transferencia_interna,
        fecha_transferencia_interna, expediente_transferencia_interna, desc_transferencia_interna,
        monto_transferencia_interna, id_detalle_pago } = req.body;
    try {
        const transferencias = await transferencia_interna.findAll({
            attributes: ['id_transferencia_interna','anio_transferencia_interna', 'id_sede_origen', 'id_sede_destino', 'mes_transferencia_interna',
                'fecha_transferencia_interna', 'expediente_transferencia_interna', 'desc_transferencia_interna',
                'monto_transferencia_interna', 'id_detalle_pago'],
            where:{
                id_transferencia_interna: id
            }
        });
        if(transferencias.length >0) {
            transferencias.forEach(async transferencia_interna =>{
                await transferencia_interna.update({
                    anio_transferencia_interna, 
                    id_sede_origen, 
                    id_sede_destino, 
                    mes_transferencia_interna,
                    fecha_transferencia_interna, 
                    expediente_transferencia_interna, 
                    desc_transferencia_interna,
                    monto_transferencia_interna, 
                    id_detalle_pago
                });
            });
        }
        
        return res.json({
            message: 'transferencia-interna actualizada satisfactoriamente',
            data: transferencias
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error en el servidor, no se pudo actualizar el registro",
            data: {}
        });
    }
}