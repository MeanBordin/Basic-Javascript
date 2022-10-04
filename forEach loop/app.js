/**
 * forEach จพต้องทำการใส่ callback function 
 * โดยทำการสร้าง functions ขึ้นมา ใส่เป็น agument ให้กับ forEach
 * โดยใน callback functions จะต้อง รับ parameter มาด้วย 
 * และทำการแสดงผล 
 */
 
const car = ['honda', 'mazda', 'misumishi', 'toyota'];

car.forEach(myData);

function myData(item){
    console.log(item);
}

/**
 * การเขียน funvtion แบบ arrow function 
 * สามารถนำมาประยุกค์ใช้กับการลนลูป แบบ forEach ได้
 * 
 * จาก functions maData ข้างบน เราต้องการวนลูปใน array โดยการใช้ forEach 
 * เราทำการสร้างฟังชั่น เพื่อทำการแสดงผลผ่านทาง consol
 * หลังจากนั้นทำการเรียกใช้ functions โดยการนำ functions ได้ใส่เป็น parameter
 * และเมื่อทำการวนลูป forEach จำทำการส่ง agument ไปยัง parameter ของ functions myData
 * ทำให้ข้อมูลใน Array เก็บไวที่ตัวแปร item  
*/  
car.forEach(myData2 = (item) =>{
    const result_item = item;
    console.log(result_item)
    document.write(`<h1>${result_item}</h1>`);
})
