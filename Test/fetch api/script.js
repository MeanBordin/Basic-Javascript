const header = document.querySelector('.header');

function callProvince (){
    fetch(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces`)
    .then(res=>res.json()).then(data => {
        // ดึงข้อมูลออกมาดู 
        console.log(data.data);

        // ข้อมูลที่ดึงมาเป็น array
        console.log(data.data[0]);
        // เข้าถึงข้อมูลใน array
        console.log(data.data[0].province);

        header.innerHTML = data.data[0].province;
    });

}

callProvince();