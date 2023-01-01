//davaleba 3.1
function getSome(...arguments) {
    if (arguments.length < 2) {
        return []
    }
    const a = [arguments[0] + arguments[1]]
    let some = 1
    for (let i = 2; i < arguments.length; i++) {
        some *= arguments[i]
    }
    a.push(some)

    console.log(a);

}
getSome(2, 3, 4, 5, 7, 12, 9, 25)

//davaleba3.2
function move(object) {
    const { user, bank, address: { sity } = {} } = object

    return sity
}

const object = {
    user: 'james',
    bank: 'golden',
    // address: {
    //     sity: 'liverpool'
    // }

};

console.log(move(object));

//davaleba3.3

function move2(object) {


    return { ...object }
}
const user1 = {
    name: 'stiven',
    username: 'gerard',
    address: {
        sity: 'liverpool'
    }
}

const user2 = {
    ...user1
};

console.log(move2(user1));
