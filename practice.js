var _ = require('lodash');
const prompt = require('prompt-sync')();
var users = 
[
    {
      "name": "Hassam",
      "price": 100,
      "date": "2021-07-24"
    },
    {
      "name": "Hassam",
      "price": 50,
      "date": "2021-07-25"
    },
    {
      "name": "Ali",
      "price": 40,
      "date": "2021-07-25"
    },
    {
      "name": "Ali",
      "price": 60,
      "date": "2021-07-26"
    },
    {
      "name": "Zain",
      "price": 100,
      "date": "2021-07-26"
    },
    {
      "name": "Zain",
      "price": 20,
      "date": "2021-07-24"
    },
    {
      "name": "Zain",
      "price": 30,
      "date": "2021-07-27"
    },
    {
      "name": "Hamza",
      "price": 20,
      "date": "2021-07-28"
    },
    {
      "name": "Faizan",
      "price": 60,
      "date": "2021-07-28"
    },
    {
      "name": "Hassam",
      "price": 90,
      "date": "2021-07-28"
    },
    {
      "name": "Hamza",
      "price": 80,
      "date": "2021-07-29"
    },
    {
      "name": "Faizan",
      "price": 50,
      "date": "2021-07-30"
    }
  ]

   ///1///
  var output = _(users)
    .groupBy('date')
    .map(
        (obj, key) => ({
        'date': key,
        'price': _.sumBy(obj, 'price') 
        })
        ) 
    .value(); 

    console.log(output)

    ////2////

    var output2 = _(users)
    .groupBy('name')
    .map(
        (obj, key) => ({
        'name': key,
        'price': _.sumBy(obj, 'price') 
        })
        ) 
    .value(); 

    console.log(output2)

    ///3///
    var filteredArray = _.filter(users, function(e) {return e.price > 30} )
    console.log(filteredArray)


    ///Reduce Practise///
   var reduced = users.reduce(function(userCount, currentValue){

    if (typeof userCount[currentValue.name] !== "undefined")
    {
        userCount[currentValue.name] ++ ;
        return userCount
    }
    else {
        userCount[currentValue.name] = 1 ; 
        return userCount
    }
   } ,{})

   console.log(reduced)