export function calculateGpa(selections, grades) {
  const subjects = selections.filter(x => x.grade !== "excluded");
  const maxGrades = subjects.reduce((sum, x) => sum + x.credits, 0);
  const gradePoints = subjects.reduce((sum, x) => sum + x.credits * grades[x.grade], 0);
  return gradePoints / maxGrades;
}
