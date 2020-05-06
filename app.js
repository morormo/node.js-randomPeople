// const os = require('os');
// console.log('Platform: ', os.platform());
// console.log('Arch ', os.arch());
// console.log('User Info', os.userInfo());

const fs = require('fs');
const {gender, maleFirstNames, femaleFirstNames, lastNames} = require('./store');

const people = [];

const randChoice = arr =>{
    return arr[Math.floor(Math.random() * arr.length)];
} 

const randNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min)
  }

for (let i=0; i < 21; i++){ 

let randomGender = (randChoice(gender));
    // console.log('randomGender: ', randomGender);

  if (randomGender == 'male') {
    randomFirstName = (randChoice(maleFirstNames));
    //console.log('randomFirstName: ', randomFirstName);
  } else {
    randomFirstName = (randChoice(femaleFirstNames));
  };

  let randomLastName = (randChoice(lastNames));
    // console.log('randomLastName: ', randomLastName);

  let randomAge = (randNumber(18, 78));
    //console.log('randomAge: ', randomAge);

  people.push({
    gender : randomGender,
    firstName : randomFirstName,
    lastName : randomLastName,
    age : randomAge
  });
    //console.log(people);
}

const peopleJsonString = JSON.stringify(people, null, ' ');

fs.writeFile('people.json', peopleJsonString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 