/* 
An array will contain 3 random numbers. User has to give three inputs and try his luck to see
if he can give the correct 3 numbers
*/

var _ = require('lodash');
const prompt = require('prompt-sync')();


function check(randomNumbers, userNumbers)
{
    let y=0;
    let count = 0; 
    do {
        

        for (var j=0 ;j <userNumbers.length; j++)
        {
            if (_.isEqual(randomNumbers[y], parseInt(userNumbers[j])))
            {
                count++;
            }

        }
        y++;
    }
    while (y < randomNumbers.length)


    console.log("Guessed Count: " + count);
    console.log("You Guessed " + (count/3)*100 + " Correct!")

}

let randomNumbers= [];
let userNumbers= [];
let i = 0 ; 
do 
{
  let num = _.random(1, 10);
  randomNumbers.push(num);
  i++;
}
while ( i < 3)

console.log(randomNumbers)
for (var x=0; x < 3 ; x++){
const userNum = prompt ("Enter number in range of 1-10: " ) 
userNumbers.push(userNum);
}

check(randomNumbers,userNumbers)