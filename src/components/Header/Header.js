import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.root}>
    <a className={styles.home} href="/">issue-searcher</a>
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/issues/">Issues</Link>
      <Link className={styles.navLink} to="/pull-requests/">Pull requests</Link>
      <span className={styles.navSeparator}>|</span>
      <Link className={styles.navLink} to="/login/">Login</Link>
      <Link className={styles.navLink} to="/settings/">Settings</Link>
    </nav>
  </header>
)

export default Header
