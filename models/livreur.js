import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const LivreurModel = {
  getAllLivreurs: (callback) => {
    db.query('SELECT * FROM livreur', (err, results) => {
      if (err) {
        console.error("Erreur lors de la récupération des livreurs:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getById: (id_livreur, callback) => {
    db.query('SELECT * FROM livreur WHERE id_livreur = ?', [id_livreur], (err, results) => {
      if (err) {
        console.error("Erreur lors de la récupération du livreur par ID:", err.stack);
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  create: (id_livreur, nom, prenom, societe, callback) => {
    const query = 'INSERT INTO livreur (nom, prenom, societe, id_livreur) VALUES (?, ?,?,?)';
    const values = [nom, prenom, societe, id_livreur];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Erreur lors de la création du livreur:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  update: (id_livreur, nom, prenom, societe, callback) => {
    const query = 'UPDATE livreur SET nom = ?, prenom = ?, societe = ? WHERE id_livreur= ?';
    const values = [nom, prenom, societe, id_livreur];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Erreur lors de la mise à jour du livreur:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  delete: (id_livreur, callback) => {
    db.query('DELETE FROM livreur WHERE id_livreur = ?', [id_livreur], (err, results) => {
      if (err) {
        console.error("Erreur lors de la suppression du livreur:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};
