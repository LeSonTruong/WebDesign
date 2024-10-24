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

// Khi nhấp chuột ra ngoài bảng, thu lại bảng.
document.addEventListener("click", function (event) {
    const content = document.getElementById("homeworks-content");
    const target = event.target;

    // Nếu nhấp vào nút "Homeworks", không làm gì
    if (!target.closest(".collapsible-header") && content.style.display === "block") {
        content.style.display = "none";
    }
});

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const header = document.querySelector('header');

// Kích hoạt và thu gọn sidebar
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    // Không cần ẩn nút kích hoạt sidebar nữa
    // Cập nhật hiển thị header
    checkHeaderVisibility();
});

// Thu lại sidebar khi click ra ngoài
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('active'); // Đóng sidebar
    }
});

// Hàm để kiểm tra kích thước cửa sổ và cập nhật hiển thị cho header và sidebar toggle
function checkHeaderVisibility() {
    if (window.innerWidth <= 768) {
        header.style.display = 'none'; // Ẩn header
    } else {
        header.style.display = 'block'; // Hiển thị header
    }

    // Kiểm tra xem sidebar có đang mở hay không
    if (sidebar.classList.contains('active')) {
        header.style.display = 'none'; // Ẩn header khi sidebar mở
    }
}

// Gọi hàm kiểm tra kích thước khi tải trang
window.addEventListener('load', checkHeaderVisibility); // Gọi hàm khi tải trang

// Thêm sự kiện resize để kiểm tra khi kích thước cửa sổ thay đổi
window.addEventListener('resize', checkHeaderVisibility);

// Thêm sự kiện cho nút Homeworks trong header
const headerHomeworks = document.getElementById("header-homeworks");
headerHomeworks.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    toggleHomeworks(event); // Mở/đóng homeworks-content
    sidebar.classList.remove('active'); // Đảm bảo sidebar không mở
});

// Ngăn sidebar mở ra khi nhấn nút Homeworks trong sidebar
const sidebarHomeworks = document.getElementById("sidebar-homeworks");
sidebarHomeworks.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    toggleHomeworks(event);
});
function checkHeaderVisibility() {
    if (window.innerWidth <= 768) {
        header.style.display = 'none'; // Ẩn header khi ở màn hình nhỏ
        sidebarToggle.style.display = 'block'; // Hiển thị sidebarToggle ở màn hình nhỏ
    } else {
        header.style.display = 'block'; // Hiển thị header khi ở màn hình lớn
        sidebarToggle.style.display = 'none'; // Ẩn sidebarToggle ở màn hình lớn
    }

    // Kiểm tra xem sidebar có đang mở hay không
    if (sidebar.classList.contains('active')) {
        header.style.display = 'none'; // Ẩn header khi sidebar mở ở màn hình nhỏ
    }
}

// Gọi hàm kiểm tra kích thước khi tải trang
window.addEventListener('load', checkHeaderVisibility); // Gọi hàm khi tải trang

// Thêm sự kiện resize để kiểm tra khi kích thước cửa sổ thay đổi
window.addEventListener('resize', checkHeaderVisibility);
let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const bannerSlide = document.querySelector('.banner-slide');
    bannerSlide.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Tự động chuyển cảnh sau 3 giây
setInterval(nextSlide, 3000);
