# React Account Manager

A modern React application that allows users to register, log in, and manage their account details with proper validation and clean UI.  
This project is built as part of a React Internship practical assignment.

---

## 📌 Live Overview

The application includes:

- User Registration
- User Login
- Protected Profile Page
- Inline Form Validations
- Password Strength Indicator
- Modern UI using Bootstrap
- Client-side authentication using LocalStorage

---

## 🚀 Features

### 🔐 Authentication

- Register a new user
- Login with registered credentials
- Logout functionality
- Protected routes (Profile accessible only after login)

### 🧾 Form Validation

- **Name**: Only letters and spaces allowed
- **Email**: Proper email format validation
- **Password**:
  - Minimum 8 characters
  - At least one uppercase letter
  - One lowercase letter
  - One number
  - One special character
- Inline error messages (no alerts)

### 👤 Profile Management

- View user details
- Update user name
- Success and error messages displayed on UI

---

## 🎨 UI & Design

- Modern card-based layout
- Responsive design
- Styled using **Bootstrap 5**
- Custom color palette:
  - Primary: `#016B61`
  - Secondary: `#70B2B2`
  - Accent: `#9ECFD4`
  - Background: `#E5E9C5`

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **React Router DOM**
- **Bootstrap 5**
- **Bootstrap Icons**
- **LocalStorage** (for authentication)

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ └── PasswordStrength.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Register.jsx
│ └── Profile.jsx
│
├── utils/
│ ├── auth.js
│ └── validators.js
│
├── App.js
├── index.js
└── App.css
