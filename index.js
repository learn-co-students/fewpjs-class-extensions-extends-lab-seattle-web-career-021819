// Your code here
class Polygon {

  constructor(sides) {
    this.sides = sides
  }

  get count() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((acc, val) => acc + val)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.count !== 3) return false;
    if (Array.isArray(this.count)) return false;

    let [side1, side2, side3] = this.sides

    if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {

  get isValid() {
    if (this.count !== 4) return false;
    if (Array.isArray(this.count)) return false;

    let [side1, side2, side3, side4] = this.sides

    if (side1 === side2 && side2 === side3 && side3 === side4) {
      return true
    } else {
      return false
    }
  }

  get area() {
    let [side1, side2, side3, side4] = this.sides
    return side1 * side2
  }
}

const square = new Square( [ 5, 5, 5, 5 ] )
console.log('square sides: ' + square.sides);
console.log('square perimeter: ' + square.perimeter);
console.log('square valid? ' + square.isValid);

// triangle = new Triangle([5,5,5])
// console.log('triangle sides: ' + triangle.sides);
// console.log('triangle perimeter: ' + triangle.perimeter);
// console.log('triangle valid? ' + triangle.isValid);
