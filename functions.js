//function addTwo (a,b) {
    //const addTwo = (a,b) => {}//line 1 and 2 are the same but I like line 1 better
        //return a + b 
//}
    
    const addTwo = require("./external.js")

    
    const sum = addTwo(3,4)// addTwo is a function//the 3 is the first parameter 4 is the second parameter
    console.log(sum)