
var _ = require('lodash');
const prompt = require('prompt-sync')();

const number = prompt('Enter a positive number: ');
let factors= []
for (var i= 1; i <=number ; i++)
{
    if (number % i == 0)
    {
        //console.log(number)
        factors.push(i)
    }
}

console.log("Factors:")
console.log(_.chunk(factors,2))

let multiples = []

for (var x= 1; x <=250; x++)
{
    if (x % number == 0)
    {
        //console.log(number)
        multiples.push(x)
    }
}

console.log("Multiples:")
console.log(_.chunk(multiples,2))

console.log("Common Numbers:")
console.log(_.chunk(_.intersection(factors, multiples)))
