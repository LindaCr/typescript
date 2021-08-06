import { Friend } from "./friend";

 let friend1: Friend= new Friend("Dave Grohl", 52, "dave@ff.com", true);
 let friend2: Friend= new Friend("Jessie Fecher", 32, "jess@ff.com", true);
 let friend3: Friend= new Friend("Amanda Wallace", 64, "awallace@ff.com", false);
 let friend4: Friend= new Friend("Maggie Kohli", 35, "maggie@ff.com", false);
 let friend5: Friend= new Friend("Fred Bob", 48, "fred@ff.com", false);

 let friends:Friend[]= [friend1, friend2, friend3, friend4, friend5];

 console.log("List of friends ");
 console.log("Name" , "Age" , "Email" , "BFF?");
 friends.forEach(f => {
     console.log(f.name, f.age, f.email, f.bff);
 });