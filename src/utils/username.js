const ADJECTIVES = [
    'naruto',
    'sasuke',
    'sakura',
    'kakashi',
    'shikamaru',
    'yamato',
    'asuma',
    'ino',
    'choji',
    'lee',
    'hinata'
]

const OBJECTS = [
    'uzumaki',
    'uchiha',
    'hatake',
    'might',
    'yamanaka',
    'hyuga',
    'akimichi',
    'nara'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 11)]
    const obj = OBJECTS[Math.floor(Math.random() * 8)]
    return `${adj}-${obj}`
}

/*   Test
let x = genRandomUsername();
console.log(x)
*/

module.exports = {
    genRandomUsername
}