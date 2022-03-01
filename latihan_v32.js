function faktorial(n) {
    if( n == 0) return 1;
    else return n * faktorial(n-1);  
}

console.log(faktorial(2));

// function testf(n) {
//     if( n >= 0){
//         console.log(n)
//         return testf(n-1);
//     }
       
// }

// testf(10)