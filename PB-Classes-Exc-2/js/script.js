/* Mitarbeiter Prototyp */
function Employee(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary; // Jahregehalt btw

    // Methode, die einen String zur Ausgabe des PaySlips erstellt.
    this.generatePaySlip = function() {
        let monthlySalary = (this.salary / 12).toFixed(2);

        return `
        Personalnummer: ${this.id}
        Name: ${this.firstName} ${this.lastName}
        Steuernummer: ${this.taxId}
        Monatsgehalt: € ${monthlySalary}
        `;
    };
}


// Erstelle neue Instanz von Employee
let peter = new Employee(1, 'Peter', 'Petersen', 123123, 100000);
console.log(peter);
console.log(peter.generatePaySlip());

// Gebe aus: Ist Peter eine Instanz von Employee?
console.log(`Ist Peter eine Instanz von Employee? -> ${(peter instanceof Employee)}`);

/* Manager Prototyp hat den Prototyp Employee */
function Manager(id, firstName, lastName, taxId, salary) {
    // Aufruf der Konstruktor-Funktion des Prototypen von Manager (Employee)
    this.constructor(id, firstName, lastName, taxId, salary);

    // Im Manager-Objekt gespeichertes Array fuer verwaltete Mitarbeiter
    this.managedEmployees = [];

    // Methode zum Hinzufuegen von Employee Objekten zu dem managedEmployees Array
    this.addManagedEmployee = function(employee) {
        this.managedEmployees.push(employee);
    };
    // Methode zum Entfernen von Employee Objekten aus dem managedEmployees Array
    this.removeManagedEmployee = function(employee) {
        this.managedEmployees = this.managedEmployees.filter(empl => empl.id !== employee.id);
    };
}
// Setze Employee als Prototypen von Manager (Manager ist also eine Auspraegung von Employee)
Manager.prototype = new Employee();

// Statische Methode fuer Manager-Prototyp
Manager.isManager = function(manager) {
    return manager instanceof Manager;
};

// Erstelle neue Instanz von Manager
let manager = new Manager(0,'Patrick', "O'Boyle", 321321, 200000);

manager.addManagedEmployee(peter);
manager.removeManagedEmployee(peter);
console.log(manager);
console.log(manager.generatePaySlip());

// Gebe aus: Ist Patrick O'Boyle eine Instanz von Manager?
console.log(`Ist Patrick O'Boyle eine Instanz von Manager? -> ${(manager instanceof Manager)}`);


// Gebe aus: Ist Patrick O'Boyle eine Instanz von Employee?
console.log(`Ist Patrick O'Boyle eine Instanz von Employee? -> ${(manager instanceof Employee)}`);

// Ausgabe des Ergebnisses der statischen Methode isManager vom Prototypen Manager
console.log(Manager.isManager(manager));

console.log( Array.isArray([]) );