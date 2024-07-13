/* Class */
class User {
    constructor(name) {
      this.name = name;
    }

    printName() {
      console.log(`Class Print Name: ${this.name}`);      
    }

    setName(name) {
        console.log(`Class Set Name: ${this.name}`);      
    }
}

const userObj = new User("Sinni");
userObj.printName();
userObj.setName("Shanky");


/* Object */
const user = {
    name: "Sinni",
    printName: function(){
      console.log(`Object Print Name: ${this.name}`);      
    },
    setName: (name) => {
        console.log(`Object Set Name: ${this.name}`);      
    }
}

user.printName();
user.setName("Shanky");