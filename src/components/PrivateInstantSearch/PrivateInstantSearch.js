import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import { connect } from 'react-redux';
class PrivateInstantSearch extends Component {
  _authenticate = () => this.props.getCredentials().then(this.props.dispatch);

  render() {
    const { children, Login, authenticated, credentials } = this.props;

    return authenticated ? (
      <InstantSearch {...credentials}>{children}</InstantSearch>
    ) : (
      <Login onAuthenticate={this._authenticate} />
    );
  }
}

const mapStateToProps = ({ authenticated, credentials }, ...ownProps) => ({
  ...ownProps,
  authenticated,
  credentials,
});
const mapDispatchToProps = (dispatch, ...ownProps) => ({
  ...ownProps,
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(
  PrivateInstantSearch
);
