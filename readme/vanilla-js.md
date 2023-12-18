### Callback Hell:

e.g when one api depends on another api response(and it leads to nested api calls of multiple level) and this keeps growing on to multiple levels. This is called call back hell.

1. Makes our code hard to mantain, understand.

**Solution**: `Promises`

### Promises:

An object that is used as a placeholder for the future result of an asynchronous operation.
e.g. `fetch(url)` return `Promise`.

#### Advantages:

1. We can chain promises instead of nesting and avoid callback hell.

### States:

1. Pending: Not yet finished or rejected.
2. FulFilled: Success, the value is now available.
3. Rejected: Error.
