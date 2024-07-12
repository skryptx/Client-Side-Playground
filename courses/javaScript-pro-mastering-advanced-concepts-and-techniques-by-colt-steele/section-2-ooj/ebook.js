class Book {
  constructor(title, author, year) {
    if (
      typeof title !== "string" ||
      typeof author !== "string" ||
      typeof year !== "number"
    ) {
      throw "Invalid Types!";
    }
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  #fileSize;
  constructor(title, author, year, fileSize) {
    super(title, author, year);

    this.#fileSize = fileSize;
  }

  download() {
    return `Title: ${this.title}, FileSize: ${this.fileSize}`;
  }
}

class User {
  name;
  constructor(name) {
      this.name = name;
  }

  getName() {
      console.log('Name:', this);
  }
}

const obj = new User("sinni");
obj.getName() // this will be the object itself
const func = obj.getName;
func.call(obj); // this will be the object itself
