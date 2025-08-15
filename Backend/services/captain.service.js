const captainModel = require('../models/captain.model');
const BlacklistTokenModel = require('../models/blacklistToken.model');

module.exports.createCaptain = async (
    { firstname,
        lastname,
        email,
        password,
        color,
        plate,
        capacity,
        vehicleType }
) => {

    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        },

    });

    return captain;
}


module.exports.findCaptainByEmail = async (email) => {
    if (!email) {
        throw new Error('Email is required');
    }
    const captain = await captainModel.findOne({ email }).select('+password');

    return captain;
}


module.exports.blackListToken = async(token) =>{
    await BlacklistTokenModel.create({ token }); 
}