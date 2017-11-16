import algoliasearch from 'algoliasearch';

export const getCredentials = async () => {
  const data = await fetch(
    `https://github.algolia.com/private?${new Date().getTime()}`
  ).then(res => res.json());
  const uid = data.uid || process.env.GATSBY_FALLBACK_UID;
  const apiKey = data.api_key || process.env.GATSBY_FALLBACK_API_KEY;

  const algoliaClient = algoliasearch('TLCDTR8BIO', apiKey);
  algoliaClient.setExtraHeader('x-algolia-tagfilters', `user_${uid}`);

  return {
    type: 'LOGIN',
    credentials: {
      algoliaClient,
      indexName: 'issues_production',
    },
  };
};
