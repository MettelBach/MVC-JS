const express = require('express');
      bodyParser = require('body-parser'),
      app = express(),
      PORT = process.env.PORT || 3000;

app.use((request, response, next) => {
  const currentDate = new Date().toLocaleString();
  console.log(`Request ${request.method} on path ${request.url} ${currentDate}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/', (request, response) => {
  response.send(`
    <html>
    <head><title>HOME</title></head>
    <body><p>HOME</p></body>
    </html>
  `);
});

app.get('/student', (request, response) => {
  response.send(`
    <html>
    <head><title>STUDENT</title></head>
    <body><p>STUDENT</p></body>
    </html>
  `);
});

app.get('/add-student', (request, response) => {
  response.send(`
    <html>
      <head><title>ADD-STUDENT</title></head>
      <body><form action="/student" method="POST">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName"><br><br>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName"><br><br>
          <label for="major">Major:</label>
          <input type="text" id="major" name="major"><br><br>
          <button type="submit">Submit</button>
        </form></body>
    </html>
  `);
});

app.post('/student', (request, response) => {
  const { firstName, lastName, major } = request.body;
  const fullName = `${firstName} ${lastName}`;
  students.push({ fullName, major });
  response.send(`
    <html>
    <head><title>STUDENT</title></head>
    <body><p>Hello, ${fullName} on ${major} studies!</p></body>
    </html>
  `);
});

app.get('/students', (request, response) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li><p>${student.fullName} - ${student.major}</p></li>`;
  });
  userList += '</ul>';
  response.send(userList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
