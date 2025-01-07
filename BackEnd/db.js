const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       // שם המשתמש של PostgreSQL
  host: 'db',       // שם השירות ב-Docker Compose
  database: 'end_project', // שם הדאטה בייס
  password: '12345678',   // הסיסמה שהגדרת
  port: 5432,             // הפורט שבו הדאטה בייס פועל
});

// פונקציה לבדיקת חיבור
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to the database:', err.stack);
  }
  console.log('Connected to the database!');
  release(); // משחרר את החיבור לבריכה
});

module.exports = pool;
