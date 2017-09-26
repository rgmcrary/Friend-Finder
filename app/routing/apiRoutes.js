// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

module.exports = function(app, path) {

app.get('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, '../data/friends.js'));
  });
  
  // Create New User Input - takes in JSON input
  app.post('/api/friends', function(req, res) {
    console.log(req.body)
    var responseText;

  });
}