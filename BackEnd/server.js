const express = require('express');
const pool = require('./db');
const app = express();
const port = 3000; // אפשר לשנות את הפורט אם תרצה

// Middleware to parse JSON
app.use(express.json());



// בדיקת חיבור לדאטה בייס
app.get('/test-db', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()'); // בדיקה פשוטה עם שאילתה
      res.json({ success: true, time: result.rows[0].now });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
