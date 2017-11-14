import React from 'react';
import { RefinementList } from 'react-instantsearch/dom';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.root}>
    <RefinementList attributeName="repository.full_name" searchable />
    <RefinementList attributeName="login" searchable />
  </div>
);

export default Sidebar;
