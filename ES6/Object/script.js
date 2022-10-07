// original

const person ={
    first_name : 'Mean', 
    last_name : 'bordinsak',

    // method
    showdata(){
        console.log(first_name, last_name);
    }
}
console.log(person);


// แบบใหม่
// ถ้าชื่อตัวแปร เหมือนกันกับใน object ไม่ต้องใส่ value 
// ให้กับ popertie ก็ได้
const first_name = 'Mean';
const last_name = 'bordinsak';

const person2 ={
    first_name , 
    last_name 
}
console.log(person2);


