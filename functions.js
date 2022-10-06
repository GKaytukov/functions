//function addTwo (a,b) {
    //const addTwo = (a,b) => {}//line 1 and 2 are the same but I like line 1 better
        //return a + b 
//}
    
    const addTwo = require("./external.js")
    const subtract = require("./minus.js")


    //const sum = addTwo(3,4)// addTwo is a function//the 3 is the first parameter 4 is the second parameter
    //console.log(sum)

    const total = subtract(10,5)
    console.log(total)