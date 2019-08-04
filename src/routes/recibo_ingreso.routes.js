import { Router } from 'express'

import { crearReciboIngreso, editarReciboIngreso, listarReciboIngreso, listarReciboIngresoById } from '../controllers/recibo_ingreso.controller';

const router = Router();

router.get('/', listarReciboIngreso);
router.get('/:id_recibo_ingreso', listarReciboIngresoById);
router.post('/', crearReciboIngreso);
router.put('/:id_recibo_ingreso', editarReciboIngreso);

export default router;