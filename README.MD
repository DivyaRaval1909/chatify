# Chatify

Chatify is a full-stack chat application built with React, Vite, Express, and MongoDB.  
It features real-time messaging, user authentication, and a modern UI.

---

## Project Overview

- **Frontend:** React + Vite
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Authentication:** JWT, bcryptjs
- **Features:**
  - User registration & login
  - Real-time chat interface
  - Secure messaging
  - Responsive design

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [cookie-parser](https://github.com/expressjs/cookie-parser)
- [dotenv](https://github.com/motdotla/dotenv)
- [nodemon](https://nodemon.io/)

---

## Getting Started

### Prerequisites

- **Node.js v20.19+**
- **npm v9+**
- **MongoDB** (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DivyaRaval1909/chatify.git
   cd chatify
   ```

2. **Install dependencies:**
   ```bash
   npm install --prefix backend
   npm install --prefix frontend
   ```

3. **Configure environment variables:**
   - Create a `.env` file in `/backend` with your MongoDB URI and JWT secret.

4. **Run the app locally:**
   ```bash
   # Start backend
   npm run dev --prefix backend

   # Start frontend
   npm run dev --prefix frontend
   ```

---

## Deployment

- Ensure your deployment environment uses **Node.js v20.19+**.
- For Docker, use `FROM node:20.19.0` in your Dockerfile.
- On platforms like Sevalla, set the Node.js version in the dashboard or config.

---

## Useful Links

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
- [React Compiler Installation](https://react.dev/learn/react-compiler/installation)
- [TypeScript Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

## License

This project is licensed under the ISC License.

---

## Author

Divya Raval  
[GitHub Profile](https://github.com/DivyaRaval1909)

