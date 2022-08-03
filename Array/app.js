function array1(){
    // สร้าง array แบบว่าง
    let num = new Array();

    num[0] =  10;
    num[1] =  20;
    num[2] =  30;
    num[3] =  40;
    num[4] =  50;

    console.log('เข้าถึง array ในตำแหน่งที่ 0 มีค่าเท่ากับ :',num[0])
    console.log('เข้าถึง array ในตำแหน่งที่ 1 มีค่าเท่ากับ :',num[1])
    console.log('เข้าถึง array ในตำแหน่งที่ 2 มีค่าเท่ากับ :',num[2])
    console.log('เข้าถึง array ในตำแหน่งที่ 3 มีค่าเท่ากับ :',num[3])
    console.log('เข้าถึง array ในตำแหน่งที่ 4 มีค่าเท่ากับ :',num[4])

    console.log('-------------------------------------');

    let sum = 0;


    console.log('ใช้ for loop ในการเข้าถึง array');
    //ใช้ loop for ในการเข้าถึง
    for(let i =0; i<num.length; i++){

        console.log('เข้าถึง array ในตำแหน่งที่',i,' มีค่าเท่ากับ :',num[i]);

        sum += num[i];
    }

    console.log('sum of array',sum);
}


function array2(){
    let city = Array('กรุงเทพมหานคร','ปทุมธานี','สมุทรปรากาณ','อ่างทอง','สิงห์บุรี');
    
    console.log('ใช้ for loop ในการเข้าถึง array');
    for(let i=0; i<city.length; i++){
        console.log('เข้าถึง array ในตำแหน่งที่',i,' มีค่าเท่ากับ :',city[i]);
    }
}

array1();
console.log('-------------------------------------');
array2();