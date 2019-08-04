import { Router } from 'express'

import { crearRol, editarRol, listarRol, listarRolById } from '../controllers/rol.controller';

const router = Router();

router.get('/', listarRol);
router.get('/:id_rol', listarRolById);
router.post('/', crearRol);
router.put('/:id_rol', editarRol);

export default router;