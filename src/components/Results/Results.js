import React from 'react';
import { Hits, Pagination } from 'react-instantsearch/dom';
import styles from './Results.module.css';

const Hit = ({ hit }) => (
  <div>
    <pre>{JSON.stringify(hit, null, '  ')}</pre>
    <hr />
  </div>
);

const Results = () => (
  <div className={styles.root}>
    <Hits hitComponent={Hit} />
    <Pagination />
  </div>
);

export default Results;
