export class Menu{
    constructor(type,name,price,isWarm){
        this.type=type;
        this.name=name;
        this.price=price;
        this.isWarm=isWarm;
    }
}

const food1=  new Menu("food","Burger",7,true);
console.log(food1);
