# Solid Design Principles

## Single Responsibility Principle

1. A class or module should only have one reason to change.
2. e.g. multiselect module should only have multiselect related functionality.

## Open Closed Priniciple:

- Open for extension and closed for modification.

## Liskov Substitution Principle:
- Objects of superclass should be replacable with objects of sub class without affecting the correctness of the program.
- 
```js
class Bird {
    fly() {
        console.log("This bird can fly!");
    }
}

class Duck extends Bird {
    fly() {
        console.log("This duck can fly!";)
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
makebirdFly(duck); //as per this principle should work
```
