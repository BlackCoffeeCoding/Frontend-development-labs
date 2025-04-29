function commonElements(arr1, arr2) {
    let common = arr1.filter(item => arr2.includes(item));
    console.log(common.join("\n"));
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);