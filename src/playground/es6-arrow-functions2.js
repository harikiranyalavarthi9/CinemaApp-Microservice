const add = (a, b) => {
    return a+b;
};
console.log(add(34,47,100));

const user = {
    name: 'Hari',
    cities: ['Atlanta', 'Dallas', 'SFO', 'Bentonville'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy*number);
    }
}

console.log(multiplier.multiply());