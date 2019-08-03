import { Router } from 'express';

import { listarFamiliasConcepto, crearFamiliaConcepto, listarFamiliaConceptoById } from '../controllers/familia_concepto.controller';

const router = Router();

/* Listar todas las familias de conceptos de pago */
router.get('/',listarFamiliasConcepto);
/* Listar una familia de concepto por Id */
router.get('/:id_familia_concepto',listarFamiliaConceptoById)
/* Crear familia de conceptos de pago */
router.post('/',crearFamiliaConcepto);

export default router;