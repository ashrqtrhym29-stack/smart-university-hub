document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            if (email && password) {
                // حفظ نوع الحساب مؤقتاً
                localStorage.setItem('userRole', role);
                
                // التوجيه لصفحة الداشبورد
                window.location.href = 'dashboard.html';
            } else {
                alert('يرجى ملء كافة البيانات المطلوبة');
            }
        });
    }
});