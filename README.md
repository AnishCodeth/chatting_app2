# CChat - Modern Real-Time Chat Application

<div align="center">
  <img src="/frontend/public/screenshot-for-readme.png" alt="CChat Interface" width="800"/>
</div>

## Overview

CChat is a sophisticated real-time chat application built with modern web technologies. It provides a seamless communication experience with a focus on performance, security, and user experience.

## Key Features

- 🚀 Real-time messaging with Socket.io
- 🔐 Secure authentication and authorization
- 👥 Online user status tracking
- 🎨 Customizable themes with dark/light modes
- 📱 Responsive design for all devices
- 🖼️ Image sharing capabilities
- ⚡ Optimized performance

## Technology Stack

### Frontend

- React.js with Vite
- TailwindCSS + DaisyUI
- Zustand for state management
- Socket.io client
- Lucide React icons

### Backend

- Node.js + Express
- MongoDB with Mongoose
- JWT authentication
- Socket.io
- Cloudinary for image storage

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/cchat.git
cd cchat
```

2. Install dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Environment Setup

```bash
# Backend .env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3213
NODE_ENV=development

# Frontend .env (if needed)
VITE_API_URL=http://localhost:3213
```

4. Start the application

```bash
# Start backend
npm run start

# In a new terminal, start frontend
cd frontend
npm run dev
```

## Project Structure
