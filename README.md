# Dhruv HRMS - Production-Ready Human Resource Management System

A full-stack HRMS application with strict Role-Based Access Control (RBAC), JWT authentication, and real database operations.

## Features

- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **Strict RBAC** - ADMIN and EMPLOYEE roles with enforced permissions
- ✅ **Employee Management** - Full CRUD operations (Admin only)
- ✅ **Attendance Tracking** - Check-in/Check-out with real-time tracking
- ✅ **Leave Management** - Request, approve, and track leave requests
- ✅ **Payroll Management** - Salary structure and payroll records
- ✅ **Reports & Analytics** - Dashboard statistics and detailed reports
- ✅ **SQLite Database** - Lightweight, production-ready database

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Frontend**: Vanilla JavaScript, Tailwind CSS

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Initialize Database**
   ```bash
   npm run init-db
   ```
   This creates the database schema and a default admin user:
   - Email: `admin@hrms.com`
   - Password: `Admin@123`
   - ⚠️ **CRITICAL: Change this password immediately after first login!**
   - ⚠️ **These are default demo credentials - NEVER use in production!**

3. **Start Server**
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/logout` - Logout

### Employees (Admin only)
- `GET /api/employees` - Get all employees
- `GET /api/employees/:employeeId` - Get employee by ID
- `POST /api/employees` - Create employee
- `PUT /api/employees/:employeeId` - Update employee
- `DELETE /api/employees/:employeeId` - Delete employee

### Attendance
- `POST /api/attendance/checkin` - Check in
- `POST /api/attendance/checkout` - Check out
- `GET /api/attendance` - Get own attendance (Employee)
- `GET /api/attendance/all` - Get all attendance (Admin)
- `PUT /api/attendance/:id` - Update attendance (Admin)

### Leave
- `POST /api/leave` - Create leave request
- `GET /api/leave` - Get leave requests
- `GET /api/leave/:id` - Get leave request by ID
- `PUT /api/leave/:id/approve` - Approve/Reject leave (Admin)
- `DELETE /api/leave/:id` - Cancel leave request

### Payroll
- `GET /api/payroll` - Get payroll records
- `GET /api/payroll/salary/:employeeId` - Get salary structure
- `PUT /api/payroll/salary/:employeeId` - Update salary (Admin)
- `POST /api/payroll` - Create payroll record (Admin)

### Reports
- `GET /api/reports/dashboard` - Get dashboard statistics
- `GET /api/reports/attendance` - Attendance report (Admin)
- `GET /api/reports/leave-summary` - Leave summary (Admin)
- `GET /api/reports/payroll-summary` - Payroll summary (Admin)

## Role-Based Access Control

### ADMIN Role
- ✅ View, create, update, delete all employees
- ✅ View all attendance records
- ✅ Approve/reject leave requests
- ✅ View and update salary/payroll data
- ✅ Access all reports and analytics
- ✅ Access admin dashboard

### EMPLOYEE Role
- ✅ View and edit own profile (limited fields)
- ✅ Check-in/check-out attendance
- ✅ Apply for leave and view own leave status
- ✅ View own attendance and payroll (read-only)
- ❌ Cannot access admin routes or data
- ❌ Cannot view other employees' data

## Security Features

- JWT tokens with role embedded
- Password hashing with bcrypt
- Route protection with middleware
- Input validation with express-validator
- SQL injection prevention with parameterized queries
- CORS enabled for API access

## Database Schema

- `users` - User accounts with authentication
- `employees` - Employee profiles and details
- `attendance` - Daily attendance records
- `leave_requests` - Leave applications and approvals
- `payroll` - Salary and payroll information

## Development

### Project Structure
```
├── config/          # Database configuration
├── middleware/      # Auth and RBAC middleware
├── routes/          # API route handlers
├── scripts/         # Database initialization
├── utils/           # Frontend API utilities
├── components/       # Frontend components
├── server.js        # Express server
└── package.json     # Dependencies
```

## Production Deployment

1. Set environment variables:
   ```bash
   JWT_SECRET=your-strong-secret-key-min-32-chars
   PORT=3000
   ```

2. Use a process manager (PM2, etc.)
3. Set up reverse proxy (Nginx)
4. Use HTTPS
5. Regular database backups

## 🔒 Security Notes

### Before Publishing to GitHub:

1. **JWT Secret**: The default JWT secret in `middleware/auth.js` is for development only. 
   - Create a `.env` file with a strong `JWT_SECRET` (32+ random characters)
   - See `SECURITY.md` for detailed security checklist

2. **Default Credentials**: Default admin credentials are for demo purposes only.
   - **NEVER use in production**
   - Always change the password after first login

3. **Environment Variables**: 
   - Copy `.env.example` to `.env` and fill in your values
   - `.env` is already in `.gitignore` - never commit it!

4. **Database**: The SQLite database file is in `.gitignore` - ensure it's never committed.

See `SECURITY.md` for complete security checklist.

## License

ISC


