let retry;
let WantAGame = confirm('Do you want to play a game');
if (WantAGame === true){
        let max = 5;
        let min = 0;
        let maxprize = 100;
        let prize = 0;
        let number = Math.random() * (max - min) + min;
        number = Math.round(number);

    for (let tries=3; tries>=0; tries--){

            switch (tries) {
                case 3:
                    maxprize -=0;
                    break;
                case 2:
                    maxprize -=50;
                    break;
                case 1:
                    maxprize -= 25;
                    break;
                case 0:
                    alert(`Thanks for your participation. Your prize is: ${prize}$`);
                    retry = confirm('Do you want to play again?');
                    if (retry===true){
                        tries=3;
                        maxprize=100;
                        prize=0;
                        min=0;
                        max=5;
                        number = Math.random() * (max - min) + min;
                        number = Math.round(number);
                    } else{
                        alert('You did not become a billionaire, but can');
                    }
                    break;


            }
        let guess = prompt(`Choose a roulette pocket number from ${min} to ${max}
     Attempts left: ${tries}
     Total prize ${prize}$
     Possible prize on current attempt ${maxprize}$`);
        if(/^\s+$/.test(guess) === true || guess.length===0){
            alert('You did not input your answer');
        } else if (+guess===number){
            alert(`Congratulations, you won! Your prize is: ${prize+=maxprize}$`);
            let nextlvl = confirm('Do you want to continue?');
            if (nextlvl===true){
                tries=4;
                maxprize=maxprize*2;
                max+=5;
                min+=5;
                number = Math.random() * (max - min) + min;
                number = Math.round(number);
                alert(number);
            } else{
                alert(`Thanks for your participation. Your prize is: ${prize+=maxprize}$`);
                let retry = confirm('Do you want to play again?');
                if (retry===true){
                    tries=3;
                    maxprize=100;
                    prize=0;
                    min=0;
                    max=5;
                    number = Math.random() * (max - min) + min;
                    number = Math.round(number);

                } else{
                    alert('You did not become a billionaire, but can');
                    break;
                }
            }
        } else {
            alert('You did not guess the number');
        }
    }

} else{
    alert('You did not become a billionaire, but can');
}