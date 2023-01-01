
//davaleba4.1

const replacestring = (stringtoreplace, valiutoreplace, valiutoreplacewith) => {
    let newstring = '';
    for (const char of stringtoreplace) {
        newstring += char === valiutoreplace ? valiutoreplacewith : char;
    }
    return newstring;
}

console.log(replacestring('realmadrid de football club', 'e', 'i'));

//davaleba4.2

const capitalizewords = (stringtoreplace) => {
    let newstring = '';
    newstring = stringtoreplace[0].toUpperCase()
    for (let i = 1; i < stringtoreplace.length; i++) {
        newstring += stringtoreplace[i] == ' ' ? ' ' + stringtoreplace[i + 1].toUpperCase() : stringtoreplace[i]
        if (stringtoreplace[i] == ' ') {
            i += 1
        }
    }
    return newstring;
}

console.log(capitalizewords('realmadrid de football club'));

//davaleba4.3

const arr = [{ name: 'james', age: 25 }, { name: 'lasha', age: 21 }, { name: 'ana', age: 28 }]
function ages(par) {
    return par.sort((a, b) => a.age - b.age)
}

console.log(ages(arr));