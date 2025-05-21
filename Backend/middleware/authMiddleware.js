export const verifyAdmin = (req, res, next) => {
    const user = req.user;  // Assuming you've attached user to req via token
    if (user && user.role === 'admin') {  // Check if user is admin
        next();
    } else {
        return res.status(403).json({ error: 'Unauthorized, only admin can access' });
    }
};