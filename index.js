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
    return (this.perimeter / 4) * (this.perimeter / 4)
  }
}
