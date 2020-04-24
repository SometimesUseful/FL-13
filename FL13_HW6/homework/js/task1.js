let tip = 0;
let sum = 0;
let check = prompt('Input check number', 0);
let percentage = prompt('Input tip percentage', 0);
check= +check;
percentage= +percentage;
if(typeof check !== 'number'|| typeof percentage !=='number'){
    alert('Invalid input data');
} else if (percentage<0 || percentage>100){
        alert('Invalid input data');
    } else {
    tip = check * percentage / 100;
    sum = +check + +tip;
}
         if (sum<0){
             alert('Total sum can`t be negative');
         } else{
         alert(`Check number:${check}
Tip:${percentage}%
Tip amount:${tip}
Total sum to pay ${sum}`);
         }





