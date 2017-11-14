import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';

const Login = ({ onAuthenticate }) => (
  <div className={styles.root}>
    <p className={styles.text}>You need to login first!</p>
    <button className={styles.button} onClick={onAuthenticate}>
      log in
    </button>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func,
};

export default Login;
