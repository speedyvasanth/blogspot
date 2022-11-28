const mongoose =  require("mongoose")

const userSchema = {
    username: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true
    },
    mobile: {
        type: Number,
        trim: true,
        require: true
    },
    password: {
        type: String,
        trim: true,
        require: true
    }
}

const user = mongoose.model("User", userSchema)

module.exports = user;