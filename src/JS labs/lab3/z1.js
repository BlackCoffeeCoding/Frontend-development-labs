function modifyArray(arr) {
    let modifiedArr = arr.map((num, index) => num % 2 === 0 ? num + index : num - index);
    let originalSum = arr.reduce((acc, num) => acc + num, 0);
    let modifiedSum = modifiedArr.reduce((acc, num) => acc + num, 0);

    console.log(modifiedArr);
    console.log(originalSum);
    console.log(modifiedSum);
}

modifyArray([5, 15, 23, 56, 35]);
modifyArray([-5, 11, 3, 0, 2]);