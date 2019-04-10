// Your code here
class Polygon {
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    let total = 0;
    this.sides.forEach(side => {
      total = total + side
    });
    return total
  }
}

class Triangle extends Polygon {
  get isValid(){
    console.log(this.sides)
    if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[2] + this.sides[0] > this.sides[1]){
          return true
        }
    else {
      return false
    }
  }}

class Square extends Polygon {
  get area(){
    return this.sides[0] * this.sides[0]
  }

  get isValid(){
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]){
      return true
    }
      return false
  }
}
