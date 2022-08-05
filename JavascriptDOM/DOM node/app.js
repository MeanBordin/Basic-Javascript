// เข้าถึง tag หมดให้ใช้ querySelectorAll 
// จะทำการเรียกดูข้อมูล ของ tag ที่เราเรียกมาทั้งหมด เก็บเป็น node lits
// การเรียกดูสามารถทำได้ เหมือนกับการเข้าถึง array คือ index
// ถ้าอนากได้แค่ข้อมูลภายใน tag สามารถใช้ medthod innerHTML ได้
// เพื่อทำการดึงข้อมูลที่อยู่ภายใน tag

/** DOM node
 *  การเข้าถึง tag ที่เหมือนกัน
 *  การสร้าง
 *  การลบ
 *  การแทนที่
 */

const textAll = document.querySelectorAll('p');

console.log(textAll);

// เข้าถึงเหมือนกับ array
console.log(textAll[0]);
console.log(textAll[1]);
console.log(textAll[2]);

// ดึงข้อมูลถายใน tag อย่างเดียว
console.log(textAll[0].innerHTML);

console.log(`node 0 =${textAll[0].innerHTML}`)


/*************************************************** */
//สร้าง HTML elements
//ทำการเข้าถึงก่อน
//ใช้ method creatElement ตามด้วย tag ที่จะสร้าง
//จากนั้นใช้ method appendChild ตัวแปรที่เราเก็บค่า ที่จะสร้าง tag

const menu = document.getElementById('menu');

let count = 1;

function addmenu(){
    const item = document.createElement('li');
    item.innerText = "test..."+(count++);
    //นำ node ลูกไปต่อกับ node แม่
    menu.appendChild(item);
}
/*************************************************** */




/*************************************************** */
/**
 * การลบ node 
 */

//เข้าถึง node แม่ และ node ลูก
const menu2 = document.getElementById('menu2');
const item2 = document.getElementById('item-3');

menu2.removeChild(item2);
/*************************************************** */



/*************************************************** */
// การสร้าแท็คแบบ ไม่ต้องเข้าถึง node แม่
const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.innerText = 'test';
p2.innerText = 'test';

document.body.append(p1,p2);
/*************************************************** */


/*************************************************** */
/** 
 *  การเทียนที่ element 
 *  document.replaceChild(new, old) 
 * */ 

const newItem = document.createElement('li');
newItem.innerText = 'Hello';

const reItem = document.getElementById('item-2');

//เข้าถึง tagแม่.replaceChild(ตัวใหม่, กับตัวเก่า); 
menu2.replaceChild(newItem, reItem);
/*************************************************** */