
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../StyleSheets/BookPage.css';

const BookPage = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://reactnd-books-api.udacity.com/books', {
        headers: {
          Authorization: 'whatever-you-want',
        },
      })
      .then((response) => {
        setBooks(response.data.books);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookCards">
      {filteredBooks.map((book, index) => (
        <div className="books" key={index}>
          <div className="imgNdetails">
            <img src={book.imageLinks.smallThumbnail} alt={book.title} />
          </div>
          <div className="title">
            <h3>{book.title} </h3>
          </div>
          <div className="authorName">
            <h5>{book.authors}</h5>
          </div>
          <div className="ratingnPrice">
            <h6>4.0⭐</h6>
            <h6>Free</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookPage;
