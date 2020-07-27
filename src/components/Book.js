import React from 'react';

class Book extends React.Component{
  render(){
    const volumeInfo = this.props.book.volumeInfo;
  return (
    <div className='book'>
      <div className='group'>
        <div className='item'>
          <img src={volumeInfo.imageLinks.smallThumbnail} alt='Cover of the book'/>
        </div>
        <div className='item-3'>
          <h2>{volumeInfo.title}</h2>
          <h3>Author: {volumeInfo.authors}</h3>
          <p>{volumeInfo.description}</p>
        </div>
      </div>
      <hr />
    </div>
    )
  }
}

export default Book;