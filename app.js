
// // console.log(profileDataArgs);

// //ES6 arrow function example
// // const printProfileData = profileDataArr => {
// //   // This...
// //   for (let i = 0; i < profileDataArr.length; i += 1) {
// //     console.log(profileDataArr[i]);
// //   }

// //   console.log('================');
// // Is the same as this...

// // const printProfileData = profileDataArr => {
  
// //   // profileDataArr.forEach((profileItem) => {
// //   //   console.log(profileItem)
// //   // });
// //   // also the above,
// //   //is the same as...

// //   profileDataArr.forEach(profileItem => console.log(profileItem));
// // };

// // printProfileData(profileDataArgs)

// //creates a new array with a profile name
// const fs = require('fs');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [names, github] = profileDataArgs;
// // const generatePage = (userName, githubName) => `Name: ${userName}, GitHub: ${githubName}`;
// //refactor to get input on different lines
//   const generatePage = (name, github) => {
//     return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;}

// fs.writeFile('index.html', generatePage(names, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

