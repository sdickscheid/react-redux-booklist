// Step 1: create a reducer file: reducer_books.js

  // This is a reducer; a function, that returns a piece of the Applications state; in this instance it returns an array of books.
  // Reducers produce the value of our state

// Step 2: create the reducer function

// It's a function that returns a pice of applicatiomn state; a list of books
// function() {
//   return [
//     { title: 'Javascript: The Good Parts'},
//     { title: 'Javascript For Kids'},
//     { title: 'Learn To Code'},
//     { title: 'The Power of Now'}
//   ]
// }

// Step 3: wire it into your Application. Go to index.js

  // To make use of any reducer anywhere else within the project, you must export it by adding "export default" before the function declaration. Then other files can import this books reducer.

  export default function() {
    return [
      { title: 'Javascript: The Good Parts'},
      { title: 'Javascript For Kids'},
      { title: 'Learn To Code'},
      { title: 'The Power of Now'}
    ]
  }
