const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://loki:3969@cluster0.are1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    edad: Number,
});

const crear = async () => {
    const user = new User({username: 'Juan Perez', edad: 30});
    const savedUser = await user.save();
    // console.log(savedUser);
}

// crear();

const buscarTodo = async () => {
    const users = await User.find();
    console.log(users);
}

buscarTodo();

const buscar = async () => {
    const user = await User.find({username: 'Juan Mendoza'});
    console.log(user);
}

// buscar();

const buscarUno = async () => {
    const user = await User.findOne({username: 'Juan Perez'});
    console.log(user);
}

// buscarUno();

const actualizar = async () => {
    const user = await User.findOne({username: 'Ivan Mendoza'});
    console.log(user);
    user.edad = 22;
    await user.save();
}

// actualizar();

const eliminar = async () => {
    const user = await User.findOne({username: 'Juan Perez'});
    console.log(user);
    if (user) {
        await user.remove();
    }
}

eliminar();