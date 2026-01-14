# 🚀 Complete Deployment Guide for TextCraft AI

This guide will help you deploy your TextCraft AI application to production using **free tier** services.

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account (free)
- Render account (free)
- Vercel account (free)

---

## 🗄️ Step 1: Setup MongoDB Atlas Database (FREE)

### 1.1 Create MongoDB Atlas Cluster

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Click **"Create"** → **"Shared"** (Free tier M0)
4. Select your nearest **Cloud Provider & Region**
5. Cluster Name: `Cluster01` (or any name)
6. Click **"Create Cluster"**

### 1.2 Create Database User

1. Go to **Security** → **Database Access**
2. Click **"Add New Database User"**
3. Choose **Password** authentication
4. Username: `your_username`
5. Password: `your_secure_password` (save this!)
6. Database User Privileges: **Read and write to any database**
7. Click **"Add User"**

### 1.3 Whitelist IP Addresses

1. Go to **Security** → **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### 1.4 Get Connection String

1. Go to **Deployment** → **Database**
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster01.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your credentials
6. Add database name after `.net/`: `textcraft`
   ```
   mongodb+srv://username:password@cluster01.xxxxx.mongodb.net/textcraft?retryWrites=true&w=majority
   ```

---

## 🖥️ Step 2: Deploy Backend to Render (FREE)

### 2.1 Create Web Service

1. Go to [Render](https://render.com/)
2. Sign up or log in with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository: `textcraft-ai`
5. Click **"Connect"**

### 2.2 Configure Service

- **Name**: `textcraft-backend` (or any name)
- **Region**: Select nearest region
- **Branch**: `main`
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free`

### 2.3 Add Environment Variables

Click **"Environment"** and add:

```
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_random_secret_key_here
PORT=5000
NODE_ENV=production
```

**How to generate JWT_SECRET:**

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 2.4 Deploy

1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. **Copy your backend URL** (e.g., `https://textcraft-backend.onrender.com`)

---

## 🎨 Step 3: Deploy Frontend to Vercel (FREE)

### 3.1 Import Project

1. Go to [Vercel](https://vercel.com/)
2. Sign up or log in with GitHub
3. Click **"Add New..."** → **"Project"**
4. Import your repository: `textcraft-ai`

### 3.2 Configure Project

- **Framework Preset**: `Vite`
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 3.3 Add Environment Variable

Click **"Environment Variables"** and add:

```
VITE_API_URL=https://your-backend-url.onrender.com
```

Replace with your actual Render backend URL from Step 2.4.

### 3.4 Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes
3. **Copy your frontend URL** (e.g., `https://textcraft-ai.vercel.app`)

---

## 🔧 Step 4: Configure CORS

### 4.1 Update Backend CORS

1. Go to your backend code: `backend/app.js`
2. Find the CORS configuration:
   ```javascript
   const corsOptions = {
     origin: ["http://localhost:5173", "http://localhost:3000"],
     credentials: true,
   };
   ```
3. Add your Vercel URL:
   ```javascript
   const corsOptions = {
     origin: [
       "http://localhost:5173",
       "http://localhost:3000",
       "https://textcraft-ai.vercel.app", // Add your Vercel URL
     ],
     credentials: true,
   };
   ```
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add production CORS origin"
   git push
   ```
5. Render will automatically redeploy

---

## ✅ Step 5: Test Your Deployment

1. Open your Vercel URL
2. Test the following features:
   - ✅ Register a new account
   - ✅ Login
   - ✅ Generate an image
   - ✅ Save image to gallery
   - ✅ Like/unlike images
   - ✅ View profile
   - ✅ Edit profile
   - ✅ Change subscription plan
   - ✅ Check mobile responsiveness

---

## 🎉 Your TextCraft AI is now LIVE!

- **Frontend**: https://your-app.vercel.app
- **Backend**: https://your-backend.onrender.com

---

## 📊 Important Notes

### Free Tier Limitations

**Render (Backend)**:

- Spins down after 15 minutes of inactivity
- First request after sleep takes ~30 seconds
- 750 hours/month (enough for small projects)

**Vercel (Frontend)**:

- 100 GB bandwidth/month
- Unlimited deployments
- Auto-scales

**MongoDB Atlas**:

- 512 MB storage
- Shared RAM (enough for small apps)

### Image Generation

- Uses **Pollinations.ai** (completely free, no API key needed)
- No rate limits on free tier
- Multiple AI models available

---

## 🔒 Security Best Practices

1. **Never commit sensitive data**:

   - MongoDB connection strings
   - JWT secrets
   - API keys

2. **Use strong passwords**:

   - MongoDB database user password
   - User account passwords (hashed with bcrypt)

3. **Environment variables**:

   - Always use `.env` files locally
   - Set environment variables in hosting platforms
   - Never commit `.env` to GitHub

4. **CORS**:
   - Only allow your frontend domain
   - Don't use `*` (allow all) in production

---

## 🐛 Troubleshooting

### Backend not responding

- Check Render logs: Dashboard → Your Service → Logs
- Verify environment variables are set correctly
- Wait 30 seconds if service was sleeping

### Images not generating

- Check browser console for errors
- Verify backend URL is correct in Vercel env variables
- Check if backend is running on Render

### Login not working

- Check JWT_SECRET is set in Render
- Verify MONGO_URI is correct
- Check if MongoDB Atlas IP whitelist includes 0.0.0.0/0

### CORS errors

- Verify Vercel URL is added to backend CORS origins
- Check credentials: true is set
- Clear browser cache

---

## 📞 Need Help?

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://www.mongodb.com/docs/atlas/

---

**Made with ❤️ by TextCraft AI Team**
