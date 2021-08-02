import React from "react";
import { connect } from "react-redux";
import { setBooks } from './actions/books';

function App(props) {
    const { books } = props.books;
    const { setBooks } = props;
    const newBooks = [
        {
        id:0,
        title: 'New book!'
        }
    ];
  return (
      <div>
        <h1>{books[0].title}</h1>
          <button onClick={setBooks.bind(props,newBooks)}>Set new books</button>
      </div>
  )
}

const mapStateToProps = state => ({
   ...state
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
