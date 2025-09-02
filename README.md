# 🎉 An Interactive Birthday Surprise Web Experience

This project is a **multi-page, animated, and interactive web application** designed to be a heartfelt and modern digital birthday gift.  
It takes the user on a journey through several phases — from a spectacular intro countdown, to a personalized photo gallery, and finally to an interactive section where they can send a message back to the creator.  
The entire experience is enhanced with **continuous background music** that plays seamlessly across all pages.

https://happy-birthday-node-js.onrender.com/
---

## ✨ Core Features

- **Multi-Page Journey**: Four distinct, beautifully designed pages that guide the user through a birthday celebration.  
- **Grand Animated Intro**: Starts with an automatic 10-second countdown, complete with dynamic sparkle and ribbon animations.  
- **Continuous Background Music**: Audio plays across all pages without interruption, with different tracks for different sections and a convenient mute button.  
- **Dynamic Photo Slideshow**: Automated, animated gallery to showcase personal photos with custom captions.  
- **Typing Effect Message**: A heartfelt message is revealed character-by-character for a dramatic and personal touch.  
- **Node.js Backend for Messaging**: Captures messages sent from the final page and saves them to the server logs.

---

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Core structure of all pages  
- **CSS3**: Custom animations, keyframes, and base styling  
- **Tailwind CSS**: Rapid, responsive UI design and layout  
- **JavaScript (ES6+)**: Interactivity, animations, slideshow logic, communication with backend

### Backend
- **Node.js**: JavaScript runtime environment  
- **Express.js**: Web framework to handle routing and serve static files

---

## ⚙️ How The System Works

This project uses a **classic client-server architecture**.

### The Server (`server.js`)
1. Serves all the static files (HTML, music files, etc.) located in the `public` folder.  
2. Creates an API endpoint at `/api/save-message` — a dedicated mailbox waiting to receive messages.

### The Client (`phase4.html`)
- When a user types a message and clicks **"Send"**, the JavaScript on this page sends a **POST request** to the server's `/api/save-message` endpoint.

### The Log
- The server receives this request, takes the message, and prints it to the console using `console.log()`.  
- When deployed on a platform like Render, this console output becomes the server's permanent log file, securely storing every message received.

---

## 🚀 How to Use and Edit This Project

Anyone can **download, customize, and run** this project locally.

### Prerequisites
You must have **Node.js** installed on your computer (which includes `npm`).

### Step 1: Download the Project
```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Project Locally
```bash
npm start
```
Now open your browser and navigate to:
```
http://localhost:3000
```

---

## 🌐 Deployment on Render

This project is designed to be deployed as a **Web Service** on Render.

### Step 1: Push to GitHub
Ensure your project (with `server.js` and `package.json` in the root, and all HTML/media files in a `public` subfolder) is uploaded to a GitHub repository.

### Step 2: Create a New Web Service on Render
1. Log in to your Render dashboard  
2. Click **New +** → **Web Service**  
3. Connect your GitHub account and select the repository  
4. Configure the service:
   - **Name**: e.g., `my-birthday-surprise`  
   - **Runtime**: Node (auto-detected)  
   - **Build Command**: `npm install`  
   - **Start Command**: `node server.js`  
   - **Instance Type**: Free tier

### Step 3: Deploy
- Scroll down and click **Create Web Service**.  
- Render will install dependencies and start your server.  
- Once deployed, Render provides a **public URL** for your live project.

---

## 📩 How to View Your Received Messages

Any messages submitted through the form on `phase4.html` will be printed to your server's logs.  
You can view them by going to the **Logs** tab for your Web Service on the Render dashboard.

---

## 🧩 Challenges Faced

- **Initial Idea**: Tried saving messages to `localStorage`, but that only saves data on the user's own browser.  
- **Third-Party Services**: Considered Formspree or serverless platforms like Vercel, but these broke the "self-contained" goal.  
- **The Solution**: A lightweight **Node.js/Express** server with a simple `/api/save-message` endpoint.  
  By logging the message with `console.log()` on the server, we created a free, simple, and effective "log file" system compatible with hosting platforms like Render.

---
