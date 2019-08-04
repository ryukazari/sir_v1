import { Router } from 'express';

import { crearDetallePago, editarDetallePago, listarDetallePago, listarDetallePagoById } from '../controllers/detalle_pago.controller';

const router = Router();

router.get('/', listarDetallePago);
router.get('/:id_detalle_pago', listarDetallePagoById);
router.post('/', crearDetallePago);
router.put('/:id_detalle_pago', editarDetallePago);

export default router;