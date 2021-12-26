//Sort
const numbers = [4, 7, 1, 3, 6, 9, 2, 5];
const numbersSort = numbers.sort();
console.log(numbersSort);
//Output:[1, 2, 3, 4, 5, 6, 7, 9]

//Sort
const friends = ["Kabli", "Joshim", "Rajjak", "Anwar", "Dipjol", "Badsha"];
const friendsSort = friends.sort();
console.log(friendsSort);


//Reverse
const friends = ["Abir", "Ashik", "Alif", "Alfi", "Shafi", "Kafi"];
const friendsReverse = friends.reverse();
console.log(friendsReverse);
//Output:[ 'Kafi', 'Shafi', 'Alfi', 'Alif', 'Ashik', 'Abir' ]

//Sort to Reverse
const friends = ["Abir", "Ashik", "Alif", "Alfi", "Shafi", "Kafi"];
const friendsSort = friends.sort();
const friendsReverse = friendsSort.reverse();
console.log(friendsReverse);
//Output: [ 'Shafi', 'Kafi', 'Ashik', 'Alif', 'Alfi', 'Abir' ]


//Number sorting fun

const bignumbers = [66, 58, 81, 444, 92, 9, 6, 13, 2];
const sortedNumbers = bignumbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedNumbers);
//Output: [2, 6, 9, 13, 58,66, 81, 92, 444]