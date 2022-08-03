let number = 10;

if(number%2 === 0){
    console.log(true+' เศษ = '+number%2);
}
else{
    console.log(false+' เศษ = '+number%2);
}


let a = null; //defult value  false
let b; //undifine = ไม่มีค่าหรือตัวแปรไม่ได้ถูกใช้งาน
// ค่า  NaN หมายถึงนำตัวแปรที่ไม่ใช้ตัวเลขไปคำนวณทางคณิตศาสตร์

if(a){
    console.log(true);
}
else{
    console.log(false);
}