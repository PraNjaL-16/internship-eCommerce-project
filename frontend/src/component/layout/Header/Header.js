import React, { Fragment } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <Link to="/login">
        <i className="loginButton">
          <AccountBoxIcon />
        </i>
      </Link>
    </Fragment>
  );
};

export default Header;
