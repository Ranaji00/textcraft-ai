const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,  // No need for uppercase, unless you have a specific reason
        unique: true,
        minlength: [0, "Username should be at least 5 characters long"]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [5, "Email should be at least 13 characters long"]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Password must be at least 5 characters long"]
    },
    subscription: {
        type: String,
        default: "free",
        enum: ["free", "pro", "enterprise"]
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;
