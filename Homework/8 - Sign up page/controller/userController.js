const UserSchema = require('../model/userModel');

const addUser = (username, email, callback) => {
    let newUser = {
        username,
        email,
    };
    UserSchema.create(newUser, (err, res) => {
        if(err){
            callback(err);
        }
        else{
            callback(null, res._id);
        }
    });
}

const findUser = (username, email, callback) => {

    UserSchema.findOne({'username':username, 'email':email}, (err, user) =>{
        if(err)
            console.log(err);
        if(user){
            callback(null, user.username);
        }
        else{
            callback(null,null);
        }
    });
}

module.exports = {
    addUser,
    findUser,
}