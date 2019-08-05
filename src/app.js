import express, { json } from 'express';
import morgan from 'morgan'
var path = require('path');

const app = express();


/* Import Routes*/
import transferenciaInterna from './routes/transferencia_interna.routes';
import sede from './routes/sede.routes';
import familia_concepto from './routes/familia_concepto.routes';
import tramite_tupa from './routes/tramite_tupa.routes';
import nivel_clasificador from './routes/nivel_clasificador.routes';
import clasificador from './routes/clasificador.routes';
import concepto_pago from './routes/concepto_pago.routes';
import descripcion_concepto from './routes/descripcion_concepto.routes';
import devolucion from './routes/devolucion.routes';
import tipo_ingreso from './routes/tipo_ingreso.routes';
import recibo_ingreso from './routes/recibo_ingreso.routes';
import detalle_recibo_ingreso from './routes/detalle_recibo_ingreso.routes';
import persona from './routes/persona.routes';
import sugerencia from './routes/sugerencia.routes';
import rol from './routes/rol.routes';
import penalidad from './routes/penalidad.routes';
import usuario from './routes/usuario.routes';
import pago from './routes/pago.routes';
import detalle_pago from './routes/detalle_pago.routes';
import index from './routes/index.routes';

const port = process.env.PORT || 3000;

app.set('port', port);


/* Middleware */
app.use(morgan('dev'));
app.use(json());
/* view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Routes */
app.use('/api/transferencia-interna', transferenciaInterna);
app.use('/api/sede', sede);
app.use('/api/familia-concepto', familia_concepto);
app.use('/api/tramite-tupa', tramite_tupa);
app.use('/api/nivel-clasificador', nivel_clasificador);
app.use('/api/clasificador', clasificador);
app.use('/api/concepto-pago', concepto_pago);
app.use('/api/descripcion-concepto', descripcion_concepto);
app.use('/api/devolucion', devolucion);
app.use('/api/tipo-ingreso', tipo_ingreso);
app.use('/api/recibo-ingreso', recibo_ingreso);
app.use('/api/detalle-recibo-ingreso', detalle_recibo_ingreso);
app.use('/api/persona', persona);
app.use('/api/sugerencia', sugerencia);
app.use('/api/rol', rol);
app.use('/api/penalidad', penalidad);
app.use('/api/usuario', usuario);
app.use('/api/pago', pago);
app.use('/api/detalle-pago', detalle_pago);
app.use('/', index);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



export default app;