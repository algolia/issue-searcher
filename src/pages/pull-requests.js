import React from 'react';
import Link from 'gatsby-link';
import Grid from '../components/Grid/Grid';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Results from '../components/Results/Results';

const PullRequestsPage = () => (
  <Grid>
    <Search />
    <Sidebar />
    <Results />
  </Grid>
);

export default PullRequestsPage;
