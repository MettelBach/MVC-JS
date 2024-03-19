const http = require("http"),
      fs   = require("fs"), 
      PORT = 3000;

let server = http.createServer((req,res) => {
    const { url } = req;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title> My First Node App</head></title>");
        res.write(`
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message" />
                        <button>Send</button>
                    </form>
                </body>
        `);
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = []; 
        request.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        request.on("end", (chunk) => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("-")[1].replace("+", " ");
            fs.writeFileSync("message.txt", message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        });
        // res.statusCode = 302;
        // res.setHeader("Location", "/");
        // return res.end();
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