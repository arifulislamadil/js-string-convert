function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return "pleas provide an array"
    }

    let mega = friends[0];
    for (let friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friendsList = ["Abir", "Lalkhan", "Lion", "Shamol", "Kabir", "Shabir"];
// const mega = megaFriends(friendsList);
// console.log(mega);


const friendsList = ["Abir", "Lalkhan", "Lion", "Shamol", "Kabir", "Shabir"];
if (friendsList.indexOf("Lion") != -1) {
    console.log("Lion Exists");
}
//Output: Lion Exists

const friendsList = ["Abir", "Lalkhan", "Lion", "Shamol", "Kabir", "Shabir"];
if (friendsList.includes("Lion") == true) {
    console.log("Lion is Exists");
}
//Output: Lion is Exists

//includes
const friendsList = ["Abir", "Lalkhan", "Lion", "Shamol", "Kabir", "Shabir"];
if (friendsList.includes("Lion")) {
    console.log("Lion is Exists");
}
//Output: Lion is Exists

//concat 

const first = [1, 2, 4, 5];
const second = [6, 7, 8, 9];
const combined = first.concat(second);
console.log(combined)