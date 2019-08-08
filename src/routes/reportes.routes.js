import { Router } from 'express';

import { transferencia_interna } from '../controllers/reportes.controller';

const router = Router();

router.get('/transferencia-interna', transferencia_interna);

export default router;