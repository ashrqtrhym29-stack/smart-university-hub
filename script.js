document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            if (email && password) {
                // حفظ نوع الحساب مؤقتاً
                localStorage.setItem('userRole', role);
                
                // التوجيه الذكي بناءً على نوع الحساب
                if (role === 'student') {
                    window.location.href = 'dashboard.html';
                } else if (role === 'doctor') {
                    window.location.href = 'doctor.html';
                } else if (role === 'admin') {
                    alert('صفحة المسؤول قيد التطوير حالياً!');
                }
            } else {
                alert('يرجى ملء كافة البيانات المطلوبة');
            }
        });
    }
});