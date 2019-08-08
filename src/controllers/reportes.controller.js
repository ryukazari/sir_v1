import { sequelize } from "../database/database";

export async function transferencia_interna(req, res) {
    const { fecha_inicio, fecha_fin, sede_origen, sede_destino } = req.body;
    console.log(sede_origen);
    console.log(sede_destino);
    let where = '';
    if (sede_origen != null && sede_origen != '') where += ' AND s1.id_sede = :sede_origen ';
    if (sede_destino != null && sede_destino != '') where += ' AND s2.id_sede = :sede_destino ';
    console.log(where);

    let query = `
    SELECT  ti.fecha_transferencia_interna, ti.id_transferencia_interna, s1.nombre_sede as origen, s2.nombre_sede as destino,ti.desc_transferencia_interna, ti.expediente_transferencia_interna, ti.monto_transferencia_interna
    FROM transferencia_interna ti
        INNER JOIN sede s2 ON (s2.codigo_sede = ti.id_sede_destino)
        INNER JOIN sede s1 ON (s1.codigo_sede = ti.id_sede_origen)
    WHERE fecha_transferencia_interna BETWEEN :fecha_inicio AND :fecha_fin
    ` + where;
    console.log(query);

    try {
        await sequelize.query(query, {
                replacements: {
                    fecha_inicio: fecha_inicio,
                    fecha_fin: fecha_fin,
                    sede_origen: sede_origen,
                    sede_destino: sede_destino
                }
            }, {
                type: sequelize.QueryTypes.SELECT
            })
            .then(async function(result, metadata) {
                return res.status(200).json({
                    fecha_inicio: fecha_inicio,
                    fecha_fin: fecha_fin,
                    sede_origen: sede_origen,
                    sede_destino: sede_destino,
                    data: result[0]
                });
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla transferencias_internas",
            data: {}
        });
    }
}