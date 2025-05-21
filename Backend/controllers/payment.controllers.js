import Razorpay from "razorpay";
import crypto from 'crypto';
import User from "../models/user.model.js";

const razorpay = new Razorpay({
    //     key_id: process.env.RAZORPAY_KEY_ID,
    // key_secret: process.env.RAZORPAY_KEY_SECRET,
    key_id: "rzp_test_0Awi78B5fJ0kh9",
    key_secret: "la4UgbyrrwXmBQrPsxeScYyR", //yaha pe key id aur key secret daal dena bass
});



export const createPayment = async (req, res) => {
    const { userId, amount, currency = 'INR' } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const options = {
            amount: amount * 100, // Amount is in the smallest currency unit (e.g., paise for INR)
            currency,
            receipt: `receipt_${userId}`,
            payment_capture: 1
        };

        // Create Razorpay order
        const order = await razorpay.orders.create(options);

        // Save order details to the user's record in DB
        user.orderId = order.id;
        user.paymentStatus = "pending";
        await user.save();

        // Send the order details to the client
        res.status(200).json({ order, currency, amount });
    } catch (error) {
        console.error("Error creating payment:", error);
        res.status(500).json({ error: "Error in creating payment" });
    }
};

export const verifyPayment = async (req, res) => {
    const { userId, orderId, paymentId, razorpaySignature } = req.body;

    try {
        // Step 1: Retrieve the User
        const user = await User.findById(userId);
        if (!user || user.orderId !== orderId) {
            return res.status(404).json({ success: false, message: "User or order not found" });
        }

        // Step 2: Generate and Compare Signature
        const generatedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(`${orderId}|${paymentId}`)
            .digest('hex');

        if (generatedSignature === razorpaySignature) {
            // Update user's payment status if verified
            user.paymentStatus = "completed";
            user.paymentId = paymentId;
            user.hasPaid = true;
            await user.save();

            return res.status(200).json({ success: true, message: "Payment verified and successful" });
        } else {
            return res.status(400).json({ success: false, message: "Invalid signature, payment verification failed" });
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ success: false, error: "Error in verification controller" });
    }
};
