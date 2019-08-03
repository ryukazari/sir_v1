import express, { json } from 'express';
import morgan from 'morgan'

const app = express();

/* Import Routes*/
import transferenciaInterna from './routes/transferencia_interna';
import taskRoutes from './routes/tasks';


/* Middleware */ 
app.use(morgan('dev'));
app.use(json());

/* Routes */
app.use('/api/transferencia-interna',transferenciaInterna);
app.use('/api/tasks',taskRoutes);


export default app;