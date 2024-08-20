import { LivreurModel } from '../models/livreur.js';

export const LivreurController = {
  getAllLivreurs: (req, res) => {
    LivreurModel.getAllLivreurs((err, livreurs) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des livreurs.");
      } else {
        res.json(livreurs);
      }
    });
  },

  getLivreurById: (req, res) => {
    const id = req.params.id;
    LivreurModel.getById(id, (err, livreur) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération du livreur.");
      } else if (!livreur) {
        res.status(404).send("Livreur non trouvé.");
      } else {
        res.json(livreur);
      }
    });
  },

  createLivreur: (req, res) => {
    const { nom, prenom, societe } = req.body;
    LivreurModel.create(nom, prenom, societe, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la création du livreur.");
      } else {
        res.status(201).json({ message: "Livreur créé avec succès.", results });
      }
    });
  },

  updateLivreur: (req, res) => {
    const id = req.params.id;
    const { nom, prenom, societe } = req.body;
    LivreurModel.update(id, nom, prenom, societe, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la mise à jour du livreur.");
      } else {
        res.json({ message: "Livreur mis à jour avec succès.", results });
      }
    });
  },

  deleteLivreur: (req, res) => {
    const id = req.params.id;
    LivreurModel.delete(id, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la suppression du livreur.");
      } else {
        res.json({ message: "Livreur supprimé avec succès." });
      }
    });
  }
};
