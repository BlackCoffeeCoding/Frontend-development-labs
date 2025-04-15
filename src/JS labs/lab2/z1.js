function sumOfDigits(number) {
    const digits = number.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
    console.log(sum);
}

sumOfDigits(245678); // 32
sumOfDigits(97561);  // 28
sumOfDigits(543);    // 12