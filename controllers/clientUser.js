import { ClientModel } from '../models/client.js';

export const ClientController = {
  createClient: (req, res) => {
    const { nom, prenom, email } = req.body;
    ClientModel.create(nom, prenom, email, (err, result) => {
      if (err) {
        res.status(500).send('Error creating client');
      } else {
        res.status(201).json({ message: 'Client created successfully', clientId: result.insertId });
      }
    });
  },

  getAllClients: (req, res) => {
    ClientModel.getAll((err, clients) => {
      if (err) {
        res.status(500).send('Error retrieving clients');
      } else {
        res.json(clients);
      }
    });
  },

  getClientById: (req, res) => {
    const { id } = req.params;
    ClientModel.getById(id, (err, client) => {
      if (err) {
        res.status(500).send('Error retrieving client');
      } else if (!client) {
        res.status(404).send('Client not found');
      } else {
        res.json(client);
      }
    });
  },

  updateClient: (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email } = req.body;
    ClientModel.update(id, nom, prenom, email, (err, result) => {
      if (err) {
        res.status(500).send('Error updating client');
      } else {
        res.json({ message: 'Client updated successfully' });
      }
    });
  },

  deleteClient: (req, res) => {
    const { id } = req.params;
    ClientModel.delete(id, (err, result) => {
      if (err) {
        res.status(500).send('Error deleting client');
      } else {
        res.json({ message: 'Client deleted successfully' });
      }
    });
  }
};
