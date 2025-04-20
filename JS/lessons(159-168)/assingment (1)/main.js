const myBirthday = new Date('2004-8-15');
const dateNow = new Date();
console.log(dateNow);

const ageInMS = dateNow - myBirthday;
console.log(ageInMS + ' MilliSeconds');

const ageInSeconds = (ageInMS / 1000).toFixed();
console.log(ageInSeconds + ' Seconds');

const ageInMinutes = (ageInSeconds / 60).toFixed();
console.log(ageInMinutes + ' Minutes');

const ageInHours = (ageInMinutes / 60).toFixed();
console.log(ageInHours + ' Hours');

const ageInDays = (ageInHours / 24).toFixed();
console.log(ageInDays + ' Days');

const ageInMonths = (ageInDays / 30).toFixed();
console.log(ageInMonths + ' Months');

const ageInYears = (ageInMonths / 12).toFixed();
console.log(ageInYears + ' Years');


// Needed Output
/*
652381810095 MilliSeconds
652381810 Seconds
10873030 Minutes
181217 Hours
7551 Days
252 Months
21 Years
*/