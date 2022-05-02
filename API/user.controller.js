const Users = require('./User');

const User = {
    get: async (req, res) => {
        const { id } = req.params;
        const user = await Users.findOne({ _id: id });
        res.status(200).send(user);
    },
    list: async (req, res) => {
        const user = await Users.find();
        res.status(200).send(user);
    },
    create: async (req, res) => {
        const user = await Users(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser._id);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const user = await Users.findOne({ _id: id });
        Object.assign(user, req.body);
        await user.save();
        res.status(204);
    },
    destroy: async (req, res) => {
        res.status(204).send('Eliminando un Juan');
    }
}

module.exports = User;