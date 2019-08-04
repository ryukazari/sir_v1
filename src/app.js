import express, { json } from 'express';
import morgan from 'morgan'

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


/* Middleware */ 
app.use(morgan('dev'));
app.use(json());

/* Routes */
app.use('/api/transferencia-interna',transferenciaInterna);
app.use('/api/sede',sede);
app.use('/api/familia-concepto',familia_concepto);
app.use('/api/tramite-tupa',tramite_tupa);
app.use('/api/nivel-clasificador',nivel_clasificador);
app.use('/api/clasificador',clasificador);
app.use('/api/concepto-pago',concepto_pago);
app.use('/api/descripcion-concepto',descripcion_concepto);

export default app;