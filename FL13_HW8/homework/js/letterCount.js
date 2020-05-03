function letterCount(str1,str2) {

    let number=0;
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i)===str2) {
            number++;
        }
    }
    return number;

}
console.log(letterCount('Maggy', 'g'));
console.log(letterCount('Isaac', 'c'));

