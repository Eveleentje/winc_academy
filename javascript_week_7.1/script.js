// function declaration

function calculationDeclaration(number1, number2) {
    const squareDeclaration1 = number1 * number1;
    const squareDeclaration2 = number2 * number2;
    const sumDeclaration = squareDeclaration1 + squareDeclaration2;
    const sumSquareDeclaration = sumDeclaration * sumDeclaration;
    return sumSquareDeclaration;
}

const result1 = calculationDeclaration(5, 8);
console.log(result1);


// function expression

const calculationExpression = function(number3, number4) {
    const squareExpression1 = number3 * number3;
    const squareExpression2 = number4 * number4;
    const sumExpression = squareExpression1 + squareExpression2;
    const sumSquareExpression = sumExpression * sumExpression;
    return sumSquareExpression;
};

const result2 = calculationExpression(5, 8);
console.log(result2);

// arrow function

const calculationArrow = (number5, number6) => {
    const squareArrow1 = number5 * number5;
    const squareArrow2 = number6 * number6;
    const sumArrow = squareArrow1 + squareArrow2;
    const sumSquareArrow = sumArrow * sumArrow;
    return sumSquareArrow;
};

const result3 = calculationArrow(5, 8);
console.log(result3);