import Router from 'express';

import { crearDescripcionConcepto, editarDescripcionConcepto, listarDescripcionConcepto, listarDescripcionConceptoById } from '../controllers/descripcion_concepto.controller';

const router = Router();

router.get('/', listarDescripcionConcepto);
router.get('/:id_desc_concepto', listarDescripcionConceptoById);
router.post('/', crearDescripcionConcepto);
router.put('/:id_desc_concepto', editarDescripcionConcepto);

export default router;