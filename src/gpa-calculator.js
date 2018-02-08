import {grades} from './syllabus';

export function calculateGpa(subjects) {
    const filtered_subjects = subjects.filter(x => x.grade !== 'excluded');
    const total = filtered_subjects.reduce((sum, x) => sum+x.credits,0);
    const l = filtered_subjects.reduce((sum,x) => sum+x.credits*grades[x.grade],0);
    return (l/total);
} 