function megaFriends(friends) {
    if (friends.typeof !== "number")
        let mega = friends[0];
    for (let friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friendsList = ["Abir", "Lalkhan", "Lion", "Shamol", "Kabir", "Shabir"];
const mega = megaFriends(friendsList);
console.log(mega);