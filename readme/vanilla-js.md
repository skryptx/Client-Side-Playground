### Callback Hell:

e.g when one api depends on another api response(and it leads to nested api calls of multiple level) and this keeps growing on to multiple levels. This is called call back hell.

1. Makes our code hard to mantain, understand.

**Solution**: `Promises`\
**Promises do not get rid of callbacks, but it sure get rid of callbackk hell.**

### Promises:

An object that is used as a placeholder for the future result of an asynchronous operation.
e.g. `fetch(url)` return `Promise`.

#### Advantages:

1. We can chain promises instead of nesting and avoid callback hell.

### States:

1. Pending: Not yet finished or rejected.
2. FulFilled: Success, the value is now available.
3. Rejected: Error.
4. Promise is only settled once. The state will remain unchange after that.

### Implementation:

1. In below example, response contains properties like type, body, status etc.
2. We need to extract the actual data using `.json()` method.
3. `.json()` is async itself. So need to handle it aswell.

```js
fetch(url)
  .then(
    (response) => response.json(),
    (err) => console.log(err)
  )
  .then(
    (data) => console.log(data),
    (err) => console.log(err)
  );
```

### Error Handling:

```js
fetch(url)
  .then(
    (response) => response.json(),
    (err) => console.log(err)
  )
  .then(
    (data) => console.log(data),
    (err) => console.log(err)
  );
```

Rather than handling error in all the promises, just catch them at the end of the promises. Catch at the end of the promise chain will catch any error happen in any of the promises.

```js
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log(done));
```

## `new`  keyword
`new` will 
- create an empty object
- sets keyword `this` to that object
- returns `this`
- creates link to object prototype
- constructor function implementation below
```js
function Dog(breed, name) {
  this.breed = breed;
  this.name = name;
  this.bark = function() {
    return `${this.name} says Woof!`;
  }
}

new Dog("German Shepherd", "Rocky"); //will create an object and returns the this reference without any return statement
```

## class and methods
- Each class instance(`object`) will have same method instance but unique properties. 
- These methods live on first level of `__proto__`(prototype property) and this `__proto__` property will be same for all `objects` of same `Class`. 
- `__proto__` will have another `__proto__` inside which will contain `objects` prototypes. This is called prototype chaining.
- If we call method on an object it will look through all `__proto__`(from lvl1 and so on) props until it finds it

## Prototypes
- If you inherit a class in another class, js will add the properties of parent class to child class and link the parent class prototype to child class prototype.
- class is just a syntactic sugar.

## Promises
```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("bye");
  }, 2000)
})
```

## Genrators and yield
```js
function* nextNum(counter) {
  while(counter < 100) {
    yield counter;
    counter++;
  }
}

const generator = nextNum(10); // It just returns the generator not function
generator.next() // {value: 11, done: false}
```

## Array.from()
Generating new arrays from non array. It also takes callback function as second argument.
```js
Array.from("hello"); // ['h','e','l','l','o']
Array.from(new Set([1,2,3,4])); // [1,2,3,4]
Array.from("abcd", x => x.toUpperCase()); // ['A', 'B', 'C', 'D']
```