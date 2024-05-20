/*Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.

2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade.*/

type Student= {
    name: string,
    grades: (number[ ]),

}
const students : Student[]=[
   { 
    name:"Aleeze",
     grades:[20, 30 ,45] 
    },
    {
        name: "Amna",
        grades: [35, 55, 89],
    },
    {
        name: "Insha",
        grades: [15, 99, 55]
    }
]

  // function that calculates the average grade of student
function calculateAverageGrade(studentGrade:number[]) {
    let average = studentGrade.reduce((a,b) => a+b ) / studentGrade.length
    return Math.floor(average)
}

// iterating arrray to print name and average grade of each student
students.forEach((student) => { 
    console.log(`Student Name: ${student.name}, Average Grade: ${calculateAverageGrade(student.grades)}`);
 })