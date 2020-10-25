// ================== Задача 1 ==================
function parseCount(value) {
    let parseValue = Number.parseInt(value);
    if (isNaN(parseValue)) {
        throw new Error('Невалидное значение');
    }
    return parseValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return e;
    }
}


// ================== Задача 2 ==================
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    
    getPerimeter() {
        console.log(this.a + this.b + this.c);
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(e) {
        return {
            getPerimeter: () => 'Ошибка! Треугольник не существует', 
            getArea: () => 'Ошибка! Треугольник не существует'
        }
    }
}