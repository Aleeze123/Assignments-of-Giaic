/*1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.*/

type Employee={
    name: string,
    hoursWorked: number,
    hourlyRate : number,
    salary: number,
}
const employees: Employee[] = [
    {
        name: "Zain",
        hoursWorked: 6,
        hourlyRate: 50,
        salary: 0
    },
    {
        name: "Aiman",
        hoursWorked: 13,
        hourlyRate: 58,
        salary: 0
    },
    {
        name: "Aziz",
        hoursWorked: 25,
        hourlyRate: 77,
        salary: 0
    }
]
function calculateSalary() {
    employees.forEach((employee) => {
        // calculating salary
        employee.salary = employee.hourlyRate * employee.hoursWorked
        // adding 10% bonus to the salary if employee works for 20 hours or more
        if (employee.hoursWorked >= 20) {
            let bonus = employee.salary * 0.1
            employee.salary += bonus
        }
     })
}

calculateSalary()
// Output the result
console.log(employees);