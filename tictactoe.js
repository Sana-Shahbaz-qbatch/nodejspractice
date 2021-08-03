/* tic tac toe */

var _ = require('lodash');
const prompt = require('prompt-sync')();

function displayGrid(grid)
{
    let count=0;
        
        for (var j=0 ; j<1; j++)
        {
            console.log(grid)
            count++;

            if(count == 3)
            {
                console.log('\n');
                count=0;
            }
        }
}

const Computer = (grid) => {
    let check='False'
    do {
    let number = _.random(0,8);
    //console.log(number)

    if (_.isEqual(grid[number] , 'O')){
        grid[number] = 'X'
        check = 'True'
    }
}while(check != 'True')

displayGrid(grid)
}

const check = (grid) => {
    if (grid[0] == grid[4] && grid[4] == grid[8])
    return grid[0]
    
    if (grid[2] == grid[4] && grid[4] == grid[6])
    return grid[2]

    if (grid[0] == grid[1] && grid[1] == grid[2])
    return grid[0]

    if (grid[3] == grid[4] && grid[4] == grid[5])
    return grid[3]

    if (grid[6] == grid[7] && grid[7] == grid[8])
    return grid[6] 

    if (grid[0] == grid[3] && grid[3] == grid[6])
    return grid[0]

    if (grid[1] == grid[4] && grid[4] == grid[7])
    return grid[1]

    if (grid[2] == grid[5] && grid[5] == grid[8])
    return grid[2]

    else 
    return 0;

}

const User = (grid) => {
        let check='False'
        do {
        let number = prompt ("Enter the place to mark: ")
        console.log(number)
    
        if (_.isEqual(grid[number] , 'O')){
            grid[number] = 'U'
            check = 'True'
        }
    }while(check != 'True')

    displayGrid(grid)
}

const drawCheck = (grid) => {
    let dCheck = 0;
    for (let i =0 ;i <9; i++) {
        if (grid[i] != 'O')
        {
            dCheck++;
            
        }
    }

    if (dCheck  == 0)
    {console.log("It's a draw!")

    }

}
let grid = ['O' , 'O' , 'O' , 'O' , 'O' , 'O' , 'O' , 'O' , 'O' ]
displayGrid(grid);
let winCheck = 0 
let returnValue
while (_.isEqual (winCheck, 0)){
  User(grid);
  console.log(check(grid)) 
  Computer(grid);
  returnValue = check(grid)
  console.log("returnValue: " + returnValue)
  if(returnValue == 'X' || returnValue == 'U') {break; }
  drawCheck(grid);
}

if (returnValue == 'X')
{console.log("COMPUTER WINS!")}
else if (returnValue == 'U' )
{console.log("USER WINS!")}
else {console.log("IT'S A DRAW!")}
