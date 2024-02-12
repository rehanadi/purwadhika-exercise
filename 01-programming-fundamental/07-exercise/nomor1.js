function isObjEqual ( obj1, obj2 ) {
    const arrayKey1 = Object.keys(obj1);
    const arrayKey2 = Object.keys(obj2);

    if ( arrayKey1.length != arrayKey2.length ) {
        return false;
    }

    for ( let key in obj1 ) {
        if ( obj1[key] != obj2[key] ) {
            return false;
        }
    }

    return true;
}

let o1 = { a: 1 };
let o2 = { a: 1 };
console.log(isObjEqual(o1, o2));