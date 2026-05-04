const user = {
    name: {
        firstName: "tashrif",
        middleName: "ahmed",
        lastName: "Munna"
    },
    id: 123,
    gender: "male",
    favoriteColor: "black"
};

const { favoriteColor: myFavoriteColor, name: {firstName: myFirstName}} = user;
console.log(`my name is ${myFirstName} and my favorite color is ${myFavoriteColor}`);

const friends = ["mohin", "rahat", "tanim"];
const [,,myBestFriend] = friends;
console.log(myBestFriend);
