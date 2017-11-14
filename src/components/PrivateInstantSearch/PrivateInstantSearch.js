import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';

class PrivateInstantSearch extends Component {
  state = {
    authenticated: false,
    credentials: {},
  };

  _authenticate = () =>
    this.props.getCredentials().then(credentials =>
      this.setState({
        authenticated: true,
        credentials,
      })
    );

  render() {
    const { authenticated, credentials } = this.state;
    const { children, Login } = this.props;

    return authenticated ? (
      <InstantSearch {...credentials}>{children}</InstantSearch>
    ) : (
      <Login onAuthenticate={this._authenticate} />
    );
  }
}

export default PrivateInstantSearch;
