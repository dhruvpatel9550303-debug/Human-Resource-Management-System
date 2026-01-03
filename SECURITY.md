# Security Checklist for GitHub Publication

## ⚠️ CRITICAL: Fix Before Publishing

### 1. **JWT Secret Key** (HIGH PRIORITY)
- **Location**: `middleware/auth.js` line 4
- **Issue**: Default JWT secret is hardcoded: `'your-super-secret-jwt-key-change-in-production'`
- **Risk**: Anyone can forge JWT tokens and gain admin access
- **Fix**: 
  - Create a `.env` file with a strong random secret (minimum 32 characters)
  - Use: `JWT_SECRET=your-very-long-random-secret-key-here-minimum-32-chars`
  - **NEVER commit `.env` to GitHub** (already in `.gitignore`)

### 2. **Default Admin Credentials** (HIGH PRIORITY)
- **Location**: `scripts/init-db.js` lines 12-13, `README.md` line 36-37
- **Issue**: Default admin credentials are publicly visible:
  - Email: `admin@hrms.com`
  - Password: `Admin@123`
- **Risk**: Anyone can login as admin on a fresh installation
- **Fix**: 
  - ✅ This is acceptable for a demo/portfolio project
  - ⚠️ **Add a warning in README** that users MUST change the password
  - ⚠️ **In production**, remove default credentials or require password change on first login

### 3. **CORS Configuration** (MEDIUM PRIORITY)
- **Location**: `server.js` line 17-22
- **Issue**: CORS allows all origins (`origin: '*'`)
- **Risk**: Any website can make requests to your API
- **Fix**: 
  - For production, restrict to specific domains:
    ```javascript
    origin: ['https://yourdomain.com', 'https://www.yourdomain.com']
    ```
  - For demo/portfolio, current setting is acceptable

### 4. **Database File** (LOW PRIORITY)
- **Location**: `database/hrms.db`
- **Issue**: SQLite database file contains user data
- **Risk**: If committed, exposes user data and hashed passwords
- **Fix**: 
  - ✅ Already in `.gitignore` (line 2)
  - Ensure `database/` folder is never committed

## ✅ Already Secure

1. **Environment Variables**: `.env` is in `.gitignore` ✅
2. **Password Hashing**: Using bcrypt with 10 salt rounds ✅
3. **JWT Tokens**: Properly implemented with expiration ✅
4. **Authentication Middleware**: Protects all API routes ✅
5. **Role-Based Access Control**: Enforced on backend ✅

## 📋 Pre-Publication Checklist

- [ ] Create `.env.example` file (template without secrets)
- [ ] Generate a strong JWT_SECRET and add to `.env` (don't commit)
- [ ] Review README.md - ensure security warnings are clear
- [ ] Verify `.gitignore` includes:
  - [x] `.env`
  - [x] `database/`
  - [x] `node_modules/`
- [ ] Test that sensitive files are not tracked by git
- [ ] Add security disclaimer in README

## 🔒 Production Deployment Checklist

If deploying to production:

- [ ] Change default admin password immediately
- [ ] Set strong JWT_SECRET (32+ random characters)
- [ ] Restrict CORS to your domain only
- [ ] Use HTTPS (required for JWT in production)
- [ ] Set up proper database backups
- [ ] Enable rate limiting on API endpoints
- [ ] Add input validation and sanitization
- [ ] Set up monitoring and logging
- [ ] Regular security updates for dependencies

## 📝 Notes

This is a **portfolio/demo project**. The default credentials are acceptable for demonstration purposes, but:
- Always change them in production
- Never use default credentials in a real application
- Consider adding a "first login password change" requirement

