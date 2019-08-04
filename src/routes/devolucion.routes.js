import { Router } from 'express';

import { crearDevolucion, editarDevolucion, listarDevoluciones, listarDevolucionesById } from '../controllers/devolucion.controller';

const router = Router();

router.get('/', listarDevoluciones);
router.get('/:id_devolucion', listarDevolucionesById);
router.post('/', crearDevolucion);
router.put('/:id_devolucion', editarDevolucion);

export default router;