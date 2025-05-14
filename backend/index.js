const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Exemple de données (simule une BDD)
const courses = [
  { id: 1, title: "React pour débutants" },
  { id: 2, title: "Node.js avancé" },
  { id: 3, title: "Machine Learning Introduction" },
];

// Route GET /api/courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend démarré sur http://localhost:${PORT}`);
});
