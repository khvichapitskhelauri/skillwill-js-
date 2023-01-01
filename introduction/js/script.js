// davaleba1.1
function issame(a, b) {
    return a === b ? "ტოლია" : "არ არის ტოლი"
}
console.log(issame(1, 2))
console.log(issame(3, 4))
console.log(issame(5, 5))

// davaleba1.3

function calculate1(a, b, operator) {
    if (isNaN(a) || isNaN(b))
        return false
    if (operator != '+' && operator != '-' && operator != '*')
        return false

    if (operator === '+')
        return a + b
    if (operator === '-')
        return a - b
    if (operator === '*')
        return a * b
}
console.log(calculate1(5, 3, '+'))
console.log(calculate1('-', 3, '+'))
console.log(calculate1(5, 3, '-'))
console.log(calculate1(5, 3, '*'))
console.log(calculate1(5, 3, '5'))