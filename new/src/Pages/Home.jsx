
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import BookPage from '../Components/BookPage';
// Creating Home component
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar onSearch={setSearchTerm} />
      <div className="bookCards">
        <BookPage searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Home;
