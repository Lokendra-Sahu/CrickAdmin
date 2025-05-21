# CrickAdmin

A full-stack web application for managing player registrations, payments, and admin monitoring for a cricket tournament.

## 🌟 Features

### 🏀 Player Functionality

* Register as a player for the tournament.
* Submit detailed personal and cricket-related information.
* Secure authentication (signup/login).
* Payment integration to confirm registration.

### 👨‍💻 Admin Functionality

* Admin dashboard to monitor all player registrations.
* View detailed player information.
* Track and verify payment statuses.
* Secure admin authentication and route protection.

## 📁 Tech Stack

### Backend

* **Node.js**, **Express.js**
* **MongoDB** with Mongoose ODM
* **JWT** for authentication
* **Payment Integration** (e.g., Razorpay/Stripe; plug your service)

### Frontend (Located in `FrontEnd/` directory)

* **React.js** for building the user interface
* **React Router** for client-side routing
* **Tailwind CSS** for styling


## 🛋️ Project Structure

```
GoProject-main/
├── Backend/
│   ├── Server.js                  # Entry point
│   ├── controllers/              # Route logic
│   ├── models/                   # Mongoose models
│   ├── routes/                   # API route definitions
│   ├── middleware/               # Auth and protection
│   ├── db/connectToMongoDB.js    # MongoDB connection
│   └── utils/                    # Token generation, helpers
├── FrontEnd/                     # React frontend app
├── .env                          # Environment variables (ignored)
├── package.json                  # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed
* MongoDB running locally or accessible remotely
* Payment gateway keys (configured via `.env`)

### Installation

```bash
git clone https://github.com/your-username/GoProject-main.git
cd GoProject-main
npm install
cd Backend
npm install
```

### Run the Server

```bash
# From the root directory:
cd Backend
node Server.js
```

### Environment Variables

Create a `.env` file in the root and define:

```
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
PAYMENT_GATEWAY_KEY=your_payment_key
```

> **Note**: The `.env` file is excluded from this repository for security.

## ✅ API Endpoints Overview

### Auth

* `POST /api/auth/register` - Register a player
* `POST /api/auth/login` - Login as player

### Admin

* `GET /api/admin/users` - List all registered users
* `GET /api/admin/user/:id` - View user detail

### Payment

* `POST /api/payment/initiate` - Initiate payment session

### Player Details

* `POST /api/details` - Submit player info
* `GET /api/details/:userId` - Get player detail

## 🙌 Contributing

Feel free to open issues or submit pull requests. This is an open-source project to support local cricket tournaments.