function Dish(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.fixCost = 10;
}
Dish.prototype.cost = function() {

    let totalCost = this.fixCost;

    for(var i = 0; i < this.ingredients.length ;i++) {
        totalCost = totalCost + this.ingredients[i].cost;
    }
    return totalCost;
    
}

Dish.prototype.profit = function () {

    return this.price - this.cost();

}

function Ingredient(name,cost) {
    this.name = name;
    this.cost = cost;
}

function Restaurant(dish) {
    this.customers = [];
    
} 
Restaurant.prototype.customerDishes = function(customerId) {
    let customer = undefined;
    for(let i=0; i < this.customers.length ;i++) {
        if (this.customers[i].id == customerId){
            customer = this.customers[i];
            break;
        }
    }   
    //TODO if customer is not found, throw an error
    return customer.dishes;    
}

function Customer(customer) {
    this.dishes = [];
    this.customer = customer;
    this.id = customer.id;
} 

Restaurant.prototype.printCheck = function(customer) {
   this.printOrders();
   let total = 0;
   for(let i=0; i < this.dishes.length ;i++) {
    total = total + this.dishes[i].price 
   }
   console.log(total);
  
}


Restaurant.prototype.orderDish = function(dish, customer) {
    this.dishes.push(dish);
}

Restaurant.prototype.printOrders = function() {
    for(let i=0; i < this.dishes.length ;i++) {
        console.log('Order #'+ i + ': ' + this.dishes[i].name + ' - ' + this.dishes[i].price);
    }
}

// const pizza = new Dish('Pizza');
// const salad = new Dish('Salad');
const cheese = new Ingredient('Cheese', 5);
const pepperoni = new Ingredient('pepperoni', 2);
const dough = new Ingredient('dough', 1);
const lettuce= new Ingredient('lettuce', 3);
const tomato = new Ingredient('tomato', 8);

const pizza = new Dish('Pizza', 35, [cheese, pepperoni, dough]);
const salad = new Dish('Salad', 25,[lettuce, cheese, tomato]);
const pluto = {
    name: 'Pluto',
    id: 1
  };
  const goofy = {
    name: 'Goofy',
    id: 2
  };
const restaurant = new Restaurant();

restaurant.orderDish(pizza, goofy);
restaurant.printCheck(goofy);
restaurant.orderDish(pizza, pluto);
restaurant.orderDish(salad, pluto);
restaurant.printCheck(pluto);

