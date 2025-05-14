const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Mocked database (for demonstration purposes)
let adminSettings = {
  name: "Admin Principal",
  email: "admin@example.com",
  password: "password123", // In a real application, hash the password
};

// Route to handle updating admin settings
router.put("/api/admin-settings", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Simple validation (you can improve this)
    if (!name || !email) {
      return res.status(400).json({ message: "Nom et email sont requis" });
    }

    // Update the admin settings
    adminSettings.name = name;
    adminSettings.email = email;

    if (password) {
      // If password is provided, hash it before updating
      const hashedPassword = await bcrypt.hash(password, 10);
      adminSettings.password = hashedPassword;
    }

    // Respond with success message
    res.json({ message: "Paramètres mis à jour avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour des paramètres" });
  }
});

module.exports = router;
