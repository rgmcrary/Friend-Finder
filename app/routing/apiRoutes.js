module.exports = function(app, path) {
  // Create New User Input and processes it - takes in JSON input
  app.post('/api/friends', function(req, res) {
    console.log(req.body);
    fs.writeFile('../data/friends.js', JSON.stringify(data), function(error) {
      if (error) {
        console.log('[write output]: ' + err);
        if (fail) fail(error);
      } else {
        console.log('[write output]: success');
    //   if (success) success();  
      }
    });
  });

  // Compare results for a match
  // fs.readFile(path.join(__dirname, '../data/friends.js')

  //   Displays friends.js arrays of input
  app.get('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname, '../data/friends.js'));
  });
};
