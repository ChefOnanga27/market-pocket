import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const MagasinModel = {
  create: (nom, article, categorie,Id_magasin, callback) => {
    const query = 'INSERT INTO magasin (nom, article, categorie, Id_magasin) VALUES (?, ?, ?)';
    const values = [nom, article, categorie, Id_magasin];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error creating magasin:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM magasin';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching magasins:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getById: (Id_magasin, callback) => {
    const query = 'SELECT * FROM magasin WHERE Id_magasin = ?';
    db.query(query, [Id_magasin], (err, results) => {
      if (err) {
        console.error('Error fetching magasin by ID:', err.message);
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  update: (Id_magasin, nom, article, categorie, callback) => {
    const query = 'UPDATE magasin SET nom = ?, article = ?, categorie = ? WHERE Id_magasin = ?';
    const values = [nom, article, categorie, Id_magasin];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error updating magasin:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  delete: (Id_magasin, callback) => {
    const query = 'DELETE FROM magasin WHERE Id_magasin = ?';
    db.query(query, [Id_magasin], (err, results) => {
      if (err) {
        console.error('Error deleting magasin:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },
};
