const n = parseInt(prompt("Nhập vào số lượng số nguyên tố cần hiển thị: "));

if (n > 0) {
    let count = 0;
    let num = 2;

    while (count < n) {
        let isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else if (num <= 3) {
            isPrime = true;
        } else if (num % 2 === 0 || num % 3 === 0) {
            isPrime = false;
        } else {
            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            document.write(num + "<br>");
            count++;
        }

        num++;
    }
} else {
    alert("Số lượng số nguyên tố không hợp lệ. Vui lòng nhập một số dương.");
}
