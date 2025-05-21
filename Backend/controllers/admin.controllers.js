import User from "../models/user.model.js";

// Get all users (players)
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error); 
        console.log("Error in getAllUsers controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// // Get a single user by ID
// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         console.log("Error in getUserById controller", error.message);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log("Error in deleteUser controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};