# Issue Searcher

This project was created during the Q4 Algolia InstantSearch offsite

1. clone `algolia/issue-searcher`
2. download the dependencies with `yarn`
3. Log in to [github.algolia.com/signin](https://github.algolia.com/signin)
4. Then you can go to [github.algolia.com/private?{new Date().getTime()}](https://github.algolia.com/private?)

And enter that info in `.env.development`:

```
FALLBACK_UID=<your_uid>
FALLBACK_API_KEY=<your_api_key>
```
Run the site with `yarn develop`.

>Be careful, don't make this public, it'll allow everyone to search issues on all private repositories you have access to.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/algolia/issue-searcher)

Don't forget to set the environment variables!
