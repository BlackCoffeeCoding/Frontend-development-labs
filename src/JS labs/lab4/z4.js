function progressBar(value) {
    if (value < 0 || value > 100 || value % 10 !== 0) {
        console.log("Invalid value");
        return;
    }

    let percent = value + "%";
    let bar = "[" + "%".repeat(value / 10) + ".".repeat(10 - value / 10) + "]";

    if (value === 100) {
        console.log(percent + " Complete!");
        console.log(bar);
    } else {
        console.log(percent + " " + bar);
        console.log("Still loading...");
    }
}

progressBar(30);
progressBar(50);
progressBar(100);