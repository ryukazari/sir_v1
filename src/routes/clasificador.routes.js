import { Router } from 'express';

import { crearClasificador, editarClasificador, listarClasificador, listarClasificadorById } from '../controllers/clasificador.controller';

const router = Router();

router.get('/',listarClasificador);
router.get('/:id_clasificador',listarClasificadorById);
router.post('/', crearClasificador);
router.put('/:id_clasificador',editarClasificador);


export default router;