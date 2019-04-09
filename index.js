class Polygon {
  constructor(nums = []) {
    this.nums = nums;
  }
  get getCount() {
    return this.nums.length;
  }

  get perimeter() {
    return this.nums.reduce((sum, current) => sum + current, 0);
  }
}

class Triangle extends Polygon {

  get isValid (){
    let [a,b,c] = this.nums.slice(0,3)
    return ((a+b)>c && (a+c)>b && (c+b)>a)
  }

}

// The sum of the lengths of any two sides of a triangle is greater than the length of the third side. If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side. If that is not true, then it is not possiself.nums[1]le to construct a triangle with the given side lengths.

class Square extends Polygon {
  get isValid(){
    let [a,b,c,d] = this.nums.slice(0,4)
    return (a===b && a===c && a===d && b===c && b===d && c===d)
  }

  get area (){
    return this.nums[0]**2;
  }

}

