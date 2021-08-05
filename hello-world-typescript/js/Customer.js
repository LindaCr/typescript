"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name, sales) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }
    Customer.prototype.log = function () {
        console.log("[" + this.id + "] [" + this.name + "] [" + this.sales + "]");
    };
    return Customer;
}());
var customers = [];
var cust = new Customer(1, "MAX", 1000);
customers.push(cust);
customers.push(new Customer(2, "GA", 2000));
customers.push(new Customer(3, "P&G", 10000));
for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
    var c = customers_1[_i];
    c.log();
}
