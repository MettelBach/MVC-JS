const http = require("http");
const PORT = 3000;
let server = http.createServer((req,res) => {
    const { url } = req;

    if (url === "/") {

    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> My first Node App</head></title>");
    res.write("<body><h1>hello, world</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(PORT, () => {
    console.log("Start");
});