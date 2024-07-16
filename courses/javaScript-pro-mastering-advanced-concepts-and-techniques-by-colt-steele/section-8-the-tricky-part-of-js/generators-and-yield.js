function* nextNum(counter) {
    while(counter < 100) {
      yield counter;
      counter++;
    }
  }
  
  const generator = nextNum(10); // It just returns the generator not function
  console.log(generator.next()) // {value: 10, done: false}
  console.log(generator.next()) // {value: 11, done: false}
  console.log(generator.next()) // {value: 12, done: false}