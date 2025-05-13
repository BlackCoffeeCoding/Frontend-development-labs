function storeInventory(currentStock, orderedStock) {
    const store = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = Number(currentStock[i + 1]);
        store[product] = quantity;
    }

    for (let i = 0; i < orderedStock.length; i += 2) {
        const product = orderedStock[i];
        const quantity = Number(orderedStock[i + 1]);
        if (store.hasOwnProperty(product)) {
            store[product] += quantity;
        } else {
            store[product] = quantity;
        }
    }

    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

storeInventory(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);