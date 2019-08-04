import { Router } from 'express'

import { crearPago, editarPago, listarPago, listarPagoById } from '../controllers/pago.controller';

const router = Router();

router.get('/', listarPago);
router.get('/:id_pago', listarPagoById);
router.post('/', crearPago);
router.put('/:id_pago', editarPago);

export default router;