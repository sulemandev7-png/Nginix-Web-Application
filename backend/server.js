const cors = require("cors");
console.log("✅ THIS IS MY UPDATED SERVER FILE");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional)
app.use(express.json());
app.use(cors());
// Dummy route
app.get('/api', (req, res) => {
  res.json({
    message: 'API is running',
    status: 'success'
  });
});

// Another test route
app.get('/api/users', (req, res) => {
    
  console.log("✅ /api/users route hit");

  res.json([
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ahmed' }
  ]);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
``  