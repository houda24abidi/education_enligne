require('dotenv').config();  // Charger les variables d'environnement
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importer les routes
const coursesRoutes = require('./routes/courseRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes'); // Changement ici
const projectRoutes = require('./routes/projectRoutes');
const reportRoutes = require("./routes/reportRoutes"); // Adjust path as necessary
const adminSettingsRoutes = require('./routes/adminSettingsRoutes');



// Initialisation de l'application Express
const app = express();

// Middleware CORS
app.use(cors());
app.use(express.json()); // Pour analyser les données JSON envoyées dans les requêtes

// Connexion à MongoDB avec gestion d'erreurs améliorée
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/EduNet_platforme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connecté'))
  .catch((err) => {
    console.error('❌ MongoDB erreur:', err);
    process.exit(1); // Terminer le processus en cas d'échec de la connexion
  });

// Définition des routes
app.use('/api/courses', coursesRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/users', userRoutes);  // Changement ici
app.use('/api/projects', projectRoutes);
app.use("/api", reportRoutes);
app.use('api/admin-settings',adminSettingsRoutes);



// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
