// In this file we are increasing cohesion and reducing coupling.
// We do this by increasing the level of independence of each module in class calc.
// High cohesion comes in because each element in the module is directly related to the functionality.


// This class will handle addition
class addition{
    add(input1:number, input2:number){
        return input1 + input2;
    }
 }
 
 // This class will handle division
 class division{
    divide(input1:number, input2:number){
        return input1 / input2
    }
 }
 
 // This class will handle multiplication
 class multiplication{
    multiply(input1:number, input2:number){
        return input1 * input2 
    }
 }
 
 // This class will handle subtraction
 class subtraction{
    subtract(input1:number, input2:number){
        return input1 - input2
    }
 }

class Calc {
    // methods
    // we are delegating method add from class addition to perform task
       add(input1:number, input2:number){
           let additionMethod = new addition() 
           return additionMethod.add(input1, input2)
       }

       divide(input1:number, input2:number){
           let divisionMethod = new division()
           return divisionMethod.divide(input1, input2)
       }

       multiply(input1:number, input2:number){
           let multiplicationMethod = new multiplication()
           return multiplicationMethod.multiply(input1, input2)
       }

       subtract(input1:number, input2:number){
           let subtractionMethod = new subtraction()
           return subtractionMethod.subtract(input1, input2)
       }
   
}

let calc = new Calc()
console.log(calc.add(2,5))
console.log(calc.multiply(2,5))
console.log(calc.subtract(5,2))
console.log(calc.divide(10,2))





