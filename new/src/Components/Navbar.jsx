
import React from 'react';
import { Link } from 'react-router-dom';
import "../StyleSheets/Navbar.css"

const Navbar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="nav" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <h1>
        {' '}
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
          Kalvium Books
        </Link>{' '}
      </h1>
      <input type="text" placeholder="Search for Book" onChange={handleSearch} />
      <div className='butt'><Link style={{textDecoration:"none",color:"white"}} to="/form">REGISTER</Link></div>
    </div>
  );
};

export default Navbar;

