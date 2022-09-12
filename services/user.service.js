const bcrypt = require('bcrypt');
const {
    DbAddUser,
    DbCountUser,
    DbFindUser
} = require('../models/user');


const {
    generateToken
} = require('../config/jwt.config');


const ServiceAddUser = async (body) => {

    const userExist = await DbCountUser({
        query: {
            username: body.username
        }
    });

    if (userExist) {
        throw ("User Already Exist!");
    }

    let a = await DbAddUser({
        ...body,
        password: await bcrypt.hash(body.password, 10)
    });


    delete a.password;

    const token = await generateToken(
        {
            id: a._id,
            username: a.username
        },
        process.env.JWT_SECRET,
        {}
    );

    return {
        token: token,
        user: a
    }
};

const ServiceLoginUser = async(body) =>{

    const user = await DbFindUser({
        query: {
            username: body.username
        },
        project: {
            _id: 1,
            password: 1,
            username:1
        }
    });

    if (!user) {
        throw ("User not found!");
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password);

    if (!passwordMatch) {
        throw ('Password mismatch!');
    }


    const token = await generateToken(
        {
            id: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        {}
    );

    delete user.password;

    return {
        user: user,
        token: token
    };

}

module.exports = {
    ServiceAddUser,
    ServiceLoginUser
};
