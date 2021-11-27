const factories = [
  { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
  { name: "BR2", employees: ["Jessie", "Karen", "John"] },
  { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
  { name: "BR4", employees: [] }
];

/*
1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
*/

let employeesCounter = [];
factories.forEach(element => {
  employeesCounter.push({neme: element.name, count: element.employees.length});
});
console.log(employeesCounter);

// ## Done !

/*
2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
*/

let factoriesCounter = [];
let employeeList = [];

factories.forEach(factory => {
  factory.employees.forEach(empolyee => {
    employeeList[empolyee] = employeeList[empolyee] ? employeeList[empolyee] + 1 : 1;
  });
});

Object.keys(employeeList).forEach(empolyee => {
  factoriesCounter.push({empolyee: empolyee, count: employeeList[empolyee]});
})

console.log(factoriesCounter);

// ## Done !

/*
3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
*/

factories.forEach(factory => {
  factory.employees.sort()
} )
console.log(factories);

// ## Done !



const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

const tasks = [
      {id: 1, title: "task01", duration: 60}, //min
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];

/*
4. Count total hours worked in 1 day ? // => 39
*/
function stringToSecond(time) {
  var result = 0;
  var timeArray = time.split(':');
  result = parseInt(timeArray[0]) * 60;
  result += parseInt(timeArray[1]);
  result *= 60;
  result += parseInt(timeArray[2]);
  return result;
}

function secondToHours(sec) {
  return sec / 60 / 60 ;
}


let empolyeeTypeWorkSeconds = []
employeeType.forEach(type =>{
  var tempWorkTime = stringToSecond(type.work_end) - stringToSecond(type.work_begin)
  empolyeeTypeWorkSeconds[type.id] = (tempWorkTime > 0 ) ? tempWorkTime : (tempWorkTime + (24 * 60 * 60)); 
})
let totalWorkedSeconds = 0;
employees.forEach(empolyee => {
  totalWorkedSeconds += empolyeeTypeWorkSeconds[empolyee.type];
})
console.log(secondToHours(totalWorkedSeconds));
// ## Done !

/*
5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
*/
function howManyEmployeeByTime(time) {
  let empolyeeWrokByTime = [];
  let checkTime = stringToSecond(time);
  let wrokingType = [];

  employeeType.forEach(type => {
   if(stringToSecond(type.work_begin) <= checkTime &&  stringToSecond(type.work_end) >= checkTime) {
     wrokingType.push(type.id);
   }
  });
  employees.forEach(empolyee => {
    if(wrokingType.indexOf(empolyee.type) != -1) {
      empolyeeWrokByTime.push(empolyee);
    };
  });

  return empolyeeWrokByTime.length;
}
console.log(howManyEmployeeByTime("09:00:00"));

// ## Done !

/*
6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
*/

let totalTaskDurations = 0;

tasks.forEach(task => {
  totalWorkedSeconds += task.duration;
});

let neededDays = Math.ceil(totalWorkedSeconds/(24-9)/60/60);
console.log(neededDays);


// ## Done !