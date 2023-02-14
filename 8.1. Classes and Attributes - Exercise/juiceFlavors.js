function juiceFlavors(arr) {

    const juices = {};
    const juiceBottles = {};

    while (arr[0] !== undefined) {
        let line = arr.shift();
        let [juiceName, juiceQuantity] = line.split(" => ");
        if (juices[juiceName] === undefined) {
            juices[juiceName] = 0;
        }
        juices[juiceName] += Number(juiceQuantity);

        if (juices[juiceName] >= 1000) {
            let bottles = Math.floor(juices[juiceName] / 1000);
            if (juiceBottles[juiceName] === undefined) {
                juiceBottles[juiceName] = 0;
            }
            juiceBottles[juiceName] += bottles;
            juices[juiceName] -= bottles * 1000;
        }
    }

    for (let juice in juiceBottles) {
        console.log(`${juice} => ${juiceBottles[juice]}`);
    };

}
juiceFlavors([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
]);

juiceFlavors([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
]);
