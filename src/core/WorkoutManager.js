const initDB = require('../database/initDB');

class WorkoutManager {
  constructor() {
    this.dbPromise = initDB();
  }

  async createWorkout(workout) {
    const db = await this.dbPromise;
    await db.executeSql(
      'INSERT INTO workouts (id, name, coach_id) VALUES (?, ?, ?)',
      [workout.id, workout.name, workout.coachId]
    );
  }
}

module.exports = WorkoutManager;