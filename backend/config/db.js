const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    // Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/education', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.log('Erreur de connexion à MongoDB :', err));
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connecté');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
