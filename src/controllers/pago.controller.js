import pago from '../models/pago.model';
import { sequelize } from '../database/database';

export async function listarPago(req, res) {
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

export async function listarPagoById(req, res) {
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

export async function crearPago(req, res) {
    const {
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
    } = req.body;
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
        if (p) {
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

export async function editarPago(req, res) {
    const { id_pago } = req.params;
    const {
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
    } = req.body;
    try {
        let p = await pago.findAll({
            where: {
                id_pago
            }
        });
        if (p.length > 0) {
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

export async function listarPagoRealizado(req, res) {
    console.log("1");
    let query = `
    SELECT DISTINCT p.fecha_pago, p.hora_pago, p.nombre_banco, (s.codigo_inicial || '-' || cp.codigo_final) as concept_pago, s.nombre_sede, p.referencia_adicional, p.monto, p.estado
    FROM pago p 
        INNER JOIN detalle_pago dp ON (p.id_pago = dp.id_pago)
        INNER JOIN descripcion_concepto descp ON (dp.id_descripcion_concepto = dp.id_descripcion_concepto)
        INNER JOIN concepto_pago cp ON (descp.id_concepto_pago = cp.id_concepto_pago)
        INNER JOIN sede s ON (s.id_sede = cp.id_sede)
    WHERE p.estado = 1
    `;
    try {
        console.log("2");
        sequelize.query(query, {
                type: sequelize.QueryTypes.SELECT
            })
            .then(results => {
                console.log("3");
                if (!results.length > 0) {
                    console.log("0");
                    return res.status(404).json({
                        message: "No se encontraron pagos realizados",
                        data: {}
                    })
                } else {
                    console.log("5");
                    return res.status(200).json({
                        data: results
                    })
                }
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "ERROR al consultar pagos realizados"
        });
    }

}