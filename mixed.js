//inheritance
class Car{
    constructor(name){
        this.name = name;
    }
    constructor(year){
        this.year = year;
    }
}

var car = new Car("Car1");

//encapsulation
function CarInfo(val){
    var name = val;
    var names = {
        setName: function (val){
            name = val;
        },
        getName: function (){
            return name;
        }
    }
    return names;
}

var card = new CarInfo("Car2");
card.setName("Honda")
console.log(card.getName());
console.log(card.name);

//abstraction
class Student{
    #name;
    #grade;

    setName(val){
        this.#name = val;
    }
    setGrade(val){
        this.#grade = val;
    }
    getName(){
        return this.#name;
    }
    getGrade(val){
        let points = 50
        return this.#grade + points;
    }
}

var stu = new Student();
stu.setName("Steve");
stu.setGrade(50);
console.log(stu.getName());
console.log(stu.getGrade());
console.log(stu.name);

//polymorphism 
class Ford extends Car{
    constructor(name, model){
        super(name);
        this.model = model;
    }
    logDetails(){
        console.log('Name: ${this.name}, Model: ${this.model}')
    }
    sayName(){
        console.long("From Car")
        super.sayName();
    }
}
var focus = new Car("Ford Focus", 2013)
focus.logDetails();
focus.sayName();
