import express, { json } from 'express';
import morgan from 'morgan'

const app = express();

/* Import Routes*/
import transferenciaInterna from './routes/transferencia_interna.routes';
import sede from './routes/sede.routes';
import familia_concepto from './routes/familia_concepto.routes';


/* Middleware */ 
app.use(morgan('dev'));
app.use(json());

/* Routes */
app.use('/api/transferencia-interna',transferenciaInterna);
app.use('/api/sede',sede);
app.use('/api/familia-concepto',familia_concepto);

export default app;