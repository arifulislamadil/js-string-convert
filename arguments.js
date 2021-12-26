function addNumbers(num1, num2) {
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    return sum;
}
const sum = addNumbers(1, 2, 3, 4, 5)
console.log(sum);
//Output: 15


function getFullName(firsName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part;
    }
    return fullName;
}

const name = getFullName("Omuk", " shongket", " hanif", " shongket");
console.log(name);