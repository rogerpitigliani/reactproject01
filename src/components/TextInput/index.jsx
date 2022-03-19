import './styles.css';
import React from 'react';
import P from 'prop-types';

export const TextInput = ({ onChange, searchValue }) => {
  return (
    <input
      placeholder="Type your search"
      className="text-input"
      onChange={onChange}
      value={searchValue}
      type="search"
    ></input>
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  onChange: P.func.isRequired,
};
