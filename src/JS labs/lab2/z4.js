function calculator(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default:
            console.log('Invalid operator');
            return;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10);      // 15.00
calculator(25.5, '-', 3);    // 22.50