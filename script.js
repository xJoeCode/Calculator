 let mainWindow = {
    previousNumber :[],
    newNumber:[],
    calculatedNumber: [],
    operation: "nil"
 }

 

document.querySelector("#buttonOne").addEventListener('click', function(){
    mainWindow.newNumber.push(1);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonTwo").addEventListener('click', function(){
    mainWindow.newNumber.push(2);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonThree").addEventListener('click', function(){
    mainWindow.newNumber.push(3);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonFour").addEventListener('click', function(){
    mainWindow.newNumber.push(4);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonFive").addEventListener('click', function(){
    mainWindow.newNumber.push(5);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonSix").addEventListener('click', function(){
    mainWindow.newNumber.push(6);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonSeven").addEventListener('click', function(){
    mainWindow.newNumber.push(7);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonEight").addEventListener('click', function(){
    mainWindow.newNumber.push(8);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

document.querySelector("#buttonNine").addEventListener('click', function(){
    mainWindow.newNumber.push(9);
    document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber.join("")
    })

    
const numberButtons = document.querySelectorAll(".numberbuttons")
numberButtons.forEach(button =>
    button.addEventListener('click', function(){
        if (mainWindow.operation == "calculated"){
            console.log("resetnumbers")
            mainWindow.previousNumber = []
            mainWindow.operation = "nil"
            }
        })
        )




document.querySelector("#add").addEventListener('click', function(){
    if (typeof mainWindow.previousNumber == "string" || typeof mainWindow.previousNumber == "number" &&  mainWindow.newNumber.length !== 0){
        mainWindow.newNumber = mainWindow.newNumber.join("").toString()
        mainWindow.previousNumber = parseInt(mainWindow.previousNumber) + parseInt(mainWindow.newNumber)
        mainWindow.newNumber = []
        mainWindow.operation = "add"
        console.log(mainWindow.operation)
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

    } else if(typeof mainWindow.newNumber == "object" &&  mainWindow.newNumber.length !== 0){
    console.log("no second number");
    mainWindow.operation = "add"
    mainWindow.previousNumber = mainWindow.newNumber.join("").toString()
    mainWindow.newNumber = []
    document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber

    } else {
        mainWindow.operation = "add"
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        }
     })


document.querySelector("#equals").addEventListener('click', function(){
    if (mainWindow.operation == "add"){
        mainWindow.newNumber = mainWindow.newNumber.join("").toString()
        mainWindow.previousNumber = parseInt(mainWindow.previousNumber) + parseInt(mainWindow.newNumber)
        console.log(`add + ${mainWindow}`)
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
        mainWindow.operation = "calculated"
        mainWindow.newNumber = []
        
        
    } else if (mainWindow.operation = "nil" && mainWindow.newNumber.length != 0){
        //this is if someone did not perform any calculations and presses equals
        console.log(mainWindow.newNumber + 'else if')
        document.getElementById("calculatorWindow").innerHTML = mainWindow.newNumber
    } else { 
        //this is if someone performs a calculation and presses equals twice
        console.log(mainWindow.calculatedNumber + 'else')
        document.getElementById("calculatorWindow").innerHTML = mainWindow.previousNumber
    }
})