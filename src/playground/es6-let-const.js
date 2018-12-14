var nameVar = 'Hari';
var nameVar = 'Kiran';
console.log('nameVar', nameVar);

let nameLet = 'Yalavarthi';
nameLet = 'HK';
console.log('nameLet', nameLet);

const nameConst = 'HKY';
console.log('nameConst', nameConst); 

function getPetName() {
    const petName = 'Dog';
    return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Mahesh Babu';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);