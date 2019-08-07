import detalle_pago from '../models/detalle_pago.model';
import { sequelize } from '../database/database';

export async function listarDetallePago(req, res) {
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

export async function listarDetallePagoById(req, res) {
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

export async function crearDetallePago(req, res) {
    const { id_pago, id_concepto_pago, monto, cantidad, estado, fecha_maxima, costo_penalidad, id_penalidad, monto_total } = req.body;
    try {
        let p = await detalle_pago.create({
            id_pago,
            id_concepto_pago,
            monto,
            cantidad,
            estado,
            fecha_maxima,
            costo_penalidad,
            id_penalidad,
            monto_total
        });
        if (p) {
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

export async function editarDetallePago(req, res) {
    const { id_detalle_pago } = req.params;
    const { id_pago, id_concepto_pago, monto, cantidad, estado, fecha_maxima, costo_penalidad, id_penalidad, monto_total } = req.body;
    try {
        let p = await detalle_pago.findAll({
            where: {
                id_detalle_pago
            }
        });
        if (p.length > 0) {
            p.forEach(async detalle_pago => {
                await detalle_pago.update({
                    id_pago,
                    id_concepto_pago,
                    monto,
                    cantidad,
                    estado,
                    fecha_maxima,
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

export async function listarPagosByDni(req, res) {
    const { dni_per } = req.params;
    let query = `
    SELECT  p.fecha_pago, p.hora_pago, p.nombre_banco as banco, ( s.codigo_inicial || '-' || cp.codigo_final ) as concepto_pago, descp.descripcion, s.nombre_sede as sede, COALESCE(dp.monto_total, cp.monto) as monto, 
				(CASE descp.estado 
							WHEN 0 THEN 'en espera'
							WHEN 1 THEN 'pagado'
							WHEN 2 THEN 'extornado'
							WHEN 3 THEN 'devuelto'
							ELSE 'NO CONTEMPLADO' END) as estado
    FROM pago p 
        INNER JOIN detalle_pago dp ON (p.id_pago = dp.id_pago)
        INNER JOIN descripcion_concepto descp ON (dp.id_descripcion_concepto = dp.id_descripcion_concepto AND dp.id_descripcion_concepto = descp.id_desc_concepto)
        INNER JOIN concepto_pago cp ON (descp.id_concepto_pago = cp.id_concepto_pago)
        INNER JOIN usuario u ON (p.id_usuario = u.id_usuario)
        INNER JOIN persona per ON (per.id_persona = u.id_persona)
        INNER JOIN sede s ON (s.id_sede = cp.id_sede)
    WHERE per.nro_doc_per = :dni
			AND dp.estado = 1
                        `
    try {
        sequelize.query(query, {
                replacements: { dni: dni_per },
                type: sequelize.QueryTypes.SELECT
            })
            .then(results => {
                if (!results.length > 0) {
                    return res.status(404).json({
                        message: "No se encontraron pagos para el usuario con DNI: " + dni_per,
                        data: {}
                    })
                } else {
                    return res.status(200).json({
                        data: results
                    })
                }
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "ERROR al consultar pagos por DNI"
        });
    }
}