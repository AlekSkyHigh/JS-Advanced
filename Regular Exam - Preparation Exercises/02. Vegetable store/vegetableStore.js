class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        for (let line of vegetables) {

            let tokens = line.split(' ');
            let type = tokens[0];
            let quantity = Number(tokens[1]);
            let price = Number(tokens[2]);

            const typeCheck = this.availableProducts.find(v => v.type === type);

            if (!typeCheck) {
                this.availableProducts.push({
                    type,
                    quantity,
                    price,
                })
            } else {
                typeCheck.quantity += quantity;
                if (typeCheck.price < price) {
                    typeCheck.price = price;
                }
            }
        }

        let resultTypes = [];
        this.availableProducts.forEach((veg) => resultTypes.push(veg.type));
        return `Successfully added ${resultTypes.join(", ")}`;
    }


    buyingVegetables(selectedProducts) {

        let totalPrice = 0;

        for (let line of selectedProducts) {

            let tokens = line.split(' ');
            let type = tokens[0];
            let quantity = Number(tokens[1]);

            const typeCheck = this.availableProducts.find(v => v.type === type);

            if (!typeCheck) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            } else if (typeCheck.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            } else {
                totalPrice += typeCheck.price * quantity;
                typeCheck.quantity -= quantity;
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }


    rottingVegetable(type, quantity) {

        const typeCheck = this.availableProducts.find(v => v.type === type);

        if(!typeCheck){
            throw new Error(`${type} is not available in the store.`);

        } else if(typeCheck.quantity < quantity){
            typeCheck.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;

        } else {
            typeCheck.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }


    revision (){

        this.availableProducts.sort((a,b) => a.price - b.price);

        const result = this.availableProducts.map(v => `${v.type}-${v.quantity}-$${v.price}`);
        
        result.unshift('Available vegetables:');
        
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        
        return result.join('\n');
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));


// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

