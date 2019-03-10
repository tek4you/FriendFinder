// ===============================================================================
// DATA
// Below data will hold all of the orders.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendData = [
    {
    Name: "Bob",
    photo: "bob.jpg",
    surveyAnswers: [],
    friendID: 33
    }
];





// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendData;
