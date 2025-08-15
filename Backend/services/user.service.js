const userModel = require('../models/user.model');
const BlacklistTokenModel = require('../models/blacklistToken.model');

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password
}) => {

    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return user;

}


module.exports.findUserByEmail = async (email) => {
    if (!email) {
        throw new Error('Email is required');
    }
    const user = await userModel.findOne({ email }).select('+password');


    return user;
}

module.exports.blackListToken = async(token) =>{
    await BlacklistTokenModel.create({ token }); 
}
