import React from 'react';
import Link from 'gatsby-link';
import Grid from '../components/Grid/Grid';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Results from '../components/Results/Results';

const dotenv = `FALLBACK_UID=<your_uid>
FALLBACK_API_KEY=<your_api_key>
`;

const privateLink = `github.algolia.com/private?${new Date().getTime()}`;
const signinLink = 'github.algolia.com/signin';

const IndexPage = () => (
  <div className="textBlock">
    <h1>Welcome to the Issue Searcher.</h1>
    <p>This project was created during the Q4 Algolia InstantSearch offsite</p>
    <ol>
      <li>
        clone{' '}
        <a href="https://github.com/algolia/issue-searcher">
          algolia/issue-searcher
        </a>
      </li>
      <li>
        download the dependencies with <code>yarn</code>
      </li>
      <li>
        Log in to{' '}
        <a href={`https://${signinLink}`} target="_blank">
          {signinLink}
        </a>
      </li>
    </ol>
    <p />
    <p />
    <p />
    <p>
      Then you can go to{' '}
      <a href={`https://${privateLink}`} target="_blank">
        {privateLink}
      </a>
    </p>
    <p>
      And enter that info in <code>.env.development</code>:
    </p>
    <pre>{dotenv}</pre>
    <p>
      Run the site with <code>yarn develop</code>.
    </p>
    <hr />
    <small>
      Be careful, don't make this public, it'll allow everyone to search issues
      on all private repositories you have access to.
    </small>
  </div>
);

export default IndexPage;
