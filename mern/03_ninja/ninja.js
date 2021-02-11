class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Strength: ${this.strength}`)
        console.log(`Health: ${this.health}`)
    }

    drinkSake() {
        this.health = this.health + 10;
    }
    

}

let name = "Jake"
let health = 98;
let speed = 7;
let strength = 4;
const ninjaObj = new Ninja(name, health, speed, strength);
ninjaObj.showStats();
ninjaObj.drinkSake();
ninjaObj.showStats();