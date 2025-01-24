function parseCount(count) {
    let parsedCount = Number.parseFloat(count);
    if (Number.isNaN(parsedCount)) {
      throw new Error("Невалидное значение");
    }
    return parsedCount;
  }
  
  function validateCount(count) {
    try {
      return parseCount(count);
    } catch (error) {
      return error;
    }
  }
  
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    get Perimeter() {
      return this.a + this.b + this.c;
    }
    get Area() {
      let p = this.Perimeter / 2;
      return Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get Perimeter () {
          return "Ошибка! Треугольник не существует";
        },
        get Area () {
          return "Ошибка! Треугольник не существует";
        }
      }
    }
  }