var carrito = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "It's Driving!"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    car = { model: "ford" },
    function(){ return "dive"; }
];

console.log(carrito.engine.pistons[0].maker);

console.log(array[3].model);

console.log(carrito.drive());

pointer = 'speed';
console.log(carrito[pointer]);