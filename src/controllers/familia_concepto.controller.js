import familia_concepto from '../models/familia_concepto.model';

export async function listarFamiliasConcepto(req, res){
    try {
        const familias = await familia_concepto.findAll();
        res.json({
            data: familias
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor 5**, no se pudo obtener el/los registros.",
            data:{}
        });
    }
}

export async function listarFamiliaConceptoById(req, res){
    const { id_familia_concepto } = req.params;
    try {
        const familia = await familia_concepto.findByPk(id_familia_concepto);
        res.json({
            data: familia
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor 5**, no se pudo obtener el registros.",
            data:{}
        });
    }
}

export async function crearFamiliaConcepto(req, res){
    const { nombre_familia_concepto, desc_familia_concepto } = req.body;
    try {
        let new_familia_concepto = await familia_concepto.create({
            nombre_familia_concepto, 
            desc_familia_concepto
        });

        if (new_familia_concepto) {
            return res.json({
                message: "se creó la familia de conceptos de pago.",
                data: new_familia_concepto
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor 5** no se pudo crear la familia de conceptos de pago.",
            data: {}
        });
    }
}

export async function editarFamiliaConcepto(req, res){
    const { id } = req.params;
    const { nombre_familia_concepto, desc_familia_concepto } = req.body;
    try {
        const familias = await familia_concepto.findAll({
            attributes:[
                'id_familia_concepto', 'nombre_familia_concepto', 'desc_familia_concepto'
            ],
            where:{
                id_familia_concepto: id
            }
        });
        if(familias.length>0){
            familias.forEach(async familia_concepto=>{
                await familia_concepto.update({
                    nombre_familia_concepto,
                    desc_familia_concepto
                });
            });
        }
        
        return res.json({
            message: 'Familia de conceptos de pago actualizada satisfactoriamente',
            data: familias
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al editar la Familia de Conceptos de Pago."
        });
    }
}
