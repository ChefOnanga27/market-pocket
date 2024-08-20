import express from 'express';
import { LivreurController } from '../controllers/livreurUser.js';

const livreur = express.Router();

livreur.get('/livreur', LivreurController.getAllLivreurs);
livreur.get('/livreur/:id', LivreurController.getLivreurById);
livreur.post('/livreur', LivreurController.createLivreur);
livreur.put('/livreur/:id', LivreurController.updateLivreur);
livreur.delete('/livreur/:id', LivreurController.deleteLivreur);

export default livreur;
