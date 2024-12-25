const express = require('express');
const router = express.Router();
const db = require('./db');  // נניח שאתה משתמש ב-PostgreSQL דרך pg או ספרייה דומה

// שליפת תגובות עבור פרויקט מסוים
router.get('/:projectId', async (req, res) => {
    const { projectId } = req.params;

    try {
        const result = await db.query('SELECT * FROM comments WHERE project_id = $1 ORDER BY created_at DESC', [projectId]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('שגיאה בשליפת תגובות');
    }
});

// הוספת תגובה
router.post('/:projectId', async (req, res) => {
    const { name, comment } = req.body;
    const { projectId } = req.params;

    try {
        const result = await db.query(
            'INSERT INTO comments (project_id, name, comment) VALUES ($1, $2, $3) RETURNING *',
            [projectId, name, comment]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('שגיאה בהוספת תגובה');
    }
});

// מחיקת תגובה (זמין רק למנהל)
router.delete('/:commentId', async (req, res) => {
    const { commentId } = req.params;

    try {
        const result = await db.query('DELETE FROM comments WHERE id = $1 RETURNING *', [commentId]);

        if (result.rowCount === 0) {
            return res.status(404).send('תגובה לא נמצאה');
        }

        res.status(200).send('התגובה נמחקה בהצלחה');
    } catch (err) {
        console.error(err);
        res.status(500).send('שגיאה במחיקת תגובה');
    }
});

module.exports = router;
