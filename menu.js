 //* ## Step 3 - class `Menu`
/*- create & work in `menu.js` file 
- make sure you export the class once it's done

- 4.1 declare a class `Menu`
  constructor with following arguments:
- `type` - string (must be either "drinks" or "food" later)
- `name` - string
- `price` - number
- `isWarm` - boolean (no default value given)

* an instance of `Menu` (e.g. object `food1`) would look like this:

*/
export class Menu {
    constructor(type, name, price, isWarm){
 if(type !== "drinks" && type !== "food") {
throw new Error(`Sorry. Type must be either 'Food' or 'Drinks'.`)

 }
this.type = type;
this.name = name;
this.price = price; 
this.isWarm = isWarm

    }


}


//                      type     name         price  isWarm             
const food1 = new Menu("food", "Hot Sandwich", 12.5, true);
console.log(food1); // Menu { type: 'food', name: 'Hot Sandwich', price: 12.5, isWarm: true }

export default Menu;