console.log("This is tutorial 32");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class library {
  constructor(book1, book2, book3) {
    this.book1 = book1;
    this.book2 = book2;
    this.book3 = book3;
  }
}
class Book extends library {
  constructor(book1, book2, book3, book4, book5) {
    super(book1, book2, book3);
    this.book4 = book4;
    this.book5 = book5;
  }
  getBookList() {
    console.log("The book list is:\n");
    console.log(
      this.book1 +
        "\n" +
        this.book2 +
        "\n" +
        this.book3 +
        "\n" +
        this.book4 +
        "\n" +
        this.book5
    );
  }
  issueBook(bookname, user) {
    console.log("This is the book: " + bookname + " issue by: " + user);
    return "Complete";
  }
  returnBook(bookname) {
    return bookname;
  }
}

b1 = new Book("math", "physic", "chemistry", "nepali", "computer");
console.log(b1.getBookList());
console.log(b1.issueBook(b1.book1, "Roman"));
console.log(b1.returnBook(b1.getBookList()));
console.log(b1);
console.log("testing");
