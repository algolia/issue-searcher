import React from 'react';
import {
  Hits,
  Pagination,
  Highlight,
  Snippet,
  Stats,
} from 'react-instantsearch/dom';
import styles from './Results.module.css';

const fullLink = ({ repository: { full_name }, number }) =>
  `https://github.com/${full_name}/issues/${number}`;

const shortLink = ({ repository: { full_name }, number }) =>
  `${full_name}#${number}`;

const Hit = ({ hit }) => (
  <article>
    <h2>
      <a href={fullLink(hit)} target="_blank">
        {shortLink(hit)}
      </a>{' '}
      <Highlight hit={hit} attributeName="title" tagName="mark" />
    </h2>
    <div>
      <Snippet hit={hit} attributeName="body" tagName="mark" />
    </div>
    <span>{hit.state}</span>
    <details>
      <summary>all</summary>
      <pre>{JSON.stringify(hit, null, '  ')}</pre>
    </details>
  </article>
);

const Results = () => (
  <div className={styles.root}>
    <div style={{ margin: '1em' }}>
      <Stats />
    </div>
    <Hits hitComponent={Hit} />
    <Pagination />
  </div>
);

export default Results;
