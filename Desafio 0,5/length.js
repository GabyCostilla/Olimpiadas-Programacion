function Long(l,i){
    if(l[i] == undefined){
        return 0;
    }else{
        return 1 + Long(l,i+1);
    }
}

console.log(Long("",0))

