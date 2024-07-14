const butters = {
    firstName: "Butters",
    lastName: "Cluckly",
    greet: function(){
        console.log(`Hello ${this}: ${this.firstName} ${this.lastName}`)
    }
}

const fluffy = {
    firstName: "Fluffy",
    lastName: "Meowson",
}

function greetFluffy(){
    // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above. 
    const func = butters.greet;
    func.bind(fluffy)();
}

greetFluffy();