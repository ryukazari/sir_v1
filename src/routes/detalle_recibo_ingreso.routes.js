import { Router } from 'express';

import { crearDetalleReciboIngreso, editarDetalleReciboIngreso, listarDetalleReciboIngreso, listarDetalleReciboIngresoById } from '../controllers/detalle_recibo_ingreso.controller';

const router = Router();

router.get('/', listarDetalleReciboIngreso);
router.get('/:id_detalle_recibo_ingreso', listarDetalleReciboIngresoById);
router.post('/', crearDetalleReciboIngreso);
router.put('/:id_detalle_recibo_ingreso', editarDetalleReciboIngreso);

export default router;