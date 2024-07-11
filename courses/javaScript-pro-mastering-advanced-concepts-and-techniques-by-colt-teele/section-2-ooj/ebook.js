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
  constructor(title, author, year, fileSize) {
    super(title, author, year);

    this.fileSize = fileSize;
  }

  download() {
    return `Title: ${this.title}, FileSize: ${this.fileSize}`;
  }
}
