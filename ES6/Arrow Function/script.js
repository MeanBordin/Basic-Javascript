// arrow function

// แบบเดิม
function fullName(fname, lname){
    return fname + lname;
}
console.log(fullName('Mean', 'bordin'));

// arrow function

fullName2 = (fname, lname) =>{
    return fname + lname;
}
console.log(fullName2('AAAA', 'BBBB'));

// arrow function แบบย่อ
// สามารถใช้ได้กับคำสั่งที่ไม่เยอะมาก

// ไม่ต้องใส่ return เพราะคำสั่งน้อย
result = (num1, num2) => num1 + num2;
console.log(result(10, 20));

setAge = (age) => `Age = ${age}`;
console.log(setAge(21));