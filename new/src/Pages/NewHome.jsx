
import React, { useState } from 'react';
import NewNavbar from '../Components/NewNavbar';
import BookPage from '../Components/BookPage';

const NewHome = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <NewNavbar onSearch={setSearchTerm} />
      <div className="bookCards">
        <BookPage searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default NewHome;
