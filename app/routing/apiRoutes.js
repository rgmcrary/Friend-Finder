module.exports = function(app, path, fs) {
  // Create New User Input and processes it - takes in JSON input
  app.post('/api/friends', function(req, res) {
    // console.log(req.body);
    var formData = req.body;
    var name = formData.name;
    var photo = formData.photo;
    var scores = [];
    var totalScore = 0;
    var friend = {};

    for (var question in formData) {
      if (question.indexOf('optradio') !== -1) {
        totalScore += parseInt(formData[question]);
        scores.push(formData[question]);
        console.log(formData);
      }
    }
    console.log(totalScore);

    var friends = fs.readFileSync(
      path.join(__dirname, '../data/friends.js'),
      'utf8'
    );
    friends = JSON.parse(friends);
    for (var question in friends) {
      var friendDiff = Math.abs(totalScore - friends[question].totalScore);
      console.log(friends[question]);
      console.log(friendDiff);
      // if (friendDiff < 5) {
      //   friend.push(friends[question].name, friends[question].photo);
      // }
      // else{}
    }

    // Create input object from survey to input into friends array
    var formObject = {
      name: name,
      photo: photo,
      scores: scores,
      totalScore: totalScore
    };


    friends.push(formObject);

    fs.writeFileSync(path.join(__dirname, '../data/friends.js'), JSON.stringify(friends));
    // Write new user to friends.js
    // fs.writeFile(path.join(__dirname, '../data/friends.js'), 'utf8') {
    //   if (err) {
    //     console.log('error');
    //   } else {
    //     console.log('[write output]: success');
    //   }
    // });
    // res.JSON(friend);
  });
};

//

//loop over friends.js array and find the difference number from totalScores
//  whichever is less than 3 in difference, save that to a variable that will get returned to the html page
//append the formdata to the friends.js array
//write friends.js

//   Displays friends.js arrays of input
// app.get('/api/friends', function(req, res) {
//   res.sendFile(path.join(__dirname, '../data/friends.js'));
// });
