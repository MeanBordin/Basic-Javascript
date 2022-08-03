function loopfor(){
    let color = ['red', 'green', 'blue'];

    color.push('black');
    color.push('yellow');1

    for(let i=0; i<color.length; i++){
        console.log(`ลำดับ = ${(i)} มีค่า = ${color[i]}`);
        i++;
    }
    // (i+1) ถ้าอยากห้แสดงผล โดยเริ่มที่ 1 
    // ให้ทำการบวกหนึ่งแล้วครอบวงเล็บเพื่อให้ทำการวนลูปแล้วทำการเก็บค่าบวกเพิ่มไปเรื่อย
}


function main(){
    loopfor();
}

main();