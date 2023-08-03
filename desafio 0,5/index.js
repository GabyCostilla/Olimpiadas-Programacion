function fib(m) {
    if(m==0 || m==1){
        return m;
    }
    else {
        return fib(m-1) + fib(m-2);
    } 
}

console.log(fib(1500))