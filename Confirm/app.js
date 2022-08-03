/**
 * functions confirm จะทำการลบข้อมูล
 * ใช้รวมกัน กับ html buttom tag 
 * fuctions confitm จะทำการ alert ข้อความ 
 * และจะมี ปุ่มให้เลือกคือ ok/cencel 
 * โดยจะ return ค่า  Ok = true/ cencel = flase 
 */


function deleteData(){
    let result = confirm('คุณต้องการลบข้อมูลหรือไม่ ?');
    //debug สร้างตัวแปลขึ้นมาเก็บ ค่า confirm มาเก็บไว้ที่ตัวแปล
    //และทำการแสเสดงผล
    console.log(result);
    return result;
}

//ดัก
if (deleteData()){
    console.log('✔');
}else{
    console.log('❌');    
}