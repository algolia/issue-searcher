import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.root}>
    <a className={styles.home} href="/">issue-searcher</a>
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/page-2/">Issues</Link>
      <Link className={styles.navLink} to="/page-2/">Pull requests</Link>
      <span className={styles.navSeparator}>|</span>
      <Link className={styles.navLink} to="/page-2/">Login</Link>
      <Link className={styles.navLink} to="/page-2/">Settings</Link>
    </nav>
  </header>
)

export default Header
