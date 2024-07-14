## `this`: behavior in class and object
 
- Scenario 1:
```js
class User {
    name;
    constructor(name) {
        this.name = name;
    }

    getName() {
        return `Name: ${this}`;
    }
}

const obj = new User("sinni");
obj.getName() // this will be the object itself
const func = obj.getName;
func(); // error: here this is undefined
```

- Scenario 2:
```js
const obj = {
    name: "Sinni",
    getName: function() {
        return `Name: ${this}`;
    }
}

obj.getName() // this will be the object itself
const func = obj.getName;
func(); // browser: window     node: global
```

## `call`
```js
class User {
    name;
    constructor(name) {
        this.name = name;
    }

    getName(action = 'sings') {
        return `Name: ${this} Action: ${action}`;
    }
}

const obj = new User("sinni");
obj.getName() // this will be the object itself
const func = obj.getName;
func.call(obj); // this will be the object itself
func.call(obj, 'dances'); // can also pass arguments
```

## `apply`
Needs arguments in array instead
```js
func.apply(obj, ['dances']); // can also pass arguments
``` 


## `bind`
Permanently binds the function to a context
```js
func.bind(obj);
func() // this will be the object itself
``` 

Use Case: 
```js
const obj = {
    name: "Sinni",
    getName: function() {
        return `Name: ${this}`;
    }
}

//wrong
el.addEventListener("click", obj.getName); // this will be element here e.g. button

//correct
el.addEventListener("click", obj.getName.bind(obj)); // this will be the object here
```

## Arrow Functions and `this`
Arrow functions does not create their own `this`

[Link: Examples](../courses\javascript-pro-mastering-advanced-concepts-and-techniques-by-colt-steele\section-3-new-features-in-js\this-with-arrow-functions.js)