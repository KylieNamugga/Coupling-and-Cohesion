// We are going to use this Calculator example, it subtracts, adds, divides and multiplies
// In this code state, we see high coupling and low cohesion
var Calculator = /** @class */ (function () {
    function Calculator() {
        // Data
        this.interface = [];
    }
    // methods
    Calculator.prototype.addition = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    Calculator.prototype.division = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    Calculator.prototype.multiplication = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    Calculator.prototype.subtraction = function (data) {
        this.interface.push(data);
        console.log(data);
    };
    return Calculator;
}());
// Testing our calculator
var calculator = new Calculator();
calculator.addition("I can help you add");
calculator.division("I can help you divide");
calculator.multiplication("I can help you multiply");
calculator.subtraction("I can help you subtract");
// Though the calculator works fine right now, it's not ideal
// File Calc.ts will show the Ideal coupling and cohesion. 
