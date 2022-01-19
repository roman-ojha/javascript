class complex {
  setdata(x, y) {
    this.x = x;
    this.y = y;
  }
  calculation(o1, o2) {
    this.x = o1.x + o2.x;
    this.y = o1.y + o2.y;
    return this.x, this.y;
  }
  printComplex() {
    console.log(this.x, this.y);
  }
}

// let obj1 = new complex();
// let obj2 = new complex();
// let obj3 = new complex();

let obj = [new complex(), new complex(), new complex()];

obj[0].setdata(1, 2);
obj[1].setdata(3, 4);
obj[2].calculation(obj[0], obj[1]);
obj[2].printComplex();
