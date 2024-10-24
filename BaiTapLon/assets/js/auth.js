document.addEventListener('DOMContentLoaded', function () {
  // Hàm đăng nhập chính
  function login(event) {
    event.preventDefault(); // Ngăn chặn việc form tự động submit

    // Lấy giá trị người dùng nhập vào từ ô email và password
    const emailInput = document.querySelector('input[name="email"]').value;
    const passwordInput = document.querySelector('input[name="password"]').value;

    // Thông tin đăng nhập duy nhất được lưu trữ
    const storedEmail = 'user@example.com'; // Email hợp lệ
    const storedPassword = '123456'; // Mật khẩu hợp lệ

    // Lấy thẻ span để hiển thị thông báo lỗi
    const errorMessage = document.getElementById('error-message');

    // Kiểm tra xem thông tin đăng nhập có chính xác không
    if (emailInput === storedEmail && passwordInput === storedPassword) {
      // Nếu thông tin đúng, lưu trạng thái đăng nhập vào LocalStorage
      localStorage.setItem('loggedIn', 'true');
      
      // Chuyển hướng người dùng đến trang "index.html" sau khi đăng nhập thành công
      window.location.href = 'index.html';
    } else {
      // Nếu thông tin không đúng, hiển thị thông báo lỗi
      errorMessage.textContent = 'Invalid email or password.'; // Thông báo lỗi bằng tiếng Anh
      errorMessage.style.display = 'block'; // Hiển thị thẻ thông báo

      // Sau 5 giây (5000ms), ẩn thông báo lỗi đi
      setTimeout(function () {
        errorMessage.style.display = 'none'; // Ẩn thông báo sau 5 giây
      }, 5000);
    }
  }

  // Khi người dùng bắt đầu nhập vào ô email, ẩn thông báo lỗi nếu có
  document.querySelector('input[name="email"]').addEventListener('input', function () {
    document.getElementById('error-message').style.display = 'none'; // Ẩn thẻ thông báo lỗi
  });

  // Khi người dùng bắt đầu nhập vào ô password, ẩn thông báo lỗi nếu có
  document.querySelector('input[name="password"]').addEventListener('input', function () {
    document.getElementById('error-message').style.display = 'none'; // Ẩn thẻ thông báo lỗi
  });

  // Khi người dùng nhấn vào nút "Login", gọi hàm đăng nhập
  document.querySelector('.login').addEventListener('click', login);

  // Xử lý khi nhấn phím Enter trong ô password
  document.querySelector('input[name="password"]').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      login(event); // Gọi hàm đăng nhập khi nhấn Enter
    }
  });

  // Đánh dấu nút điều hướng đang hoạt động
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    // Kiểm tra nếu đường dẫn của nút khớp với đường dẫn hiện tại
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active'); // Thêm class active
    }
  });
});
