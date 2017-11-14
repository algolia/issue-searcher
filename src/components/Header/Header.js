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
          <svg
            className={styles.icon}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm-3-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
          </svg>
          <span className={styles.navText}>issue-searcher</span>
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
          <span>
            <Link className={styles.navLink} to="/settings/">
              Settings
            </Link>
            <button
              className={[styles.navButton, styles.navLink].join(' ')}
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              log out
            </button>
          </span>
        ) : (
          <button
            className={[styles.navButton, styles.navLink].join(' ')}
            onClick={() => getCredentials().then(dispatch)}
          >
            log in
          </button>
        )}
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
