'use strict'

function addGrades(grades, newGrades) {
	newGrades = newGrades.split(',');
	newGrades.forEach(grade => grades.push(grade));
	return grades;
}

function clearGrades(grades) {
	grades = grades.filter(grade => !isNaN(grade) && (Number(grade) <= 10 && Number(grade) >= 0));
	grades = grades.map((grade) => grade = Number(String(grade).replaceAll(' ', '')));

	return grades;
}

function firstFailed(grades) {
	grades = clearGrades(grades);
	return grades.find(grade => grade < 5);
}

function passedGrades(grades) {
	grades = clearGrades(grades);
	return grades.filter(grade => grade >= 5);
}

function avgGrade(grades) {
	grades = clearGrades(grades);
	let total =  grades.reduce((total,grade) => total += grade,0);
	return (total / grades.length).toFixed(2);
}

function finalGrades(grades, increment) {
	grades = clearGrades(grades);
	increment = increment / 100;
	return grades.map(grade => Math.round(grade + grade * increment));
}

module.exports = {
	addGrades,
	clearGrades,
	firstFailed,
	passedGrades,
	avgGrade,
	finalGrades
}