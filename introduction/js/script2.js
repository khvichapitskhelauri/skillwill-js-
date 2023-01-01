// davaleba2.1

const arr = [{ name: 'james', age: 25 }, { name: 'lasha', age: 21 }, { name: 'ana', age: 28 }]
function ages(par) {
    return par.sort((a, b) => a.age - b.age)
}

console.log(ages(arr)[0]);

// davaleba2.2

function obieqti(user) {
    return { ...user, age: 87 }
}
const blabla = 123
const res = obieqti({ name: 'xvicha', username: 'ad321', blala: blabla })
const res2 = { ...res }
res.age = 0
console.log(res, res2);

// davaleba2.3

function kamateli(a, b) {
    let randomNumber;
    let itteration = 0;
    while (randomNumber !== 3) {
        itteration += 1;
        randomNumber = parseInt(Math.random() * 6);
        console.log(randomNumber, itteration);
    }
}
kamateli();