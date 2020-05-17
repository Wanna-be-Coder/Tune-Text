import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ name }) => {
  return (
    <nav>
      <div class='nav-wrapper blue'>
        <div class='brand-logo center'>{name}</div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBar;
