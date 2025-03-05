let password = "123456";
let pass = prompt("Nhập vào mật khẩu:");
for (let i = 1; i <= 3; i++) {
    if (pass === password) {
        alert("Đăng nhập thành công.");
        break;
    } else if (i < 3) {
        pass = prompt("Nhập lại mật khẩu:");
    } else {
        alert("Đăng nhập thất bại.");
    }
}

// if (pass === password) {
//     alert("Đăng nhập thành công.");
// } else {
//     alert("Đăng nhập thất bại.");
// }