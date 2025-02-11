export class Cafe{
    constructor(branchId,name,city,sellsFood){
        this.branchId=branchId;
        this.name=name;
        this.city=city;
        this.sellsFood=sellsFood;
    }
    employee=[];
    menu=[];
    order=[];



    addManager(manager) {
        this.employee.push(manager);
        return `${manager.name} is now the manager for ${this.name}`
    };


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

    getOrder(orderObj) {
        this.order.push(orderObj);

        


    }

    processOrder() {

    }

}


export class Order {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}