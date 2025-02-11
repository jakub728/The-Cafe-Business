import { Worker, Manager } from "./worker.js";
export class Cafe{
    constructor(branchId,name,city,sellsFood){
        this.branchId=branchId;
        this.name=name;
        this.city=city;
        this.sellsFood=sellsFood;
    }
    employee=[];
    menu=[];
    order=[]
    addManager(obj){
        let employee=[];
        employee.push(obj);
        return `${obj.name} is now the manager for ${this.name}.`

    }
    addEmployee() {
        if(!this.employee.length) {
            return `Manager is not added yet`
        }
        this.employee[0].branchWorkers.map((element)=>this.employee.push(element))
        
    
        return `manager: ${this.employee[0].name}, workers:[${this.employee[1].name} (${this.employee[1].position})], [${this.employee[2].name} (${this.employee[2].position})]`
    };


    addMenu(menuObj) {
        if(this.sellsFood === true) {
            if (menuObj.type !== "food" || menuObj.type !== "drinks") {
                this.menu.push(menuObj)
                return `${menuObj.name} has been added to menu`
            } else {
            return `${menuObj.type} is not a menu item`
            }
        } else {
            return `${this.name} doesn't sell food`
        }
    };

    removeMenu(menuObj) {
        let newMenu = [];
        this.menu.filter((element)=> {
            if (element.name !== menuObj.name) {
                newMenu.push(element)
            }
        })
        let newMenuNames = newMenu.map((element)=> element.name)
        this.menu = newMenu;
        return `${menuObj.name} has been removed. Current menu items: ${newMenuNames.join(", ")}` 
    };
}

const cafe1= new Cafe(1,"Brown House","Berlin",false);
console.log(cafe1);

