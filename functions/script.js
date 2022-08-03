function message(){
    alert("Hello, World");
}

function calc(num1, num2){

    let result = num1+num2;

    console.log(result);
}

function show(fname, lname){

    const fullName = fname +" "+ lname;

    console.log(fullName);
}

function sumna(){
    let sum = 0;
    
    for(let i=0; i<=10; i++){
        sum += i;
    }
    console.log(sum);
}

// ส่งค่าออกอย่างเดียว
function getIP(){
    return "127.255.255";
}

function setSalary(money){
    let bonus = 1000;

    return money + bonus;
}

// funtions กำหนดค่าให้กับ parameter
// ถ้าส่งค่า   agument มาไม่ครบจะให้ทำการส่งค่า defult ของ parameter กลับไป
function show2(fname, lname, city="Bangkok"){
    document.write('Firstname = ',fname,'<br>','Lastname = ',lname,'<br>','City = ',city)
}


function run(){
    
    calc(5,5);
    show('Bodinsak', 'Prasopboon');
    sumna();

    let myIP = getIP();

    console.log(myIP)

    let total = setSalary(20000);
    console.log(total);

    show2('Bordinsak','Prasopboon');
    
    


}

run();