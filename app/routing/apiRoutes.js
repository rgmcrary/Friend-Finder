module.exports = function(app, path, fs) {
  // Create New User Input and processes it - takes in JSON input
  app.post('/api/friends', function(req, res) {
    // console.log(req.body);
    var formData = req.body;
    var name = formData.name;
    var photo = formData.photo;
    var scores = [];
    var totalScore = 0;
    var friendArray = [];

    for (var question in formData) {
      if (question.indexOf('optradio') !== -1) {
        totalScore += parseInt(formData[question]);
        scores.push(formData[question]);
      }
    }

    var friends = fs.readFileSync(
      path.join(__dirname, '../data/friends.js'),
      'utf8'
    );
    friends = JSON.parse(friends);
    for (var answers in friends) {
      var friendDiff = Math.abs(totalScore - friends[answers].totalScore);
      if (friendDiff < 5) {
        var friend = {name: friends[answers].name, photo: friends[answers].photo};
        friendArray.push(friend);
                console.log(friend);
      }
    }

    // Create input object from survey to input into friends array
    var formObject = {
      name: name,
      photo: photo,
      scores: scores,
      totalScore: totalScore
    };

    friends.push(formObject);

    fs.writeFileSync(
      path.join(__dirname, '../data/friends.js'),
      JSON.stringify(friends)
    );



    res.json(friendArray);
  });
};
