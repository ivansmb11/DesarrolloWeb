function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayCar = displayCar;
  }

var Mustang = new Car('Mustang', 'Bullit', 1983);

function displayCar() {
    var result = `Un hermoso ${this.year} ${this.make} ${this.model}`;
    console.log(result);
}

Mustang.displayCar();