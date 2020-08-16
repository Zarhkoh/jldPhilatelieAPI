const db = require('../config/db.config');

//Find user by email
module.exports.findUser = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.User.findOne({
                where: {
                    email: email
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};


// Create a new user in the database : 
module.exports.createUser = (prenom, email, pwd) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.models.User.create({
                prenom: prenom,
                email: email,
                pwd: pwd
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};
