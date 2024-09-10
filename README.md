# 🌐 Scalable URL Shortener with Analytics


## 🚀 Project Overview

Scalable URL Shortener with Analytics is a modern, full-stack web application that provides users with the ability to shorten URLs and track their usage analytics. Built with scalability and performance in mind, the application leverages a powerful combination of technologies such as Node.js, React, MongoDB, and Redis.


## 🏆 Key Features

    URL Shortening: Quickly shorten any URL with a unique, custom alias.
    Real-Time Analytics: Track clicks, geolocation, devices, and more.
    Scalable Architecture: Built to scale using cloud-native technologies (AWS Lambda and DynamoDB ready).
    High Performance: Caching with Redis for fast redirection and minimal latency.
    Responsive UI: Intuitive and responsive front-end built with React.


## 🛠️ Tech Stack

    Frontend: React.js, Axios, CSS3
    Backend: Node.js, Express.js
    Database: MongoDB, Redis (Caching)
    Deployment: AWS Lambda (Serverless), Docker, Nginx
    Tools: Git, ESLint, Prettier, VS Code


## 📦 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

Make sure you have the following software installed:

    Node.js (v20.x or higher)
    MongoDB (v4.x or higher)
    Redis (v6.x or higher)
    npm (comes with Node.js)

## Installation

1. Clone the Repository

```bash
git clone https://github.com/AbheestaV/url-shortener-app.git
cd url-shortener-app/url-shortener
```

2. Install backend dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a .env file in the root directory and add your environment variables:

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/urlshortener
REDIS_PORT=6379
REDIS_HOST=127.0.0.1
BASE_URL=http://localhost:5000
```

4. Start the backend server:

```bash
node server.js
```

5. Set up the React frontend:

```bash
cd url-shortener-client
npm install
npm start
```
6. Access the application:

Visit http://localhost:3000 in your browser to use the URL shortener and view analytics.

## 🧪 Testing

To run tests, use the following command:

```bash
npm test
```

Testing is an integral part of maintaining a robust application. This project uses Jest and Supertest for end-to-end testing.


## 🏗️ Architecture

The application is built using a Microservices architecture and follows 12-Factor App principles to ensure scalability, maintainability, and resilience.
Diagram

```bash

+---------------------+       +---------------------+
|  React Frontend     | <---> | Node.js Backend     |
|  (Client)           |       | (API + Auth)        |
+---------------------+       +---------------------+
           |                           |
           v                           v
+---------------------+       +---------------------+
|       Redis         |       |     MongoDB         |
|  (Caching Layer)    |       | (Data Storage)      |
+---------------------+       +---------------------+

```


## 🎨 Future Enhancements

- 🌟 User Authentication: Add OAuth2-based authentication for personalized dashboards.
- 📊 Advanced Analytics: Provide deep insights with interactive charts and export options.
- ☁️ Cloud Integration: Deploy to AWS Lambda with DynamoDB for serverless scaling.
- 📱 Mobile App: Build a React Native app for better accessibility on mobile devices.


## 💬 Contact

Feel free to reach out for any queries or feedback:

    GitHub: AbheestaV
    Email: abheesta@gmail.com

🙏 Acknowledgements

- Node.js
- MongoDB
- Redis
- React