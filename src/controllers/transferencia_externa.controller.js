import transferencia_externa from '../models/transferencia_externa';


export async function listarTransferenciaExterna(req, res) {
    try {
        let externas = await transferencia_externa.findAll();
        if (externas.length <= 0) {
            return res.json({
                message: 'No hay registros de transferencias internas.',
                data: {}
            });
        } else {
            return res.status(200).json({
                data: externas
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los registros de transferencias internas',
            data: {}
        });
    }
}

export async function listarTransferenciaExternaById(req, res) {
    const { id_transferencia_externa } = req.body;
    try {
        let transferencia = await transferencia_externa.findOne({
            where: {
                id_transferencia_externa
            }
        });

        if (transferencia_externa.length <= 0) {
            return res.json({
                message: 'No existe transferencia interna con id: ' + id_transferencia_externa
            });
        } else {
            return res.status(200).json({
                data: transferencia
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener la transferencia Externa con id: ' + id_transferencia_externa
        });
    }
}

// fecha expediente monto id_sede_destino
export async function crearTransferenciaExterna(req, res) {
    const { fecha_transferencia_externa, expediente_transferencia_externa, monto_transferencia_externa, id_sede_destino } = req.body;
    try {
        let newTransferencia = await transferencia_externa.create({
            fecha_transferencia_externa,
            expediente_transferencia_externa,
            monto_transferencia_externa,
            id_sede_destino
        });
        if (newTransferencia) {
            return res.status(200).json({
                message: 'Se creó la transferencia_externa',
                data: newTransferencia
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear transferencia externa',
            data: {}
        })
    }
}

export async function listarTransferenciaEntranteById(req, res) {
    const { id } = req.params;

    try {
        let transferencias = await transferencia_externa.findAll({
            where: {
                id_transferencia_externa: id
            }
        });
        if (transferencias.length <= 0) {
            return res.status(404).json({
                message: "No existen transferencias entrantes para la sede con id: " + id,
                data: {}
            })
        } else {
            return res.status(200).json({
                data: transferencias
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error al obtener los registros de las trasnferencias entrantes",
            data: {}
        })
    }

}