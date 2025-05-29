const x = 1;

// go to package.json
// go to "scripts"

// delete everything inside and add the following

// "scripts": {
//     "babel": "babel --presets env index.js -o build/index.js"
//   },

// need to create the build folder

// go back to terminal
// npm run babel
//  - will execute the above command b/c its named "babel"

// transpiles the code

// When checking teh file, you can see that it added "use strict"
// and changed
// const x = 1
// var x = 1
