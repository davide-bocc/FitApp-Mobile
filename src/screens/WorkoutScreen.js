import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { WorkoutManager } from '../core/WorkoutManager';
import { TimerService } from '../core/TimerService';

export default function WorkoutScreen({ route }) {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [completedReps, setCompletedReps] = useState(0);

  useEffect(() => {
    const loadWorkout = async () => {
      const ex = await WorkoutManager.startWorkout(route.params.workoutId);
      setExercises(ex);
      setCurrentExercise(ex[0]);
    };
    loadWorkout();
  }, []);

  const handleCompleteRep = async () => {
    if (!currentExercise) return;

    const newReps = completedReps + 1;
    setCompletedReps(newReps);

    if (newReps >= currentExercise.reps) {
      await TimerService.startRestTimer(currentExercise.rest_seconds);
      // Passa al prossimo esercizio
      const nextIndex = exercises.indexOf(currentExercise) + 1;
      if (nextIndex < exercises.length) {
        setCurrentExercise(exercises[nextIndex]);
        setCompletedReps(0);
      }
    }
  };

  return (
    <View>
      {currentExercise && (
        <>
          <Text>{currentExercise.name}</Text>
          <Text>Ripetizione: {completedReps}/{currentExercise.reps}</Text>
          <Button
            title="Completa Ripetizione"
            onPress={handleCompleteRep}
          />
        </>
      )}
    </View>
  );
}