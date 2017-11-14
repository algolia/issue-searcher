import { createStore } from 'redux';

const defaultState = {
  authenticated: false,
  credentials: {
    algoliaClient: undefined,
    indexName: '',
  },
};

const store = createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
        credentials: action.credentials,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
        credentials: {},
      };
    default:
      return state;
  }
});

export default store;
