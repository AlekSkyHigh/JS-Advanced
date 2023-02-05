function cars(arrInput) {
    
    const objFn = { create, inherit, set, print };
    const carList = {};

    for (let el of arrInput) {
        let tokens = el.split(' ');
        let command = tokens.shift();
        objFn[command](tokens);
    }

    function create(token) {
        let [name, inherit, parentName] = token;

        if (!carList[name]) {
            carList[name] = {};
        }

        if (inherit) {
            objFn[inherit](name, parentName);
        }
    }

    function inherit(name, parentName) {
        let parentObj = Object.create(carList[parentName]);
        carList[name] = parentObj;
    }

    function set(token) {
        let [name, key, value] = token;
        carList[name][key] = value;
    }

    function print([name]) {
        const entries = [];
        for (const key in carList[name]) {
            entries.push(`${key}:${carList[name][key]}`);
        }
        console.log(entries.join(','));
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)
