function countPoints(score){
    let points=0;
    let firstLetter=0;
    let secondLetter=2;
    let arr=[];
    for(let i =0; i<score.length;i++){
        arr.push(score[i]);
    }
    console.log(arr[0].charAt(0));
    console.log(arr[0].charAt(0));
    console.log(arr[0].charAt(3));
    console.log(arr);
    console.log(score);
    for (let i =0; i<arr.length; i++){
        if (+arr[i].charAt(firstLetter)>+arr[i].charAt(secondLetter)){
            points+=3;
        } else if(+arr[i].charAt(firstLetter)<+arr[i].charAt(secondLetter)){
            points+=0
        } else if(+arr[i].charAt(firstLetter)===+arr[i].charAt(secondLetter)){
            points+=1;
        }
    }
    return points;
}
console.log(countPoints(['3:1','1:0','0:0','1:2','4:0','2:3','1:1','0:1','2:1','1:0']));