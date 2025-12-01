-- Migration number: 0001 	 2025-06-19T18:13:02.648Z
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    supject TEXT NOT NULL,
    question TEXT NOT NULL,
    q1 TEXT ,
    q2 TEXT ,
    q3 TEXT,
    q4 TEXT,
    ttrue TEXT,
    ffalse TEXT
);
