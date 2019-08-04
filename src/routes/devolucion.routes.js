import { Router } from 'express';

import { crearDevolucion, editarDevolucion, listarDevolucion, listarDevolucionById } from '../controllers/devolucion.controller';

const router = Router();

router.get('/', listarDevolucion);
router.get('/:id_devolucion', listarDevolucionById);
router.post('/', crearDevolucion);
router.put('/:id_devolucion', editarDevolucion);

export default router;