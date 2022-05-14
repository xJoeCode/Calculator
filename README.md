Live Preview: https://xjoecode.github.io/Calculator/


It works by pushing numbers to an array stored as an object property called CalculatorWindow. When a math operation button like plus or minus button is clicked, the array elements are combined and stored as a float in a second property called PreviousNumber using join() and ParseInt(). When this property already has a value, it stores the number in a third property called newNumber instead. When the equals button is pressed, it performs the calculation with newNumber and previousNumber and re-stores the calculated value in previous number.

Features:
- auto calculates if the user pressed the math operation buttons while already having a value stored in both the previousNumber and calculatorWindow properties.
- auto clears the on screen values after the equal button is pressed and calculation has been performed.
- Works With Keyboard


Bugs Faced:
- if the user double clicks the equals or math operation buttons twice.







