# Doctor Hub - Full Stack Doctor Appointment System

## Introduction

Doctor Hub is a comprehensive Full Stack Doctor Appointment System (DMS) built on the MERN stack. It provides a seamless experience for patients to book appointments, doctors to manage their schedules and earnings, and administrators to oversee the system. With an intuitive UI and robust backend, Doctor Hub ensures efficient doctor-patient interactions with features like appointment scheduling, profile management, and online payments via Razorpay.

## Table of Contents

1. Features
2. Tech Stack
3. Installation
4. Environment Variables
5. Usage

## Features

### Patient Features

- Patients can browse a list of doctors based on specialization.
- Patients can see top-rated doctors according to their interests.
- Filter doctors based on specialization for better selection.
- View doctor details including name, degree, experience, fee, and availability.
- Book an appointment by selecting a date and time slot.
- View related doctor suggestions from the appointment page.
- Manage appointments from the "My Appointments" page (view/cancel).
- Securely pay the consultation fee online via Razorpay.
- Manage personal information from the "My Profile" page.
- Patients must have an account to book appointments.

### Doctor Panel Features

- Doctors can access a dedicated panel to manage appointments.
- View upcoming and completed appointments.
- Cancel or complete appointments.
- Track earnings and patient interactions.
- Update personal and professional details from the doctor's panel.
- Only registered doctors (added by the admin) can access this panel.

### Admin Panel Features

- Admin has a dashboard to manage the entire system.
- View, approve, and cancel appointments.
- View all registered doctors.
- Add new doctors to the system.
- Manage user data efficiently.

## Tech Stack

### Admin & Doctor Panel

- React
- React Router
- Tailwind CSS
- Axios
- React Toastify
- Vite
- ESLint

### Frontend (Patient Website)

- React
- React Router
- Tailwind CSS
- Axios
- React Toastify
- Vite
- ESLint

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token) Authentication
- Razorpay for payments
- Cloudinary for image storage
- Bcrypt for password hashing
- Multer for file uploads

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/tayyab-004/Doctor-Hub.git
```

### 2. Navigate to the Project Directory

```bash
cd Doctor-Hub
```

### 3. Install Dependencies

#### Admin & Doctor Panel:

```bash
cd admin
npm install
```

#### Frontend (Patient Website):

```bash
cd frontend
npm install
```

#### Backend:

```bash
cd backend
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the respective directories and add the following:

#### **Admin & Doctor Panel (`admin/.env`)**

```env
VITE_BACKEND_URL = "http://localhost:5000"
```

#### **Frontend (Patient Website) (`frontend/.env`)**

```env
VITE_BACKEND_URL = "http://localhost:5000"
VITE_RAZORPAY_KEY_ID = "your_razorpay_key_id"
```

#### **Backend (`backend/.env`)**

```env
MONGODB_URI = "your_mongodb_uri"
CLOUDINARY_NAME = "your_cloudinary_name"
CLOUDINARY_API_KEY = "your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY = "your_cloudinary_secret"
ADMIN_EMAIL = "your_admin_email"
ADMIN_PASSWORD = "your_admin_password"
JWT_SECRET = "your_jwt_secret"
RAZORPAY_KEY_ID = "your_razorpay_key_id"
RAZORPAY_KEY_SECRET = "your_razorpay_key_secret"
CURRENCY = "PKR"
```

### 5. Start the Development Servers

Run admin panel, frontend website, and backend concurrently:

```bash
npm start
```

- Frontend (Patient Website): `http://localhost:5173`
- Admin & Doctor Panel: `http://localhost:5174`
- Backend: `http://localhost:5000`

## Usage

- Patients can register, book appointments, and make payments.
- Doctors can manage appointments and earnings.
- Admin can add doctors and oversee all operations.

Thank you for using Doctor Hub! If you have any questions or feedback, feel free to reach out. Happy Coding! 🚀
