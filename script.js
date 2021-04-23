//Elements
let requirements = document.getElementsByClassName("requirement-symbol")
const requirementOneElem = requirements[0];
const requirementTwoElem = requirements[1];
const requirementThreeElem = requirements[2];
const requirementFourElem = requirements[3];
const requirementFiveElem = requirements[4];
requirements = [requirementOneElem, requirementTwoElem, requirementThreeElem, requirementFourElem, requirementFiveElem];
const passwordElem = document.querySelector('input');
const ratingElem = document.getElementById('rating-score');

//Remove password input
passwordElem.value = '';

//Initial Variables
const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = ',./<>?+-=_()*&^%$£"!}{][~@:#;';



//Function to check if password includes letters
const includesLetters = password => {
    for (let i=0; i<password.length; i++) {
        if (letters.includes(password[i].toLowerCase())) {
            requirementOneElem.innerHTML = '[+]';
            requirementOneElem.style.color = 'rgb(51, 161, 97)';
            return 0;
        }
        requirementOneElem.innerHTML = '[-]';
        requirementOneElem.style.color = 'rgb(216, 76, 76)';
    }
}
//Function to check if password includes numbers
const includesNumbers = password => {
    for (let i=0; i<password.length; i++) {
        if (numbers.includes(password[i])) {
            requirementTwoElem.innerHTML = '[+]';
            requirementTwoElem.style.color = 'rgb(51, 161, 97)';
            return 0;
        }
        requirementTwoElem.innerHTML = '[-]';
        requirementTwoElem.style.color = 'rgb(216, 76, 76)';
    }
}
//Function to check if password includes symbols
const includesSymbols = password => {
    for (let i=0; i<password.length; i++) {
        if (symbols.includes(password[i])) {
            requirementThreeElem.innerHTML = '[+]';
            requirementThreeElem.style.color = 'rgb(51, 161, 97)';
            return 0;
        }
        requirementThreeElem.innerHTML = '[-]';
        requirementThreeElem.style.color = 'rgb(216, 76, 76)';
    }
}
//Function to check if password is over 8 letters
const isOverEightLetters = password => {
    if (password.length > 8) {
        requirementFourElem.innerHTML = '[+]';
        requirementFourElem.style.color = 'rgb(51, 161, 97)';
    } else {
        requirementFourElem.innerHTML = '[-]';
        requirementFourElem.style.color = 'rgb(216, 76, 76)';
    }
}
//Function to check if password is password
const isPassword = password => {
    if (password.toLowerCase() === 'password') {
        requirementFiveElem.innerHTML = '[-]';
        requirementFiveElem.style.color = 'rgb(216, 76, 76)';
    } else {
        requirementFiveElem.innerHTML = '[+]';
        requirementFiveElem.style.color = 'rgb(51, 161, 97)';
    }
}



setInterval(() => {
    const password = passwordElem.value;
    if (password.length === 0) {
        requirements.forEach(requirement => {
            requirement.innerHTML = '[-]';
            requirement.style.color = 'rgb(216, 76, 76)';
        })
    } else {
        includesLetters(password);
        includesNumbers(password)
        includesSymbols(password);
        isOverEightLetters(password);
    }
    isPassword(password);
}, 10)