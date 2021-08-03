/* Write theC++program for processing of the student’s structure. 
Define the array of a structure called students including following 
fields: “First name” “Last Name” “CGPA”You should first get the number of students from 
input and ask user to initialize the fields of the structure for the entered number of students. 
Then delete the record if the cgpa exists and sort the list based on “CGPA” and print the final result in the screen. */

var _ = require('lodash');
const prompt = require('prompt-sync')();

var studentInformation = []
const numberofStudents = prompt('Enter the Number of Students ');
for (var i= 0; i<numberofStudents; i++ )
{
    const fName = prompt ('Enter First Name: ');
    const lName = prompt ('Enter Last Name: ');
    const cgpa = prompt ('Enter CGPA: ');
    let Student={
        'firstName':fName,
        'lastName':lName,
        'CGPA':cgpa
    }
    studentInformation.push(Student);
}
console.log(studentInformation);

///Deleting Students with Same CGPA///
var filteredArray = _.uniqBy(studentInformation,function(x){ return x.CGPA ;});
console.log(filteredArray)

///Sorting the Students by CGPA///
console.log("Sorted Array Without Duplicates is: ")
var sortedArray = _.sortBy (filteredArray, (e) => {return e.CGPA})
console.log(sortedArray)




