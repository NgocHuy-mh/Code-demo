function myFunction() {

    var a = document.getElementById("tk").value;
    var b = document.getElementById("mk").value;
    password = 'admin';
    str = '1234567890qwertyuiopasdfghjklzxcvbnm';

    if (a == "" || b == "") {
        alert("Nhập lại tài khoản mật khẩu.");
        return;
    }
    if (str.indexOf(a.charAt()) == -1) {
        alert("Nhập lại Username");
        return;
    }
    if (b != password) {
        alert("Sai mật khẩu.")
    }
    if (str.indexOf(a.charAt()) != -1 && password === b) {
        alert("Đăng nhập thành công");
    }
}