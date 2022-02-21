// object
let car = {
    color: 'black',
    speed: 165,
    maker: 'Volvo',
    drive: function(){
        return 'The car is driving.';
    },
    park: function(){
        return 'The car is parked.';
    }
};

//array
let shoppingList = [
    'Apple','Orange','Pear'
];

// object calls

console.log(car.color);
console.log(car.drive());

//array calls

console.log(shoppingList.length);
console.log(shoppingList);
console.log(shoppingList[2]);