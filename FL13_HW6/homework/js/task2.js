let word = prompt('Enter your word', '');
if(/^\s+$/.test(word) === true || word.length===0){
    alert('Invalid value');
} else {
    if (word.length % 2 === 1) {
        alert(word.substr(word.length / 2, 1));
    } else if (word.length % 2 === 0) {
        alert(word.substr(word.length / 2 - 1, 2));
    }
}
