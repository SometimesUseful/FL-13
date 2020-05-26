let speed = 0;
let Maximum;
let drivingInterval;
let spd;
let engineName;
let Vehicle = {
    maxSpeed: 70,
    color: 'blue',
    engine: 'ES7',

    upgradeEngine(newEngine, maxSpeed) {
        this.engine = newEngine;
        this.maxSpeed = maxSpeed;
    },
    getInfo() {
        return {
            model: this.model,
            engine: this.engine,
            maxSpeed: this.maxSpeed,
            color: this.color
        }
    },
    drive() {
        spd = this.maxSpeed;
        function driving() {
            speed += 20;
            if (speed > spd) {
                console.log('speed is too high, SLOW DOWN!');
            }
            console.log(speed);
        }
        drivingInterval = setInterval(() => driving(), 2000);

    },
    stop() {
        engineName = this.engine;
        clearInterval(drivingInterval);
        Maximum = speed;
        function braking() {
            speed -= 20;
            console.log(speed);
            if (speed === 0) {
                clearInterval(Brake);
                if (engineName===Vehicle.engine) {
                    console.log(`Vehicle is stopped. Maximum speed during the drive was ${Maximum}`);
                } else if (engineName===Car.engine){
                    console.log(`Car ${Car.model} is stopped. Maximum speed during the drive ${Maximum}`);
                } else if (engineName===Motorcycle.engine){
                    console.log(`Motorcycle ${Motorcycle.model} is stopped. Good drive`);
                }
            }
        }
        let Brake = setInterval(() => braking(), 1500);

    }

};

let Car = {
    maxSpeed: 80,
    model: 'V8',
    color: 'green',
    engine: 'S322',
    changeColor(newColor){
        if (newColor===this.color){
            console.log('The selected color is the same as previous, please, choose another one')
        }else {
            this.color = newColor;
        }
    }

};
let Motorcycle = {
    maxSpeed: 90,
    model: 'ES6',
    color: 'red',
    engine: 'BR-52',
    drive() {
        console.log('Let`s Drive');
        spd = this.maxSpeed;
        function driving() {
            speed += 20;
            if (speed > spd) {
                console.log('speed is too high, SLOW DOWN!');
            }
            if (speed-spd>=30){
                console.log('Engine overheating');
                Motorcycle.stop()
            }
            console.log(speed);
        }
        drivingInterval = setInterval(() => driving(), 2000);
    }
};
Car.__proto__ = Vehicle;
Motorcycle.__proto__ = Car;