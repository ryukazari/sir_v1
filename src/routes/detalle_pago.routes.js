import { Router } from 'express';

import { crearDetallePago, editarDetallePago, listarDetallePago, listarDetallePagoById, listarPagosByDni } from '../controllers/detalle_pago.controller';

const router = Router();

router.get('/', listarDetallePago);
router.get('/:id_detalle_pago', listarDetallePagoById);
router.post('/', crearDetallePago);
router.put('/:id_detalle_pago', editarDetallePago);
router.get('/verificar-pago/:dni_per', listarPagosByDni);

export default router;