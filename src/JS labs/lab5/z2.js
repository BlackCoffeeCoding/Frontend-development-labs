function townsInfo(data) {
    for (let line of data) {
        let [town, latitude, longitude] = line.split(' | ');
        let townObj = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(townObj);
    }
}

townsInfo([
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
]);