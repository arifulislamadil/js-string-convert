const products = [
    "Dell hardcore 129 laptop",
    "iphone 1Tb camera flashlight phone",
    "yellow laptop with balack camera",
    "Dell 1x59 lenovo commercial yoga Laptop",
    "LG supernove laptop dell",
    "HTC low price phone",
    "Dell purple color phone with Laptop"
]
//Searching laptop product inclues in the array
const searching = "laptop";
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) !== -1) {
        output.push(product)
    }
}
console.log(output);

//Searching Products by using includes
const searching = "laptop";
const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output);

//Search start with 
const searching = "Dell";
const output = [];
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output);