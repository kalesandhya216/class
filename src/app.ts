
let cl = console.log;

// class >> It is a blueprint for creating instances/objects.
// class >> syntactical sugar coating over constructor function.

// Access modifier

// public >> It is by default >> It will be available in class as well as instances of that class.
// private >> It will be available within class only.


class Department {
    public name! : string;
    private empArr : string[] = [];

    constructor(n : string){
        this.name = n;
    }
    describe(this : Department){
        cl(`Department : ${this.name}`);
    }

    addEmp(emp : string, emp1 : string){
        this.empArr.push(emp, emp1);
    }
    printEmpInfo(){
        cl(this.empArr.length);
    }
}


let accounting = new Department("Accounting");

cl(accounting);         

accounting.describe();

accounting.addEmp('John', 'Jen');
// accounting.empArr[2] = 'Smith';


accounting.printEmpInfo();

let accountingCopy = {describe : accounting.describe}

// accountingCopy.describe();


// =========================== Ex.1) ===========================


class Student{
    fname! : string;
    lname! : string;
    age! : number;
    private favFoodArr : string[] = [];

    constructor(n1 : string, n2 : string, n3 : number){
        this.fname = n1;
        this.lname = n2;
        this.age = n3;
    }
    fullname(this : Student){
        cl(`The name of student is ${this.fname} ${this.lname}`);
    }

    addFood(food : string, food1 : string){
        this.favFoodArr.push(food, food1);
    }
    printFoodInfo(){
        cl(this.favFoodArr.length);
    }
}


let s1 = new Student('Neha', 'Deshmukh', 22);
cl(s1);

s1.fullname();

let s1Copy = {fullname : s1.fullname};
// s1Copy.fullname();

s1.fullname();
s1.addFood('pizza', 'fries');
// s1.favFoodArr[2] = 'sandwich';

s1.printFoodInfo();

// =========================== Ex.2) ===========================


class Mobile{
    category! : string;
    private mobArr : string[] = [];

    constructor(cat1 : string){
        this.category = cat1;
    }

    description(this : Mobile){
        cl(`The category is ${this.category}`);
    }

    addMobs(mob1 : string){
        this.mobArr.push(mob1);
    }
    printMobInfo(){
        cl(this.mobArr.length);
    }
}


let mob1 = new Mobile('Electronics');
cl(mob1);

mob1.description();

let mob1Copy = {description : mob1.description};
// mob1Copy.description();

mob1.addMobs('vivo');
// mob1.mobArr[1] = 'oppo';


mob1.printMobInfo();


// =========================== Ex.3) ===========================


class Person{
    fname! : string;
    lname! : string;
    age! : number;
    private languages : string[] = [];

    constructor(p1 : string, p2 : string, p3 : number){
        this.fname = p1;
        this.lname = p2;
        this.age = p3;
    }
    fullname(this : Person){
        cl(`Hii I am ${this.fname} ${this.lname} ${this.age} years old.`)
    }

    addLang(lang1 : string, lang2 : string){
        this.languages.push(lang1, lang2);
    }
    printPersonInfo(){
        cl(this.languages.length);
    }
}


let p = new Person('Samar', 'Joshi', 35);
cl(p);

p.fullname();

p.addLang('English', 'Tamil');
// p.languages[2] = 'French';

let p1 = {fullname : p.fullname};
// p1.fullname();


p.printPersonInfo();


// =========================== Ex.4) ===========================


class Address{
    street! : string;
    city! : string;
    state! : string;

    constructor(a1 : string, a2 : string, a3 : string){
        this.street = a1;
        this.city = a2;
        this.state = a3;
    }

    getAddress(this : Address){
        cl(`${this.street} ${this.city} ${this.state}`);
    }
}


let address1 = new Address('shastri road', 'Pune', 'Maharashtra');
cl(address1);

address1.getAddress();

let addressCopy = {getAddress : address1.getAddress};
// addressCopy.getAddress();



// =========================== Ex.5) ===========================


class Staffmember{
    name! : string;

    constructor(memeber : string){
        this.name = memeber;
    }
    describe_1(this : Staffmember){
        cl(`The staffmember is ${this.name}`);
    }
}


let m1 = new Staffmember('Smith');
cl(m1);

m1.describe_1();

let m1_copy = {describe_1 : m1.describe_1};
// m1_copy.describe_1();