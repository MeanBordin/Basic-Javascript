/**
 * Array poperties 
 * - .lenght   = หาจำนวนสมาชิกใน array
 * - .sort     = จะเรียงจากน้อยไปมาก หรือ ใช้เรียง ตังอักษร (จะมีปัญหากับการเรียงตัวเลข) 
 * - .reverse  = หลังมาหน้า
 * - .push     = เพิ่มจำนวนสมาชิกใน array 
 * */ 

function leg(){
    let color = Array('red','green','blue');
    console.log('lenght of array =',color.length);
    console.log('--------------------');
}

function sorting(){
    let eng = Array('B','C','D','A');
    let th = Array('ค','ก','ข','ช','จ');
    let num = Array(9,8,7,6,5,4,3,2,1);

    console.log(`Bofore sort =${eng}`);

    //Properties Sort จะเรียงจากน้อยไปมาก หรือ ใช้เรียง ตังอักษร
    let result_eng = eng.sort();
    console.log('Afther sort =',result_eng);

    console.log('--------------------');

    console.log('Bofore sort =',th);    
    let result_th = th.sort();
    console.log('Afther sort =',result_th);

    console.log('--------------------');

    console.log('Bofore sort =', num);
    let result_num = num.sort();
    console.log(`Afther sort =${result_num}`);
    
    console.log('--------------------');
    
}

function rev(){
    let eng = Array('A','B','C','D');

    console.log('Bofore reverse =',eng);

    // หลังมาหน้า
    let result_rev = eng.reverse();

    console.log('Afther reverse =',result_rev);
}

//การเข้าถึง index ตัวแรก และตัวสุดท้าย
function serch_first_index(){
    let eng = Array('B','C','D','A');
    
    //ตัวแรก
    let first = eng[0];
    
    console.log('--------------------');
    
    console.log(`First index of Array :${first}`);

    let last = eng[eng.length-1];
    
    console.log(`Last index 0f Array :${last}`);
    
}

function addIndex(){
    let city = Array('กรุงเทพมหานคร','ปทุมธานี','สมุทรปรากาณ','อ่างทอง','สิงห์บุรี');
    
    console.log('--------------------');
    console.log(`Befor push index of array :${city}`);
    
    //เพิ่มสมาชิก ใน array
    city.push('อยุธยา');

    console.log(`After push index of array :${city}`);
}

function main(){
    leg();
    sorting();
    rev();
    serch_first_index();
    addIndex();
}

main();

