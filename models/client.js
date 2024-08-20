import mysql from 'mysql2';
import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const ClientModel = {
  create: (id_client, nom, prenom, email, callback) => {
    const query = 'INSERT INTO client (nom, prenom, email, id_client) VALUES (?, ?, ?, ?)';
    db.query(query, [nom, prenom, email,id_client], (err, results) => {
      if (err) {
        console.error('Error creating client:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM client';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error retrieving clients:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getById: (id_client, callback) => {
    const query = 'SELECT * FROM client WHERE id_client = ?';
    db.query(query, [id_client], (err, results) => {
      if (err) {
        console.error('Error retrieving client by ID:', err.message);
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  update: (id_client, nom, prenom, email, callback) => {
    const query = 'UPDATE client SET nom = ?, prenom = ?, email = ? WHERE id_client = ?';
    db.query(query, [nom, prenom, email, id_client], (err, results) => {
      if (err) {
        console.error('Error updating client:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  delete: (id_client, callback) => {
    const query = 'DELETE FROM client WHERE id_client = ?';
    db.query(query, [id_client], (err, results) => {
      if (err) {
        console.error('Error deleting client:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};
