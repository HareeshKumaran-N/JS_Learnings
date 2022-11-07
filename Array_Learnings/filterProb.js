
//To  find employee who earn  more than 60000

let employees = [
  {
    id: 11,
    name: "Abhinav",
    salary: 75000,
  },
  {
    id: 2131,
    name: "Raj",
    salary: 62000,
  },
  {
    id: 3012,
    name: "Raj",
    salary: 32000,
  },
];

// console.log(check(employees));
console.log("By using filter method: ",filtering(employees));


function check(employees) {

  let filteredArray = [];

   for (let i in employees) 
   {
      if (employees[i].salary > 60000)
      filteredArray.push(employees[i]);
    }
    
  return filteredArray;
}


//Using filter method.
function filtering(employees)
{
   let result=employees.filter((employee)=>{ 
    if (employee.salary > 60000) return employee;
   });
  return result;
}