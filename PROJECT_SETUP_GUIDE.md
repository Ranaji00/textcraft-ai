# TextCraft Project - Setup & Start Guide

## 📋 Project Overview

This is a full-stack MERN application with:

- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React + Vite + Tailwind CSS

---

## 🔧 Environment Variables Setup

### Backend (.env file location: `backend/.env`)

Your `.env` file requires 4 variables:

| Variable     | Description                       | Where to Get It             |
| ------------ | --------------------------------- | --------------------------- |
| `MONGO_URI`  | MongoDB connection string         | See instructions below      |
| `JWT_SECRET` | Secret key for JWT authentication | Generate a random string    |
| `PORT`       | Backend server port               | Use `5000` (default)        |
| `NODE_ENV`   | Environment mode                  | Use `development` for local |

#### How to Get MongoDB URI:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in (free tier available)
3. Create a new cluster
4. Click **"Connect"** → **"Connect your application"**
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<dbname>` with your database name (e.g., `textcraft`)

**Example:**

```
mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/textcraft?retryWrites=true&w=majority
```

#### How to Generate JWT_SECRET:

Run this in Node.js or use any random string generator:

```javascript
require("crypto").randomBytes(64).toString("hex");
```

Or simply use any long random string like: `myVeryLongSecretKey123456789`

---

## 🚀 How to Start the Project

### Step 1: Install Dependencies

#### Backend:

```powershell
cd backend
npm install
```

#### Frontend:

```powershell
cd frontend
npm install
```

### Step 2: Configure Environment

Make sure your `backend/.env` file has all variables filled in correctly.

### Step 3: Start the Servers

#### Option 1: Start Backend & Frontend Separately

**Terminal 1 - Start Backend:**

```powershell
cd backend
npm start
```

Backend will run on `http://localhost:5000`

**Terminal 2 - Start Frontend:**

```powershell
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5174`

#### Option 2: Start Both with Concurrently (if configured)

From the root directory:

```powershell
npm run dev
```

---

## 📦 Project Structure

```
TextCraft/
├── backend/
│   ├── app.js              # Main Express server
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables (YOU MUST CREATE THIS)
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/             # Database models (User, Image)
│   ├── routes/             # API routes (user, image)
│   ├── middlewares/        # Auth middleware
│   └── views/              # EJS templates
│
└── frontend/
    ├── package.json        # Frontend dependencies
    ├── vite.config.js      # Vite configuration
    ├── src/
    │   ├── App.jsx         # Main React component
    │   ├── components/     # Reusable components
    │   └── pages/          # Page components (Home, Login, etc.)
    └── public/             # Static assets
```

---

## 🔑 Key Features

- User authentication (Register/Login) with JWT
- Protected routes
- Image upload/management
- MongoDB database integration
- Responsive UI with Tailwind CSS

---

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"

- Check your `MONGO_URI` in `.env`
- Ensure your MongoDB Atlas cluster is running
- Check if your IP is whitelisted in MongoDB Atlas

### "JWT verification failed"

- Make sure `JWT_SECRET` is set in `.env`
- Clear browser cookies and try logging in again

### "Port already in use"

- Change `PORT` in backend `.env` or frontend `vite.config.js`
- Kill the process using the port

### Frontend can't connect to backend

- Ensure backend is running on port 5000
- Check CORS settings in `backend/app.js`
- Verify proxy settings in `frontend/vite.config.js`

---

## 📝 API Endpoints

### User Routes (`/user`)

- `POST /user/register` - Register new user
- `POST /user/login` - Login user
- `GET /user/logout` - Logout user
- `GET /user/profile` - Get user profile (protected)

### Image Routes (`/image`)

- Check `backend/routes/image.routes.js` for available endpoints

---

## 💡 Quick Start Checklist

- [ ] MongoDB Atlas account created
- [ ] Cluster created and connection string copied
- [ ] `.env` file created in `backend/` directory
- [ ] All environment variables filled in
- [ ] Backend dependencies installed (`npm install`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Backend started (`npm start` in backend folder)
- [ ] Frontend started (`npm run dev` in frontend folder)
- [ ] Open browser to `http://localhost:5174`

---

## 📧 Need Help?

If you encounter issues, check:

1. Console errors in browser (F12)
2. Terminal output for backend errors
3. Network tab to see API calls
4. MongoDB Atlas logs

**Happy Coding! 🚀**
