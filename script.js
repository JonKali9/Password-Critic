//Elements
import { containsNumbers, containsLower, containsUpper, containsSymbols } from './checks.js';

let requirements = document.getElementsByClassName("requirement-symbol")
const requirementOneElem = requirements[0];
const requirementTwoElem = requirements[1];
const requirementThreeElem = requirements[2];
const requirementFourElem = requirements[3];
const requirementFiveElem = requirements[4];
requirements = [requirementOneElem, requirementTwoElem, requirementThreeElem, requirementFourElem, requirementFiveElem];
const passwordElem = document.querySelector('input');
const ratingElem = document.getElementById('rating-score');
const timeToCrackElem = document.getElementById('timeToCrack');

//Remove password input
passwordElem.value = '';

//Initial Variables
const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = ',./<>?+-=_()*&^%$£"!}{][~@:#;`\'¬';



//Function to check if password includes letters
const includesLetters = password => {
    for (let i=0; i<password.length; i++) {
        if (letters.includes(password[i].toLowerCase())) {
            requirementOneElem.innerHTML = '[+]';
            requirementOneElem.style.color = '#80c78f';
            return 1;
        }
    }
    requirementOneElem.innerHTML = '[-]';
    requirementOneElem.style.color = '#c76159';
    return 0;
}
//Function to check if password includes numbers
const includesNumbers = password => {
    for (let i=0; i<password.length; i++) {
        if (numbers.includes(password[i])) {
            requirementTwoElem.innerHTML = '[+]';
            requirementTwoElem.style.color = '#80c78f';
            return 1;
        }
    }
    requirementTwoElem.innerHTML = '[-]';
    requirementTwoElem.style.color = '#c76159';
    return 0;
}
//Function to check if password includes symbols
const includesSymbols = password => {
    for (let i=0; i<password.length; i++) {
        if (symbols.includes(password[i])) {
            requirementThreeElem.innerHTML = '[+]';
            requirementThreeElem.style.color = '#80c78f';
            return 1;
        }
    }
    requirementThreeElem.innerHTML = '[-]';
    requirementThreeElem.style.color = '#c76159';
    return 0;
}
//Function to check if password is over 8 letters
const isOverEightLetters = password => {
    if (password.length > 8) {
        requirementFourElem.innerHTML = '[+]';
        requirementFourElem.style.color = '#80c78f';
        return 1;
    } else {
        requirementFourElem.innerHTML = '[-]';
        requirementFourElem.style.color = '#c76159';
        return 0;
    }
}
//Function to check if password is password
const isPassword = password => {
    if (password.toLowerCase() === 'password') {
        requirementFiveElem.innerHTML = '[-]';
        requirementFiveElem.style.color = '#c76159';
        return 0;
    } else {
        requirementFiveElem.innerHTML = '[+]';
        requirementFiveElem.style.color = '#80c78f';
        return 1;
    }
}
//Function to check password type
const passwordType = password => {
    const number = containsNumbers(password);
    const lower = containsLower(password);
    const upper = containsUpper(password);
    const symbol = containsSymbols(password);
    if (number && lower && upper && symbol) return 4;
    if (number && (lower || upper) && symbol) return 3;
    else if (number && lower && upper) return 3;
    else if (number && (lower || upper)) return 2;
    else if (lower && upper) return 2;
    else if (lower) return 1;
    else if (number) return 0;
    else return 0;
}
//Function to check how long password would take to crack
const getTimeToCrack = password => {
    const Length = password.length;
    const type = passwordType(password);
    if (Length <= 5) return 'Instantly';
    switch (Length) {
        case 6:
            /*N*/ if (type == 0) return 'Instantly';
            /*LL*/ else if (type == 1) return 'Instantly';
            /*UL*/ else if (type == 2) return 'Instantly';
            /*N+L*/ else if (type == 3) return '1 second';
            /*N+L+S*/ else if (type == 4) return '5 seconds';
            break;
        case 7:
            /*N*/ if (type == 0) return 'Instantly';
            /*LL*/ else if (type == 1) return 'Instantly';
            /*UL*/ else if (type == 2) return '25 seconds';
            /*N+L*/ else if (type == 3) return '1 minute';
            /*N+L+S*/ else if (type == 4) return '6 minutes';
            break;
        case 8:
            /*N*/ if (type == 0) return 'Instantly';
            /*LL*/ else if (type == 1) return '5 seconds';
            /*UL*/ else if (type == 2) return '22 minutes';
            /*N+L*/ else if (type == 3) return '1 hour';
            /*N+L+S*/ else if (type == 4) return '8 hours';
            break;
        case 9:
            /*N*/ if (type == 0) return 'Instantly';
            /*LL*/ else if (type == 1) return '2 minutes';
            /*UL*/ else if (type == 2) return '19 hours';
            /*N+L*/ else if (type == 3) return '3 days';
            /*N+L+S*/ else if (type == 4) return '3 weeks';
            break;
        case 10:
            /*N*/ if (type == 0) return 'Instantly';
            /*LL*/ else if (type == 1) return '58 minutes';
            /*UL*/ else if (type == 2) return '1 month';
            /*N+L*/ else if (type == 3) return '7 months';
            /*N+L+S*/ else if (type == 4) return '5 years';
            break;
        case 11:
            /*N*/ if (type == 0) return '2 seconds';
            /*LL*/ else if (type == 1) return '1 day';
            /*UL*/ else if (type == 2) return '5 years';
            /*N+L*/ else if (type == 3) return '41 years';
            /*N+L+S*/ else if (type == 4) return '400 years';
            break;
        case 12:
            /*N*/ if (type == 0) return '25 seconds';
            /*LL*/ else if (type == 1) return '3 weeks';
            /*UL*/ else if (type == 2) return '300 years';
            /*N+L*/ else if (type == 3) return '2,000 years';
            /*N+L+S*/ else if (type == 4) return '34,000 years';
            break;
        case 13:
            /*N*/ if (type == 0) return '4 minutes';
            /*LL*/ else if (type == 1) return '1 year';
            /*UL*/ else if (type == 2) return '16,000 years';
            /*N+L*/ else if (type == 3) return '100,000 years';
            /*N+L+S*/ else if (type == 4) return '2,000,000 years';
            break;
        case 14:
            /*N*/ if (type == 0) return '41 minutes';
            /*LL*/ else if (type == 1) return '51 years';
            /*UL*/ else if (type == 2) return '800,000 years';
            /*N+L*/ else if (type == 3) return '9,000,000 years';
            /*N+L+S*/ else if (type == 4) return '200,000,000 years';
            break;
        case 15:
            /*N*/ if (type == 0) return '6 hours';
            /*LL*/ else if (type == 1) return '1,000 years';
            /*UL*/ else if (type == 2) return '43,000,000 years';
            /*N+L*/ else if (type == 3) return '600,000,000 years';
            /*N+L+S*/ else if (type == 4) return '15 billion years';
            break;
        case 16:
            /*N*/ if (type == 0) return '2 days';
            /*LL*/ else if (type == 1) return '34,000 years';
            /*UL*/ else if (type == 2) return '2 billion years';
            /*N+L*/ else if (type == 3) return '37 billion years';
            /*N+L+S*/ else if (type == 4) return '1 trillion years';
            break;
        case 17:
            /*N*/ if (type == 0) return '4 weeks';
            /*LL*/ else if (type == 1) return '800,000 years';
            /*UL*/ else if (type == 2) return '100 billion years';
            /*N+L*/ else if (type == 3) return '2 trillion years';
            /*N+L+S*/ else if (type == 4) return '93 trillion years';
            break;
        case 18:
            /*N*/ if (type == 0) return '9 months';
            /*LL*/ else if (type == 1) return '23,000,000 years';
            /*UL*/ else if (type == 2) return '6 trillion years';
            /*N+L*/ else if (type == 3) return '100 trillion years';
            /*N+L+S*/ else if (type == 4) return '7 quardrillion years';
            break;
        default:
            return 'Uncrackable'
    }
    return 'NaN';
}



setInterval(() => {
    const password = passwordElem.value;
    let rating = 0;
    if (password.length === 0) {
        requirements.forEach(requirement => {
            requirement.innerHTML = '[-]';
            requirement.style.color = '#c76159';
        })
    } else {
        if (includesLetters(password)) {
            rating += 1;
        }
        if (includesNumbers(password)) {
            rating += 2;
        }
        if (includesSymbols(password)) {
            rating += 3;
        }
        if (isOverEightLetters(password)) {
            rating += 2;
        }
        if (password.length > 10) rating += 1;
    }
    if (!isPassword(password)) {
        rating = 0;
    };
    ratingElem.innerHTML = rating;
    timeToCrackElem.innerHTML = getTimeToCrack(password);
}, 10)