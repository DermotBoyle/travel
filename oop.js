class Vehicle {
    constructor(color, model){
        this.color = color
        this.model = model
    }

    turnOn(){
        console.log("You are starting up the " + this.model + 'which is ' + this.color)
    }
}

class car extends Vehicle {
    constructor (color, model, wheels) {
super(color, model)
        this.wheels = wheels
    }
 turnOn(){
     console.log("You are starting up the " + this.model + ' which is ' + this.color + ' and has ' + this.wheels + ' wheels');
 }
 turnOff(){
     console.log("You are turning off the " + this.model + ' which is ' + this.color + ' and has ' + this.wheels + ' wheels');
 }
}

 class motorbike extends Vehicle{
    constructor(color, model, wheels){
       super (color, model);
        this.wheels = wheels;

        }

        turnOn(){
            console.log("You are starting up the motorbike " + this.model + ' which is ' + this.color + ' and has ' + this.wheels + ' wheels');
        }
    }
 let newModel = new car('red','Ferrari', '4');
 newModel.turnOn();

 let moto = new motorbike('black', 'Yamaha', '2')
 moto.turnOn();
