class ExpressionCalculator {
    y1(x) {
        return 3 * x + 5;
    }

    y2(a, b) {
        if (a === b) {
            throw new Error("Делить на 0 нельзя (a - b = 0)");
        }
        return (a + b) / (a - b);
    }

    y3(a, x, b) {
        if (b === 0) {
            throw new Error("Делить на 0 нельзя (b = 0)");
        }
        const value = (a * x) / b;
        
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("Факториал только для неотрицательных целых чисел - ошибка");
        }
        
        return this.F(value);
    }

    F(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const calc1 = new ExpressionCalculator();
const calc2 = new ExpressionCalculator();
const calc3 = new ExpressionCalculator();

console.log("y = 3x + 5, x = 4 Получится: ", calc1.y1(4)); 

console.log("y = (a+b)/(a-b), a=10, b=5 Получится: ", calc2.y2(10, 5)); 

console.log("y = (ax/b)!, a=2, x=6, b=3 Получится: ", calc3.y3(2, 6, 3)); 
