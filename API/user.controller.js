const User = {
    get: (req, res) => {
        res.status(200).send('Este es un Juan');
    },
    list: (req, res) => {
        res.status(200).send('Hola Juan!');
    },
    create: (req, res) => {
        res.status(201).send('Creando un Juan!');
    },
    update: (req, res) => {
        res.status(204).send('Actualizando Juan');
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando un Juan');
    }
}

module.exports = User;