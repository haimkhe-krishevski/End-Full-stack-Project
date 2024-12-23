// const express = require('express');
// const pool = require('./db');
// const cors = require('cors');
// const app = express();
// const port = 3000; // אפשר לשנות את הפורט אם תרצה

// // Middleware to parse JSON
// app.use(cors());
// app.use(express.json());



// // בדיקת חיבור לדאטה בייס
// app.get('/test-db', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM contact_forms'); // בדיקה פשוטה עם שאילתה
//     res.json({ success: true, time: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });


// app.post('/contact', async (req, res) => {
//   console.log(req.body);

//   try {
//     const result = await pool.query('INSERT INTO contact_forms (full_name, email, phone, message) VALUES ($1, $2, $3, $4)');
//     res.json({ success: true, full_name, email, phone, message: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: err.message });
//   }

//   res.send('Contact form submitted successfully!');
// })
// // Basic route
// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const pool = require('./db');
const cors = require('cors');
const app = express();
const projectsRoutes = require('./projectsRoutes');
const port = 3000; // אפשר לשנות את הפורט אם תרצה

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// בדיקת חיבור לדאטה-בייס
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contact_forms'); // בדיקה פשוטה עם שאילתה
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// הפעלת הראוט של הפרויקטים
// Routes
// לזכור לוודא שמונח הראוט הנכון
app.use('/', projectsRoutes);

// קבלת נתוני הטופס ושמירתם בדאטה-בייס
app.post('/contact', async (req, res) => {
  const { fullName, email, phone, message } = req.body; // קריאת הנתונים מהגוף של הבקשה

  if (!fullName || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    // הכנסת הנתונים לדאטה-בייס
    const result = await pool.query(
      'INSERT INTO contact_forms (full_name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [fullName, email, phone, message] // שימו לב שהערכים מהבקשה נשלחים לפונקציה
    );
console.log({result});

    // שליחת תגובה ללקוח עם המידע שהוזן
    res.status(201).json({
      success: true,
      data: result.rows[0], // שולחים את השורה שהוזנה לדאטה-בייס חזרה ללקוח
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// מסלול בסיסי
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// התחלת השרת
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
