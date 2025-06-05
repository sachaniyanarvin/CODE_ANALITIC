# Code Analitic

A full-stack web application for user authentication and dashboard analytics, built with a React + TypeScript + Vite frontend and a Node.js + Express + MongoDB backend.

---

## Project Structure

```
CODE_ANALITIC/
  codementor-ai/            # Frontend (React + TypeScript + Vite)
  codementor-ai-backend/    # Backend (Node.js + Express + MongoDB)
```

---

## Features

### Frontend (`codementor-ai`)
- Modern React (v19) with TypeScript and Vite for fast development.
- User authentication (Sign Up, Login, Logout) with JWT.
- Protected dashboard route.
- Responsive and clean UI with custom CSS.
- Axios-based API service with JWT token handling.
- React Context for authentication state management.

### Backend (`codementor-ai-backend`)
- RESTful API using Express.js.
- MongoDB (via Mongoose) for persistent user storage.
- User registration and login with hashed passwords (bcryptjs).
- JWT authentication and protected routes.
- CORS enabled for local frontend development.
- Environment variable support via `.env`.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

---

### 1. Backend Setup

```sh
cd CODE_ANALITIC/codementor-ai-backend
cp .env.example .env   # Create your .env file and set MONGO_URI and JWT_SECRET
npm install
npm run dev            # Starts server with nodemon on http://localhost:5000
```

**.env Example:**
```
MONGO_URI=mongodb://localhost:27017/code-analitic
JWT_SECRET=your_jwt_secret_here
```

---

### 2. Frontend Setup

```sh
cd CODE_ANALITIC/codementor-ai
npm install
npm run dev           # Starts Vite dev server on http://localhost:5173
```

---

## Usage

- Visit `http://localhost:5173` to access the frontend.
- Register a new account or log in with existing credentials.
- Access the dashboard after authentication.

---

## Scripts

### Backend

- `npm run dev` — Start backend with hot reload (nodemon)
- `npm start` — Start backend (production)

### Frontend

- `npm run dev` — Start frontend dev server
- `npm run build` — Build frontend for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint frontend code

---

## Folder Overview

- [`codementor-ai`](codementor-ai/) — Frontend source code
- [`codementor-ai-backend`](codementor-ai-backend/) — Backend source code

---

## License

This project is licensed under the ISC License.

---

## Author

Made with ❤️ for learning and analytics projects.
