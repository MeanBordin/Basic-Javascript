//gobal 
let a = 100;

console.log('a out functions :',a);

function display(){
    //local
    let a = 50;
    console.log('a in functions :',a);
}

display();

