var readlineSync = require('readline-sync');

var score = 0;

var questionOne = readlineSync.question('Am i older than 25? ');

console.log('you have entered ' + questionOne);

if (questionOne === 'no') {
  console.log("you are right ");
  score = score + 1
  console.log('your score is ' + score);

} else {
  (questionOne === 'yes')
  console.log("you are wrong ");
}

var questionTwo = readlineSync.question('Do you live in Delhi? ');

console.log('you have entered ' + questionTwo);

if (questionTwo === 'no') {
  console.log("you are right");
  score = score + 1
  console.log('your score is ' + score);

} else {
  (questionTwo === 'yes')
  console.log("you are wrong");
  score = score
  console.log('your score is ' + score);
}

var questionTwo = readlineSync.question('Do you live in Delhi? ');

console.log('you have entered ' + questionTwo);

if (questionTwo === 'no') {
  console.log("you are right");
  score = score + 1
  console.log('your score is ' + score);

} else {
  (questionTwo === 'yes')
  console.log("you are wrong");
  score = score
  console.log('your score is ' + score);
}
