let number = [20, 100, -100, 5, -25, 10];

console.log(`เรียงจากก่อนเรียง = ${number}`);

// ให้ funtions sort แล้วใส่ agumnet ให้กับ function sort 
// โดย ทำการใส่ เป็น functions และใน fuctions ให้ทำการรับ parameter 
// สองตัวคือ a, b 
// ตัวแรกแทนตัวเลขที่มีค่าลบและจะถูกเรียงก่อน
// ตัวที่สองแทนตัวเลขที่มีค่าบวกจะถูกเรียงทีหลัง

number.sort(function(a,b){
    return a-b;
});

console.log(`น้อยไปมาก = ${number}`);

console.log('---------------');

number.sort(function(a,b){
    return b-a;
});


console.log(`เรียงจากมากไปน้อย = ${number}`);



