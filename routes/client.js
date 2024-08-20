import express from 'express';
import { ClientController } from '../controllers/clientUser.js';

const client= express.Router();

client.post('/client', ClientController.createClient);
client.get('/client', ClientController.getAllClients);
client.get('/client/:id', ClientController.getClientById);
client.put('/client/:id', ClientController.updateClient);
client.delete('/client/:id', ClientController.deleteClient);

export default client;
