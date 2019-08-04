import { Router } from 'express';

import { crearSugerencia, editarSugerencia, listarSugerencia, listarSugerenciaById } from '../controllers/sugerencia.controller';

const router = Router();

router.get('/', listarSugerencia);
router.get('/:id_sugerencia', listarSugerenciaById);
router.post('/', crearSugerencia);
router.put('/:id_sugerencia', editarSugerencia);

export default router;