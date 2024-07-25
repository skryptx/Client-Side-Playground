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
obj.getName(); // this will be the object itself
const func = obj.getName;
func(); // error: here this is undefined
```

- Scenario 2:

```js
const obj = {
  name: "Sinni",
  getName: function () {
    return `Name: ${this}`;
  },
};

obj.getName(); // this will be the object itself
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

  getName(action = "sings") {
    return `Name: ${this} Action: ${action}`;
  }
}

const obj = new User("sinni");
obj.getName(); // this will be the object itself
const func = obj.getName;
func.call(obj); // this will be the object itself
func.call(obj, "dances"); // can also pass arguments
```

## `apply`

Needs arguments in array instead

```js
func.apply(obj, ["dances"]); // can also pass arguments
```

## `bind`

Permanently binds the function to a context

```js
func.bind(obj);
func(); // this will be the object itself
```

Use Case:

```js
const obj = {
  name: "Sinni",
  getName: function () {
    return `Name: ${this}`;
  },
};

//wrong
el.addEventListener("click", obj.getName); // this will be element here e.g. button

//correct
el.addEventListener("click", obj.getName.bind(obj)); // this will be the object here
```

## Arrow Functions and `this`

Arrow functions does not create their own `this`

[Link: Examples](../courses\javascript-pro-mastering-advanced-concepts-and-techniques-by-colt-steele\section-3-new-features-in-js\this-with-arrow-functions.js)

## Debounce

```js
let debounceTime;
function makeApiRequest() {
  clearTimeout(debounceTime); //clears the previous timout if new term is input
  debounceTime = setTimeout(() => {
    console.log("MAke an API Request!!!");
  }, 500);
}
```

## Throttle

```js
let isThrottled = false;

function makeApiCall() {
  if (!isThrottled) {
    //make request
    isThrottled = true; // immediately make true after first operation so no more operation is allowed untill it is turned back to false by timeout below
    setTimeout(() => {
      isThrottled = false;
    }, 500);
  }
}
```

## Debounce vs Throttling

Throttling executes costly operation after fixed intervals if events keep getting triggered where as in debounce it will wait for the timeout to be over since last request to make a new request. timeout is reset in case of debounce if new event comes in before the timeout is finished.

## Request Animation Frame

Used to create smooth animations. It waits for the next browser repaint and then adds to the animation.

```js
function animate() {
  ele.style.transform = `rotate(${(angle += 2)})`;
  requestAnimationFrame(animate); // you have to call this from within the animate function inorder to keep the animation going
}
requestAnimationFrame(animate); // it executes only once this way
```

## fetch api
404 does not get caught in catch, because promise was not rejected. If network issue, then it will be caught in the catch.
```js
fetch(url)
  .then(res => res.json())
  .then(res => this.someProp = res)
  .catch(err => {
    this.err = err;
  });

OR

const res = await fetch(url);
const data = await res.json();
```

## Request Headers with fetch
```js
fetch(url, {
        method: "POST",
        headers: {
          content-type: "application/json"
        },
        body: JSON.strigify({
          param1: "",
          param2: ""
        })
      })
  .then(res => res.json())
  .then(res => this.someProp = res)
  .catch(err => {
    this.err = err;
  });

```

## localstorage
Persists accross sessions. Only `supports strings`. If not a string. First do `JSON.stringify` on the value and then parse it after retreival. Limit on storage(5MB).
```js
localStorage.setItem("var","chai");
localStorage.getItem("var");
localStorage.removeItem("var");
localStorage.clear();
```

## sessionStorage
Session storage is particular to a tab. If you open another tab or browser window, they will have their own session storage. Within the same tab it will persists even after a refresh.
```js
sessionStorage.setItem("var","chai");
sessionStorage.getItem("var");
sessionStorage.clear();
```

## IndexedDB:
- async
- large size

## Navigator.geolocation api
Helps in tracking users location.

## navigator.mediaDevices.getUserMedia({video: true}) API:
Help access microphone, web cam etc.