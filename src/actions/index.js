// Step 1 Create a function that takes a single book and returns the title of that book
  // function selectBook(book) {
  //     console.log('a book has been selected:' book.title)
  // }
const BOOK_SELECTED = 'BOOK_SELECTED';

// Step 2: Export the function so it be used inside of other places within the application

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action. an onject with a type property

  return {
    // Step 3: give it a type; must describe the purpose of the action (i.e. a user selecting a book)
    type: BOOK_SELECTED,
    
    // Step 4: provide it with a payload (sometimes); a piece of data that the action is happening against.
    payload: book
  };

}
