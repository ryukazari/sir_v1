import { Router } from 'express';

import { listarFamiliasConcepto } from '../controllers/familia_concepto.controller'

const router = Router();

/* Listar todas las familias de conceptos de pago */
router.get('/',listarFamiliasConcepto);

export default router;