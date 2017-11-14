import React from 'react';
import Link from 'gatsby-link';
import { Configure } from 'react-instantsearch/dom';

import Grid from '../components/Grid/Grid';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Results from '../components/Results/Results';
import Login from '../components/Login/Login';
import PrivateInstantSearch from '../components/PrivateInstantSearch/PrivateInstantSearch';

import { getCredentials } from '../helpers/getCredentials';

const IssuesPage = () => (
  <PrivateInstantSearch Login={Login} getCredentials={getCredentials}>
    <Configure
      attributesToSnippet={['body:20']}
      attributesToHighlight={['title']}
      attributesToRetrieve={[
        'number',
        'state',
        'login',
        'labels',
        'assignees',
        'comments_count',
        'created_at',
        'refreshed_at',
        'repository',
        'open',
      ]}
    />
    <Grid>
      <Search />
      <Sidebar />
      <Results />
    </Grid>
  </PrivateInstantSearch>
);

export default IssuesPage;
