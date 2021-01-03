import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      this.props.books.map((book, i) =>
        <div key={i} className='booklist'>
          <Book book={book} />
        </div>
      )
    );
  }
}

export default BookList;