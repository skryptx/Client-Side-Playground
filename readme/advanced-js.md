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