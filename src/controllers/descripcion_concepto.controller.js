import descripcion_concepto from '../models/descripcion_concepto.model';

export async function listarDescripcionConcepto(req, res){
    try {
        let conceptos = await descripcion_concepto.findAll();
        if(conceptos.length>0){
            return res.status(200).json({
                data: conceptos
            });
        }else{
            return res.status(404).json({
                message: "No existen registros en la tabla descripcion_concepto",
                data: {}
            });

        }
    } catch (error) {
        res.status(500).json({
            message: "Error a la hora de obtener los registros.",
            data: {}
        })
        
    }
}

export async function listarDescripcionConceptoById(req, res){
    const { id_desc_concepto } = req.params;
    try {
        let descripcion = await descripcion_concepto.findByPk(id_desc_concepto);
        if(!descripcion){
            return res.status(404).json({
                message: "No existe un registro con el id:"+id_desc_concepto,
                data:{}
            });
        }
        return res.status(200).json({
            data: descripcion
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener el registro.",
            data: {}
        });
        
    }
}

export async function crearDescripcionConcepto(req, res){
    const { descripcion, monto, id_concepto_pago, estado } = req.body;
    try {
        let desc = await descripcion_concepto.create({
            descripcion, 
            monto, 
            id_concepto_pago, 
            estado
        });
        if(desc){
            res.status(200).json({
                message: "La descripcion del concepto se creó exitosamente.",
                data: desc
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error al registrar la descripcion del concepto.",
            data: {}
        });
    }
}

export async function editarDescripcionConcepto(req, res){
    const { id_desc_concepto } = req.params;
    const { descripcion, monto, id_concepto_pago, estado } = req.body;
    try {
        let desc = await descripcion_concepto.findAll({
            attributes: [ 'id_desc_concepto', 'descripcion', 'monto', 'id_concepto_pago', 'estado' ],
            where:{
                id_desc_concepto
            }
        });
        if(!desc){
            return res.status(404).json({
                message: "No existe un registro con el id:"+id_descripcion_concepto,
                data:{}
            });
        }
        desc.forEach(async descripcion_concepto =>{
            descripcion_concepto.update({
                descripcion, 
                monto, 
                id_concepto_pago, 
                estado
            })
        });
        return res.status(200).json({
            message: "El registro se modificó existosamente",
            data: desc
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error al editar el registro.",
            data: {}
        });
    }
}