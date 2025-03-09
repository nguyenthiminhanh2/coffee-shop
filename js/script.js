document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn trang load lại

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra mật khẩu có khớp không
    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp! Vui lòng nhập lại.');
        return;
    }

    // Kiểm tra email đã tồn tại chưa (giả lập bằng localStorage)
    if (localStorage.getItem(email)) {
        alert('Email này đã được đăng ký!');
        return;
    }

    // Lưu thông tin vào localStorage
    const userData = { name, password };
    localStorage.setItem(email, JSON.stringify(userData));

    alert('Đăng ký thành công!');

    // Chuyển hướng đến trang đăng nhập (nếu có)
    window.location.href = 'login.html';
});
