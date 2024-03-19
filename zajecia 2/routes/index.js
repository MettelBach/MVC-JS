const homePage = require('../views/home');
const studentPage = require('../views/student');

function handleHome(res) {
    homePage(res);
}

function handleStudent(res) {
    studentPage(res);
}

module.exports = {
    handleHome,
    handleStudent
};