import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.root}>
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link className={styles.navLink} to="/">issue-searcher</Link>
      </div>
      <div>
        <Link className={styles.navLink} to="/issues/">Issues</Link>
        <Link className={styles.navLink} to="/pull-requests/">Pull requests</Link>
        <span className={styles.navSeparator}>|</span>
        <Link className={styles.navLink} to="/login/">Login</Link>
        <Link className={styles.navLink} to="/settings/">Settings</Link>
      </div>
    </nav>
  </header>
)

export default Header
