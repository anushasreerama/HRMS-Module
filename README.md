# HRMS Lite

## 📌 Project Overview

HRMS Lite is a lightweight Human Resource Management System that allows an admin to manage employees and track their daily attendance.

The application is built as a full-stack web solution with a clean and modern UI. It focuses on essential HR functionalities such as employee record management and attendance tracking.

---

## 🚀 Features

### 👨‍💼 Employee Management

* Add new employees
* View all employees
* Delete employees
* Duplicate employee validation

### 📅 Attendance Management

* Mark attendance (Present / Absent)
* View attendance by employee
* Prevent duplicate attendance entries

### 🎨 UI Features

* Modern dashboard with cards
* Sidebar navigation
* Responsive layout
* Tailwind CSS styling
* Clean tables and forms

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* FastAPI (Python)
* SQLAlchemy

### Database

* PostgreSQL (Production)
* SQLite (Local Development)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ⚙️ Steps to Run Locally

### 🔹 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

👉 Backend runs at:
http://127.0.0.1:8000

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

👉 Frontend runs at:
http://localhost:3000

---

## 🌐 Deployment Links

* Frontend: https://your-vercel-app.vercel.app
* Backend: https://your-render-app.onrender.com

---

## ⚠️ Assumptions / Limitations

* Single admin user (no authentication implemented)
* No role-based access control
* No pagination for large datasets
* Basic validation only
* Response takes time to execute as it is deployed in free features
