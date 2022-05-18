// In this file we are increasing cohesion and reducing coupling.
// We do this by increasing the level of independence of each module in class clac.
// High cohesion comes in because each element in the module is directly related to the functionality.
// This class will handle addition
var addition = /** @class */ (function () {
    function addition() {
    }
    addition.prototype.add = function (input1, input2) {
        return input1 + input2;
    };
    return addition;
}());
// This class will handle division
var division = /** @class */ (function () {
    function division() {
    }
    division.prototype.divide = function (input1, input2) {
        return input1 / input2;
    };
    return division;
}());
// This class will handle multiplication
var multiplication = /** @class */ (function () {
    function multiplication() {
    }
    multiplication.prototype.multiply = function (input1, input2) {
        return input1 * input2;
    };
    return multiplication;
}());
// This class will handle subtraction
var subtraction = /** @class */ (function () {
    function subtraction() {
    }
    subtraction.prototype.subtract = function (input1, input2) {
        return input1 - input2;
    };
    return subtraction;
}());
var Calc = /** @class */ (function () {
    function Calc() {
    }
    // methods
    // we are delegating method add from class addition to perform task
    Calc.prototype.add = function (input1, input2) {
        var additionMethod = new addition();
        return additionMethod.add(input1, input2);
    };
    Calc.prototype.divide = function (input1, input2) {
        var divisionMethod = new division();
        return divisionMethod.divide(input1, input2);
    };
    Calc.prototype.multiply = function (input1, input2) {
        var multiplicationMethod = new multiplication();
        return multiplicationMethod.multiply(input1, input2);
    };
    Calc.prototype.subtract = function (input1, input2) {
        var subtractionMethod = new subtraction();
        return subtractionMethod.subtract(input1, input2);
    };
    return Calc;
}());
var calc = new Calc();
console.log(calc.add(2, 5));
console.log(calc.multiply(2, 5));
console.log(calc.subtract(5, 2));
console.log(calc.divide(10, 2));
