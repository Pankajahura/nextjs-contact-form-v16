# Next.js Contact Form Application - v16

A modern, full-featured contact form application rebuilt with Next.js 16, featuring email functionality and a complete contact management system with MongoDB integration.

## Features

### 🎯 Core Features
- **Contact Form**: Submit messages via email using Nodemailer
- **Contact Manager**: Full CRUD operations for managing contacts
- **MongoDB Integration**: Persistent data storage with Mongoose
- **Responsive Design**: Built with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Clean, professional interface with modal dialogs

### 🔧 Technical Features
- Next.js 16 (App Router)
- React 19
- TypeScript 5.7+
- Mongoose ODM
- Nodemailer for email
- React Hook Form for form handling
- Tailwind CSS for styling

## Project Structure

```
nextjs-contact-form-v16/
├── app/
│   ├── api/
│   │   ├── contacts/
│   │   │   ├── route.ts          # GET all contacts, POST new contact
│   │   │   └── [id]/
│   │   │       └── route.ts      # GET, PUT, DELETE single contact
│   │   └── email/
│   │       └── route.ts          # POST send email
│   ├── contacts/
│   │   └── page.tsx              # Contact manager UI
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page with contact form
├── components/
│   └── contact.tsx               # Contact form component
├── lib/
│   └── mongodb.ts                # MongoDB connection handler
├── models/
│   └── Contact.ts                # Mongoose Contact model
├── utils/
│   └── send-email.ts             # Email sending utility
├── .env.example                  # Environment variables template
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Prerequisites

- Node.js 18.18 or later
- MongoDB (local installation or MongoDB Atlas account)
- Gmail account with App Password (for email functionality)

## Setup Instructions

### 1. Install Dependencies

```bash
cd nextjs-contact-form-v16
npm install
```

### 2. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB Community Edition
# Start MongoDB service
mongod --dbpath /path/to/data/directory
```

**Option B: MongoDB Atlas (Cloud)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/contact-form
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contact-form

# Email Configuration
MY_EMAIL=your-email@gmail.com
MY_PASSWORD=your-app-specific-password
```

### 4. Set Up Gmail App Password

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to Security > 2-Step Verification > App Passwords
5. Select "Mail" and your device
6. Generate a new app password
7. Copy the 16-character password to `MY_PASSWORD` in `.env.local`

**Important**: Use the App Password, not your regular Gmail password!

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Contact Form (Home Page)
1. Navigate to `http://localhost:3000`
2. Fill in your name, email, and message
3. Click "Submit" to send an email
4. The email will be sent to the address configured in `MY_EMAIL`

### Contact Manager
1. Click "View Contacts Manager" button or navigate to `http://localhost:3000/contacts`
2. **Add Contact**: Click "+ Add Contact" to create a new contact
3. **Edit Contact**: Click "Edit" button on any contact
4. **Delete Contact**: Click "Delete" button on any contact
5. **View All**: All contacts are displayed in a list with timestamps

## API Endpoints

### Email API
- `POST /api/email`
  - Body: `{ name, email, message }`
  - Sends email via Nodemailer

### Contacts API
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create new contact
  - Body: `{ name, phone }`
- `GET /api/contacts/[id]` - Get single contact
- `PUT /api/contacts/[id]` - Update contact
  - Body: `{ name, phone }`
- `DELETE /api/contacts/[id]` - Delete contact

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Key Improvements from Original (Next.js 13 → 16)

### 1. **Next.js 16 Compatibility**
   - Updated to Next.js 16 with latest App Router features
   - React 19 support
   - Modern TypeScript configuration

### 2. **Updated Route Handlers**
   - Dynamic route params are now async: `await params`
   - Proper error handling with typed errors
   - Enhanced validation

### 3. **Improved Type Safety**
   - Stricter TypeScript configuration
   - Better error type handling
   - Updated type definitions for React 19

### 4. **Enhanced UI/UX**
   - Better loading states
   - Improved error messages
   - Added timestamps to contacts
   - Enhanced form validation
   - Smoother transitions

### 5. **Better Code Organization**
   - Cleaner component structure
   - Consistent error handling
   - Improved logging for debugging

### 6. **Modern Best Practices**
   - ESM configuration files (`.mjs`)
   - Updated dependency versions
   - Better security practices
   - Proper environment variable handling

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod --version`
- Check connection string format in `.env.local`
- For Atlas: Verify IP whitelist and user credentials

### Email Not Sending
- Verify Gmail App Password is correct (16 characters, no spaces)
- Check 2-Factor Authentication is enabled
- Ensure `MY_EMAIL` and `MY_PASSWORD` are set in `.env.local`
- Check console for detailed error messages

### Build Errors
- Clear Next.js cache: `rm -rf .next`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18.18+)

## Development Tips

1. **Hot Reload**: The app supports hot reload. Changes to files will automatically refresh.
2. **Database Inspection**: Use MongoDB Compass to inspect your database visually.
3. **Console Logs**: Check browser console and terminal for debugging information.
4. **Environment Variables**: Restart dev server after changing `.env.local`.

## License

MIT

## Support

For issues or questions, please check the troubleshooting section or create an issue in the repository.
