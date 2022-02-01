
class Shape{
    constructor(side) {
        this.side=side
    }
}

class Triangle extends Shape{
    constructor(side) {
        super(side)
    }
    perimeterTri() {
        return this.side*3
    }
}

class Square extends Triangle{
  constructor(side) {
    super(side);
  }
    perimeterSquare() {
      return this.side*4
  }
}


const obj = new Square(4)
console.log("Perimeter of a Square = "+obj.perimeterSquare());
console.log("Perimeter of a Triangle = "+obj.perimeterTri());

