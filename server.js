import express from 'express';
import bodyParser from 'body-parser';

import router from './routes/magasin.js';
import client from './routes/client.js';
import livreur from './routes/livreur.js';
import gestionnaire from './routes/gestionnaire.js';

const app = express();
const port =3000
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

app.use('/api',router)
app.use('/api',client)
app.use('/api',livreur)
app.use('/api',gestionnaire)
