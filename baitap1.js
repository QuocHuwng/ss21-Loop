let a = parseInt(prompt("Nhập giá trị a: "));
let b = parseInt(prompt("Nhập giá trị b: "));
let c = parseInt(prompt("Nhập giá trị c: "));
let d = parseInt(prompt("Nhập giá trị d: "));
let e = parseInt(prompt("Nhập giá trị e: "));

if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d) && Number.isInteger(e)) {  
    let sum = 0;
    if (a % 2 !== 0) sum += a;
    if (b % 2 !== 0) sum += b;
    if (c % 2 !== 0) sum += c;
    if (d % 2 !== 0) sum += d;
    if (e % 2 !== 0) sum += e;
    document.write("Tổng các số lẻ là: " + sum);
} else {
    document.write("Giá trị nhập không hợp lệ.");
}
