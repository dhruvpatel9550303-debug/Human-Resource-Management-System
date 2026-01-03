
// Main application script
document.addEventListener('DOMContentLoaded', () => {
    // Initialize any global functionality here
    console.log('Dhruv HRMS initialized');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Check auth for protected pages
    const protectedPages = ['dashboard', 'attendance', 'leave', 'payroll', 'profile'];
    const isProtectedPage = protectedPages.some(page => window.location.pathname.includes(page));
    
    if (isProtectedPage && !localStorage.getItem('authToken')) {
        // In a real app, would verify JWT token
        // For demo, we'll just check if we're on dashboard (simulated auth)
        if (!window.location.pathname.includes('dashboard')) {
            window.location.href = '/';
        }
    }

    // Feather icons replacement
    if (window.feather) {
        feather.replace();
    }
});

// Simple auth functions (would use JWT in real app)
function setAuthToken(email, isAdmin, employeeId = null, role = null) {
    localStorage.setItem('authToken', 'simulated-token');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
    if (employeeId) localStorage.setItem('employeeId', employeeId);
    if (role) localStorage.setItem('userRole', role);
}

function clearAuth() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('employeeId');
    localStorage.removeItem('userRole');
}
