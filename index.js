class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let perimeter = 0
    this.sides.forEach(side => {
      perimeter += side
    })
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.getCount === 3) {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]

      if ((side1 + side2 >= side3) && (side1 + side3 >= side2) && (side2 + side3 >= side1)) {
        return true
      }
    }
    return false
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.getCount === 4) {
      let [a, b, c, d] = arr.slice(0, 4)

      if ((a === b) && (b === c) && (c === d)) {
        return true
      }
    }
    return false
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] * this.sides[1]
    }
  }
}
