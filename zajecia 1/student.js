// Zadanie 1
const FULLNAME = 'Dmytro Horbatov'
const STUDENT_ID = '44019'

console.log(`My name is ${FULLNAME}. Mystudent ID is ${STUDENT_ID}`)


// Zadanie 2
function getStudentFullName() {
    return FULLNAME
}

function getStudentId() {
    return STUDENT_ID
}


// Zadanie 3
module.exports = {
    getStudentFullName,
    getStudentId
};

//Zadanie 6
function newGetStudentFullName(id) {
    switch (id){
        case 0: return FULLNAME
        case 1: return 'KacperNowak'
        case 2: return 'MajaKowalska'
        default: return 'Michal Wisniewski'
    }
}

function newGetStudentId(id) {
    switch (id){
        case 0: return STUDENT_ID
        case 1: return '111222'
        case 2: return '222333'
        default: return '333444'
    }
}

console.log(`My name is ${getStudentFullNameNEW(1)}. My student ID is ${getStudentIdNEW(1)}`)