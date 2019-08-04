import persona from '../models/persona.model';

export async function listarPersona(req, res){
    try {
        let personas = await persona.findAll();
        res.status(200).json({
            data: personas
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los registros de la tabla persona",
            data: {}
        });
    }
}

export async function listarPersonaById(req, res){
    const { id_persona } = req.params;
    try {
        let per = await persona.findByPk(id_persona);
        res.status(200).json({
            data: per
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error al obtener el registro de la tabla persona",
            data: {}
        });
    }
}

export async function crearPersona(req, res){
    const { nro_doc_per, ape_pat_per, ape_mat_per, nomb_per, fech_nac_per, correo_per, nro_celular, nro_telefono} = req.body;
    try {
        let per = await persona.create({
            nro_doc_per, 
            ape_pat_per,
            ape_mat_per,
            nomb_per, 
            fech_nac_per, 
            correo_per, 
            nro_celular,
            nro_telefono
        });
        if(per){
            res.status(200).json({
                message: "La persona se creó de manera exitosa.",
                data: per
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

export async function editarPersona(req, res){
    const { id_persona } = req.params;
    const { nro_doc_per, ape_pat_per, ape_mat_per, nomb_per, fech_nac_per, correo_per, nro_celular, nro_telefono} = req.body;
    /*
    let fecha = new Date();
    let month = fecha.getMonth();
    month = month+1;
    aud_fech_creac = month+"-"+fecha.getDate();+"-"+fecha.getFullYear();
    */
    try {
        let personas = await persona.findAll({
            //attributes: ['id_persona', 'nro_doc_per', 'ape_pat_per', 'ape_mat_per', 'nomb_per', 'fech_nac_per', 'correo_per', 'nro_celular', 'nro_telefono'],
            where:{
                id_persona
            }
        });
        if(personas.length>0){
            personas.forEach(async persona => {
                await persona.update({
                    nro_doc_per, 
                    ape_pat_per,
                    ape_mat_per,
                    nomb_per, 
                    fech_nac_per, 
                    correo_per, 
                    nro_celular,
                    nro_telefono
                })
            });
        }

        res.status(200).json({
            message: "La persona se modificó exitosamente.",
            data: personas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al modificar la Persona",
            data: {}
        });
    }
}