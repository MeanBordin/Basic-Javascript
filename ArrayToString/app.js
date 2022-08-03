const color = ['red', 'green', 'blue', 'yellow', 'gray', 'pink'];

// convert array to string (function toString)
const convert = color.toString();

console.log(convert);
// การแสดงผลจะขั้นด้วยคอมม่าเป็นการแสดงว่าแปลงเป็นสติงแล้ว

console.log('-------------');

// convert array to string (function join)
// เราสามารถใส่ สติงในฟังชัน จอย ได้ เช้น คอมม่า หรือ ช่องว่าง 
// และจะทำการแสดงผลค่าของมาตามที่เราได้ใส่ อากิวเมนในฟังชัน จอย
const funcjoin = color.join(' ');

console.log(funcjoin);

// funtions pop จะทำการนำตัวสมาชิก index ตัวสุดท้ายที่อยู่ใน array ออกมาจาก array นั้น
let finalIndex = color.pop();

console.log(finalIndex);