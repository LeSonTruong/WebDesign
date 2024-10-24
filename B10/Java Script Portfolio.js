// Hàm ẩn/hiện bảng "Homeworks"
function toggleHomeworks(event) {
    const content = document.getElementById("homeworks-content");
    const isVisible = content.style.display === "block";

    // Nếu bảng đang hiện, ẩn nó. Nếu không, hiện bảng.
    if (isVisible) {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }

    // Ngăn sự kiện click trên nút "Homeworks" ảnh hưởng đến sự kiện click bên ngoài.
    event.stopPropagation();
}

// Khi nhấp chuột ra ngoài bảng "Homeworks", ẩn bảng.
document.addEventListener("click", function (event) {
    const content = document.getElementById("homeworks-content");
    const target = event.target;

    // Nếu nhấp vào ngoài bảng (không phải nút "Homeworks"), ẩn bảng.
    if (!target.closest(".collapsible-header") && content.style.display === "block") {
        content.style.display = "none";
    }
});

// Kích hoạt và thu gọn sidebar
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const header = document.querySelector('header');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    checkHeaderVisibility(); // Cập nhật hiển thị header
});

// Ẩn sidebar khi nhấp ra ngoài sidebar
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Kiểm tra kích thước cửa sổ và cập nhật hiển thị cho header và nút sidebar toggle
function checkHeaderVisibility() {
    if (window.innerWidth <= 768) {
        header.style.display = 'none'; // Ẩn header trên màn hình nhỏ
        sidebarToggle.style.display = 'block'; // Hiển thị nút sidebar toggle trên màn hình nhỏ
    } else {
        header.style.display = 'block'; // Hiển thị header trên màn hình lớn
        sidebarToggle.style.display = 'none'; // Ẩn nút sidebar toggle trên màn hình lớn
    }

    // Nếu sidebar đang mở, ẩn header
    if (sidebar.classList.contains('active')) {
        header.style.display = 'none';
    }
}

// Kiểm tra hiển thị khi trang được tải
window.addEventListener('load', checkHeaderVisibility);

// Kiểm tra hiển thị khi kích thước cửa sổ thay đổi
window.addEventListener('resize', checkHeaderVisibility);

// Thêm sự kiện click cho nút "Homeworks" trong header
const headerHomeworks = document.getElementById("header-homeworks");
headerHomeworks.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    toggleHomeworks(event); // Ẩn/hiện bảng "Homeworks"
    sidebar.classList.remove('active'); // Đảm bảo sidebar không mở
});

// Thêm sự kiện click cho nút "Homeworks" trong sidebar
const sidebarHomeworks = document.getElementById("sidebar-homeworks");
sidebarHomeworks.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    toggleHomeworks(event);
});

let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const bannerSlide = document.querySelector('.banner-slide');
    bannerSlide.style.transition = 'transform 0.8s ease-in-out'; // Chuyển động mượt
    bannerSlide.style.transform = `translateX(${-currentIndex * 100}%)`; // Dịch chuyển slide
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Tự động chuyển ảnh sau 3 giây
let slideInterval = setInterval(nextSlide, 3000);

// Dừng tự động chuyển ảnh khi người dùng nhấn nút điều khiển
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
});
