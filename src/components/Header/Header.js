import React from 'react';
import { connect } from 'react-redux';
import Link from 'gatsby-link';

import styles from './Header.module.css';

import { getCredentials } from '../../helpers/getCredentials';

const Header = ({ authenticated, dispatch }) => (
  <header className={styles.root}>
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link className={styles.navLink} to="/">
          issue-searcher
        </Link>
      </div>
      <div>
        <Link className={styles.navLink} to="/issues/">
          Issues
        </Link>
        <Link
          className={styles.navLink}
          to="/pull-requests/"
          onClick={e => e.preventDefault()}
          style={{ opacity: 0.5 }}
        >
          Pull requests
        </Link>
        <span className={styles.navSeparator}>|</span>
        {authenticated ? (
          <button
            className={[styles.navButton, styles.navLink].join(' ')}
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            log out
          </button>
        ) : (
          <button
            className={[styles.navButton, styles.navLink].join(' ')}
            onClick={() => getCredentials().then(dispatch)}
          >
            log in
          </button>
        )}
        <Link className={styles.navLink} to="/settings/">
          Settings
        </Link>
      </div>
    </nav>
  </header>
);

const mapStateToProps = ({ authenticated }, ...ownProps) => ({
  ...ownProps,
  authenticated,
});
const mapDispatchToProps = (dispatch, ...ownProps) => ({
  ...ownProps,
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
