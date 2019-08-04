import { Router } from 'express';

import { crearTransferenciaInterna, listarTransferenciaInterna, listarTransferenciaInternaById
        ,eliminarTransferenciaInterna, editarTransferenciaInterna} from '../controllers/transferencia_interna.controller';

const router = Router();

//api/transferencia-interna
router.post('/', crearTransferenciaInterna);
router.get('/', listarTransferenciaInterna);
//api/transferencia-interna/id
router.get('/:id', listarTransferenciaInternaById);
router.delete('/:id', eliminarTransferenciaInterna);
router.put('/:id',editarTransferenciaInterna);

export default router;