import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PaymentPage = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const initiatePayment = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/app/auth/payment/create-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: authUser._id, amount: 500 }),
            });
            const data = await res.json();
            
            if (!data.order.id) throw new Error("Unable to create order");
    
            const options = {
                key: "rzp_test_0Awi78B5fJ0kh9", //yaha pe key_id dalke uncomment kar dena.
                amount: data.order.amount,               // amount is in paise
                currency: data.currency,
                name: 'Registration Payment',
                description: 'Complete your registration',
                order_id: data.order.id,                 // Correctly access order id
                handler: async function (response) {
                    const paymentData = {
                        userId: authUser._id,
                        paymentId: response.razorpay_payment_id,
                        orderId: data.order.id,
                        razorpaySignature: response.razorpay_signature
                    };
                    await verifyPayment(paymentData);
                },
                prefill: {
                    name: authUser.fullName,
                    email: authUser.email,
                    contact: authUser.mobileNumber || "",
                },
                theme: { color: '#3399cc' }
            };
            
            const razorpay = new window.Razorpay(options);
            razorpay.open();
    
        } catch (error) {
            console.error("Error details:", error);
            toast.error("Payment initiation failed");
        } finally {
            setLoading(false);
        }
    };
    

    const verifyPayment = async (paymentData) => {
        try {
            const verifyRes = await fetch('/app/auth/payment/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(paymentData),
            });
            const verifyData = await verifyRes.json();
    
            if (verifyData.success) {
                setAuthUser({ ...authUser, hasPaid: true });
                toast.success('Payment successful, Registration complete');
                navigate('/homepage');  // Redirect to homepage upon success
            } else {
                throw new Error(verifyData.message || 'Payment verification failed');
            }
        } catch (error) {
            console.error("Error during verification:", error);
            toast.error('Payment verification failed');
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            {loading ? (
                <div className="text-xl text-gray-700">Processing Payment...</div>
            ) : (
                <button onClick={initiatePayment} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Pay Now
                </button>
            )}
        </div>
    );
};

export default PaymentPage;
