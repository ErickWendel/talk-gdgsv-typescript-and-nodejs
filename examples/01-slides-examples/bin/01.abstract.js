class Employee {
    salary() {
        return `$10.000`;
    }
}
class Developer extends Employee {
}
class Manager extends Employee {
    salary() {
        return `$20.000`;
    }
}
new Developer().salary();
// $10.000
new Manager().salary();
// $20.000
// const dev = new Developer();
// const manager = new Manager();
// console.log(`The developer's salary is ${dev.salary()}`);
// console.log(`The manager's salary is ${manager.salary()}`);
