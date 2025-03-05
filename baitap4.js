let a = Number(prompt("Nhap vao so a"));
let b = Number(prompt("Nhap vao so b"));
let c = Number(prompt("Nhap vao so c"));
let delta = b ** 2 - 4 * a * c;

if (delta > 0) {
    document.write("Phuong trinh co hai nghiem phan biet");
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(`x1 = ${x1}, x2 = ${x2}`);
} else if (delta === 0) {
    document.write("Phuong trinh co nghiem kep ");
    let x = -b / (2 * a);
    document.write(`x = ${x}`);
} else {
    document.write("Phuong trinh vo nghiem");
}