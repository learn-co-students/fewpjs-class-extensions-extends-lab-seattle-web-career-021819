class Polygon{
  constructor(sides){
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides(){
    return this.count
  }

  get perimeter(){
    let sum = 0
    for(var num of this.sides){
      sum += num
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return;
    return ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[1] === this.sides[2]))
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !== 4) return;
    return ((this.sides[0] === this.sides[1]) && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]))
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}
