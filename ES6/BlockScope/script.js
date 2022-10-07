// block scope (let / constant)

// แบบเก่า
// ถ้าใช้การประกาศตัวแปรแบบ var 
// จะทำให้ตัวแปรถูกมองเป็น global 
var x = 10;

if (x === 10){
    var y = 500;
    console.log(`y = ${y}`);
}
console.log(`y = ${y}`);
console.log('-----------');
/*****************************************/

// ถ้าใช้ let จะทำให้ตัวแปรถูกมองเป็นแบบ  block scope
// ทำให้ตัวแปรไม่ถูกมองเป็น global 
// ปัจจุบัน นิยมใช้ let เพื่อแก้ไขปัญหาของ var

let a = 100;
let b = 200;
if (a === 100){
    let b = 300;
    console.log(`b = ${b}`);
}
console.log(`b = ${b}`);

/*********************************************/

// const = ค่าคงที่ไม่สามารถเปลี่ยนแปลงได้

const c = 10;
c = 20;
// run -> TypeError: Assignment to constant variable.
// เป็นค่าคงที่ไม่สามารถเปลี่ยนแปลงได้
console.log(c);

