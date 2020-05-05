function convert(numbers){
    let arr=[];
    for (let i = 0; i<numbers.length; i++){
        arr.push(numbers[i]);
        if (typeof numbers[i]==='string'){
            arr[i]= +arr[i];
        } else if(typeof numbers[i]==='number'){
            arr[i]=String(arr[i]);
        }
    }
    return arr;
}

function callaback(el) {
    console.log(el*2);
}
function executeforEach(arr){
    for(let i = 0; i < arr.length; i++){
        callaback(arr[i]);
    }
    return arr;
}

function flipOver(wordToFlip) {
    return wordToFlip.split('').reverse().join('');
}

function makeListFromRange(a,b) {
    let list = [];
    if (a>=b){
        console.log('test');
    }
    for (let i=a; i<=b; i++){
        list.push(i);
    }
    return list;
}

 function getPastDay(date,days) {
     let pastDate = new Date(date);
     pastDate.setDate(pastDate.getDate() - days);
     return pastDate.getDate();

 }
const date = new Date(2020, 0, 2);

