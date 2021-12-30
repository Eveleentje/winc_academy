// Age checker & greeting function

const checkAge = function(age) {
if (age >= 18) {
    return true;
}
return false;
};

const greeting = function(age) {
    if (checkAge(age) === true) {
        return ("Hello there");
    }
    return ("Hey kiddo");
};

console.log(greeting(17));
console.log(greeting(38));

// VAT excercise 1

const calculateVat = function(price, vatPercentage) {
return price * (vatPercentage / 100);
};

console.log(calculateVat(1000, 21));

const totalPrice = function(price, vatPercentage) {
const vat = calculateVat(price, vatPercentage);
return price + vat;
};

console.log(totalPrice(1000, 21));

// VAT excercise 2

const calculateBasePrice = function(totalAmount, vatPercentage) {
    const basePrice = totalAmount / ((vatPercentage + 100) / 100);
    return basePrice;
};

const basePriceVat = function(totalAmount, vatPercentage) {
const basePrice = calculateBasePrice(totalAmount, vatPercentage);
const vat = totalAmount - basePrice;
return [basePrice, vat];
};

console.log(basePriceVat(1210, 21));

