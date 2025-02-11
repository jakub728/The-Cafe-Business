import { Cafe } from "./cafe.js";
import { Worker, Manager } from "./worker.js";
import { Menu } from "./menu.js";

const cafe2= new Cafe(2,"Brown Cafe","Berlin",false);
const cafe3= new Cafe(3,"Coffee House","Leipzig",true);
const cafe4= new Cafe(4,"Cafe Center","Munich",false);

const worker2= new Worker("Miki","Cashier");
const worker3= new Worker("Zille","Barista");
const worker4= new Worker("Ifeoma","Cashier");
const worker5= new Worker("Mazzam","Barista");
const worker6= new Worker("Mohammed","Cashier");
const worker7= new Worker("Issam","Barista");

const manager2= new Manager("Chinedu",2);
const manager3= new Manager("Okile",3);
const manager4= new Manager("Jakub",4);

const food2=  new Menu("food","Sandwich",8.5,true);
const food3=  new Menu("food","Pizza",10,true);
const food4=  new Menu("food","Pasta",6.5,true);
const drink2=  new Menu("drinks","Beer",3.5,false);
const drink3=  new Menu("drinks","Coffee",6,false);
const drink4=  new Menu("drinks","Tea",7.5,false);