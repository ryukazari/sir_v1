import { Router } from 'express';

import { listarTramitesTupa, listarTramiteTupaById, crearTramiteTupa } from '../controllers/tramite_tupa.controller';

const router = Router();

/* lista todos los trámites TUPA */
router.get('/', listarTramitesTupa);
/* lista un trámites TUPA por ID */
router.get('/:id_tramite', listarTramiteTupaById);
/* crea un trámite TUPA */
router.post('/', crearTramiteTupa);

export default router;