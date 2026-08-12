# Aura (Modern Chat App)

A full-stack MERN Chat Application featuring a modern, minimalist glassmorphism UI with a vibrant 4-color gradient theme. 

## Features
- **Modern UI/UX**: Designed using color theory, featuring a dynamic 4-color gradient background (Slate, Deep Blue, Indigo, Teal), and stunning glassmorphism components.
- **Real-time Messaging**: Powered by Socket.io for instant message delivery and typing indicators.
- **Group Chats**: Create and manage group chats.
- **Authentication**: Secure user authentication and authorization using JWT.

## Single Service Deployment (Render)

This application is configured to run both the frontend and backend on a **single web service** on Render, saving costs and simplifying deployment. The Express server serves the React frontend statically in production.

### Render Setup Instructions

1. **Create a New Web Service** on [Render](https://render.com).
2. Connect your GitHub repository containing this project.
3. Configure the service with the following settings:
   - **Environment**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
4. Add the following **Environment Variables** in the Render dashboard:
   - `PORT`: (e.g., `5000`)
   - `MONGO_URI`: Your MongoDB connection string.
   - `JWT_SECRET`: A secure secret string for JSON Web Tokens.
   - `NODE_ENV`: `production`
5. Deploy!

### How the Single Service Works
In `package.json`, the `build` script installs dependencies for both root and frontend, then builds the React app:
```json
"build": "npm install --legacy-peer-deps && npm install --legacy-peer-deps --prefix frontend && npm run build --prefix frontend"
```

In `backend/server.js`, when `NODE_ENV === "production"`, Express serves the static files from the React build directory:
```javascript
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
}
```

## Local Development

1. Install dependencies in the root: `npm install`
2. Install frontend dependencies: `cd frontend && npm install`
3. Start the backend: `npm run server`
4. Start the frontend: `cd frontend && npm start`
