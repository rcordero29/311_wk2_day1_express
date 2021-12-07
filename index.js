const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 4060;

const { users } = require('./state');

// /* BEGIN - create routes here */
// app.get('/hello', function (req, res) {
//   res.send('hi');
// });
// app.get('/hello/:name', function (req, res) {
//   let input = req.params.name;
//   res.send('hi ' + input);
// });

// app.post('/hi', function (req, res) {
//   let input = req.body;
//   console.log('body', input);
//   res.send('hi ' + input.name);
// });

// let list = [];

// app.get('/list', function (req, res) {
//   res.json(list);
// });
// /* END - create routes here */

app.get('/users', function (req, res) {
  console.log('get/users');
  res.json(users);
});

app.get('/users/1', function (req, res) {
  res.json(users[1])
});

app.post('/users', function (req, res) {
  console.log('POST /users');
  let input = req.body;
  users.push(input);
  res.json(input)
});


app.put("/users/1", function(){
  console.log("put /users")
  let input = req.body;
  let id = req.params.pos
  users[id] = input;
  res.json(input)

})

app.put('/users/:userId', function(req, res){
  const id = req.params.userId; 

  for(let i = 0; i < users.length; i++){
    let currentUser = users[i]; 
    let currentUserId = users[i]._id;
    if(currentUserId == id){
      const foundMember = currentUser; 
      foundMember.occupation = req.body.occupation;
      foundMember.name = req.body.name; 
      res.json({ msg: 'member found and updated', foundMember })
    }
  }
  res.status(400).json({ msg: 'No member with the id of ' + id}); 
})



app.get('/users/:userId', function (req, res){

  let id = req.params.userId; 

  for(let i = 0; i < users.length; i++){
    let currentUser = users[i]; 
    let currentUserId = users[i]._id;
    if(currentUserId == id){
      res.json(currentUser); 
    }
  }
  res.status(400).json({ msg: 'No member with the id of ' + id}); 
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`));



