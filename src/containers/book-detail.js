import React, { Component } from 'react';
// import { connect } function from redux
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {
    // use this conditional to avoid error for when App is first launched, setting this piece of state to null in reducer_active_book.js
    if (!this.props.book){
      return <div>Select a book to get started!</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// define heper function. This allows you to assign Props to the above BookDetail container
function mapStateToProps (state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
