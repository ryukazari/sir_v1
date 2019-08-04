import { Router } from 'express';

import { crearUsuario, editarUsuario, listarUsuarioById, listarUsuarios } from '../controllers/usuario.controller';

const router = Router();

router.get('/', listarUsuarios);
router.get('/:id_usuario', listarUsuarioById);
router.post('/', crearUsuario);
router.put('/:id_usuario', editarUsuario);

export default router;