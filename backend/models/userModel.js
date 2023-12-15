const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require:true,
        minlength: 6,
        maxlength: 50, 
    },
    lastName: {
        type: String,
        require: true,
        minlength: 6,
        maxlength:50
    },
    email:{
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50
    },
    password:{
        type: String,
        require: true,
        minlength: 6,
        maxlength: 1024,
    }
    
});


userSchema.methods.correctPassword = async function(candidatePasswowrd,userPassword){
    return await bcrypt.compare(candidatePasswowrd, userPassword)
}

userSchema.methods.changesPasswordAter = async function(JWTTimetamp) {
    if( this.passwordChangedAt){
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            0
        );
        return JWTTimestamp < changedTimestamp;
    }
    return false;
}

const User = mongoose.model('User', userSchema);

module.exports = User;