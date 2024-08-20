import express from 'express';
import { MagasinController } from '../controllers/magasinUsers.js';

const router = express.Router();

router.post('/magasin', MagasinController.createMagasin);
router.get('/magasin', MagasinController.getAllMagasins);
router.get('/magasin/:id', MagasinController.getMagasinById);
router.put('/magasin/:id', MagasinController.updateMagasin);
router.delete('/magasin/:id', MagasinController.deleteMagasin);

export default router;
