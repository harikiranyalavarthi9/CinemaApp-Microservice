function square(x) {
    return x*x;
};

console.log(square(4));

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(1811));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Vijay Devarakonda'));