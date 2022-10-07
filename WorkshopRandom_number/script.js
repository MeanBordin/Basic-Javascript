
function randomNumber(){
    let n = Math.floor(Math.random() * 1000000);
    console.log(n);
    return n;
}

let lotoNumber = document.getElementById('show-number');
lotoNumber.innerHTML = randomNumber();
