function switchKey ( arrObj ) {
    let switched = [];

    for ( let obj of arrObj ) {
        let temp = {};

        for ( let key in obj ) {
            temp[obj[key]] = key;
        }

        switched.push(temp);
    }

    return switched;
}

let arr = [{ name: 'David', age: 20 }]
console.log(switchKey(arr));

