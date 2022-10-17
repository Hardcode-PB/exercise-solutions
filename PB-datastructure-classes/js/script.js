// 1.
// Klassendefinition
class Person {
    // Konstruktor fuer Klasse Person
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Klassenmethode zur Personenbeschreibung
    describe() {
        return `${this.name}, ${this.age} years old.`;
    }
}

let manuela = new Person('Manuela', 30);
console.log(manuela);
console.log(manuela.describe());

// 2.
// Klassendefinition Cylinder
class Cylinder {
    // Konstruktor fuer Klasse Cylinder
    constructor(radius, height) {
        this.radius = radius;
        this.height = height
    }

    // Methode zum Errechnen des Volumens anhand der Attribute radius und height
    calcVolume() {
        return (Math.PI * (Math.pow(this.radius, 2)) * this.height).toFixed(4);
    }
}

let cylinder = new Cylinder(10, 50);
console.log(cylinder.calcVolume());

// 3.
class Clock {
    constructor( template ) {
        this.template = template;
    }
  
    // Als private Methode angelegt, 
    // da sie in der Construtor-Function als innere Funktion definiert war
    // Private Methoden koennen nicht von aussen aufgerufen werden
    #render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }
  
    // Methode start ruft die private Methode render auf
    start() {
      this.#render();
    }
}
  
let clock = new Clock('h:m:s');
clock.start();


// 4.
class TV {
    #DEFAULT_CHANNEL = 1;
    #DEFAULT_VOLUME = 50;
    #MAX_VOLUME = 100;
    #MIN_VOLUME = 0;
    #AMOUNT_CHANNELS = 50;

    constructor(brand) {
        this.brand = brand;
        this.channel = this.#DEFAULT_CHANNEL;
        this.volume = this.#DEFAULT_VOLUME;
    }

    increaseVolume() {
        if (this.volume < this.#MAX_VOLUME) {
            this.volume++;
        }
        console.log(`Lautstaerke: ${this.volume}`);
    }

    decreaseVolume() {
        if (this.volume > this.#MIN_VOLUME) {
            this.volume--;
        }
        console.log(`Lautstaerke: ${this.volume}`);
    }

    getNewChannel() {
        // Stelle channel auf zufaellige Ganzzahl zwischen 1 und 50 ein
        this.channel = Math.floor(Math.random() * this.#AMOUNT_CHANNELS + 1);
        console.log(`Kanal: ${this.channel}`);
    }

    // Methode zum Zuruecksetzen auf Ausgangswerte
    resetTV() {
        this.channel = this.#DEFAULT_CHANNEL;
        this.volume = this.#DEFAULT_VOLUME;
    }


    getTvStatus() {
        return `${this.brand} auf Kanal ${this.channel} mit Lautstaerke ${this.volume}`;
    }
}

let tv = new TV('Loewe');
console.log(tv);
tv.increaseVolume();
tv.decreaseVolume();

tv.getNewChannel();
tv.increaseVolume();
console.log(tv.getTvStatus());