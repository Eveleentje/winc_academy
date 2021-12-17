const makePizza = function () {
    console.log('Mix flour and water');
    console.log('Kneed dough');
    console.log('Roll dough in pizza shape');
    console.log('Put sauce and toppings on the pizza');
    console.log('Put pizza in the oven');
}

// 7. The function needs to be called first

makePizza()
makePizza()
makePizza()

const makeSushi = function() {
    console.log('Boil rice');
    console.log('Cut veggies and fish');
    console.log('Roll out seaweed sheet');
    console.log('Add rice, veggies and fish');
    console.log('Roll up the seaweed sheet');
}

makeSushi()

// Order of three sushis and two pizzas

makeSushi(3);

function makeSushi (times = 3) {

    for (i = 0; i < times; i++) {

    console.log('Boil rice');
    console.log('Cut veggies and fish');
    console.log('Roll out seaweed sheet');
    console.log('Add rice, veggies and fish');
    console.log('Roll up the seaweed sheet');
    }    
}

makePizza(2);

function makePizza (times = 2) {

    for (i = 0; i < times; i++) {

    console.log('Mix flour and water');
    console.log('Kneed dough');
    console.log('Roll dough in pizza shape');
    console.log('Put sauce and toppings on the pizza');
    console.log('Put pizza in the oven');
    }    
}

