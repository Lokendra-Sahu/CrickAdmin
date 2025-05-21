import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import genrateTokenAndCookie from '../utils/generateTokenAndCookie.js';
import multer from 'multer';
import path from 'path'; // Ensure path is imported

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Validate file type
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Images only!')); // Reject if not image
    }
  }
}).single('image');

export const signup = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" })
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "email already exists" })
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        if (newUser) {

            //generate jwt cookie here
            genrateTokenAndCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                
            });

        } else {
            return res.status(400).json({ error: "Invalid User Data" })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ error: "Internal Server Error" });
    }
}


export const completeRegistration = (req, res) => {
    // Handle file upload via multer
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
  
      // Destructure required fields from request body
      const { userId, fatherName, age, dob, address, servingLocation, post, mobileNumber } = req.body;
  
      // Validate that a userId is provided
      if (!userId) {
        return res.status(400).json({ error: 'User ID is required.' });
      }
  
      try {
        // Find user in the database by ID
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }
  
        // Update user details
        user.fatherName = fatherName;
        user.age = age;
        user.dob = dob;
        user.address = address;
        user.servingLocation = servingLocation;
        user.post = post;
        user.mobileNumber = mobileNumber;
  
        // If image is uploaded, save the file path in the user record
        if (req.file) {
          user.image = `/uploads/${req.file.filename}`;
        }
  
        // Mark registration as complete
        user.isRegistrationComplete = true;
        await user.save();
  
        // Send back updated user details
        res.status(200).json({ user });
      } catch (err) {
        // Handle potential server error
        res.status(500).json({ error: 'Server error.' });
      }
    });
  };

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        const isComplete = user.fatherName && user.age && user.dob && user.address && user.servingLocation && user.post && user.mobileNumber;

        if(!isComplete) {
            return res.status(200).json({
                status: "Incomplete",
                message: 'please complete your registration',
                user: {
                    _id: user._id,
                    fullname: user.fullName,
                    email: user.email
                },
            });
        };

        genrateTokenAndCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            fatherName: user.fatherName,
            age: user.age,
            dob: user.dob,
            address: user.address,
            servingLocation: user.servingLocation,
            post: user.post,
            mobileNumber: user.mobileNumber
        })

    } catch (error) {
        console.log("Error in login controller", error.message)
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({ message: "Logged Out Successfully!" });
    } catch (error) {
        console.log("Error in logout controller", error.message)
        return res.status(500).json({ error: "Internal Server Error" });  
    }
}