//creates a new array with a profile name
const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

//ES6 arrow function example
// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');
// Is the same as this...

const printProfileData = profileDataArr => {
  
  // profileDataArr.forEach((profileItem) => {
  //   console.log(profileItem)
  // });

  //is the same as...

  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs)

