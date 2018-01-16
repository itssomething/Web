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

    UserSchema.find({'username':username, 'email':email}, (err, user) =>{
        if(err)
            console.log(err);
        if(user.length!=0){
            if(user[0].username){
                console.log("usernam existed");
                callback();
            }
            else{
                console.log("email ext");
                callback();
            }
        }
    });
}

module.exports = {
    addUser,
    findUser,
}