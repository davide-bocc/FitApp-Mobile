const db = require('./db');

const initDB = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      role TEXT CHECK(role IN ('coach', 'student'))
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS workouts (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      coach_id TEXT NOT NULL,
      FOREIGN KEY (coach_id) REFERENCES users(id)
    )
  `);
};

module.exports = initDB;