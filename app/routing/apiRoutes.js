// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on order-data, waitinglist, etc.
// ===============================================================================
// var orderData = require("../data/orderData.js");
// var waitinglistData = require("../data/waitinglistData.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // we need a route to retrieve data about orders
  // /api/orders
//   // console.log("Before orders");
//   app.get("/api/orders", function(req, res){
//     res.json(orderData);
//   })

//   // we need a route that will retrieve data about the backorders
//   // /api/waitlist
//   app.get("/api/waitlist", function(req, res){
//     res.json(waitinglistData);
//   })

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the orderData array)
//   // ---------------------------------------------------------------------------
// app.post("/api/place", function (req, res) {
//   if(orderData.length < 12) {
//     orderData.push(req.body);
//     res.json(true);
//   }else{
//     waitinglistData.push(req.body);
//     res.json(false);
//   }
// })
 
    // req.body is available since we're using the body parsing middleware
 
app.get("/api/friends", (req, res)=>{
res.send(friendData);
console.log(frienData);
})



//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// 
}