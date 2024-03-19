const homePage = require('../views/home');
const studentPage = require('../views/student');

function handleHome(res) {
    res.writeHead("Content-Type", "text/html");
    homePage.renderPage(res);
}

function handleStudent(res) {
    res.writeHead("Content-Type", "text/html" );
    studentPage.renderPage(res);
}

module.exports = {
    handleHome,
    handleStudent
};
