 let mainWindow = {
    previousNumber :[0],
    newNumber:[],
    calculatorNumber: [],
    operation: "nil"
 }

 document.querySelector("#buttonZero").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(0);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonOne").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(1);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonTwo").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(2);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonThree").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(3);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonFour").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(4);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonFive").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(5);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonSix").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(6);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonSeven").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(7);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonEight").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(8);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonNine").addEventListener('click', function(){
    mainWindow.calculatorNumber.push(9);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    })

document.querySelector("#buttonDot").addEventListener('click', function(){
    if (mainWindow.calculatorNumber.includes(".")){
        return
    } else {
    mainWindow.calculatorNumber.push('.');
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    }})

document.querySelector("#backSpace").addEventListener('click', backspace)

function backspace(){
    //removes the last digit if a calculation has been performed.
if (typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string"){
    mainWindow.previousNumber = Array.from(String(mainWindow.previousNumber))
    console.log(mainWindow.previousNumber)
    mainWindow.previousNumber.pop()
    mainWindow.calculatorNumber = mainWindow.previousNumber
    mainWindow.previousNumber = []
    document.getElementById("calculatorWindow").innerHTML =  mainWindow.calculatorNumber.join("")
    mainWindow.operation = "nil"
} else { 
    //removes last digit if no calculations has been performed yet.
    mainWindow.calculatorNumber.pop()
    console.log(typeof mainWindow.previousNumber + "popped")
    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
    }
}

//resets the calculator window on pressing the reset button
document.querySelector("#reset").addEventListener('click', function(){
    mainWindow.previousNumber =[0]
    mainWindow.newNumber = []
    mainWindow.calculatorNumber = []
    mainWindow.operation = "nil"
    document.getElementById("calculatorWindow").innerHTML = 0
    })


// adds keyboard controls
document.addEventListener("keypress", keypressed);
function keypressed(event){
    const key = event.key
    console.log(key)
    event.target.blur()
    if((event.key >= 0 && event.key <= 9 || event.key == ".") && mainWindow.operation == "calculated"){
        if(event.key==="." && mainWindow.calculatorNumber.includes(".")){
            //prevents user from adding multiple decimal points.
            return 
        } else {
            //automatically resets calculator window after a calculation has been performed.
            console.log("resetnumbersOnKeypress")
            mainWindow.calculatorNumber.push(event.key);
            document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
            mainWindow.previousNumber = []
            mainWindow.newNumber = []
            mainWindow.operation = "nil"}
    } else if (event.key >= 0 && event.key <= 9 || event.key == ".") {
        if(event.key==="." && mainWindow.calculatorNumber.includes(".")){
            return
        } else {
            mainWindow.calculatorNumber.push(event.key);
            document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber.join("")
            }} else if (event.key == "+") {
                addition()
                } else if (event.key == "-"){
                    subtraction()
                    } else if (event.key == "*"){
                        multiplication()
                        } else if (event.key == "/"){
                            division()
                            } else if (event.key == "Enter"){
                                equals()
                                } else if (event.key == "BackSpace"){
                                    backspace()
                                }
    }


        
    
    

const numberButtons = document.querySelectorAll(".numberbuttons")
numberButtons.forEach(button =>
    button.addEventListener('click', function(){
        // resets the calculator window on button press after a calculation has been performed
        if (mainWindow.operation == "calculated"){
            console.log("resetNumbersOnButtonPress")
            mainWindow.previousNumber = []
            mainWindow.newNumber = []
            mainWindow.operation = "nil"
            }
        })
    )




