function Dish(name) {
    this.name = name;
}
function Restaurant() {
    this.orders = [];
}
Restaurant.prototype.orderDish = function(dish) {
    this.orders.push(dish);
}
Restaurant.prototype.printOrders = function() {
    //const allOrders = Object.key(this.orders);
    for(var i=0; i < this.orders.length; i++){
        console.log('Order #',i, this.orders[i].name);
    }
}


const pizza = new Dish('Pizza');
const salad = new Dish('Salad');
const restaurant = new Restaurant();


restaurant.orderDish(pizza);
restaurant.orderDish(salad);
console.log(restaurant.orders);
restaurant.printOrders();

