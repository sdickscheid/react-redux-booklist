import React, { Component } from 'react';
// Promote to Container: Step 1: Import { connect } property/function from react-redux library.This forges a connect between React and Redux by allowing a component to become a smart component/container
import { connect } from 'react-redux';
// Actions: Step 1: import ActionCreator { selectBook } from actions file
import { selectBook } from '../actions/index';
// Actions: Step 2: import function {BindActionCreators} from Redux; makes sure that the action generator by the ActionCreator flows through to all the different Reducers in your application
import { bindActionCreators } from 'redux';

// Promote to Container: Step 2: remove "export default" that preceeds class

class BookList extends Component {
  // renderList - helper function set-up to be called in the render() method to render current list of books
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          // onClick = whenever this li is clicked, run a function that calls this.props.selectBook and pass it the (book) from the above this.props.books.map
          onClick={() => this.props.selectBook(book)}
        >
            {book.title}
        </li>
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

// Step 4: create mapStateToProps function
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

// Actions: Step 3: write mapDispatchToProps()

// Anything returned from this function will end up as Props on the BookList container (this.props.selectBook) - which will call the Action Creator
function mapDispatchToProps(dispatch) {

  // return the bindActionCreators() function and pass it some arguments:
  return bindActionCreators({ selectBook: selectBook}, dispatch);
    // 1) Pass an object with a key of selectBook assigned to the value of the selectBook ActionCreator imported above
    // 2} Pass the abiity for that data to 'dispatch'

  // bindActionCreators is saying, whenever selectBooks is called, the result should be passed/dispatched to all of our reducers.
}

// Promote to Container: Step 3: Connect takes a function (mapStateToProps) and a component (BookList) and returns/produces a container.
  // A container is a component that is aware of the state that is in and maintained by Redux

// Actions: Step 4: pass connect another argument (which happens to be a function) of "mapDispatchToProps"
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// Promote to Container: it needs to know about this new dispatch methos, selectBook. Make it available as a Prop.
