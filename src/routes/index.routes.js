import { Router } from 'express';
const router = Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'API SIR_V1' });
});

  
export default router;