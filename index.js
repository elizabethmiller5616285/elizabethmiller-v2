// mysticUtils.js

const _ = require('lodash');
const moment = require('moment');

// Function to generate a random mystical number
function generateMysticNumber() {
    return _.random(1, 1000);
}

// Function to check if a number is mystical
function isMysticNumber(number) {
    return number % 3 === 0 && number % 7 === 0;
}

// Function to get the current mystical date
function getCurrentMysticDate() {
    return moment().format('MMM Do YYYY');
}

module.exports = {
    generateMysticNumber,
    isMysticNumber,
    getCurrentMysticDate
};
