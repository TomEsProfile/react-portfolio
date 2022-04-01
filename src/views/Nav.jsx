import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './css/nav.css';

export default function Nav() {
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    console.log('inputSearch', inputSearch);
    if (inputSearch.length >= 0) {
      navigate(`/search?query=${inputSearch}`);
    }
  }

  return <nav>Nav</nav>;
}
