class person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

class car {
    move () {
        console.log('movo forvert');
    }
    
}

const p1 = new person('bordinsak', 21, 175);
const p2 = new person('mean', 10, 180);

let car1 = new car();

console.log(p1);
console.log(p2);

car1.move();
