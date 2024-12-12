const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // שם המשתמש של PostgreSQL
  host: 'localhost', // המחשב שבו רץ הדאטה בייס
  database: 'end_project', // שם הדאטה בייס
  password: '12345678', // הסיסמה שהגדרת
  port: 5433, 
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
