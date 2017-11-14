import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';

// This gets returned to Gatsby which then renders the Root component as normal.
exports.wrapRootComponent = ({ Root }) => {
  return () => (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
