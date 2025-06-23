# 🧳 Travlr Full Stack Web Application

## 📐 Architecture

This project features a dual-interface full stack application:  
- **Customer-facing site**: Built using **Express HTML** and vanilla JavaScript for traditional server-side rendering.  
- **Admin dashboard**: Developed as a **Single Page Application (SPA)** using **Angular**, enabling seamless navigation, dynamic data updates, and a responsive UI experience.

The backend uses **Node.js** and **Express**, with a **MongoDB (NoSQL)** database. MongoDB was selected due to its flexible, document-oriented structure which pairs naturally with JSON data. This allowed for easy evolution of the data model as the application requirements changed.

---

## ⚙️ Functionality

### 🔗 JSON & Data Integration

While **JavaScript** is a programming language, **JSON (JavaScript Object Notation)** is a lightweight data-interchange format. It serves as the bridge between frontend and backend, enabling Angular to send and receive structured data from the Express API.

### 🧩 Refactoring & UI Components

Throughout development, multiple refactors were performed to improve performance and maintainability. Key example:  
- Creating a reusable `TripCardComponent` in Angular to display consistent trip data across pages.

These reusable UI components allowed for a more modular and scalable codebase, reducing duplication and simplifying future changes.

---

## 🧪 Testing

Testing involved a combination of **manual testing using Postman** and **browser-based interaction testing** via Angular.  
Endpoints were tested for:

- `GET` requests (e.g., fetching trip listings)
- `POST` requests (e.g., adding new trips)
- `PUT` requests (e.g., updating trips)
- `DELETE` (future enhancement)

When adding **JWT-based authentication**:
- Secure endpoints were tested with valid/invalid tokens
- Common issues included 401 Unauthorized errors from missing/expired tokens

This reinforced the importance of **middleware** for token validation and proper CORS configuration on the backend.

---

## 💭 Reflection

This project pushed me to implement real-world features end-to-end. I now understand:
- How SPAs offer a smoother, more responsive experience than traditional server-rendered apps
- How to design secure login flows using **Passport.js** and **JWTs**
- The power of modular, component-driven development in Angular
- How to debug full stack systems across the client, server, and database layers

These skills—combined with hands-on experience working with REST APIs, MongoDB, and authentication—have made me significantly more confident and job-ready as a full stack developer.

---

## 📁 Project Stack

- **Frontend (SPA)**: Angular 16
- **Backend**: Express.js + Node.js
- **Database**: MongoDB
- **Authentication**: Passport.js + JWT
- **Testing**: Postman + manual input testing
- **Deployment**: Localhost environment
