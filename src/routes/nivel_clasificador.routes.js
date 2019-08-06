import { Router } from 'express'

import { crearNivelClasificador, editarNivelClasificador, listarNivelClasificador, editar2NivelClasificador } from '../controllers/nivel_clasificador.controller'

const router = Router();

router.get('/', listarNivelClasificador);
router.post('/', crearNivelClasificador);
router.put('/:id_nivel_clasificador', editar2NivelClasificador);

export default router;