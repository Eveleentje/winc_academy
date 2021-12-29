// Age checker & greeting function

const checkAge = function(age) {
if (age >= 18) {
    return true;
}
return false;
};

const greeting = function() {
    if (checkAge(38) === true) {
        return ("Hello there");
    }
    return ("Hey kiddo");
};

const result = greeting();
console.log(result);

// VAT excercise 1

const calculateVat = function(price) {
return price * 0.21;
};

const result1 = calculateVat(1000);
console.log(result1);

const totalPrice = function(price) {
return price + calculateVat(1000);
};

const result2 = totalPrice(1000);
console.log(result2);

// VAT excercise 2

const vatFactor = function(vatPercentage) {
    return vatPercentage / 100 + 1;
};

const basePriceVat = function(totalAmount) {
return totalAmount / vatFactor(21);
};

const result3 = basePriceVat(1210);
console.log(result3);

