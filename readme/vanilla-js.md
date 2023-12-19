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