document.querySelector("#add").addEventListener('click', addition)
function addition(){
    //performs addition calculation again if user clicks the plus button again instead of the equal button 
    if ((typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string") && mainWindow.calculatorNumber.length !== 0){
        mainWindow.previousNumber = parseFloat(mainWindow.previousNumber)
        mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
        mainWindow.previousNumber = parseFloat((mainWindow.previousNumber + mainWindow.newNumber).toFixed(10))
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        mainWindow.operation = "add"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

    } else if (typeof mainWindow.calculatorNumber == "object" && mainWindow.calculatorNumber.length !== 0){
        //if this is the first number of the addition operation
        console.log("no second number");
        mainWindow.operation = "add"
        mainWindow.previousNumber = parseFloat(mainWindow.calculatorNumber.join(""))
        console.log(mainWindow.calculatorNumber.join("").toString())
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

        } else if(mainWindow.previousNumber.length == 0) {
            //if the addition button is clicked twice without performing initial calculation
            console.log("no initial number")
            mainWindow.operation = "add"
            document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber

            } else {
                // if the addition button is clicked twice after performing a calculation
                console.log("there is initial number")
                mainWindow.operation = "add"
                document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
            }
}


document.querySelector("#subtract").addEventListener('click', subtraction)

function subtraction(){
    //performs subtraction calculation again if user clicks the subtract button again instead of the equal button 
    if ((typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string") && mainWindow.calculatorNumber.length !== 0){
        mainWindow.previousNumber = parseFloat(mainWindow.previousNumber)
        mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
        mainWindow.previousNumber = parseFloat((mainWindow.previousNumber - mainWindow.newNumber).toFixed(10));
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        mainWindow.operation = "subtraction"
        console.log("performs subtraction again")
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

    } else if (typeof mainWindow.calculatorNumber == "object" && mainWindow.calculatorNumber.length !== 0){
    //if this is the first number of the subtraction operation
    console.log("no second number");
    mainWindow.operation = "subtraction"
    mainWindow.previousNumber = parseFloat(mainWindow.calculatorNumber.join(""))
    mainWindow.newNumber = []
    mainWindow.calculatorNumber = []
    document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

        } else if(mainWindow.previousNumber.length == 0) {
            //if the subtract button is clicked twice without performing initial calculation
            console.log("no initial number")
            mainWindow.operation = "subtraction"
            document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber

            } else {
                // if the subtract button is clicked twice after performing an initial calculation
                console.log("there is initial number")
                mainWindow.operation = "subtraction"
                document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
            }
}
        

document.querySelector("#multiply").addEventListener('click', multiplication)

function multiplication(){
//performs multiplication calculation again if user clicks the multiply button again instead of the equal button 
if ((typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string") && mainWindow.calculatorNumber.length !== 0){
    mainWindow.previousNumber = parseFloat(mainWindow.previousNumber)
    mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
    mainWindow.previousNumber = parseFloat((mainWindow.previousNumber * mainWindow.newNumber).toFixed(10));
    mainWindow.newNumber = []
    mainWindow.calculatorNumber = []
    mainWindow.operation = "multiplication"
    console.log("performs subtraction again")
    document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

} else if (typeof mainWindow.calculatorNumber == "object" && mainWindow.calculatorNumber.length !== 0){
//if this is the first number of the multiplication operation
mainWindow.operation = "multiplication"
mainWindow.previousNumber = parseFloat(mainWindow.calculatorNumber.join(""))
mainWindow.newNumber = []
mainWindow.calculatorNumber = []
document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

    } else if(mainWindow.previousNumber.length == 0) {
        //if the multiply button is clicked twice without performing initial calculation
        mainWindow.operation = "multiplication"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber

        } else {
            // if the multiply button is clicked twice after performing an initial calculation
            mainWindow.operation = "multiplication"
            document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        }
}
        

document.querySelector("#divide").addEventListener('click', division)

function division(){
//performs division calculation again if user clicks the divide button again instead of the equal button 
if((typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string") && mainWindow.calculatorNumber == `0`){
    console.log(mainWindow.calculatorNumber)
    document.getElementById("calculatorWindow").innerHTML = "Cannot Divide By Zero"
    mainWindow.operation = "calculated"
    mainWindow.newNumber = []
    mainWindow.calculatorNumber = []
    } else if ((typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string") && mainWindow.calculatorNumber.length !== 0){
        mainWindow.previousNumber = parseFloat(mainWindow.previousNumber)
        mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""));
        mainWindow.previousNumber = parseFloat((mainWindow.previousNumber / mainWindow.newNumber).toFixed(10));
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        mainWindow.operation = "division"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
            } else if (typeof mainWindow.calculatorNumber == "object" && mainWindow.calculatorNumber.length !== 0){
            //if this is the first number of the division operation
            mainWindow.operation = "division"
            mainWindow.previousNumber = parseFloat(mainWindow.calculatorNumber.join(""))
            mainWindow.newNumber = []
            mainWindow.calculatorNumber = []
            document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

                } else if(mainWindow.previousNumber.length == 0) {
                    //if the division button is clicked twice without performing initial calculation
                    mainWindow.operation = "division"
                    document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber

                    } else {
                        // if the division button is clicked twice after performing an initial calculation
                        mainWindow.operation = "division"
                        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
                    }
            }
    

document.querySelector("#powerOf").addEventListener('click', function(){
    //performs expotentiation calculation again if user clicks the divide button again instead of the equal button 
    if ((typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string") && mainWindow.calculatorNumber.length !== 0){
        mainWindow.previousNumber = parseFloat(mainWindow.previousNumber)
        mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
        mainWindow.previousNumber = parseFloat(Math.pow(mainWindow.previousNumber, mainWindow.newNumber).toFixed(10));
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        mainWindow.operation = "expotentiation"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
    
    } else if (typeof mainWindow.calculatorNumber == "object" && mainWindow.calculatorNumber.length !== 0){
        //if this is the first number of the expotentiation operation
        mainWindow.operation = "expotentiation"
        mainWindow.previousNumber = parseFloat(mainWindow.calculatorNumber.join(""))
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
    
        } else if(mainWindow.previousNumber.length == 0) {
            //if the powerOf button is clicked twice without performing initial calculation
            mainWindow.operation = "expotentiation"
            document.getElementById("calculatorWindow").innerHTML = mainWindow.calculatorNumber
    
            } else {
                // if the powerOf button is clicked twice after performing an initial calculation
                mainWindow.operation = "expotentiation"
                document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
            }
        })

document.querySelector("#squareRoot").addEventListener('click', function(){
    //auto performs squareRoot calculation 
    if (typeof mainWindow.calculatorNumber == "object" && mainWindow.calculatorNumber.length !== 0){
        mainWindow.previousNumber = Math.sqrt(parseFloat(mainWindow.calculatorNumber.join("")))
        mainWindow.calculatorNumber = []
        mainWindow.operation = "calculated"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        //auto performs squareRoot calculation if button is pressed multiple times
    } else if (mainWindow.calculatorNumber.length == 0){
        console.log("squarerooted2")
        mainWindow.previousNumber = Math.sqrt(mainWindow.previousNumber)
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        mainWindow.operation = "calculated"
    } else if (typeof mainWindow.previousNumber == "number" || typeof mainWindow.previousNumber == "string"){
        console.log("squarerooted")
        mainWindow.previousNumber = Math.sqrt(parseFloat(mainWindow.previousNumber.join("")))
        mainWindow.calculatorNumber = []
        mainWindow.operation = "calculated"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        }
    
    })

document.querySelector("#equals").addEventListener('click', equals)

function equals(){
//performs addition calculation if someone presses the equal button
if (mainWindow.operation == "add" && mainWindow.calculatorNumber.length !== 0){
    mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
    console.log("new number is " + mainWindow.newNumber)
    mainWindow.previousNumber = parseFloat((parseFloat(mainWindow.previousNumber) + mainWindow.newNumber).toFixed(10))
    document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
    console.log("calculated number is " + mainWindow.previousNumber)
    mainWindow.operation = "calculated"
    mainWindow.newNumber = []
    mainWindow.calculatorNumber = []
    

//performs subtraction calculation if someone presses the equal button
    } else if (mainWindow.operation == "subtraction" && mainWindow.calculatorNumber.length !== 0){
        mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
        mainWindow.previousNumber = parseFloat((parseFloat(mainWindow.previousNumber) - mainWindow.newNumber).toFixed(10))
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        mainWindow.operation = "calculated"
        mainWindow.newNumber = []
        mainWindow.calculatorNumber = []
        

        //performs multiplication calculation if someone presses the equal button
        } else if (mainWindow.operation == "multiplication" && mainWindow.calculatorNumber.length !== 0){
            mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
            mainWindow.previousNumber = parseFloat((parseFloat(mainWindow.previousNumber) * mainWindow.newNumber).toFixed(10))
            document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
            mainWindow.operation = "calculated"
            mainWindow.newNumber = []
            mainWindow.calculatorNumber = []
            

            //performs division calculation if someone presses the equal button
            } else if (mainWindow.operation == "division" && mainWindow.calculatorNumber.length !== 0){
                if(mainWindow.calculatorNumber == `0`){
                    document.getElementById("calculatorWindow").innerHTML = "Cannot Divide By Zero"
                    mainWindow.operation = "calculated"
                    mainWindow.newNumber = []
                    mainWindow.calculatorNumber = []
                        } else {
                        mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
                        mainWindow.previousNumber = parseFloat((parseFloat(mainWindow.previousNumber) / mainWindow.newNumber).toFixed(10))
                        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
                        mainWindow.operation = "calculated"
                        mainWindow.newNumber = []
                        mainWindow.calculatorNumber = []
                        }
                

                //performs expotentiation calculation if someone presses the equal button
                } else if (mainWindow.operation == "expotentiation" && mainWindow.calculatorNumber.length !== 0){
                    mainWindow.newNumber = parseFloat(mainWindow.calculatorNumber.join(""))
                    mainWindow.previousNumber =parseFloat((Math.pow(parseFloat(mainWindow.previousNumber), mainWindow.newNumber)).toFixed(10))
                    document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
                    mainWindow.operation = "calculated"
                    mainWindow.newNumber = []
                    mainWindow.calculatorNumber = []
                    

                    } else if (mainWindow.operation == "nil" && mainWindow.calculatorNumber.length !== 0 || mainWindow.operation == "calculated" && mainWindow.calculatorNumber.length !== 0){
                        //this is if someone did not perform any calculations / presses a number button followed by equals
                        console.log(mainWindow.operation + ' else if')
                        mainWindow.previousNumber = parseFloat(mainWindow.calculatorNumber.join(""))
                        mainWindow.operation = "calculated"
                        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
                        mainWindow.newNumber = []
                        mainWindow.calculatorNumber = []
                        
                        } else { 
                            //this is if someone performs a calculation and presses equals twice
                            console.log(mainWindow.newNumber + ' else')
                            document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
                            mainWindow.operation = "calculated"
                            mainWindow.newNumber = []
                            mainWindow.calculatorNumber = []
                            
                            }
}
