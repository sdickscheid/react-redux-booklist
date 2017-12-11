// All reducers get two arguments: current state and an action
// The "state" argument is not application state, only the state this reducer is responsible for, which is selectedBook

// set-up default value of state to null for the first time the app loads
// Go to index.js in Reducers folder and import to combineReducers call

// This ActiveBook Reducer produces a new piece of state everytime the BOOK_SELECTED action is triggered.
export default function (state = null, action){
  switch(action.type) {
    // Whenever the BOOK_SELECTED action is triggered
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
