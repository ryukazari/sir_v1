import { Router } from 'express';

import { crearConceptoPago, editarConceptoPago, listarConceptoPago, listarConceptoPagoById } from '../controllers/concepto_pago.controller';

const router = Router();

router.get('/', listarConceptoPago);
router.get('/:id_concepto_pago', listarConceptoPagoById);
router.post('/', crearConceptoPago);
router.put('/:id_concepto_pago', editarConceptoPago);

export default router;