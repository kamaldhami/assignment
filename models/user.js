const mongoose = require('../database/mongodb');

let userSchema = mongoose.Schema({
    username: { type: String, maxlength: 255 },
    password: { type: String, require: true },
    created_at: { type: Date, default: Date.now }
});

let User = null;

try {
    User = mongoose.model('users');
}
catch (error) {
    User = mongoose.model('users', userSchema);
}



const DbAddUser = async (body) => {
    const user = new User(body);
    return await user.save();
};

const DbCountUser = async (body) => {

    const {
        query,
    } = body;

    const res = await User.count(query).lean();

    return res;
};

const DbFindUser = async (body) => {

    let {
        query,
        project,
    } = body;


    query = query || {};
    project = project || {};


    let records = [];


    records = await User.findOne(query, project).lean();


    return records;
};

module.exports = {
    DbAddUser,
    DbCountUser,
    DbFindUser
};