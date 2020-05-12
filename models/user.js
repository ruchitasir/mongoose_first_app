const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    meta:{
        age: Number,
        website: String
    }
 }, {
        timestamps: true
    }
)

userSchema.methods.sayHello = function() {
    return 'Hi ' + this.name
}

module.exports = mongoose.model('User',userSchema)