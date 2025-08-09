# 🏦 ATM Management System

## 📌 Overview
The **ATM Management System** is a responsive web application that simulates basic banking operations such as login, deposit, withdrawal, and balance tracking. Built using **HTML**, **Bootstrap**, and **Vanilla JavaScript**, it provides a clean user interface and real-time feedback for user actions.

This project demonstrates your ability to build interactive front-end applications with validation, state management, and user experience design.

---

## ✨ Features

### 🔐 Login System
- Validates user credentials (`email` and `password`)
- Displays warning message on invalid login
- Redirects to dashboard on success

### 💰 Banking Dashboard
- Displays current **Deposit**, **Withdraw**, and **Balance**
- Allows users to:
  - Deposit money
  - Withdraw money
  - View updated totals instantly

### ⚠️ Alert System
- Shows warning if:
  - Deposit or withdrawal amount is ≤ 0
  - Withdrawal exceeds current balance
- Provides user-friendly messages and return buttons

---

## 🖥️ Technologies Used

| Technology   | Purpose                        |
|--------------|--------------------------------|
| HTML         | Structure of the application   |
| Bootstrap 5  | Styling and layout             |
| JavaScript   | Logic and interactivity        |

---

## 🧱 File Structure

```
ATM-Management/
├── index.html       # Main HTML structure
├── script.js        # JavaScript logic
├── style.css        # (Optional) Custom styles
```

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/SamiUrRehman065/ATM-Management
   ```
2. Open `index.html` in your browser  
3. Use the following credentials to log in:
   - **Email:** `example@gmail.com`
   - **Password:** `123456789`

---

## 🧪 Usage Guide

### ✅ Deposit
- Enter a positive amount
- Click **Deposit**
- Amount is added to both **Deposit** and **Balance**

### ✅ Withdraw
- Enter a positive amount
- Must be ≤ current balance
- Click **Withdraw**
- Amount is added to **Withdraw** and subtracted from **Balance**

### ❌ Invalid Actions
- Deposit/Withdraw ≤ 0 → Shows alert
- Withdraw > Balance → Shows low balance warning

---

## 🧑‍💻 Author

**Name:** Sami Ur Rehman  
**Location:** Karachi, Pakistan  
**GitHub:** [SamiUrRehman065](https://github.com/SamiUrRehman065)

---

## 🪞 Developer Reflection

This project helped me strengthen my understanding of:

- DOM manipulation and event handling  
- Form validation and conditional logic  
- Responsive design using Bootstrap  
- Building user-friendly interfaces with real-time feedback

It reflects my growth in front-end development and my ability to build clean, interactive web applications.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open an issue or submit a pull request if you have suggestions or improvements.
