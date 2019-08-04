import { Router } from 'express';

import { crearTipoIngreso, editarTipoIngreso, listarTipoIngreso, listarTipoIngresoById } from '../controllers/tipo_ingreso.controller';

const router = Router();

router.get('/', listarTipoIngreso);
router.get('/:id_tipo_ingreso', listarTipoIngresoById);
router.post('/', crearTipoIngreso);
router.put('/:id_tipo_ingreso', editarTipoIngreso);

export default router;