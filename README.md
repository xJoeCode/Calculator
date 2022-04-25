Live Preview: https://xjoecode.github.io/Calculator/

This is my version of the Calculator project from the Odin Project. https://www.theodinproject.com/lessons/foundations-calculator

It works by pushing numbers to an array stored as an object property called CalculatorWindow. When a math operation button like plus or minus button is clicked, the array elements are combined and stored as a float in a second property called PreviousNumber using join() and ParseInt(). When this property already has a value, it stores the number in a third property called newNumber instead. When the equals button is pressed, it performs the calculation with newNumber and previousNumber and re-stores the calculated value in previous number.

It also auto calculates if the user pressed the math operation buttons while already having a value stored in both the previousNumber and calculatorWindow properties.

I faced some bugs such as if the user double clicks the equals or math operation buttons twice.






