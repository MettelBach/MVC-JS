const express = require('express'),
      app = express(),
      PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

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
    <body><p>ADD-STUDENT</p></body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});