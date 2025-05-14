// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Ajouter une notification
router.post('/', async (req, res) => {
  try {
    const newNotification = new Notification(req.body);
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenir toutes les notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Marquer une notification comme lue
router.put('/:id', async (req, res) => {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!updatedNotification) return res.status(404).json({ message: "Notification non trouvée" });
    res.status(200).json(updatedNotification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Supprimer une notification
router.delete('/:id', async (req, res) => {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(req.params.id);
    if (!deletedNotification) return res.status(404).json({ message: "Notification non trouvée" });
    res.status(200).json({ message: "Notification supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
