 /* *********************************************
 *    
 *      - HTML DOM (Documnet Object Model) - 
 *      - การเข้าถึง Html Elemnt or Html tag -
 * 
 * *********************************************
 *       - สามารถเข้าถึงได้ โดยการ อ้างถึง - 
 * *********************************************
 * 
 *    document.getElementsByid('ชื่อ id'); นิยมใช้
 *    document.getElementsByTagName('ชื่อ tag');
 *    document.getElementsByClassName('ชื่อ class'); 
 * 
 *  !!!! และต้อง นำ tag javascript 
 *      ไปใส่ในส่วนของ tag body ใน html !!! 
 *   
 * ***********************************************
 * */

const tagID = document.getElementById('name');
const tagID2 = document.getElementById('name2');
console.log(tagID);

/**
 * - Method -
 * elemnt.setAtttibute(attibute, value)
 * เปลี่ยน เนื้อหา html = element.innerHtml
 * เปลี่ยน เนื้อหา text = element.innerText
 * เปลี่ยน style elment = element.style.properties = value
 */

tagID.innerText = 'Test Hello, World';

//ทำงานร่วมกับปุ่ม buttom tag + event onClick 
//onClick + functions


//เมื่อกดปุ่มแล้วจะทำการเรียกใช้ ฟังก์ชันนี้ และทำการเปลี่ยนข้อความ

let a =10, b =20;
let result = a+b;

let x = ['Thailand', 'Amarican'];

function displayText(){
    
    //แสดงผลเป็นข้อความอย่างเดียว
    tagID.innerText = 'Hello Bordinsak';
    
    //สามารถแสดงผลร่วมกับ html tag ได้
    tagID2.innerHTML = '<h1>Hello Bordinsak</h1>';
}

//สามารถแสดงผลร่วมกับตัวแปรได้

let tagID3 = document.getElementById('name3');

//แสดงผลเป็นข้อความอย่างเดียว
tagID3.innerText = `A+B = ${result}`;

let tagID4 = document.getElementById('name4');

//สามารถแสดงผลร่วมกับ html tag ได้
tagID4.innerHTML = `<h1>A+B = ${result}</h1>`;

/**
 *  - document.querySelector - 
 * สามารถเข้า ผ่าน id ( # ), class ( . ) นิยมใช้ ได้
 *  
 * - document.querySelectorAll - 
 * สามารถเข้าถึง tag ทั้งหมดได้
 * เพราะ ว่า class สามารถ ซ้ำกันได้ 
 */

let tagID5 = document.querySelector('.name5')

tagID5.innerHTML = `<b>${x}</b>`;

function clicker(){
    alert('ไอ้ควายเอ้ยบอกแล้วอย่ากด');
}

let header = document.getElementById('header1');

header.innerHTML = '<u>Hello <br>HTML</u>';

