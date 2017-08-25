var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {

    //still need to put in place the logic that will match the 2 different arrays and return the differences
    if (friendData.length ) {
      friendData.push(req.body);
      res.json(true);
    }
  
})
}
