// We are going to use this Calculator example, it subtracts, adds, divides and multiplies
// In this code state, we see high coupling and low cohesion

class Calculator{
    // Data
    interface:Array<any> = []

    // methods
    addition(data:any){
        this.interface.push(data)
        console.log(data)
    }

    division(data:any){
        this.interface.push(data)
        console.log(data)
    }

    multiplication(data:any){
        this.interface.push(data)
        console.log(data)
    }

    subtraction(data:any){
        this.interface.push(data)
        console.log(data)
    }

}

// Testing our calculator
let calculator = new Calculator()
calculator.addition("I can help you add")
calculator.division("I can help you divide")
calculator.multiplication("I can help you multiply")
calculator.subtraction("I can help you subtract")


// Though the calculator works fine right now, it's not ideal
// File Calc.ts will show the Ideal coupling and cohesion. 
