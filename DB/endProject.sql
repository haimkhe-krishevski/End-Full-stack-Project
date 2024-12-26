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


-- יצירת טבלת projects
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    link VARCHAR(255),
    image VARCHAR(255)
);

-- יצירת טבלת comments
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    comment TEXT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

ALTER TABLE comments
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;



-- הוספת פרויקטים לטבלת projects
INSERT INTO projects (name, description, link, image)
VALUES 
('My First Project', 'This is a manually added project.', 'https://example.com', 'https://via.placeholder.com/400x200'),
('Another Project', 'This is another project description.', 'https://another-example.com', 'https://via.placeholder.com/400x200');
INSERT INTO projects (name, description, link, image)
VALUES
('example to img valid', 'example to img valid', 'https://example.com', 'https://via.placeholder.com/400x200');

INSERT INTO projects (name, description, link, image)
VALUES
('example no. 2', 'example to img valid', 'C:\Users\User\Documents\Full stack\Code folders\End-Full-stack-Project\UI\src\media\פרופיל יוסי שפיגלר.jpg', 'https://via.placeholder.com/400x200');

INSERT INTO projects (name, description, link, image)
VALUES
('example no. 3', 'example to img valid', 'C:\Users\User\Documents\Full stack\Code folders\End-Full-stack-Project\UI\src\media\פרופיל יוסי שפיגלר.jpg', 'UI/src/media/פרופיל יוסי שפיגלר.jpg');

-- עדכון מגבלת תוים לתמיכה בקישור ארוך
ALTER TABLE projects
ALTER COLUMN link TYPE VARCHAR(500);
ALTER COLUMN image TYPE VARCHAR(500);




INSERT INTO projects (name, description, link, image)
VALUES
('example no. 4', 'example to img valid', 'https://yt3.googleusercontent.com/ytc/AIdro_niQu6E6-fm35Ch1lahvAvBpg-ACLEHcX0lCPnlropVtA', 'https://yt3.googleusercontent.com/ytc/AIdro_niQu6E6-fm35Ch1lahvAvBpg-ACLEHcX0lCPnlropVtA');

-- הוספת תגובות לטבלת comments
INSERT INTO comments (project_id, name, comment)
VALUES
(1, 'Alice', 'Great project!'),
(1, 'Bob', 'Very informative.'),
(2, 'Charlie', 'Looks amazing!'),
(2, 'Dana', 'I love the design!');





-- בדיקות

SELECT * FROM projects;

SELECT p.name AS project_name, c.name AS commenter_name, c.comment
FROM comments c
JOIN projects p ON c.project_id = p.id
WHERE p.id = 1;


SELECT * FROM contact_forms;
SELECT * FROM work_feedback;

