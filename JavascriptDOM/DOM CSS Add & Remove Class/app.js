const box = document.getElementById('box');
let status;


function addDarkmode(){
    //เพิ่มคลาส
    box.classList.add('darkmode');
}

function removeDarkmode(){
    //ลบคลาส
    box.classList.remove('darkmode')
}

function swichMod(){
    //สลับ
    box.classList.toggle('darkmode');
    
    //การเช็คคลาส
    const chkClass = box.classList.contains('darkmode');
    if(chkClass){
        console.log('มีคลาส darkmode');
    }else{
        console.log('ไม่มีคลาส darkmode');
    }
    //สามารถนำไปปรับใช้กับการเปลี่ยนสไตร์ได้ และ อื่นๆ
}