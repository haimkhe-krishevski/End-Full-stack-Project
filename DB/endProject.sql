-- יצירת טבלה לטפסי יצירת קשר
-- CREATE TABLE contact_forms (
--     id SERIAL PRIMARY KEY,
--     full_name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL,
--     phone VARCHAR(15) NOT NULL,
--     message TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- הוספת נתוני סרק לטפסי יצירת קשר
-- INSERT INTO contact_forms (full_name, email, phone, message)
-- VALUES 
-- ('John Doe', 'john.doe@example.com', '123456789', 'This is a test message.'),
-- ('Jane Smith', 'jane.smith@example.com', '987654321', 'I need help with your service.');

-- יצירת טבלה לתגובות על עבודות
-- CREATE TABLE work_feedback (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     feedback TEXT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- הוספת נתוני סרק לתגובות על עבודות
-- INSERT INTO work_feedback (name, feedback)
-- VALUES 
-- ('Alice', 'Great work on the recent project!'),
-- ('Bob', 'I think the design could use some improvement.');

-- בדיקות

SELECT * FROM contact_forms;
SELECT * FROM work_feedback;

