function roundToNearestPlate(weight) {
  // Rounds off an amount to the nearest 5lb increment to facilitate lifting w/o
  // 1.25lb plates
  return 5 * Math.round(weight / 5);
}

export function generateWeights(week) {
  // CONSUMES: object representing last week's lifts
  // obj: { squat, deadlift, press, bench, row, weekA, amrap1, amrap2 }
  // returns: object describing the schedule for the next week
  // OUTPUT LOOKS LIKE:
  //
  //    days: [
  //        [{ name: 'squat', weight: '195', sets: 4, reps 8 }, ... , {}],
  //        [....],
  //        [....],
  //    ],
  const days = [];

  if (week.weekA) {
    const benchMult = week.amrap1 ? 2 : 1;
    const squatMult = week.amrap2 ? 2 : 1;

    const benchStep = benchMult * (10 / 3);
    const squatStep = squatMult * 15;
    const deadliftStep = 7.5;
    const rowStep = 5;
    const pressStep = (5 / 3);

    days.push([
      { name: 'bench', weight: roundToNearestPlate(0.9 * (week.bench + benchStep)), sets: 4, reps: 8 },
      { name: 'deadlift', weight: roundToNearestPlate(0.9 * (week.deadlift + deadliftStep)), sets: 4, reps: 8 },
      { name: 'press', weight: roundToNearestPlate(week.press + pressStep), sets: 4, reps: 4 },
      { name: 'row', weight: roundToNearestPlate(week.row + rowStep), sets: 4, reps: 4 },
    ]);

    days.push([
      { name: 'bench', weight: roundToNearestPlate(week.bench + (benchStep * 2)), sets: 4, reps: 4 },
      { name: 'squat', weight: roundToNearestPlate(0.9 * (week.squat + squatStep)), sets: 4, reps: 8 },
      { name: 'press', weight: roundToNearestPlate(week.press + (pressStep * 2)), sets: 4, reps: 8 },
      { name: 'chinups', weight: 0, sets: 4, reps: 8 },
    ]);

    days.push([
      { name: 'bench', weight: roundToNearestPlate(0.9 * (week.bench + benchStep)), sets: 4, reps: 8 },
      { name: 'deadlift', weight: roundToNearestPlate(0.9 * (week.deadlift + deadliftStep)), sets: 4, reps: 8 },
      { name: 'press', weight: roundToNearestPlate(week.press + pressStep), sets: 4, reps: 4 },
      { name: 'row', weight: roundToNearestPlate(week.row + rowStep), sets: 4, reps: 4 },
    ]);
  } else {
    const deadliftMult = week.amrap1 ? 2 : 1;
    const pressMult = week.amrap2 ? 2 : 1;

    const benchStep = (10 / 3);
    const squatStep = 7.5;
    const deadliftStep = deadliftMult * 15;
    const rowStep = 10;
    const pressStep = (5 / 3) * pressMult;

    days.push([
      { name: 'bench', weight: roundToNearestPlate(week.bench + benchStep), sets: 4, reps: 4 },
      { name: 'squat', weight: roundToNearestPlate(0.9 * (week.squat + squatStep)), sets: 4, reps: 8 },
      { name: 'press', weight: roundToNearestPlate(0.9 * (week.press + pressStep)), sets: 4, reps: 8 },
      { name: 'chinups', weight: 0, sets: 4, reps: 8 },
    ]);

    days.push([
      { name: 'bench', weight: roundToNearestPlate(0.9 * (week.bench + (2 * benchStep))), sets: 4, reps: 8 },
      { name: 'deadlift', weight: roundToNearestPlate(week.deadlift + deadliftStep), sets: 4, reps: 4 },
      { name: 'press', weight: roundToNearestPlate(week.press + (2 * pressStep)), sets: 4, reps: 4 },
      { name: 'row', weight: roundToNearestPlate(0.9 * (week.row + rowStep)), sets: 4, reps: 8 },
    ]);

    days.push([
      { name: 'bench', weight: roundToNearestPlate(week.bench + (3 * benchStep)), sets: 3, reps: 4 },
      { name: 'squat', weight: roundToNearestPlate(week.squat + squatStep + squatStep), sets: 3, reps: 4 },
      { name: 'press', weight: roundToNearestPlate(0.9 * (week.press + (3 * pressStep))), sets: 4, reps: 8 },
      { name: 'chinups', weight: 0 , sets: 4, reps: 4 },
    ]);
  }
  return days;
}
