const express = require('express');
const router = express.Router();
const pool = require('./db');  // נניח שאתה משתמש ב-PostgreSQL דרך pg או ספרייה דומה

// הוספת תגובה
// router.post('/:projectId', async (req, res) => {
//     const { name, comment } = req.body;
//     const { projectId } = req.params;

//     try {
//         const result = await db.query(
//             'INSERT INTO comments (project_id, name, comment) VALUES ($1, $2, $3) RETURNING *',
//             [projectId, name, comment]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('שגיאה בהוספת תגובה');
//     }
// });

router.post('/contact', async (req, res) => {
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
    console.log(result.rows);
    
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

module.exports = router;
