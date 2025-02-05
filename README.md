# 🎉 Discount PRO: A Coupon Collecting Application  

## 📝 Introduction  
**Discount PRO** is a **coupon collecting application** designed to help users **find and use discount coupons** for popular e-commerce stores. The app aggregates various vouchers and coupon codes, allowing users to **easily browse, copy, and apply them** while shopping online.

## 🎯 Purpose  
The goal of **Discount PRO** is to provide a centralized platform where users can access **discount coupons and voucher codes** from various e-commerce stores. This helps users **save money** and enjoy **exclusive discounts** with minimal effort.

## 🌐 Live Demo  
🔗 **[Discount PRO - Live Demo](#)** (Replace with actual URL)

---

## 🚀 Features  
### 🔐 **User Authentication**  
- Users can **sign up** or **log in** via **email** or **Google Authentication** (Firebase Auth).  
- Users can **reset their password** using the **Forgot Password** feature.

### 👤 **User Profile Management**  
- Users can **update their profile information**, including adding a **profile photo**.

### 🎟 **Browse Coupons**  
- Users can browse coupons for different **brands and stores**.  
- View details like **discount amount, expiry date, and product categories**.

### 📋 **Copy Coupon Codes**  
- **One-click copy** functionality to copy coupon codes to the clipboard.

### 🔍 **Filter & Search Coupons**  
- **Filter** coupons by **store, brand, or category** (e.g., fashion, electronics).  
- **Search** for specific coupons using keywords.

### 📱 **Responsive Design**  
- The app is **fully responsive** and works **seamlessly** on **desktop, tablet, and mobile devices**.

### ✨ **Animations & Effects**  
- **AOS (Animate On Scroll):** Scroll-triggered animations.  
- **Carousel Support:** **React Responsive Carousel** for **slideshow displays**.

### 🔔 **Toast Notifications**  
- **React Toastify** is used for **showing toast messages** (e.g., successful login, coupon copy).  

---

## 🛠️ Tech Stack  

### **Frontend:**  
- **React** – Frontend framework for UI development.  
- **Tailwind CSS** – Modern, utility-first CSS framework.  
- **React Router** – Handles page navigation.  
- **React Icons** – Provides various UI icons.  
- **Animate.css** – Enables CSS animations.  
- **React Rating Stars Component** – Displays user ratings for coupons/products.  
- **Swiper** – Enables interactive slideshows/carousels.  
- **React Fast Marquee** – For scrolling text updates.  
- **AOS (Animate On Scroll)** – Scroll-triggered animations.  

### **Backend:**  
- **Firebase Authentication** – Manages user accounts and sign-ins.  
- **Firebase Firestore** – Stores coupon data and user information.  

### **State Management:**  
- **React Context API** – Manages global state (user data, saved coupons).  

### **NPM Packages Used:**  
- `firebase` – Firebase Authentication & Firestore.  
- `react-router-dom` – Manages routing/navigation.  
- `react-icons` – Adds icons to the UI.  
- `react-toastify` – Displays toast notifications.  
- `animate.css` – Provides CSS animations.  
- `aos` – Handles scroll-based animations.  
- `swiper` – Enables carousels and image slideshows.  
- `react-fast-marquee` – Provides scrolling text updates.  
- `react-copy-to-clipboard` – Enables one-click copy functionality.  
- `react-rating-stars-component` – Adds star rating features.  
- `react-responsive-carousel` – Displays product slideshows.  

---

## 📥 Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/discount-pro.git
cd discount-pro
```

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

### Run Project
```hr
npm run dev
```
### Live Link
```hr
https://discount-pro-adee0.web.app/
