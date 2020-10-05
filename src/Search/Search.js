import React from 'react';
import './Search.css'

export default function Search(props) {

  function handleSubmit(e) {
    e.preventDefault();
    let query = e.target.querySelector('#search-input').value;
    props.handleSearch(query)
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <label htmlFor='search-input'>Search:</label>
      <input type='text' id='search-input'></input>
      <input type='submit' value='Search'></input>
    </form>
  )
}