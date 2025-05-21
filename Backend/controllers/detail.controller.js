import User from "../models/user.model.js";

// Get all users (players)
export const getYourdetail = async (req, res) => {
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

export const editYourProfile = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body; // Get the updated profile data from the request body

    try {
        // Find the user by ID and update their profile with the new data
        const user = await User.findByIdAndUpdate(id, updatedData, {
            new: true, // Return the updated user
            runValidators: true, // Ensure model validators are applied
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Send the updated user data as a response
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}