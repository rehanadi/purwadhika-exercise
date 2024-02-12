function removeDuplicate ( arr1, arr2 ) {
    // asumsi isi arr1 unik dan isi arr2 juga unik
    let merge = [...arr1];

    for ( let i of arr2 ) {
        let isUnique = true;

        for ( let j of merge ) {
            if ( j.name === i.name && j.email === i.email ) {
                isUnique = false;
            }
        }

        if ( isUnique ) {
            merge.push(i);
        }
    }

    return merge;
}

let arr1 = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 2', email : 'student2@mail.com' }
]

let arr2 = [
    { name: 'Student 1', email : 'student1@mail.com' },
    { name: 'Student 3', email : 'student3@mail.com' }
]

console.log(removeDuplicate(arr1, arr2));
