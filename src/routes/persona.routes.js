import { Router } from 'express'

import { crearPersona, editarPersona, listarPersona, listarPersonaById } from '../controllers/persona.controller';

const router = Router();

router.get('/', listarPersona);
router.get('/:id_persona', listarPersonaById);
router.post('/', crearPersona);
router.put('/:id_persona', editarPersona);

export default router;