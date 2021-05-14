//Initial Variables
const numbers = '0123456789';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = ',./<>?+-=_()*&^%$£"!}{][~@:#;`\'¬';


const containsNumbers = password => {
    for (let i=0; i<password.length; i++) {
        if (numbers.includes(password[i])) {
            return true;
        }
    }
    return false;
}

const containsLower = password => {
    for (let i=0; i<password.length; i++) {
        if (letters.includes(password[i])) {
            return true;
        }
    }
    return false;
}

const containsUpper = password => {
    for (let i=0; i<password.length; i++) {
        if ((letters.toUpperCase()).includes(password[i])) {
            return true;
        }
    }
    return false;
}

const containsSymbols = password => {
    for (let i=0; i<password.length; i++) {
        if (symbols.includes(password[i])) {
            return true;
        }
    }
    return false;
}

export { containsNumbers, containsLower, containsUpper, containsSymbols };