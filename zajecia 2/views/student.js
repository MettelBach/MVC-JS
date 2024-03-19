const fs = require("fs");

function renderPage(res, formData) {
    const { code, name, lastname, gender, age, studyField } = formData;

    const pageContent = `
        <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Student profile</title>
            </head>
            <body>
                <h1>Student profile</h1>
                <p>Student ID: ${code}</p>
                <p>Imię: ${name}</p>
                <p>Nazwisko: ${lastname}</p>
                <p>Płeć: ${gender}</p>
                <p>Wiek: ${age}</p>
                <p>Kierunek: ${studyField}</p>
            </body>
        </html>
    `;

    fs.writeFileSync(`${code}.txt`, pageContent);

    res.setHeader("Content-Type", "text/html");
    res.write(pageContent);
    return res.end();
}

module.exports = renderPage;