import React from 'react';
import { RefinementList } from 'react-instantsearch/dom';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.root}>
    <RefinementList attributeName="repository.full_name" />
    <RefinementList attributeName="login" />
  </div>
);

export default Sidebar;
