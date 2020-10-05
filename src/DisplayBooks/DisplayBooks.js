import React from 'react';
import './DisplayBooks.css'

export default function DisplayBooks(props){
  let books
  if(props.state.printType){
    books=props.state.books.filter(book=>book.volumeInfo.printType===props.state.printType)
  }
  else books=props.state.books;
  const books2 = books.map((book,index)=>{
  return (
    <li className='book-item' key={index}>
      <img alt='book front cover' src={book.volumeInfo.imageLinks.thumbnail}/>
      <div className="book-info">
        <h3>{book.volumeInfo.title}</h3>
        <h5>Author: {book.volumeInfo.authors}</h5>
        <p>{book.volumeInfo.description}</p>
      </div>
    </li>
  )
  })
  return(
    <React.Fragment>
      {books2}
    </React.Fragment>
  )
}