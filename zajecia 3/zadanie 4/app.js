const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let students = [];

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (request, response) => {
  response.sendFile(__dirname + '/views/student.html');
});

app.get('/add-student', (request, response) => {
  response.sendFile(__dirname + '/views/add-student.html');
});

app.post('/student', (request, response) => {
  const { firstName, lastName, major } = request.body;
  const fullName = `${firstName} ${lastName}`;
  students.push({ fullName, major });
  response.sendFile(__dirname + '/views/student.html');
});

app.get('/students', (request, response) => {
  let userList = '<ul>';
  students.forEach(user => {
    userList += `<li><p>${user.fullName} - ${user.major}</p></li>`;
  });
  userList += '</ul>';
  response.send(userList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});