import { MagasinModel } from '../models/magasin.js';

export const MagasinController = {
  createMagasin: (req, res) => {
    const { nom, article, categorie } = req.body;
    MagasinModel.create(nom, article, categorie, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Error creating magasin' });
      } else {
        res.status(201).json({ message: 'Magasin created successfully', data: results });
      }
    });
  },

  getAllMagasins: (req, res) => {
    MagasinModel.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Error fetching magasins' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  getMagasinById: (req, res) => {
    const id = req.params.id;
    MagasinModel.getById(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Error fetching magasin' });
      } else if (!result) {
        res.status(404).json({ message: 'Magasin not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },

  updateMagasin: (req, res) => {
    const id = req.params.id;
    const { nom, article, categorie } = req.body;
    MagasinModel.update(id, nom, article, categorie, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Error updating magasin' });
      } else {
        res.status(200).json({ message: 'Magasin updated successfully', data: results });
      }
    });
  },

  deleteMagasin: (req, res) => {
    const id = req.params.id;
    MagasinModel.delete(id, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Error deleting magasin' });
      } else {
        res.status(200).json({ message: 'Magasin deleted successfully' });
      }
    });
  },
};
