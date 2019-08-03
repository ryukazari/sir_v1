import { Router } from 'express'

import { crearNivelClasificador, editarNivelClasificador, listarNivelClasificador } from '../controllers/nivel_clasificador.controller'

const router = Router();

router.get('/', listarNivelClasificador);
router.post('/', crearNivelClasificador);
router.put('/:id_nivel_clasificador', editarNivelClasificador);

export default router;