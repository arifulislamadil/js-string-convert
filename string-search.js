const products = [
    "Dell hardcore 129 laptop",
    "iphone 1Tb camera flashlight phone",
    "yellow laptop with balack camera",
    "1x59 lenovo commercial yoga Laptop",
    "LG supernove laptop",
    "HTC low price phone",
    "purple color phone with Paptop"
]


const searching = "laptop";
const output = [];
for (const product of products) {
    if (product.indexOf(searching) !== -1) {
        output.push(product)
    }
}
console.log(output);