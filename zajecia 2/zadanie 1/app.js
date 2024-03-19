const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const homePage = fs.readFileSync("./views/home.js", "utf8");
        res.writeHead("Content-Type", "text/html");
        res.write(homePage);
        res.end();
    } else if (req.url === "/student") {
        const studentPage = fs.readFileSync("./views/student.js", "utf8");
        res.writeHead("Content-Type", "text/html" );
        res.write(studentPage);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});