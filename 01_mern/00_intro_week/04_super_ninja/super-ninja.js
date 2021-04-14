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

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("Why spend 2 hours reading documentation when you can do 2 weeks of programming instead?");
        super.drinkSake();
        console.log(`Health is now ${this.health}`)
    }

    showStats() {
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`);
    }
}

let name = "Jake"
let health = 98;
let speed = 7;
let strength = 4;
const ninjaObj = new Ninja(name, health, speed, strength);
ninjaObj.showStats();


name = "Boss Muffin"
const senseiObj = new Sensei(name)

console.log("\n\nSensei:")
senseiObj.showStats();
senseiObj.speakWisdom();