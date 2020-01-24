import fetch from 'isomorphic-unfetch';

export const getArticles = () =>
  fetch('https://rethink.software/api/v2/jobs.backend', {
    method: 'POST',
    headers: {
      'COntent-Type': 'application/json'
    },
    body: JSON.stringify({ query: 'tech' })
  });
