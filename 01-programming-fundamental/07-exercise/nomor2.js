function getIntersect ( obj1, obj2 ) {
    let intersect = {};

    for ( let key in obj1 ) {
        if ( obj2.hasOwnProperty(key) ) {
            if ( obj1[key] === obj2[key] ) {
                intersect[key] = obj1[key];
            }
        }
    }

    return intersect;
}

let o1 = { a: 1, b: 2 };
let o2 = { a: 1, b: 3 };
console.log(getIntersect(o1, o2));