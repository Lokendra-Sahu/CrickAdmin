import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fatherName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dob: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    servingLocation: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    }
},
    //createdAt, updatedAt
    { timestamps: true }
);

const UserDetail = mongoose.model("UserDetail", userDetailSchema);

export default UserDetail;