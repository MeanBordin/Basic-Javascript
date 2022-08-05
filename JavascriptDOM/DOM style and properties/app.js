/**
 * การเปลี่ยนแปลง style 
 * ตัวแปร.style.properties
 */

const title = document.querySelector('.title');
const content = document.getElementById('content');

// เปลี่ยนสี
content.style.color = 'red';
// ปรับขนาด
content.style.fontSize = '60px';

/**
 * การเปลี่ยนชื่อ class
 * เปลี่ยนชื่อให้ไปเรียกใช้ properties ที่มีอยู่แล้วใร css
 */

function chTitle(){
    title.setAttribute('class','header');
}


/**--------------------------------------------------------------- */

// methode Date();
const date = document.getElementById('demo');
date.innerHTML = Date();

