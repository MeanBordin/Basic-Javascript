// arrow funtions
const chg = () =>{
    // เข้าถึง html tag 
    const select = document.getElementById('select');
    const display = document.getElementById('display');
    
    // print ค่าที่เลือกออกมาดูผ่าน consol
    console.log(select.value);
    // คำสั่ง .value คือการนำค่าจาก html tag มาแสดงผล หรือ จะเก็บไว้ที่ตัวแปรใดตัวแปรหนึ่งก็ได้
    // ทำการแสดงผล 
    display.innerHTML = `ภาษาที่คุณชอบ คือ ภาษา ${select.value.toUpperCase()}`;

}