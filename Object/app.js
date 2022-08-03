/**
 * Object ประกอบด้วย 
 * การประกาศ 
 * let valueName = {propertyName : value}
 * 
 * การเข้าถึง object 
 * objectName.propertyName(นิยมใช้) หรือ
 * objectName["propertyName"]
 */

 let product = {
    name : 'เมาส์',
    price : 500,
    color : 'ดำ',
    category : 'คอมพิวเตอร์'
 };

console.log(`Product name = ${product.name}\nPrice = ${product.price}`);
console.log(`color = ${product.color}\ncategory = ${product.category}`)
console.log(`-----------------------------\n\n`);

/**
 * Object Method
 * จะทำการสร้าง Medthod ขั้นมาใน object 
 * medthod จะประกอบไปด้วย functions + return
 * การเข้าถึงจะใช้คำสั้ง this.propertyValue
 * ใน object สามารถมีได้มากกว่า 1 menthod
 */

let person = {
    firstName : 'Bordinsak',
    lastName : 'Prasopboon',
    age : 21,
    getPerson:function(){
        return `First name : ${this.firstName}\nLast name : ${this.lastName}\nAge : ${this.age}`;
    },
    getAge:function(){
        return this.age - 1;
    }
};

//การเรียกใช้งาน Object name + medthod name
let ps = person.getPerson();

console.log(ps);
console.log(person.getAge());

