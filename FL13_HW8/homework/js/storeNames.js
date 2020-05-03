function storeNames(name){
    let result=[];
    for(let i =0; i<name.length;i++){
        result.push(name[i]);
    }
    return result;
}
console.log(storeNames(['Nick Fury','Iron Man','Doctor Strange']));