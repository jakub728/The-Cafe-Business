// 2.1 Declare Worker class
export class Worker {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }
  
  // Example: Creating an instance of Worker
  const worker1 = new Worker("Sandy", "Cashier");
  console.log(worker1); 
  // Output: Worker { name: 'Sandy', position: 'Cashier' }
  
  // 2.2 Declare Manager class that extends Worker
export class Manager extends Worker {
    constructor(name, branchId) {
      // Inherit properties from Worker class
      super(name, "Manager"); // "Manager" is the preset position for Manager
      this.branchId = branchId;
      this.branchWorkers = []; // Default empty array for branch workers
    }
  }
  
  // Example: Creating an instance of Manager
  const manager1 = new Manager("Tina", 1);
  console.log(manager1); 
  // Output: Manager { name: 'Tina', position: 'Manager', branchId: 1, branchWorkers: [] }