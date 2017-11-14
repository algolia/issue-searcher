import React from 'react';
import Link from 'gatsby-link';
import Grid from '../components/Grid/Grid';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Results from '../components/Results/Results';
import PrivateInstantSearch from '../components/PrivateInstantSearch/PrivateInstantSearch';
import { getCredentials } from '../logic/getCredentials';

const Login = ({ onAuthenticate }) => (
  <Grid>
    hey, use this to log in first!
    <button onClick={onAuthenticate}>log in</button>
  </Grid>
);

const IssuesPage = () => (
  <PrivateInstantSearch Login={Login} getCredentials={getCredentials}>
    <Grid>
      <Search />
      <Sidebar />
      <Results />
    </Grid>
  </PrivateInstantSearch>
);

export default IssuesPage;
