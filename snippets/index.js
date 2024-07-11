class A {
  a;
  b;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class B {}

class C extends A {
  c;
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

console.log(new C(1, 2, 3).a);
