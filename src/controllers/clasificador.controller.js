import clasificador from '../models/clasificador.model';
import nivel_clasificador from '../models/nivel_clasificador.model';

export async function crearClasificador(req, res) {
    const { cod_clasificador, nomb_clasificador, activo_clasificador, desc_clasificador, id_nivel } = req.body;
    try {
        let clasif = await clasificador.create({
            cod_clasificador,
            nomb_clasificador,
            activo_clasificador,
            desc_clasificador,
            id_nivel
        });

        if (clasif) {
            return res.json({
                message: "El Clasificador se creó satisfactoriamente",
                data: clasif
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error en el servidor 505",
            data: {}
        });
    }
}

export async function listarClasificador(req, res) {
    try {
        const clasificadores = await clasificador.findAll();
        res.json({
            data: clasificadores
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error al listar los Clasificadores",
            data: {}
        });
    }
}

export async function listarClasificadorById(req, res) {
    const { id_clasificador } = req.params;
    try {
        const clasif = await clasificador.findByPk(id_clasificador);
        if (clasif.length > 0) {
            res.json({
                data: clasif
            })
        }
    } catch (error) {

    }
}

export async function editarClasificador(req, res) {
    const { id_clasificador } = req.params;
    const { cod_clasificador, nomb_clasificador, activo_clasificador, desc_clasificador, id_nivel } = req.body;
    try {
        const clasificadores = await clasificador.findAll({
            attributes: ['id_clasificador', 'cod_clasificador', 'nomb_clasificador', 'activo_clasificador', 'desc_clasificador', 'id_nivel'],
            where: {
                id_clasificador
            }
        });
        if (clasificadores.length > 0) {
            clasificadores.forEach(async clasificador => {
                await clasificador.update({
                    cod_clasificador,
                    nomb_clasificador,
                    activo_clasificador,
                    desc_clasificador,
                    id_nivel
                });
            });
        }
        return res.json({
            message: "Clasificador modificado exitosamente",
            data: clasificadores
        });
    } catch (error) {
        res.status(500).json({
            message: "Error 5**, no se puedo editar el clasificador",
            data: {}
        });
    }
}

export async function listarClasificadorByNivel(req, res) {
    console.log("1");

    const { id_nivel } = req.params;
    console.log(id_nivel);
    try {
        console.log("Try");
        const clasif = await clasificador.findAll({
            where: {
                id_nivel
            },
            include: [nivel_clasificador]
        });
        console.log(clasif);
        if (clasif.length > 0) {
            console.log("IF");
            return res.json({
                data: clasif
            })
        } else {
            return res.status(404).json({
                message: "No existe registro con el id_nivel: " + id_nivel
            })

        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            "message": "Error al listar los Clasificadores",
            data: {}
        });

    }
}