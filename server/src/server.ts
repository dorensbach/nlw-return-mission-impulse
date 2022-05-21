import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

/**
 * Maneira correta de usar o cors: informar o endereço do frontend
 *
 * app.use(cors({
 *  origin: 'http://localhost:3000'
 * }));
 */

app.use(cors());
// Para usar JSON:
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('... HTTP server running');
})
