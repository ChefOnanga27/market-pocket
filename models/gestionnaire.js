import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const GestionnaireModel = {
  getAllGestionnaires: (callback) => {
    db.query('SELECT * FROM gestionnaire', (err, results) => {
      if (err) {
        console.error("Erreur lors de la récupération des gestionnaires:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getById: (id_gestionnaire, callback) => {
    db.query('SELECT * FROM gestionnaire WHERE id_gestionnaire = ?', [id_gestionnaire], (err, results) => {
      if (err) {
        console.error("Erreur lors de la récupération du gestionnaire par ID:", err.stack);
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  create: (id_gestionnaire, nom, prenom, email, telephone, callback) => {
    const query = 'INSERT INTO gestionnaire (id_gestionnaire, nom, prenom, email, telephone) VALUES (?, ?, ?, ?, ?)';
    const values = [id_gestionnaire, nom, prenom, email, telephone];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Erreur lors de la création du gestionnaire:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  update: (id_gestionnaire, nom, prenom, email, telephone, callback) => {
    const query = 'UPDATE gestionnaire SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id_gestionnaire = ?';
    const values = [nom, prenom, email, telephone, id_gestionnaire];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Erreur lors de la mise à jour du gestionnaire:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  delete: (id_gestionnaire, callback) => {
    db.query('DELETE FROM gestionnaire WHERE id_gestionnaire = ?', [id_gestionnaire], (err, results) => {
      if (err) {
        console.error("Erreur lors de la suppression du gestionnaire:", err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};
