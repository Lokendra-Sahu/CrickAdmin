import React, { useState } from 'react';

const RegisterAndPay = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);

        try {
            // Call backend to create a payment order
            const response = await fetch('/create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: 500 }), // Specify amount in rupees
            });
            const data = await response.json();

            if (data.success) {
                // Payment options for Razorpay
                const options = {
                    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay Key ID from .env
                    amount: 500 * 100, // Convert rupees to paisa
                    currency: "INR",
                    name: "Your App",
                    description: "Payment for Registration",
                    order_id: data.order_id, // Order ID from backend
                    handler: async function (response) {
                        alert("Payment successful!");
                        console.log(response);
                    },
                    prefill: {
                        name: "User Name",
                        email: "user@example.com",
                        contact: "9999999999",
                    },
                    theme: {
                        color: "#3399cc",
                    },
                    method: {
                        upi: true, // Enables UPI payment option
                    },
                };

                const razorpay = new window.Razorpay(options);
                razorpay.open();
            } else {
                alert("Failed to initiate payment");
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("Error occurred during payment");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : "Pay and Register"}
            </button>
        </div>
    );
};

export default RegisterAndPay;
