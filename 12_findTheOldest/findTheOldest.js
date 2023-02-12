let currentYear = new Date().getFullYear();

const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldest, person) => {
        if (oldest.yearOfBirth === undefined){
            return person;
        }
        if (checkForAge(oldest) > checkForAge(person)){
            return oldest;
        } else {
            return person;
        }
    });

    return oldestPerson;
}

function checkForAge(person) {
    if (person.yearOfDeath === undefined){
        return currentYear - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
