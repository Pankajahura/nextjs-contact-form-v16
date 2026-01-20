# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
cd "c:\Users\Pankaj Soni\Desktop\testing-vul-apps\nextjs-contact-form-v16"
npm install
```

### 2️⃣ Configure Environment
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your values:
# - MONGODB_URI: Your MongoDB connection string
# - MY_EMAIL: Your Gmail address
# - MY_PASSWORD: Gmail App Password (not regular password!)
```

### 3️⃣ Run the App
```bash
# Development
npm run dev
# Open http://localhost:3000 (or 3001 if 3000 is busy)

# Production build
npm run build
npm start
```

---

## 📝 Feature Overview

### Contact Form (Home Page)
- **URL**: http://localhost:3000
- **Features**: Send emails via contact form
- **Required**: MY_EMAIL and MY_PASSWORD in .env.local

### Contact Manager
- **URL**: http://localhost:3000/contacts
- **Features**: Create, Read, Update, Delete contacts
- **Required**: MONGODB_URI in .env.local

---

## 🔧 Quick Troubleshooting

### "Please define the MONGODB_URI environment variable"
**Solution**: Create `.env.local` file with MONGODB_URI

### Email not sending
**Solution**: 
1. Check Gmail App Password (not regular password)
2. Enable 2FA on Google Account
3. Generate new App Password from Google Account settings

### Port already in use
**Solution**: App automatically uses next available port (3001, 3002, etc.)

### Build errors
**Solution**: 
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📦 What's Included

✅ Next.js 16 (App Router)
✅ React 19
✅ TypeScript
✅ Tailwind CSS
✅ MongoDB + Mongoose
✅ Nodemailer (Gmail)
✅ React Hook Form
✅ Full CRUD operations
✅ Responsive design

---

## 🎯 Project Structure

```
app/
├── api/              # API routes
│   ├── email/        # Email sending
│   └── contacts/     # CRUD operations
├── contacts/         # Contact manager page
├── layout.tsx        # Root layout
└── page.tsx          # Home page

components/
└── contact.tsx       # Contact form component

lib/
└── mongodb.ts        # Database connection

models/
└── Contact.ts        # Mongoose model

utils/
└── send-email.ts     # Email utility
```

---

## 🔐 Environment Variables

```env
# MongoDB (local or Atlas)
MONGODB_URI=mongodb://localhost:27017/contact-form

# Gmail configuration
MY_EMAIL=your-email@gmail.com
MY_PASSWORD=your-app-password-here
```

---

## 🧪 Testing

### Test Build
```bash
npm run build
# Should complete with no errors
```

### Test Dev Server
```bash
npm run dev
# Should start on http://localhost:3000
```

### Test Features
1. Visit home page → Submit contact form
2. Visit /contacts → Create/Edit/Delete contacts

---

## 📚 Documentation

- **Full Setup**: See [README.md](README.md)
- **Setup Summary**: See [SETUP_SUMMARY.md](SETUP_SUMMARY.md)
- **Environment Template**: See [.env.example](.env.example)

---

## ⚡ Commands Cheat Sheet

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Maintenance
npm install          # Install dependencies
npm run lint         # Run ESLint
```

---

## 🎉 You're Ready!

Your Next.js 16 Contact Form app is ready to use. Start by running:

```bash
npm run dev
```

Then visit **http://localhost:3000** in your browser.

For full documentation, see [README.md](README.md).
