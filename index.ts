let x: number;
x = 2;
//^^ same as let x: number = 2;
console.log(typeof x)

let y: string;
y = 'oto';

//arrays & tupples
const arr: [number, string] = [1, 'name']
console.log(arr)

const coords: [string, number, boolean, number][] = [
    ['string', 1, true, 2],
    ['string', -1, false, 4]
]