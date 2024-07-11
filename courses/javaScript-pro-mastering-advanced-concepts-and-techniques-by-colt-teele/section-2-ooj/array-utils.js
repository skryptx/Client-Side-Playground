class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }

  static average(array) {
    if (array.length === 0) {
      throw new Error("Array cannot be empty.");
    }
    let sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum / array.length;
  }

  static max(array) {
    let max = Number.MIN_VALUE;
    array.forEach((element) => {
      if (element > max) {
        max = element;
      }
    });

    return max;
  }
}

console.log(ArrayUtils.max([1, 2, 3]));
