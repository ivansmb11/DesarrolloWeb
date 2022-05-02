const User = mongoose.model('User', {
  username: String,
  age: Number
});

const create = async() => {
    const User = new User({ username: 'John', age: 18 });
    const result = await user.save();
    console.log(result);
}

const findAll = async() => {
    const result = await User.find();
    console.log(result);
}

const search = async() => {
    const result = await User.find({ username: 'John' });
    console.log(result);
}

const searchOne = async() => {
    const result = await User.findOne({ username: 'username' });
    console.log(result);
}

const update = async() => {
    const user = await User.findOne({ username: 'John' });
    console.log(user);
    user.age = 30;
    await user.save();
}

const remove = async() => {
    user = await User.findOne({ username: 'John' })
    console.log(user);
    if (user) {
        user.remove();
    }
}

update();