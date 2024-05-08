let sozlar = ['non', 'asal', 'banan', 'olma', 'aziza','sabzi','nonkabob','gulom','salom','igna','brat']

let nbor = [];
let nyoq = [];

for (let i = 0; i < 11; i++) {
    if (sozlar[i].indexOf('n') !== -1) {
        nbor.push(sozlar[i]);
    } else {
        nyoq.push(sozlar[i]);
    }
}

console.log(nbor);
console.log(nyoq);