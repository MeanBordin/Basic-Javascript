/**
 * spread operator
 * คือการ กระจาย array เข้าไปใน array อีกตัวหนึ่ง
 * โดยการ ใช้ ... หน้าตัวแปร
 * 
 * exam
 * 
 * arr1 = [1, 2, 3];
 * arr2 = [4, 5, 6, ...arr1];
 * 
 * output 
 * arr2 = [4, 5, 6, 1, 2, 3];
 * 
 */

function show () {
    const colors = ['red', 'green', 'blue'];
    const allColors = ['gray', 'brown', colors];

    console.log(allColors);
    /**
     * ถ้าเรานำค่าของ arr ไปใส่แบบตรงๆเลย จะทำให้เกิดการนำข้อมูลทั้งก้อน arr ไปใส่เลย
     * output
     * [ 'gray', 'brown', [ 'red', 'green', 'blue' ] ]
     * 
     * ดังนั้น ถ้าเราต้องการเก็บข้อมูลของ 2 arr และอยากให้มี arr แค่ก้อนเดียวจะต้องใช้ spead operator
     * allColors = ['gray', 'brown', ...colors];
     * 
     */

    const new_allColors = ['gray', 'brown', ...colors];

    console.log(new_allColors);
    /**
     * output
     * [ 'gray', 'brown', 'red', 'green', 'blue' ]
     */
}

// การใช้ร่วมกัน กับ functions push ของ arr
function show2 () {
    const num1 = [10, 20, 30];
    const num2 = [40, 50];

    // เราต้องการนำค่าใน num2 ไปเก็บไว้ที่ num1 
    // โดยการใช้ function push ร่มกับ spread operator
    num1.push(...num2);
    
    console.log(num1);
}


show();
console.log('----------');
show2();