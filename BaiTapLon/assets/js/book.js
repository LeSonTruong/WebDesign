function openTab(event, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function swapLocations() {
    // Thêm logic hoán đổi vị trí đi và đến
}
function swapLocations() {
    const fromAirport = document.getElementById("fromAirport");
    const toAirport = document.getElementById("toAirport");

    // Lưu giá trị hiện tại của "fromAirport"
    const tempValue = fromAirport.value;

    // Hoán đổi giá trị giữa "fromAirport" và "toAirport"
    fromAirport.value = toAirport.value;
    toAirport.value = tempValue;
}
document.getElementById("fromAirport").addEventListener("change", preventDuplicate);
document.getElementById("toAirport").addEventListener("change", preventDuplicate);

function preventDuplicate() {
    const fromAirport = document.getElementById("fromAirport");
    const toAirport = document.getElementById("toAirport");

    // Kiểm tra nếu giá trị trùng nhau
    if (fromAirport.value === toAirport.value) {
        alert("Departure and arrival airports cannot be the same.");
        
        // Đặt lại một trong hai dropdown để không trùng nhau
        toAirport.selectedIndex = 0; // Hoặc chọn một cách xử lý khác
    }
}

function swapLocations() {
    const fromAirport = document.getElementById("fromAirport");
    const toAirport = document.getElementById("toAirport");

    // Lưu giá trị hiện tại của "fromAirport"
    const tempValue = fromAirport.value;

    // Hoán đổi giá trị giữa "fromAirport" và "toAirport"
    fromAirport.value = toAirport.value;
    toAirport.value = tempValue;

    // Kiểm tra lại để đảm bảo không trùng nhau sau khi hoán đổi
    preventDuplicate();
}
function toggleReturnDate() {
    const roundTripCheckbox = document.getElementById("roundTrip");
    const returnDate = document.getElementById("returnDate");

    // Bật/tắt returnDate dựa trên trạng thái của roundTripCheckbox
    returnDate.disabled = !roundTripCheckbox.checked;
    
    // Nếu bỏ chọn Round Trip, reset giá trị của Return Date
    if (!roundTripCheckbox.checked) {
        returnDate.value = "";
    }
}
function toggleReturnDateBus() {
    const roundTripCheckbox = document.getElementById("roundTripBus");
    const returnDateInput = document.getElementById("returnDateBus");
    
    // Bật hoặc tắt ô Return Date dựa trên trạng thái của checkbox
    returnDateInput.disabled = !roundTripCheckbox.checked;
}
document.getElementById("fromStation").addEventListener("change", preventDuplicate);
document.getElementById("toStation").addEventListener("change", preventDuplicate);

function preventDuplicate() {
    const fromStation = document.getElementById("fromStation");
    const toStation = document.getElementById("toStation");

    if (fromStation.value === toStation.value) {
        alert("Departure and arrival airports cannot be the same.");
        
        toStation.selectedIndex = 0;
    }
}

function swapLocations() {
    const fromStation = document.getElementById("fromStation");
    const toStation = document.getElementById("toStation");

    const tempValue = fromStation.value;

    fromStation.value = toStation.value;
    toStation.value = tempValue;

    preventDuplicate();
}
