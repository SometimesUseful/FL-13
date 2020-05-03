function positiveSum(numbers) {
    let arr=[];
    for(let i =0; i<numbers.length;i++){
        arr.push(numbers[i]);
    }
    let sum=0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i]>0){
            sum += arr[i];
        }
    }
    return sum;

}
console.log(positiveSum([2,4,6,8]));
console.log(positiveSum([0,-3,5,7]));