import { Router } from 'express';

import { listarSedes, crearSede, listarSedesPadres, listarSedesHijos, editarSede} from '../controllers/sede.controller'

const router = Router();

/* Listar todas las sede sin excepciones*/
router.get('/',listarSedes);
/* Listar sede para el registro de un usuario: Sedes sin una sede padre*/
router.get('/padres', listarSedesPadres);
/* Listar sedes de un mismo padre id_sede_padre*/
router.get('/hijos/:id_padre_sede', listarSedesHijos);
/* Crear Sede */
router.post('/',crearSede);
/* Editar Sede */
router.put('/:id',editarSede);

export default router;