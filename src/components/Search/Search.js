import React from 'react';
import { SearchBox } from 'react-instantsearch/dom';
import styles from './Search.module.css';

const Search = () => (
  <div className={styles.root}>
    <SearchBox />
  </div>
);

export default Search;
