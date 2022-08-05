/**
 * - การกำหนดชนิดข้อมูล - 
 * const ตัวแปรที่เป็นค่าคงที่ 
 * let ตัวแปรสามารถเปลี่ยนแปลงได้ตลอดเวลา
 * 
 * รับ html element
 * const -> class, id, tag
 * let -> ประมวลผล เปลี่ยนแปลงตลอดเวลา
 */

const menu = document.getElementById("Menu");

function showMenu(){
    menu.innerText = `Ovantin\nMiro\nMeji`;
}