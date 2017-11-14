import React from 'react';
import { RefinementList } from 'react-instantsearch/dom';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.root}>
    <div className={styles.widget}>
      <RefinementList attributeName="repository.full_name" withSearchBox />
    </div>
    <div className={styles.widget}>
      <RefinementList attributeName="login" withSearchBox />{' '}
    </div>
  </div>
);

export default Sidebar;
