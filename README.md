# 🚀 Gidy -- The Profile Project

Full-Stack Technical Assessment Submission

------------------------------------------------------------------------

# 📌 Project Overview

This project is a full-stack implementation of a high-fidelity replica
of the Gidy Profile Page.\
It demonstrates end-to-end development including:

-   RESTful API design\
-   Database schema modeling\
-   Responsive UI development\
-   State persistence\
-   Clean modular architecture

The application allows users to view and edit their profile information
while introducing innovative enhancements to improve user engagement and
personalization.

------------------------------------------------------------------------

# 🛠 Tech Stack

### Frontend

-   React (Vite)
-   TailwindCSS
-   Axios

### Backend

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   dotenv (Environment management)

------------------------------------------------------------------------

# 📂 Project Structure

client/ ├── src/ │ ├── pages/ │ ├── components/ │ ├── App.jsx │ └──
main.jsx

server/ ├── controllers/ ├── routes/ ├── models/ └── server.js

------------------------------------------------------------------------

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

git clone `<your-repo-url>`{=html} cd gidy-profile-production

------------------------------------------------------------------------

## 2️⃣ Backend Setup

cd server npm install

Create a `.env` file:

MONGO_URI=your_mongodb_connection_string

Start the backend:

npm run dev

Server runs at: http://localhost:5000

------------------------------------------------------------------------

## 3️⃣ Frontend Setup

cd client npm install npm run dev

Frontend runs at: http://localhost:5173

------------------------------------------------------------------------

# 🌟 Innovation Phase -- Enhancing the Profile Experience

## 1️⃣ Skill Endorsement System

Each skill includes an **Endorse** button.\
When clicked: - The endorsement count increases. - The change is
persisted in the database. - The UI updates instantly.

### Technical Highlights

-   Skills stored as embedded subdocuments in MongoDB
-   Custom REST endpoint:

POST /api/profile/endorse/:skillId

-   Real-time state updates after API response

This demonstrates: - Nested schema design - RESTful architecture -
Backend state mutation handling

------------------------------------------------------------------------

## 2️⃣ Persistent Dark Mode (Database-Driven Personalization)

Users can toggle between Light and Dark mode.

Unlike simple UI toggles: - Preference is stored in the database. - It
persists across sessions. - UI automatically reflects saved preference
on load.

### Technical Highlights

-   `darkMode` boolean field in Profile schema
-   Preference updated via PUT request
-   Tailwind's `dark` class toggled dynamically

This showcases: - Full-stack state synchronization - Persistent user
preferences - Modern UI theming techniques

------------------------------------------------------------------------

# 🎯 Evaluation Focus Areas Addressed

✅ Code Quality -- Modular structure & separation of concerns\
✅ System Design -- RESTful API & scalable architecture\
✅ UI/UX -- Responsive modern layout\
✅ Innovation -- Interactive endorsements & personalization

------------------------------------------------------------------------

# 🧠 Final Thoughts

This project demonstrates full-stack proficiency, thoughtful system
design, and product-oriented thinking while enhancing a static profile
into an interactive experience.
