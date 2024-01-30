// Import necessary dependencies and styles
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../StyleSheets/BookPage.css';

// Functional component for displaying a list of books
const BookPage = ({ searchTerm }) => {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // useEffect hook to fetch books from the API
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

  // Filter books based on the search alphabet
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Rendering the list of books
  return (
    <div className="bookCards">
      {filteredBooks.map((book, index) => (
        <div className="books" key={index}>
          <div className="imgNdetails">
            {/* Display book image */}
            <img src={book.imageLinks.smallThumbnail} alt={book.title} />
          </div>
          <div className="title">
            {/* Display book title */}
            <h3>{book.title} </h3>
          </div>
          <div className="authorName">
            {/* Display book author */}
            <h5>{book.authors}</h5>
          </div>
          <div className="ratingnPrice">
            {/* Display book rating and price */}
            <h6>4.0⭐</h6>
            <h6>Free</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the BookPage component
export default BookPage;
