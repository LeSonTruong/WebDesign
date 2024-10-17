function validateForm() {
    // Lấy giá trị từ form
    var ho = document.forms["registrationForm"]["ho"].value;
    var ten = document.forms["registrationForm"]["ten"].value;
    var soDienThoai = document.forms["registrationForm"]["soDienThoai"].value;
    var ngay = document.forms["registrationForm"]["ngay"].value;
    var thang = document.forms["registrationForm"]["thang"].value;
    var nam = document.forms["registrationForm"]["nam"].value;
    var gioiTinh = document.forms["registrationForm"]["gioiTinh"].value;
    var khac = document.forms["registrationForm"]["khac"].value;

    // Kiểm tra nếu Họ trống
    if (ho == "") {
        alert("Vui lòng nhập họ.");
        return false;
    }

    // Kiểm tra nếu Tên trống
    if (ten == "") {
        alert("Vui lòng nhập tên.");
        return false;
    }

    // Kiểm tra nếu Số điện thoại trống và có đúng 10 chữ số
    var phonePattern = /^[0-9]{10}$/; // chỉ chấp nhận 10 chữ số
    if (!phonePattern.test(soDienThoai)) {
        alert("Vui lòng nhập số điện thoại hợp lệ (10 chữ số).");
        return false;
    }

    // Kiểm tra ngày, tháng, năm
    if (ngay == "0" || thang == "0" || nam == "0") {
        alert("Vui lòng chọn đầy đủ ngày, tháng, năm sinh.");
        return false;
    }

    // Kiểm tra giới tính
    if (gioiTinh == "") {
        alert("Vui lòng chọn giới tính.");
        return false;
    }

    // Kiểm tra sở thích (ít nhất một lựa chọn hoặc "Khác" không trống)
    var hobbies = document.querySelectorAll('input[name="soThich"]:checked');
    if (hobbies.length === 0 && khac == "") {
        alert("Vui lòng chọn ít nhất một sở thích hoặc điền vào mục 'Khác'.");
        return false;
    }

    // Nếu tất cả điều kiện đúng, submit form
    return true;
}
