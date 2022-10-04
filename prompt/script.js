let num1 = 20;

for(let i=1; i<3; i++){
    num1 = parseInt(prompt('input your name'));
}

const showName = document.getElementById('demo');

parseInt(num1);
console.log(typeof(num1));

showName.innerHTML = `result = ${num1 += num1}`;

