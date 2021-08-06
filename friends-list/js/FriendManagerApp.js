"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friend1 = new friend_1.Friend("Dave Grohl", 52, "dave@ff.com", true);
var friend2 = new friend_1.Friend("Jessie Fecher", 32, "jess@ff.com", true);
var friend3 = new friend_1.Friend("Amanda Wallace", 64, "awallace@ff.com", false);
var friend4 = new friend_1.Friend("Maggie Kohli", 35, "maggie@ff.com", false);
var friend5 = new friend_1.Friend("Fred Bob", 48, "fred@ff.com", false);
var friends = [friend1, friend2, friend3, friend4, friend5];
console.log("List of friends ");
console.log("Name", "Age", "Email", "BFF?");
friends.forEach(function (f) {
    console.log(f.name, f.age, f.email, f.bff);
});
