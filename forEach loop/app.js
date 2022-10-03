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

car.forEach(myData2 = (item) =>{
    console.log(item)
})
