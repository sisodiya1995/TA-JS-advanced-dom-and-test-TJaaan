function getFullName(firstName ,lastName){
    return `${firstName} ${lastName}`;
}

// function isPalindrome() {

// }

function getCircumfrence (r) {
  return `The circumference is ${2*3.14*r}`
}

function getArea(r) {
    return `The area is ${3.14*r*r}`
}
module.exports = {
getFullName ,
getCircumfrence,
getArea,
}