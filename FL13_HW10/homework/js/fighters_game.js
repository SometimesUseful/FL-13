let fighterName ='';
let damage = 0;
let hp = 1;
let strength = 0;
let agility = 0;
let wins = 0;
let loses = 0;
class Fighter{

    constructor(fighterName, damage, hp, strength, agility) {
        this.fighterName = fighterName;
        this.damage = damage;
        this.hp = hp;
        this.strength = strength;
        this.agility = agility;
    }
    getfighterName(){
        return this.fighterName;
    }
    getDamage(){
        return this.damage;
    }
    getHealth(){
        return this.hp;
    }
    getStrength(){
        return this.strength;
    }
    getAgility(){
        return this.agility;
    }
    attack(defender){
        let chance = Math.random();
        let guard = (defender.getStrength() + defender.getAgility())/100;
        if (guard>100){
            console.log('Fighter is overpowered');
        }else if (chance<guard){
            console.log(`${this.getfighterName()} missed!`);
        } else{
            defender.dealDamage();
            console.log(`${this.getfighterName()} makes ${this.getDamage()} to ${defender.getfighterName()}`);
        }
    }
    logCombatHistory() {
    return `Name: ${this.getfighterName()}, Wins: ${this.wins}, Loses:${this.loses}`;
    }
    heal(healAmount){
        this.hp+=healAmount;

    }
    dealDamage(damageAmount){
        damageAmount = this.damage;
        if (this.hp>0){
            this.hp=this.getHealth()-damageAmount;
            if (this.getHealth()<0){
                this.hp=0;
            }
        } else{
            this.hp=0;
            console.log('The fighter is dead');
        }
    }
    addWin(){
        this.wins+=1;
    }
    addLoss(){
        this.loses+=1;
    }
}
const myFighter = new Fighter('Maximus', 30, 100, 30, 25);
const myFighter2 = new Fighter('Commodus', 25, 90, 25, 20);

function battle(myFighter, myFighter2) {
    while (myFighter.getHealth()>0 && myFighter2.getHealth()>0){
        myFighter.attack(myFighter2);
        myFighter2.attack(myFighter);
    }
    if (myFighter.getHealth()>0){
        myFighter.addWin();
        console.log(`${myFighter.getfighterName()} has won!`);
        myFighter2.addLoss();
    }else {
        myFighter2.addWin();
        console.log(`${myFighter2.getfighterName()} has won!`);
        myFighter.addLoss();
    }
}