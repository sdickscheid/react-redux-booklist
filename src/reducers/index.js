import { combineReducers } from 'redux';
// Step 1: import reducer from './reducer_books' as BooksReducer
import BooksReducer from './reducer_books';

// in combineReducers, you are providing the mapping for the data to be contained within the application state
// takes the sum of all reducers, combines them into a new instance of state
const rootReducer = combineReducers({

// Step 2: Add 'BooksReducer' to the combineReducer call
// Step 3: Add a key with the property called "books":
  // The value of "books": is set to be equal to the list of books provided by reducer_books file, which was imported as BooksReducer

  books: BooksReducer
  // key: Reducer
});

export default rootReducer;
