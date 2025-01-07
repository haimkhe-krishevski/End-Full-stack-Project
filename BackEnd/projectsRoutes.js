const express = require('express');
const router = express.Router();
const multer = require('multer');
const pool = require('./db'); // הנחה שאנחנו משתמשים ב-PG עם connection pool
// const path = require('path');
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// הגדרת אחסון למולטאר
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' );   // + file.originalname
  },
});

const upload = multer({ storage });

// קבלת כל הפרויקטים עם תגובות
router.get('/', async (req, res) => {
  try {
    const projects = await pool.query(`
      SELECT p.id, p.name, p.description, p.link, p.image, 
             json_agg(json_build_object('name', c.name, 'comment', c.comment)) AS comments
      FROM projects p
      LEFT JOIN comments c ON p.id = c.project_id
      GROUP BY p.id;
    `);
    res.json(projects.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// // הוספת פרויקט חדש
// router.post('/', async (req, res) => {
//   try {
//     const { name, description, link, image } = req.body;
//     const newProject = await pool.query(
//       'INSERT INTO projects (name, description, link, image) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, description, link, image]
//     );
//     res.json(newProject.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// הוספת פרויקט חדש
router.post('/', upload.single('image'), async (req, res) => {
  const { name, description, link } = req.body;
  const image = req.file?.path || null;

  if (!name || !description || !link || !image) {
    return res.status(400).send('All fields are required');
  }

  try {
    const result = await pool.query(
      'INSERT INTO projects (name, description, link, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, link, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding project');
  }
});

// הוספת תגובה לפרויקט
router.post('/:id/comments', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, comment } = req.body;
    const newComment = await pool.query(
      'INSERT INTO comments (project_id, name, comment) VALUES ($1, $2, $3) RETURNING *',
      [id, name, comment]
    );
    res.json(newComment.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
