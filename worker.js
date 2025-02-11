
//* ### Step 5 - Add Methods in `Manager`

// 5.1 
// - `addWorker()` : accepts a worker object as argument, 
//                   adds the object into `Manager`'s `branchWorkers` array,
//                   returns a message `[name] is added`

// ```js
// console.log(manager1.addWorkers(worker1)); // Sandy is added
// console.log(manager1.branchWorkers) // [ Worker { name: 'Sandy', position: 'Cashier' } ]
// ```

// 5.2
// - `removeWorker()` : accepts a name of worker object as input, 
//                      and removes the person from its `branchWorkers` array. 
//                      Finally returns a message: `[name] is removed. current workers: [name], [name]...`

// // ```js
//  console.log(manager1.removeWorker("Sandy")); // Sandy is now removed. current workers: Philip
// // ```

// 5.3 Add two workers: by using `addWorker()`, add two worker objects(1 barista, 1 cashier) to each manager's `branchWorkers` array

// 5.4 Test `removeWorker()` method to see if it works. Add the person back to the `branchWorkers` array, once it's successfully done.




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

  // Method to add worker
  addWorker(worker) {
    this.branchWorkers.push(worker);
    return `${worker.name} is added`;
  }

  // Method to remove worker
  removeWorker(workerName) {
    const index = this.branchWorkers.findIndex(worker => worker.name === workerName);
    if (index !== -1) {
      const removedWorker = this.branchWorkers.splice(index, 1);
      return `${removedWorker[0].name} is removed. current workers: ${this.branchWorkers.map(worker => worker.name).join(", ")}`;
    } else {
      return `${workerName} not found.`;
    }
  }
}

// Example: Creating instances of Worker and Manager
const worker2 = new Worker("Philip", "Barista");
const manager1 = new Manager("Tina", 1);

console.log(); // spacing purpose only
console.log(); // spacing purpose only


// 5.2 Add workers using addWorker ( added = Sandy w-1 and Philip w-2)
console.log(manager1.addWorker(worker1));
console.log(manager1.addWorker(worker2)); 
console.log(manager1.branchWorkers); 
// Output: [ Worker { name: 'Sandy', position: 'Cashier' }, Worker { name: 'Philip', position: 'Barista' } ]


console.log(); // spacing purpose only
console.log(); // spacing purpose only


// 5.3 Add Sandy back to branchWorkers array
console.log(manager1.addWorker(worker1)); 
// Output: Sandy is added



console.log(); // spacing purpose only
console.log(); // spacing purpose only



console.log(manager1.branchWorkers); 
// Output: [ Worker { name: 'Philip', position: 'Barista' }, Worker { name: 'Sandy', position: 'Cashier' } ]


console.log(); // spacing purpose only
console.log(); // spacing purpose only


// 5.4 Test removeWorker method
console.log(manager1.removeWorker("Sandy")); 
// Output: Sandy is removed. current workers: Philip





  