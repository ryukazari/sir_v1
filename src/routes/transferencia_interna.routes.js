import { Router } from 'express';

import { createTransferenciaInterna, listarTransferenciasInternas, getTransferenciaInterna
        ,deleteTransferenciaInterna, updateTransferenciaInterna} from '../controllers/transferencia_interna.controller';

const router = Router();

//api/transferencia-interna
router.post('/', createTransferenciaInterna);
router.get('/', listarTransferenciasInternas);
//api/transferencia-interna/id
router.get('/:id', getTransferenciaInterna);
router.delete('/:id', deleteTransferenciaInterna);
router.put('/:id',updateTransferenciaInterna);

export default router;