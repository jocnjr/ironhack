var cities = ["miami", "barcelona", "madrid"];

var capsCities = cities.map(function(city){
   return city[0].toUpperCase() + city.slice(1);
})


console.log(capsCities);

var students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
  ]

var finalGrades = students.map(function(elem) {
  var projectsAvg = (elem.firstProject + elem.secondProject)/2;
  var finalGrade  = elem.finalExam*0.6 + projectsAvg*0.4;
  return {
    name: elem.name,
    finalGrade: Math.round(finalGrade)
  }
})

// console.log(finalGrades);

var numbers = [2, 4, 6, 8];

var total = numbers.reduce(function(accumulator, current, index){
  console.log(`${index+1}. `,accumulator, current);
  return accumulator + current;
}, 100);

// console.log(total);

var menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

var totalCalories = menu.reduce(function(acc, menuItem){
  return acc + menuItem.calories;
},0);

var averageCalories = totalCalories / menu.length;
console.log(averageCalories);