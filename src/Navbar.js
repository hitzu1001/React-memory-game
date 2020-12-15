import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ onNewGame }) => (
  <header>
    <h2><a>Memory Game</a></h2>
    <h3>
      <a onClick={onNewGame}>New Game</a>
    </h3>
  </header>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired,
};

export default Navbar;