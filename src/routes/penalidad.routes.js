import { Router } from 'express'

import { crearPenalidad, editarPenalidad, listarPenalidad, listarPenalidadById } from '../controllers/penalidad.controller';

const router = Router();

router.get('/', listarPenalidad);
router.get('/:id_penalidad', listarPenalidadById);
router.post('/', crearPenalidad);
router.put('/:id_penalidad', editarPenalidad);

export default router;