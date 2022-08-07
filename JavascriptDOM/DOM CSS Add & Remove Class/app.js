const box = document.getElementById('box');

function addDarkmode(){
    //เพิ่มคลาส
    box.classList.add('darkmode');
}

function removeDarkmode(){
    //ลบคลาส
    box.classList.remove('darkmode')
}

function swichMod(){
    box.classList.toggle('darkmode');
}