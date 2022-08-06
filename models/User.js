const mongoose = require('mongoose')

// Create user schema
const UserSchema = mongoose.Schema(
    {
        // define the properties of the application user
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        userRole: {
            type: String,
            enum: ["admin", "manager", "staff", "user"],
            default: "user"
        },
        isAdmin: {
            type: Boolean,
            default: 0
        },
        isManager: {
            type: Boolean,
            default: 0
        },
        isStaff: {
            type: Boolean,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("User", UserSchema);