function listProcessor(input) {

    let innerCollection = [];

    for (let inputCouples of input) {

        let tokens = inputCouples.split(' ');
        let command = tokens[0];

        switch (command) {

            case 'add': innerCollection.push(tokens[1]); break;
            case 'remove':
                let string = tokens[1];
                while (innerCollection.includes(string)) {
                    innerCollection.splice(innerCollection.indexOf(string), 1);
                } 
                break;
            case 'print': console.log(innerCollection.join(',')); break;
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
