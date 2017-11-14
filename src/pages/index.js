import React from 'react';
import Link from 'gatsby-link';
import Grid from '../components/Grid/Grid';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Results from '../components/Results/Results';

const dotenv = `
FALLBACK_UID=
FALLBACK_API_KEY=
`;

const privateLink = `github.algolia.com/private?${new Date().getTime()}`;
const signinLink = 'github.algolia.com/signin';

const IndexPage = () => (
  <Grid>
    <p>Welcome to the Issue Searcher.</p>
    <p>This project was created during the Q4 Algolia InstantSearch offsite</p>
    <p>
      clone{' '}
      <a href="https://github.com/algolia/issue-searcher">
        algolia/issue-searcher
      </a>
    </p>
    <p>
      download the dependencies with <code>yarn</code>
    </p>
    <p>
      Log in to{' '}
      <a href={`https://${signinLink}`} target="_blank">
        {signinLink}
      </a>
    </p>
    <p>
      Then you can go to{' '}
      <a href={`https://${privateLink}`} target="_blank">
        {privateLink}
      </a>
    </p>
    <p>
      and enter that info in <code>.env.development</code>
    </p>
    <pre>{dotenv}</pre>
    <p>
      run the site with <code>yarn develop</code>
    </p>
    <small>
      Be careful, don't make this public, it'll allow everyone to search issues
      on all private repositories you have access to.
    </small>
  </Grid>
);

export default IndexPage;
