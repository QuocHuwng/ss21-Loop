let a = parseInt(prompt("Nhập giá trị a: "));
let b = parseInt(prompt("Nhập giá trị b: "));
let c = parseInt(prompt("Nhập giá trị c: "));
let d = parseInt(prompt("Nhập giá trị d: "));
let e = parseInt(prompt("Nhập giá trị e: "));

if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d) && Number.isInteger(e)) {
    let chan = 0;
    let le = 0;
    if (a % 2 !== 0) {
        le++;
    } else {
        chan++;
    }

    if (b % 2 !== 0) {
        le++;
    } else {
        chan++;
    }

    if (c % 2 !== 0) {
        le++;
    } else {
        chan++;
    }

    if (d % 2 !== 0) {
        le++;
    } else {
        chan++;
    }

    if (e % 2 !== 0) {
        le++;
    } else {
        chan++;
    }
    document.write("Số chẵn có số lượng là: " + chan);
    document.write("Số lẻ có số lượng là: " + le);
} else {
    document.write("Giá trị nhập không hợp lệ.");
}