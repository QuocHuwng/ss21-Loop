let number = parseInt(prompt("Nhập số bất kì: "));
let sum = "";
if (Number.isInteger(number)) {
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            sum += i + ", ";
        }        
    }
    sum = sum.slice(0, -2);
    document.write(`uoc cua ${number} là: ${sum}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ.");
}