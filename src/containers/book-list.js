import React, { Component } from 'react';

// Step 1: Import { connect } property/function from react-redux library.
  // This forges a connect between React and Redux
  // Allows component to be eligable to be a smart component/container
import { connect } from 'react-redux';

// Step 2: remove "export default" that preceeds class
class BookList extends Component {
  // renderList - helper function set-up to be called in the render() method to render current list of books
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      // create a <ul></ul>
      <ul className="list-group col-sm-4">
        {/* Calls a helper function called renderList */}
        {this.renderList()}
      </ul>
    )
  }
}

// • v__This function is the glue between React and Redux
// • It takes application state as an (argument); all pieces of state
// • It maps Pieces of State to Props so the data can be used within the component/container.
// whatever object (i.e. books) is returned from state will become available to this container (BookList) - as props (i.e. this.props.books)
// • Whenever application state changes, this container will instantly re-render with a new list of books

// mapStateToProps() maps 'state.books' from state - to become - 'this.props.books' in this container/component
function mapStateToProps(state) {
  return {

    // Set the property of "books":
    // Then assign it the value of the list of books currently in state (state.books)
    books: state.books
  };
}

// Step 3: Connect takes a function (mapStateToProps) and a component (BookList) and retruns/produces a container.
  // A container is a component that is aware of the state that is in and maintained by Redux
export default connect(mapStateToProps)(BookList);
