// ...spread operator
const friend = ["Hamid", "Rahat"];

const schoolFriend = ["Robin", "Robioul", "Nayem"];
const collegeFriend = ["Kapi", "Tanim", "Hridoy"];

friend.push(schoolFriend)
friend.push(...schoolFriend, ...collegeFriend)
console.log(friend);

//
const user = {
    name: "tashrif",
    id: 1,
}

const otherInfo = {
    favoriteCar: "jeep",
    favoriteFood: "mango"
}

const userInfo = {...user, ...otherInfo};
console.log(userInfo);


// Rest
const sendInvite = (...friends: string[])=> {
    friends.forEach(fnd => console.log(`send invitation to ${fnd}`))
    
}

sendInvite("hridoy", "ishrafil", "kiron")