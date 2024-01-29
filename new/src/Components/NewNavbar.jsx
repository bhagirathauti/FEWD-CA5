
import React from 'react';
import { Link } from 'react-router-dom';

const NewNavbar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="nav" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h1>
        {' '}
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/NewHome'}>
          Kalvium Books
        </Link>{' '}
      </h1>
      <input type="text" placeholder="Search for Book" onChange={handleSearch} />
    </div>
  );
};

export default NewNavbar;

