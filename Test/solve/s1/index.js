function checkArr (arrValue) {
    if (toString.call(arrValue) === '[object Array]') 
        return true;
    return false;
}

let s1 = checkArr('w3resource');
let s2 = checkArr([1,2,3,4,5]);

console.log(s1);
console.log(s2);

