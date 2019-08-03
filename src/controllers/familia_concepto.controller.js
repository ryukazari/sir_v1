import familia_concepto from '../models/familia_concepto.model'

export async function listarFamiliasConcepto(req, res){
    try {
        familia_concepto.findAll();
        return res.json({
            data:familia_concepto
        });
    } catch (error) {
        res.json({
            message: "Error en el servidor 5** no se pudo obtener las familias de conceptos de pago.",
            data: {}
        });
    }
}