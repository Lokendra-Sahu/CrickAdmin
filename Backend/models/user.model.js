import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    fatherName: {
        type: String,
    },
    age: {
        type: Number
    },
    dob: {
        type: Date,
    },
    address: {
        type: String,
    },
    servingLocation: {
        type: String,
    },
    post: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    },
    image: {
        type: String,
    },
    paymentStatus : {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending",
    },
    hasPaid: {
        type: Boolean,
        default: false,
    },
    paymentId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    subscriptionType: {
        type: String,
    }
},
    //createdAt, updatedAt
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;